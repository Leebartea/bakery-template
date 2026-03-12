// ─────────────────────────────────────────────────────────────────────────────
// js/slider.js — Testimonial slider with auto-play, touch swipe, and a11y
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  renderTestimonials();
  initSlider();
});

// ── Render testimonials from data ──────────────────────────────────────────
function renderTestimonials() {
  const track = document.getElementById("testimonial-track");
  if (!track || typeof TESTIMONIALS === "undefined") return;

  track.innerHTML = TESTIMONIALS.map(
    (t, i) => `
    <div class="testimonial-slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
      role="group"
      aria-roledescription="slide"
      aria-label="Testimonial ${i + 1} of ${TESTIMONIALS.length}">
      <div class="testimonial-card h-full flex flex-col">

        <!-- Stars -->
        <div class="stars flex gap-0.5 mb-4" aria-label="${t.stars} out of 5 stars">
          ${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}
        </div>

        <!-- Quote -->
        <blockquote class="flex-1 text-sm md:text-base leading-relaxed mb-6 italic" style="color: var(--color-text-muted);">
          "${t.review}"
        </blockquote>

        <!-- Product badge -->
        ${t.product ? `<div class="mb-4"><span class="badge-surface text-xs">${t.product}</span></div>` : ""}

        <!-- Author -->
        <div class="flex items-center gap-3 mt-auto">
          <img
            src="${t.avatar}"
            alt="${t.name}"
            loading="lazy"
            class="w-12 h-12 rounded-full object-cover flex-shrink-0"
            onerror="this.src='https://picsum.photos/seed/avatar-fallback/80/80'">
          <div>
            <p class="font-semibold text-sm" style="color: var(--color-text);">${t.name}</p>
            <p class="text-xs" style="color: var(--color-text-muted);">${t.role}${t.location ? " · " + t.location : ""}</p>
          </div>
        </div>
      </div>
    </div>`
  ).join("");

  // After render, init slider
  initSlider();
}

// ── Slider logic ───────────────────────────────────────────────────────────
function initSlider() {
  const container  = document.getElementById("testimonial-slider");
  const track      = document.getElementById("testimonial-track");
  const prevBtn    = document.getElementById("slider-prev");
  const nextBtn    = document.getElementById("slider-next");
  const dotsWrap   = document.getElementById("slider-dots");
  const countEl    = document.getElementById("slider-count");

  if (!container || !track) return;

  const slides     = Array.from(track.querySelectorAll(".testimonial-slide"));
  if (!slides.length) return;

  // Determine visible slides based on viewport
  function getVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640)  return 2;
    return 1;
  }

  let current     = 0;
  let visible     = getVisible();
  let total       = Math.ceil(slides.length / visible);
  let autoPlay    = null;
  let isDragging  = false;
  let startX      = 0;
  let dragDelta   = 0;

  // ── Build dots ──────────────────────────────────────────────────────────
  function buildDots() {
    if (!dotsWrap) return;
    total = Math.ceil(slides.length / visible);
    dotsWrap.innerHTML = Array.from({ length: total })
      .map(
        (_, i) => `
      <button
        class="slider-dot w-2.5 h-2.5 rounded-full transition-all duration-300"
        style="background-color: var(--color-border);"
        aria-label="Go to slide group ${i + 1}"
        data-dot="${i}">
      </button>`
      )
      .join("");
    dotsWrap.querySelectorAll(".slider-dot").forEach((dot) => {
      dot.addEventListener("click", () => goTo(parseInt(dot.dataset.dot)));
    });
  }

  // ── Update slider position ──────────────────────────────────────────────
  function goTo(index) {
    current = Math.max(0, Math.min(index, total - 1));
    const offset = -(current * (100 / visible) * visible);
    track.style.transform = `translateX(${offset / slides.length * 100}%)`;
    // Simpler approach: use percentage-based offset per group
    const pct = -(current * 100);
    // We'll use a wrapper approach
    updatePosition();
    updateDots();
    updateCount();
    updateButtons();
  }

  function updatePosition() {
    const slideWidthPct = 100 / visible;
    const offset = -(current * visible * slideWidthPct);
    track.style.transform = `translateX(${offset}%)`;
  }

  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll(".slider-dot").forEach((dot, i) => {
      const active = i === current;
      dot.style.backgroundColor = active ? "var(--color-primary)" : "var(--color-border)";
      dot.style.width = active ? "24px" : "";
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function updateCount() {
    if (countEl) countEl.textContent = `${current + 1} / ${total}`;
  }

  function updateButtons() {
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current >= total - 1;
    if (prevBtn) prevBtn.style.opacity = current === 0 ? "0.4" : "1";
    if (nextBtn) nextBtn.style.opacity = current >= total - 1 ? "0.4" : "1";
  }

  // ── Set slide widths ────────────────────────────────────────────────────
  function setSlideSizes() {
    visible = getVisible();
    total   = Math.ceil(slides.length / visible);
    const w = `${100 / visible}%`;
    slides.forEach((s) => {
      s.style.minWidth = w;
      s.style.width    = w;
    });
    track.style.transition = "none";
    current = Math.min(current, total - 1);
    track.style.transform  = "";
    setTimeout(() => {
      track.style.transition = "transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      updatePosition();
    }, 50);
    buildDots();
    updateDots();
    updateCount();
    updateButtons();
  }

  // ── Auto play ───────────────────────────────────────────────────────────
  function startAutoPlay() {
    stopAutoPlay();
    autoPlay = setInterval(() => {
      goTo(current >= total - 1 ? 0 : current + 1);
    }, 5000);
  }

  function stopAutoPlay() {
    if (autoPlay) clearInterval(autoPlay);
  }

  // ── Buttons ─────────────────────────────────────────────────────────────
  if (prevBtn) prevBtn.addEventListener("click", () => { stopAutoPlay(); goTo(current - 1); startAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { stopAutoPlay(); goTo(current + 1); startAutoPlay(); });

  // ── Touch / drag swipe ───────────────────────────────────────────────────
  function handleDragStart(x) { isDragging = true; startX = x; dragDelta = 0; track.style.transition = "none"; }
  function handleDragMove(x) {
    if (!isDragging) return;
    dragDelta = x - startX;
    const baseOffset = -(current * visible * (100 / visible));
    const pxOffset   = (dragDelta / container.offsetWidth) * 100;
    track.style.transform = `translateX(calc(${baseOffset}% + ${dragDelta}px))`;
  }
  function handleDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = "transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    if (dragDelta < -60)       goTo(current + 1);
    else if (dragDelta > 60)   goTo(current - 1);
    else                       updatePosition();
    dragDelta = 0;
  }

  // Touch
  container.addEventListener("touchstart", (e) => handleDragStart(e.touches[0].clientX), { passive: true });
  container.addEventListener("touchmove",  (e) => handleDragMove(e.touches[0].clientX),  { passive: true });
  container.addEventListener("touchend",   handleDragEnd);

  // Mouse drag
  container.addEventListener("mousedown",  (e) => handleDragStart(e.clientX));
  container.addEventListener("mousemove",  (e) => handleDragMove(e.clientX));
  container.addEventListener("mouseup",    handleDragEnd);
  container.addEventListener("mouseleave", handleDragEnd);

  // ── Pause on hover ───────────────────────────────────────────────────────
  container.addEventListener("mouseenter", stopAutoPlay);
  container.addEventListener("mouseleave", startAutoPlay);

  // ── Keyboard ─────────────────────────────────────────────────────────────
  container.setAttribute("tabindex", "0");
  container.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  { stopAutoPlay(); goTo(current - 1); startAutoPlay(); }
    if (e.key === "ArrowRight") { stopAutoPlay(); goTo(current + 1); startAutoPlay(); }
  });

  // ── Resize ───────────────────────────────────────────────────────────────
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setSlideSizes, 200);
  });

  // ── Init ─────────────────────────────────────────────────────────────────
  setSlideSizes();
  startAutoPlay();
}
