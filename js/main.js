// ─────────────────────────────────────────────────────────────────────────────
// js/main.js — Main orchestrator: scroll reveal, sticky header, utilities
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  initScrollReveal();
  initStickyHeader();
  initSmoothScroll();
  initLazyImages();
});

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
// Adds .visible class to .reveal elements when they enter viewport
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all elements
    revealEls.forEach((el) => el.classList.add("visible"));
  }
}

// ── Sticky Header Shadow ──────────────────────────────────────────────────────
function initStickyHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener("scroll", function () {
    const current = window.scrollY;
    if (current > 60) {
      header.style.boxShadow = "0 2px 20px var(--color-shadow)";
    } else {
      header.style.boxShadow = "none";
    }
    lastScroll = current;
  }, { passive: true });
}

// ── Smooth Scroll for anchor links ───────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const headerH = document.getElementById("site-header")?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// ── Native Lazy Loading fallback ──────────────────────────────────────────────
function initLazyImages() {
  // Modern browsers handle loading="lazy" natively.
  // This is a simple fallback for older browsers.
  if ("loading" in HTMLImageElement.prototype) return;

  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  if (!lazyImgs.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          observer.unobserve(img);
        }
      });
    });
    lazyImgs.forEach((img) => {
      img.dataset.src = img.src;
      img.src = "";
      observer.observe(img);
    });
  }
}

// ── Utility: Stagger child animations ────────────────────────────────────────
function staggerReveal(parentSelector, delay = 100) {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;
  const children = parent.querySelectorAll(".reveal");
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * delay}ms`;
  });
}

// ── Utility: Copy text to clipboard ──────────────────────────────────────────
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => { btn.textContent = orig; }, 2000);
    }
  });
}
