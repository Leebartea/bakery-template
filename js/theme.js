// ─────────────────────────────────────────────────────────────────────────────
// js/theme.js — Dark / Light mode system
// IMPORTANT: This script is loaded in <head> (BEFORE body renders) to prevent
//            Flash Of Unstyled Content (FOUC). It must be a blocking script.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  const THEME_KEY  = "sc-theme";   // localStorage key
  const ROOT       = document.documentElement;
  const DARK_CLASS = "dark";

  // ── 1. Determine the correct theme immediately ───────────────────────────
  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); }
    catch { return null; }
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function resolveTheme() {
    const stored = getStoredTheme();
    // If user has explicitly chosen, respect it; otherwise follow OS preference
    return stored === "dark" || stored === "light"
      ? stored
      : getSystemTheme();
  }

  // ── 2. Apply theme WITHOUT transition (no FOUC) ───────────────────────────
  //      We add no-transition, toggle the class, then remove it next frame.
  function applyThemeNoTransition(theme) {
    ROOT.classList.add("no-transition");
    if (theme === "dark") {
      ROOT.classList.add(DARK_CLASS);
    } else {
      ROOT.classList.remove(DARK_CLASS);
    }
    // Force reflow so the no-transition class is applied before removal
    ROOT.getBoundingClientRect(); // eslint-disable-line
    ROOT.classList.remove("no-transition");
  }

  // ── 3. Apply theme WITH smooth transition (for user-triggered toggle) ────
  function applyTheme(theme) {
    if (theme === "dark") {
      ROOT.classList.add(DARK_CLASS);
    } else {
      ROOT.classList.remove(DARK_CLASS);
    }
    try { localStorage.setItem(THEME_KEY, theme); }
    catch { /* private browsing — ignore */ }
  }

  // ── 4. Get current theme from DOM ────────────────────────────────────────
  function getCurrentTheme() {
    return ROOT.classList.contains(DARK_CLASS) ? "dark" : "light";
  }

  // ── 5. Toggle function (called by the toggle button) ─────────────────────
  function toggleTheme() {
    const next = getCurrentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    updateToggleButtons(next);
    return next;
  }

  // ── 6. Update all toggle button icons on the page ────────────────────────
  function updateToggleButtons(theme) {
    const buttons = document.querySelectorAll("[data-theme-toggle]");
    buttons.forEach((btn) => {
      const sunIcon  = btn.querySelector(".icon-sun");
      const moonIcon = btn.querySelector(".icon-moon");
      const srText   = btn.querySelector(".sr-only");

      if (sunIcon && moonIcon) {
        if (theme === "dark") {
          sunIcon.classList.remove("hidden");
          moonIcon.classList.add("hidden");
          if (srText) srText.textContent = "Switch to light mode";
        } else {
          sunIcon.classList.add("hidden");
          moonIcon.classList.remove("hidden");
          if (srText) srText.textContent = "Switch to dark mode";
        }
      }
    });
  }

  // ── 7. Init: apply theme on page load ────────────────────────────────────
  const initialTheme = resolveTheme();
  applyThemeNoTransition(initialTheme);

  // ── 8. Expose globally so other scripts can use it ───────────────────────
  window.ThemeManager = {
    toggle:         toggleTheme,
    apply:          applyTheme,
    getCurrent:     getCurrentTheme,
    updateButtons:  updateToggleButtons,
    THEME_KEY,
  };

  // ── 9. Sync buttons once DOM is ready ────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    updateToggleButtons(getCurrentTheme());

    // Attach click handlers to all toggle buttons
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", function () {
        const newTheme = toggleTheme();
        // ARIA
        this.setAttribute(
          "aria-label",
          newTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        );
      });
    });

    // Listen for OS preference changes (e.g., user switches system theme)
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        // Only auto-switch if user has NOT explicitly chosen a theme
        if (!getStoredTheme()) {
          const sysTheme = e.matches ? "dark" : "light";
          applyTheme(sysTheme);
          updateToggleButtons(sysTheme);
        }
      });
  });
})();
