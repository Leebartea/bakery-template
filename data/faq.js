// ─────────────────────────────────────────────────────────────────────────────
// data/faq.js — EDIT HERE to update Frequently Asked Questions
// ─────────────────────────────────────────────────────────────────────────────

const FAQ_DATA = [
  {
    id: 1,
    category: "ordering",
    question: "How do I place an order?",
    answer:
      "The easiest way is to message us directly on WhatsApp — click the green button on any page! You can also fill in our order form on the Contact page. For custom cakes, we recommend chatting on WhatsApp so we can discuss your vision in detail.",
  },
  {
    id: 2,
    category: "ordering",
    question: "How far in advance should I order?",
    answer:
      "For standard cakes and snack boxes, we need at least 48–72 hours notice. Custom cakes (birthdays, weddings, events) require a minimum of 7–14 days. For wedding cakes, we recommend booking 1–3 months in advance to secure your date.",
  },
  {
    id: 3,
    category: "ordering",
    question: "Do you require a deposit?",
    answer:
      "Yes — a 50% deposit is required to confirm your order. The balance is due on delivery or collection. For wedding and large corporate orders, a 70% deposit is required. We accept bank transfers and mobile payment.",
  },
  {
    id: 4,
    category: "delivery",
    question: "Do you offer delivery?",
    answer:
      "Yes! We deliver within Lagos and select cities (Abuja, Port Harcourt, Enugu). Delivery fees vary by location and are calculated at checkout. Same-day delivery may be available for snack orders placed before 12 noon — ask us on WhatsApp.",
  },
  {
    id: 5,
    category: "delivery",
    question: "Can I collect my order in person?",
    answer:
      "Absolutely! Collection is available from our bakery Monday–Saturday, 8am–7pm, and Sunday 10am–4pm. We'll confirm the exact pickup address when you order.",
  },
  {
    id: 6,
    category: "custom",
    question: "Can I customise a cake design?",
    answer:
      "Yes — custom cakes are our speciality! We can recreate almost any design from a photo, create character cakes, themed cakes, or work from scratch with you to design something truly unique. Share your inspiration image on WhatsApp to get started.",
  },
  {
    id: 7,
    category: "custom",
    question: "Do you cater for dietary requirements (vegan, gluten-free)?",
    answer:
      "We currently offer gluten-free options for some products on request. Please discuss your dietary needs with us before ordering so we can advise the best options. All allergen information is listed on each product.",
  },
  {
    id: 8,
    category: "custom",
    question: "Can I provide my own cake toppers or decorations?",
    answer:
      "Yes! You're welcome to provide your own toppers — characters, photos, personalised plaques etc. Just let us know in advance so we can plan the design around your topper.",
  },
  {
    id: 9,
    category: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers (details provided on WhatsApp/email), Opay, PalmPay, and cash on collection. Payment must be confirmed before your order goes into production.",
  },
  {
    id: 10,
    category: "general",
    question: "How long do your cakes keep?",
    answer:
      "Our cakes are best enjoyed within 3–4 days. Store at room temperature in a cool, dry place (not in direct sunlight or near heat). Cream-filled cakes must be refrigerated and consumed within 2 days. Snacks stay fresh for 5–7 days in an airtight container.",
  },
];

if (typeof module !== "undefined") {
  module.exports = { FAQ_DATA };
}
