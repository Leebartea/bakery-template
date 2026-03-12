// ─────────────────────────────────────────────────────────────────────────────
// js/form-validation.js — Order / Contact form validation
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  initOrderForm();
  initContactForm();
});

// ── Order Form ─────────────────────────────────────────────────────────────
function initOrderForm() {
  const form = document.getElementById("order-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm(form)) {
      submitOrderViaWhatsApp(form);
    }
  });

  // Live validation on blur
  form.querySelectorAll(".form-input, select, textarea").forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => clearError(field));
  });
}

// ── Contact Form ───────────────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm(form)) {
      submitContactViaWhatsApp(form);
    }
  });

  form.querySelectorAll(".form-input, select, textarea").forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => clearError(field));
  });
}

// ── Build WhatsApp message from order form ──────────────────────────────────
function submitOrderViaWhatsApp(form) {
  const name      = getValue(form, "name");
  const phone     = getValue(form, "phone");
  const product   = getValue(form, "product");
  const qty       = getValue(form, "quantity");
  const date      = getValue(form, "delivery-date");
  const occasion  = getValue(form, "occasion");
  const notes     = getValue(form, "notes");

  const message = [
    `🎂 *New Order — ${SITE_CONFIG.businessName}*`,
    ``,
    `👤 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`,
    `🎁 *Product:* ${product}`,
    qty       ? `🔢 *Quantity:* ${qty}`           : "",
    date      ? `📅 *Delivery Date:* ${date}`     : "",
    occasion  ? `🎉 *Occasion:* ${occasion}`      : "",
    notes     ? `📝 *Notes:* ${notes}`            : "",
    ``,
    `_Sent from the website order form_`,
  ].filter(Boolean).join("\n");

  const url = getWhatsAppLink(message);
  showSuccessMessage(form, "Redirecting you to WhatsApp to confirm your order...");
  setTimeout(() => window.open(url, "_blank"), 1200);
}

// ── Build WhatsApp message from contact form ────────────────────────────────
function submitContactViaWhatsApp(form) {
  const name    = getValue(form, "name");
  const email   = getValue(form, "email");
  const subject = getValue(form, "subject");
  const message = getValue(form, "message");

  const waMsg = [
    `💬 *Message from Website — ${SITE_CONFIG.businessName}*`,
    ``,
    `👤 *Name:* ${name}`,
    `✉️ *Email:* ${email}`,
    subject ? `📌 *Subject:* ${subject}` : "",
    `📝 *Message:* ${message}`,
    ``,
    `_Sent from the website contact form_`,
  ].filter(Boolean).join("\n");

  const url = getWhatsAppLink(waMsg);
  showSuccessMessage(form, "Redirecting you to WhatsApp...");
  setTimeout(() => window.open(url, "_blank"), 1200);
}

// ── Core Validation ─────────────────────────────────────────────────────────
function validateForm(form) {
  const fields = form.querySelectorAll("[data-required], [data-validate]");
  let valid = true;

  fields.forEach((field) => {
    if (!validateField(field)) valid = false;
  });

  // Scroll to first error
  if (!valid) {
    const firstError = form.querySelector(".border-red-500");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      firstError.focus();
    }
  }

  return valid;
}

function validateField(field) {
  const value      = field.value.trim();
  const errorEl    = document.getElementById(`${field.id}-error`);
  const isRequired = field.hasAttribute("data-required") || field.required;
  const validate   = field.dataset.validate;

  clearError(field);

  // Required check
  if (isRequired && !value) {
    showFieldError(field, errorEl, field.dataset.errorEmpty || "This field is required.");
    return false;
  }

  if (!value) return true; // Optional empty field is OK

  // Type-specific validation
  if (validate === "email" && !isValidEmail(value)) {
    showFieldError(field, errorEl, "Please enter a valid email address.");
    return false;
  }
  if (validate === "phone" && !isValidPhone(value)) {
    showFieldError(field, errorEl, "Please enter a valid phone number (min. 10 digits).");
    return false;
  }
  if (validate === "minlength") {
    const min = parseInt(field.dataset.minlength || 10);
    if (value.length < min) {
      showFieldError(field, errorEl, `Please enter at least ${min} characters.`);
      return false;
    }
  }

  return true;
}

function showFieldError(field, errorEl, message) {
  field.classList.add("border-red-500");
  field.classList.remove("border-green-500");
  field.setAttribute("aria-invalid", "true");
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add("visible");
  }
}

function clearError(field) {
  field.classList.remove("border-red-500");
  field.setAttribute("aria-invalid", "false");
  const errorEl = document.getElementById(`${field.id}-error`);
  if (errorEl) errorEl.classList.remove("visible");

  // Mark as valid if has value
  if (field.value.trim()) {
    field.classList.add("border-green-500");
  } else {
    field.classList.remove("border-green-500");
  }
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function getValue(form, name) {
  const el = form.querySelector(`[name="${name}"], #${name}`);
  return el ? el.value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[\+]?[\d\s\-\(\)]{10,15}$/.test(phone.replace(/\s/g, ""));
}

function showSuccessMessage(form, msg) {
  const successEl = form.querySelector(".form-success") || createSuccessEl(form);
  successEl.textContent = msg;
  successEl.classList.remove("hidden");
  form.querySelectorAll("button[type='submit']").forEach((btn) => {
    btn.disabled = true;
    btn.textContent = "Sending...";
  });
}

function createSuccessEl(form) {
  const el = document.createElement("div");
  el.className =
    "form-success hidden mt-4 p-4 rounded-lg text-sm font-medium text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900/30 border border-green-300 dark:border-green-700";
  form.appendChild(el);
  return el;
}
