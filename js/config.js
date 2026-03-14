// ─────────────────────────────────────────────────────────────────────────────
// js/config.js — EDIT HERE: All site-wide settings in one place
// Change these values to rebrand the entire site for a new bakery client.
// ─────────────────────────────────────────────────────────────────────────────

const SITE_CONFIG = {
  // ── Business Info ─────────────────────────────────────────────────────────
  businessName:    "Nafeesah Baking & Snacks",     // EDIT: bakery name (appears in navbar, footer, title)
  tagline:         "Handcrafted with love, baked to perfection",
  description:     "Premium cakes and artisan snacks for every occasion — birthdays, weddings, corporate events, and everyday indulgence.",
  currency:        "₦",                        // EDIT: change to "$", "£", "€" etc.
  currencyLocale:  "en-NG",                   // EDIT: e.g., "en-US", "en-GB"

  // ── Contact & Social ──────────────────────────────────────────────────────
  whatsappNumber:  "2349035426448",           // EDIT: international format, no + or spaces
  whatsappMessage: "Hello! I'd like to place an order with Sweet Crumbs Bakery 🎂", // EDIT
  phone:           "+234 903 542 6448",       // EDIT: display format
  email:           "Nafisattadenikawo@gmail.com",    // EDIT
  address:         "Fajuyi Road Ile-Ife Ng", // EDIT
  mapUrl:          "https://maps.app.goo.gl/t5camdLfGbJmZ8cd6", // EDIT: your Google Maps link
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 7:00 PM",
    saturday: "Saturday: 8:00 AM – 8:00 PM",
    sunday:   "Sunday: 10:00 AM – 5:00 PM",
  },

  // ── Social Media Links ────────────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/olatunji Tadenikawo precious",  // EDIT
    facebook:  "https://facebook.com/olatunji tadenikawo precious",   // EDIT
    x:   "",          // EDIT
    tiktok:    "",                                          // EDIT (leave empty to hide)
  },

  // ── Announcement Bar (top of every page) ─────────────────────────────────
  announcement: {
    show:    true,                              // EDIT: set false to hide
    text:    "🎉 Free delivery on orders above ₦25,000 within Lagos Island!",
    link:    "contact.html",
    linkText: "Order Now",
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  // EDIT: Reorder, rename, or remove nav items
  navLinks: [
    { label: "Home",         href: "index.html" },
    { label: "About",        href: "about.html" },
    { label: "Our Cakes & Snacks", href: "products.html" },
    { label: "Custom Cakes", href: "custom-cakes.html" },
    { label: "Gallery",      href: "gallery.html" },
    { label: "Contact",      href: "contact.html" },
  ],

  // ── Meta / SEO ────────────────────────────────────────────────────────────
  siteUrl:     "https://sweetcrumbs.ng",      // EDIT: your live domain
  ogImage:     "assets/images/og-image.jpg",  // EDIT: 1200×630 px social share image
  twitterHandle: "@sweetcrumbs",              // EDIT

  // ── Theme ─────────────────────────────────────────────────────────────────
  defaultTheme: "light",  // EDIT: "light" or "dark" — overridden by user preference
};

// ─── WhatsApp helper ─────────────────────────────────────────────────────────
function getWhatsAppLink(customMessage) {
  const msg = encodeURIComponent(customMessage || SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;
}

// ─── Price formatter ─────────────────────────────────────────────────────────
function formatPrice(amount) {
  return `${SITE_CONFIG.currency}${amount.toLocaleString(SITE_CONFIG.currencyLocale)}`;
}

if (typeof module !== "undefined") {
  module.exports = { SITE_CONFIG, getWhatsAppLink, formatPrice };
}
