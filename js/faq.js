// ─────────────────────────────────────────────────────────────────────────────
// js/faq.js — FAQ accordion functionality
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  renderFAQ();
  initFAQAccordion();
});

// ── Render FAQ items from data ─────────────────────────────────────────────
function renderFAQ() {
  const container = document.getElementById("faq-container");
  if (!container || typeof FAQ_DATA === "undefined") return;

  // Optional filter: show only certain categories
  const filterAttr = container.dataset.faqFilter; // e.g., "ordering" or "all"
  const items = filterAttr && filterAttr !== "all"
    ? FAQ_DATA.filter((q) => q.category === filterAttr)
    : FAQ_DATA;

  container.innerHTML = items
    .map(
      (item) => `
    <div class="faq-item" data-faq-id="${item.id}">
      <button
        class="faq-question"
        aria-expanded="false"
        aria-controls="faq-answer-${item.id}"
        id="faq-btn-${item.id}">
        <span>${item.question}</span>
        <svg class="faq-icon w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
      </button>
      <div
        class="faq-answer"
        id="faq-answer-${item.id}"
        role="region"
        aria-labelledby="faq-btn-${item.id}">
        <p class="leading-relaxed">${item.answer}</p>
      </div>
    </div>`
    )
    .join("");

  // Re-init accordion after rendering
  initFAQAccordion();
}

// ── FAQ Accordion Logic ────────────────────────────────────────────────────
function initFAQAccordion() {
  const questions = document.querySelectorAll(".faq-question");
  if (!questions.length) return;

  questions.forEach((btn) => {
    // Remove any stale listeners by replacing the node
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon   = this.querySelector(".faq-icon");
      const isOpen = answer.classList.contains("open");

      // Option: close all others first (accordion behavior)
      document.querySelectorAll(".faq-answer.open").forEach((openAnswer) => {
        if (openAnswer !== answer) {
          openAnswer.classList.remove("open");
          const openBtn = openAnswer.previousElementSibling;
          openBtn.setAttribute("aria-expanded", "false");
          openBtn.querySelector(".faq-icon")?.classList.remove("open");
        }
      });

      // Toggle current
      answer.classList.toggle("open", !isOpen);
      icon?.classList.toggle("open", !isOpen);
      this.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}
