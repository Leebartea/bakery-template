// ─────────────────────────────────────────────────────────────────────────────
// js/components.js — Shared HTML components (Navbar, Footer, WhatsApp Float)
// EDIT HERE: Update navbar links, footer content, social icons, WhatsApp number
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  // Wait for DOM + config
  document.addEventListener("DOMContentLoaded", function () {
    injectAnnouncement();
    injectNavbar();
    injectFooter();
    injectWhatsAppFloat();
    setActiveNavLink();
  });

  // ─── Announcement Bar ──────────────────────────────────────────────────────
  function injectAnnouncement() {
    const el = document.getElementById("announcement-bar");
    if (!el || !SITE_CONFIG.announcement.show) return;

    const { text, link, linkText } = SITE_CONFIG.announcement;
    el.innerHTML = `
      <div class="announcement-bar">
        ${text}
        ${link ? `<a href="${link}" class="underline font-bold ml-2 hover:opacity-80">${linkText}</a>` : ""}
      </div>`;
  }

  // ─── Navbar HTML ───────────────────────────────────────────────────────────
  function injectNavbar() {
    const el = document.getElementById("navbar-placeholder");
    if (!el) return;

    const links = SITE_CONFIG.navLinks
      .map(
        (l) =>
          `<a href="${l.href}" class="nav-link" data-nav-link>${l.label}</a>`
      )
      .join("");

    const mobileLinks = SITE_CONFIG.navLinks
      .map(
        (l) =>
          `<a href="${l.href}" class="block px-4 py-3 text-base font-medium nav-link border-b border-base last:border-b-0" data-nav-link>${l.label}</a>`
      )
      .join("");

    el.innerHTML = `
    <header id="site-header"
      class="sticky top-0 z-40 w-full backdrop-blur-md transition-all duration-300"
      style="background-color: var(--color-surface); border-bottom: 1px solid var(--color-border);">

      <div class="container-xl">
        <div class="flex items-center justify-between h-16 md:h-18">

          <!-- ── Logo ── -->
          <a href="index.html" class="flex items-center gap-2 flex-shrink-0" aria-label="${SITE_CONFIG.businessName} home">
            <!-- EDIT HERE: Replace text logo with <img src="assets/images/logo.svg"> -->
            <span class="text-xl md:text-2xl font-heading font-bold" style="color: var(--color-primary);">
              🎂 ${SITE_CONFIG.businessName}
            </span>
          </a>

          <!-- ── Desktop Nav ── -->
          <nav class="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            ${links}
          </nav>

          <!-- ── Desktop Right: Theme toggle + CTA ── -->
          <div class="hidden lg:flex items-center gap-3">

            <!-- Theme Toggle -->
            <button
              data-theme-toggle
              class="theme-toggle"
              aria-label="Toggle dark mode"
              title="Toggle dark/light mode">
              <!-- Moon icon (shown in light mode) -->
              <svg class="icon-moon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
              <!-- Sun icon (shown in dark mode) -->
              <svg class="icon-sun w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <span class="sr-only">Toggle theme</span>
            </button>

            <!-- WhatsApp CTA -->
            <a href="${getWhatsAppLink()}" target="_blank" rel="noopener noreferrer"
              class="btn-whatsapp text-sm" aria-label="Order via WhatsApp">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order on WhatsApp
            </a>
          </div>

          <!-- ── Mobile Right: Theme toggle + Hamburger ── -->
          <div class="flex lg:hidden items-center gap-2">
            <button
              data-theme-toggle
              class="theme-toggle"
              aria-label="Toggle dark mode">
              <svg class="icon-moon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
              <svg class="icon-sun w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              <span class="sr-only">Toggle theme</span>
            </button>

            <button id="mobile-menu-btn"
              class="theme-toggle"
              aria-label="Open navigation menu"
              aria-expanded="false"
              aria-controls="mobile-menu">
              <svg id="hamburger-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg id="close-icon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

        </div>
      </div><!-- /container -->

      <!-- ── Mobile Menu Dropdown ── -->
      <div id="mobile-menu"
        class="hidden lg:hidden"
        style="background-color: var(--color-surface); border-top: 1px solid var(--color-border);"
        aria-label="Mobile navigation">
        <div class="container-xl py-2">
          ${mobileLinks}
          <div class="pt-3 pb-2">
            <a href="${getWhatsAppLink()}" target="_blank" rel="noopener noreferrer"
              class="btn-whatsapp w-full justify-center text-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div><!-- /mobile-menu -->

    </header>`;

    // Mobile menu toggle
    const btn  = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const ham  = document.getElementById("hamburger-icon");
    const cls  = document.getElementById("close-icon");

    if (btn && menu) {
      btn.addEventListener("click", function () {
        const open = menu.classList.toggle("hidden");
        btn.setAttribute("aria-expanded", String(!open));
        ham.classList.toggle("hidden", !open);
        cls.classList.toggle("hidden",  open);
      });

      // Close on outside click
      document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          menu.classList.add("hidden");
          btn.setAttribute("aria-expanded", "false");
          ham.classList.remove("hidden");
          cls.classList.add("hidden");
        }
      });
    }

    // Re-attach theme toggle listeners (after navbar is injected into DOM)
    document.querySelectorAll("[data-theme-toggle]").forEach((b) => {
      b.addEventListener("click", function () {
        if (window.ThemeManager) window.ThemeManager.toggle();
      });
    });

    // Update button state
    if (window.ThemeManager) {
      window.ThemeManager.updateButtons(window.ThemeManager.getCurrent());
    }
  }

  // ─── Footer HTML ───────────────────────────────────────────────────────────
  function injectFooter() {
    const el = document.getElementById("footer-placeholder");
    if (!el) return;

    const socialLinks = buildSocialLinks();
    const navLinks = SITE_CONFIG.navLinks
      .map((l) => `<li><a href="${l.href}" class="hover:text-primary transition-colors">${l.label}</a></li>`)
      .join("");

    el.innerHTML = `
    <footer style="background-color: var(--color-bg-alt); border-top: 1px solid var(--color-border);" aria-label="Site footer">

      <!-- Main footer -->
      <div class="container-xl py-14 md:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <!-- Brand -->
          <div class="lg:col-span-1">
            <a href="index.html" class="inline-block mb-4">
              <span class="text-xl font-heading font-bold" style="color: var(--color-primary);">
                🎂 ${SITE_CONFIG.businessName}
              </span>
            </a>
            <p class="text-sm leading-relaxed mb-5" style="color: var(--color-text-muted);">
              ${SITE_CONFIG.description}
            </p>
            <div class="flex items-center gap-3">
              ${socialLinks}
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-sm font-bold uppercase tracking-widest mb-4" style="color: var(--color-primary);">Quick Links</h3>
            <ul class="space-y-2 text-sm" style="color: var(--color-text-muted);">
              ${navLinks}
            </ul>
          </div>

          <!-- Order Info -->
          <div>
            <h3 class="text-sm font-bold uppercase tracking-widest mb-4" style="color: var(--color-primary);">Order Info</h3>
            <ul class="space-y-2 text-sm" style="color: var(--color-text-muted);">
              <li>📦 Min. order: 48–72 hrs notice</li>
              <li>💍 Wedding cakes: 1–3 months</li>
              <li>🚚 Delivery within Lagos & select cities</li>
              <li>💳 Bank transfer & mobile payments</li>
              <li>📱 WhatsApp-first ordering</li>
            </ul>
          </div>

          <!-- Contact & Hours -->
          <div>
            <h3 class="text-sm font-bold uppercase tracking-widest mb-4" style="color: var(--color-primary);">Contact & Hours</h3>
            <ul class="space-y-3 text-sm" style="color: var(--color-text-muted);">
              <li class="flex items-start gap-2">
                <span aria-hidden="true">📍</span>
                <span>${SITE_CONFIG.address}</span>
              </li>
              <li class="flex items-center gap-2">
                <span aria-hidden="true">📞</span>
                <a href="tel:${SITE_CONFIG.phone.replace(/\s/g,'')}" class="hover:text-primary transition-colors">${SITE_CONFIG.phone}</a>
              </li>
              <li class="flex items-center gap-2">
                <span aria-hidden="true">✉️</span>
                <a href="mailto:${SITE_CONFIG.email}" class="hover:text-primary transition-colors">${SITE_CONFIG.email}</a>
              </li>
              <li class="text-xs mt-2 pt-2" style="border-top: 1px solid var(--color-border);">
                ${SITE_CONFIG.hours.weekdays}<br>
                ${SITE_CONFIG.hours.saturday}<br>
                ${SITE_CONFIG.hours.sunday}
              </li>
            </ul>

            <!-- WhatsApp CTA -->
            <a href="${getWhatsAppLink()}" target="_blank" rel="noopener noreferrer"
              class="btn-whatsapp mt-5 text-sm w-full justify-center">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>

      <!-- Bottom bar -->
      <div style="border-top: 1px solid var(--color-border);">
        <div class="container-xl py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style="color: var(--color-text-muted);">
          <p>© ${new Date().getFullYear()} ${SITE_CONFIG.businessName}. All rights reserved.</p>
          <p>Made with ❤️ — Template by <a href="#" class="hover:text-primary underline">Sweet Crumbs Theme</a></p>
        </div>
      </div>

    </footer>`;
  }

  // ─── WhatsApp Floating Button ──────────────────────────────────────────────
  function injectWhatsAppFloat() {
    const el = document.getElementById("whatsapp-float-placeholder");
    if (!el) return;

    el.innerHTML = `
    <a href="${getWhatsAppLink()}"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float group"
      aria-label="Order on WhatsApp"
      title="Chat with us on WhatsApp">

      <!-- Pulse ring -->
      <span class="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></span>

      <!-- Main button -->
      <span class="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold
                   px-4 py-3 rounded-full shadow-xl transition-all duration-300">
        <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span class="hidden sm:inline text-sm">Order Now</span>
      </span>
    </a>`;
  }

  // ─── Build social icon links ───────────────────────────────────────────────
  function buildSocialLinks() {
    const s = SITE_CONFIG.social;
    const icons = [];

    if (s.instagram) icons.push(`
      <a href="${s.instagram}" target="_blank" rel="noopener noreferrer"
        class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
        style="background-color: var(--color-border); color: var(--color-text-muted);"
        onmouseover="this.style.backgroundColor='var(--color-primary)';this.style.color='#fff';"
        onmouseout="this.style.backgroundColor='var(--color-border)';this.style.color='var(--color-text-muted)';"
        aria-label="Instagram">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>`);

    if (s.facebook) icons.push(`
      <a href="${s.facebook}" target="_blank" rel="noopener noreferrer"
        class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
        style="background-color: var(--color-border); color: var(--color-text-muted);"
        onmouseover="this.style.backgroundColor='var(--color-primary)';this.style.color='#fff';"
        onmouseout="this.style.backgroundColor='var(--color-border)';this.style.color='var(--color-text-muted)';"
        aria-label="Facebook">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>`);

    if (s.twitter) icons.push(`
      <a href="${s.twitter}" target="_blank" rel="noopener noreferrer"
        class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
        style="background-color: var(--color-border); color: var(--color-text-muted);"
        onmouseover="this.style.backgroundColor='var(--color-primary)';this.style.color='#fff';"
        onmouseout="this.style.backgroundColor='var(--color-border)';this.style.color='var(--color-text-muted)';"
        aria-label="Twitter / X">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>`);

    if (s.tiktok) icons.push(`
      <a href="${s.tiktok}" target="_blank" rel="noopener noreferrer"
        class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
        style="background-color: var(--color-border); color: var(--color-text-muted);"
        onmouseover="this.style.backgroundColor='var(--color-primary)';this.style.color='#fff';"
        onmouseout="this.style.backgroundColor='var(--color-border)';this.style.color='var(--color-text-muted)';"
        aria-label="TikTok">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.79 1.52V6.88a4.85 4.85 0 01-1.02-.19z"/></svg>
      </a>`);

    return icons.join("");
  }

  // ─── Mark active nav link based on current page ───────────────────────────
  function setActiveNavLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPath || (currentPath === "" && href === "index.html")) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
})();
