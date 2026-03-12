/** @type {import('tailwindcss').Config} */
module.exports = {
  // ─── EDIT HERE: Add/remove HTML files to scan for Tailwind classes ───────────
  content: [
    "./*.html",
    "./js/**/*.js",
    "./data/**/*.js",
  ],
  // Dark mode via class (toggled by theme.js on <html> element)
  darkMode: "class",
  theme: {
    extend: {
      // ─── EDIT HERE: Brand color palette ─────────────────────────────────────
      colors: {
        // Light mode brand colors
        cream:    "#FFF8F0",   // page background (light)
        crumble:  "#FEF3E2",   // alt section bg (light)
        gold: {
          DEFAULT: "#C9A84C", // primary CTA/accent (light)
          hover:   "#B8940E",
          dark:    "#D4AF37", // primary CTA/accent (dark)
          "dark-hover": "#E8C547",
        },
        blush:    "#E8A0B4",  // accent (light)
        chocolate: {
          DEFAULT: "#0F0602", // page background (dark)
          surface: "#1E0D05", // card bg (dark)
          mid:     "#2C1509", // alt section bg (dark)
          light:   "#3D1F0D", // borders (dark)
        },
        rose:     "#C2688E",  // accent (dark)
        // Text
        cocoa:    "#2C1810",  // body text (light)
        "cocoa-muted": "#6B5344",
        "warm-white": "#F5E6D3", // body text (dark)
        "warm-muted": "#C4A882",
        // WhatsApp
        whatsapp: "#25D366",
        "whatsapp-hover": "#1da851",
      },
      // ─── EDIT HERE: Typography ───────────────────────────────────────────────
      fontFamily: {
        heading: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
      },
      // Smooth fade for all color/bg transitions
      transitionProperty: {
        theme: "background-color, border-color, color, fill, stroke, box-shadow",
      },
      transitionDuration: {
        theme: "300ms",
      },
    },
  },
  plugins: [],
};
