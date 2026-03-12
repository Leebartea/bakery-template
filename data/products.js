// ─────────────────────────────────────────────────────────────────────────────
// data/products.js — EDIT HERE to update your product catalogue
// ─────────────────────────────────────────────────────────────────────────────
// CURRENCY: Change the symbol in SITE_CONFIG (js/config.js) from ₦ to $ or £
// IMAGES:   Replace picsum URLs with your own product photos
//           Recommended size: 800×600 px, < 150 KB, WebP format
// ─────────────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  // ──────────────────── CAKES ──────────────────────────────────────────────
  {
    id: "c001",
    category: "cakes",
    name: "Classic Victoria Sponge",
    tagline: "Light, buttery & timeless",
    price: 15000,
    badge: "Best Seller",
    description:
      "Two layers of golden vanilla sponge filled with house-made strawberry jam and whipped cream. Dusted with icing sugar. Serves 10–12.",
    serves: "10–12",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/cake,vanilla?lock=10",
    altText: "Classic Victoria Sponge cake dusted with icing sugar",
    featured: true,
  },
  {
    id: "c002",
    category: "cakes",
    name: "Dark Chocolate Fudge Cake",
    tagline: "Rich, decadent & irresistible",
    price: 18000,
    badge: "Most Loved",
    description:
      "Three tiers of moist dark chocolate sponge layered with silky chocolate ganache and fudge frosting. For true chocoholics.",
    serves: "12–15",
    allergens: ["Gluten", "Dairy", "Eggs", "Soy"],
    available: true,
    image: "https://loremflickr.com/800/600/chocolate,cake?lock=20",
    altText: "Rich dark chocolate fudge cake with ganache drizzle",
    featured: true,
  },
  {
    id: "c003",
    category: "cakes",
    name: "Red Velvet Dream",
    tagline: "Velvety, romantic & stunning",
    price: 16000,
    badge: "Popular",
    description:
      "Vibrant red velvet sponge with a hint of cocoa, layered with signature cream cheese frosting. A showstopper on any table.",
    serves: "10–12",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/cake,red?lock=30",
    altText: "Elegant red velvet cake with cream cheese frosting",
    featured: true,
  },
  {
    id: "c004",
    category: "cakes",
    name: "Lemon Sunshine Drizzle",
    tagline: "Zesty, fresh & perfectly sweet",
    price: 14000,
    badge: "",
    description:
      "A bright and zesty lemon sponge soaked in fresh lemon syrup, topped with a crackly lemon glaze. Light and refreshing.",
    serves: "10–12",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/lemon,cake?lock=40",
    altText: "Lemon drizzle cake with golden glaze",
    featured: false,
  },
  {
    id: "c005",
    category: "cakes",
    name: "Strawberry & Cream Gateau",
    tagline: "Fresh, fruity & celebration-worthy",
    price: 20000,
    badge: "Seasonal",
    description:
      "Light chiffon sponge with layers of Chantilly cream and fresh strawberries. Decorated with whole berries and gold leaf.",
    serves: "12–15",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/strawberry,cake?lock=50",
    altText: "Elegant strawberry and cream gateau with fresh berries",
    featured: false,
  },
  {
    id: "c006",
    category: "cakes",
    name: "Caramel Salted Butter Cake",
    tagline: "Buttery, salty-sweet perfection",
    price: 17000,
    badge: "",
    description:
      "Rich butter sponge with layers of house-made salted caramel buttercream and a caramel drizzle. Pure indulgence.",
    serves: "10–12",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/caramel,cake?lock=60",
    altText: "Salted caramel layered cake with caramel drizzle",
    featured: false,
  },

  // ──────────────────── SNACKS & PASTRIES ──────────────────────────────────
  {
    id: "s001",
    category: "snacks",
    name: "Assorted Chin Chin (500g)",
    tagline: "Crunchy, golden & utterly moreish",
    price: 3500,
    badge: "Fan Favourite",
    description:
      "Perfectly fried chin chin in three varieties — classic, coconut, and spiced pepper — beautifully boxed. Makes a great gift.",
    serves: "2–4",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/snack,pastry?lock=70",
    altText: "Assorted chin chin in a premium gift box",
    featured: true,
  },
  {
    id: "s002",
    category: "snacks",
    name: "Butter Shortbread Cookies (Tin)",
    tagline: "Melt-in-mouth luxury biscuits",
    price: 5000,
    badge: "Gift Idea",
    description:
      "24 handcrafted butter shortbread cookies in a beautiful keepsake tin. Flavours: vanilla, lemon zest, and almond.",
    serves: "4–6",
    allergens: ["Gluten", "Dairy", "Eggs", "Nuts"],
    available: true,
    image: "https://loremflickr.com/800/600/cookies,biscuit?lock=80",
    altText: "Butter shortbread cookies in a premium gold tin",
    featured: true,
  },
  {
    id: "s003",
    category: "snacks",
    name: "Fudgy Chocolate Brownies (6 pcs)",
    tagline: "Dense, fudgy & irresistibly rich",
    price: 4500,
    badge: "Best Seller",
    description:
      "Six thick, fudgy brownies made with premium dark chocolate. Each piece is gooey in the centre and crackly on top.",
    serves: "6",
    allergens: ["Gluten", "Dairy", "Eggs", "Soy"],
    available: true,
    image: "https://loremflickr.com/800/600/brownie,chocolate?lock=90",
    altText: "Stack of rich fudgy chocolate brownies",
    featured: true,
  },
  {
    id: "s004",
    category: "snacks",
    name: "Puff Puff (Pack of 12)",
    tagline: "Soft, golden & pillow-soft",
    price: 2500,
    badge: "",
    description:
      "12 fresh-fried puff puff — airy, slightly sweet dough balls dusted with icing sugar. Perfect for parties and events.",
    serves: "4–6",
    allergens: ["Gluten", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/donut,pastry?lock=100",
    altText: "Fresh golden puff puff dusted with icing sugar",
    featured: false,
  },
  {
    id: "s005",
    category: "snacks",
    name: "Savoury Meat Pies (Pack of 6)",
    tagline: "Flaky pastry with rich meat filling",
    price: 4000,
    badge: "Popular",
    description:
      "Six golden, flaky shortcrust pastry pies with a seasoned beef and vegetable filling. Served warm or cold.",
    serves: "6",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/pie,pastry?lock=110",
    altText: "Golden flaky meat pies fresh from the oven",
    featured: false,
  },
  {
    id: "s006",
    category: "snacks",
    name: "Premium Dessert Box",
    tagline: "Curated selection of our finest bites",
    price: 8000,
    badge: "Gift Box",
    description:
      "A beautifully curated box featuring brownies, shortbread, cake slice, and seasonal treats. The perfect gift for any occasion.",
    serves: "2–4",
    allergens: ["Gluten", "Dairy", "Eggs", "Nuts"],
    available: true,
    image: "https://loremflickr.com/800/600/dessert,box?lock=120",
    altText: "Premium dessert gift box with assorted sweets",
    featured: false,
  },

  // ──────────────────── WEDDING & EVENTS ───────────────────────────────────
  {
    id: "w001",
    category: "wedding",
    name: "2-Tier Wedding Cake",
    tagline: "Elegance for your special day",
    price: 45000,
    badge: "Bespoke",
    description:
      "Two tiers of your chosen flavour with custom fondant or buttercream finish. Includes ribbon wrap and fresh floral topper (coordination required).",
    serves: "50–60",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/wedding,cake?lock=130",
    altText: "Elegant 2-tier white wedding cake with floral decoration",
    featured: true,
  },
  {
    id: "w002",
    category: "wedding",
    name: "3-Tier Wedding Cake",
    tagline: "A grand statement for grand occasions",
    price: 85000,
    badge: "Premium",
    description:
      "Three-tier showstopper with custom design consultation, premium sugar flowers, gold/silver leaf accents, and ribbon trim.",
    serves: "100–120",
    allergens: ["Gluten", "Dairy", "Eggs"],
    available: true,
    image: "https://loremflickr.com/800/600/wedding,cake?lock=140",
    altText: "Grand 3-tier wedding cake with sugar flowers and gold accents",
    featured: true,
  },
];

// ─── Helper: Get products by category ────────────────────────────────────────
function getProductsByCategory(category) {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

// ─── Helper: Get featured products ───────────────────────────────────────────
function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured);
}

// ─── Helper: Format price with currency symbol ────────────────────────────────
function formatPrice(price) {
  // EDIT HERE: Change currency symbol or formatting
  return `₦${price.toLocaleString("en-NG")}`;
}

// ─── Export for use in JS modules (also works as plain global) ────────────────
if (typeof module !== "undefined") {
  module.exports = { PRODUCTS, getProductsByCategory, getFeaturedProducts, formatPrice };
}
