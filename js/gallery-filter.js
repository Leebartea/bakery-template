// ─────────────────────────────────────────────────────────────────────────────
// js/gallery-filter.js — Gallery category filter + Lightbox
// ─────────────────────────────────────────────────────────────────────────────

// ── Gallery Data — EDIT HERE ──────────────────────────────────────────────────
const GALLERY_ITEMS = [
  // Format: { id, category, title, image, alt }
  // Categories: "cakes" | "snacks" | "wedding" | "custom"
  { id: 1,  category: "cakes",   title: "Victoria Sponge",       image: "https://loremflickr.com/600/600/cake,vanilla?lock=1",      alt: "Victoria Sponge cake"          },
  { id: 2,  category: "cakes",   title: "Chocolate Fudge",       image: "https://loremflickr.com/600/600/chocolate,cake?lock=2",    alt: "Rich chocolate fudge cake"     },
  { id: 3,  category: "wedding", title: "White Rose Wedding",     image: "https://loremflickr.com/600/600/wedding,cake?lock=3",      alt: "Elegant white wedding cake"    },
  { id: 4,  category: "snacks",  title: "Chin Chin Box",         image: "https://loremflickr.com/600/600/snack,pastry?lock=4",      alt: "Assorted chin chin gift box"   },
  { id: 5,  category: "cakes",   title: "Red Velvet Layer",      image: "https://loremflickr.com/600/600/cake,red?lock=5",          alt: "Red velvet layer cake"         },
  { id: 6,  category: "custom",  title: "Unicorn Cake",          image: "https://loremflickr.com/600/600/birthday,cake?lock=6",     alt: "Custom unicorn birthday cake"  },
  { id: 7,  category: "wedding", title: "Gold Leaf 3-Tier",      image: "https://loremflickr.com/600/600/wedding,cake?lock=7",      alt: "3-tier gold leaf wedding cake" },
  { id: 8,  category: "snacks",  title: "Shortbread Tin",        image: "https://loremflickr.com/600/600/cookies,biscuit?lock=8",   alt: "Butter shortbread cookie tin"  },
  { id: 9,  category: "cakes",   title: "Lemon Drizzle",         image: "https://loremflickr.com/600/600/lemon,cake?lock=9",        alt: "Lemon drizzle cake"            },
  { id: 10, category: "custom",  title: "Football Theme Cake",   image: "https://loremflickr.com/600/600/birthday,cake?lock=10",    alt: "Custom football themed cake"   },
  { id: 11, category: "snacks",  title: "Brownie Selection",     image: "https://loremflickr.com/600/600/brownie,chocolate?lock=11", alt: "Fudgy chocolate brownie box"  },
  { id: 12, category: "wedding", title: "Floral Tier Cake",      image: "https://loremflickr.com/600/600/wedding,cake?lock=12",     alt: "Floral decorated wedding cake" },
  { id: 13, category: "custom",  title: "Number 30 Cake",        image: "https://loremflickr.com/600/600/birthday,cake?lock=13",    alt: "Custom number 30 birthday cake"},
  { id: 14, category: "cakes",   title: "Caramel Salted Butter", image: "https://loremflickr.com/600/600/caramel,cake?lock=14",     alt: "Caramel salted butter cake"    },
  { id: 15, category: "snacks",  title: "Puff Puff Delight",     image: "https://loremflickr.com/600/600/donut,pastry?lock=15",     alt: "Fresh golden puff puff"        },
  { id: 16, category: "custom",  title: "Princess Tiara Cake",   image: "https://loremflickr.com/600/600/birthday,cake?lock=16",    alt: "Pink princess tiara birthday cake"},
  { id: 17, category: "events",  title: "Birthday Sprinkle Cake",  image: "https://loremflickr.com/600/600/birthday,cake?lock=17",    alt: "Colourful birthday sprinkle cake"       },
  { id: 18, category: "events",  title: "Anniversary Roses Cake",  image: "https://loremflickr.com/600/600/romantic,cake?lock=18",    alt: "Heart-shaped anniversary cake with roses"},
  { id: 19, category: "events",  title: "Baby Shower Pastel Cake", image: "https://loremflickr.com/600/600/baby,cake?lock=19",        alt: "Pastel baby shower cake"                },
  { id: 20, category: "events",  title: "Graduation Day Cake",     image: "https://loremflickr.com/600/600/graduation,cake?lock=20",  alt: "Graduation cake with mortar board"      },
  { id: 21, category: "events",  title: "Retirement Gold Cake",    image: "https://loremflickr.com/600/600/celebration,cake?lock=21", alt: "Gold retirement celebration cake"       },
  { id: 22, category: "events",  title: "Engagement Party Cake",   image: "https://loremflickr.com/600/600/engagement,cake?lock=22",  alt: "Glamorous engagement cake with gold drip"},
  { id: 23, category: "events",  title: "Valentine's Dessert Box", image: "https://loremflickr.com/600/600/dessert,romantic?lock=23", alt: "Valentine's romantic dessert box"       },
  { id: 24, category: "events",  title: "Corporate Event Platter", image: "https://loremflickr.com/600/600/dessert,platter?lock=24",  alt: "Corporate dessert platter assortment"   },
];

document.addEventListener("DOMContentLoaded", function () {
  renderGallery("all");
  initGalleryFilters();
  initLightbox();
});

// ── Render gallery grid ────────────────────────────────────────────────────
function renderGallery(filter) {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  const items = filter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === filter);

  if (!items.length) {
    grid.innerHTML = `<p class="col-span-full text-center py-16" style="color: var(--color-text-muted);">No items in this category yet.</p>`;
    return;
  }

  grid.innerHTML = items
    .map(
      (item) => `
    <div class="gallery-item aspect-square reveal"
      data-gallery-id="${item.id}"
      data-category="${item.category}"
      data-title="${item.title}"
      data-image="${item.image}"
      tabindex="0"
      role="button"
      aria-label="View ${item.title}">

      <img
        src="${item.image}"
        alt="${item.alt}"
        loading="lazy"
        class="w-full h-full object-cover"
        onerror="this.src='https://picsum.photos/seed/fallback-gallery/600/600'">

      <div class="gallery-overlay">
        <div class="text-center text-white p-4">
          <svg class="w-10 h-10 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
          </svg>
          <p class="text-sm font-semibold">${item.title}</p>
        </div>
      </div>
    </div>`
    )
    .join("");

  // Re-trigger scroll reveal
  setTimeout(() => {
    if (typeof initScrollReveal === "function") initScrollReveal();
    // Quick show for already-visible items
    document.querySelectorAll(".gallery-item .reveal").forEach((el) =>
      el.classList.add("visible")
    );
    grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
  }, 50);

  // Attach lightbox click handlers
  attachLightboxTriggers();
}

// ── Filter buttons ─────────────────────────────────────────────────────────
function initGalleryFilters() {
  const buttons = document.querySelectorAll("[data-gallery-filter]");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.dataset.galleryFilter;

      // Update active state
      buttons.forEach((b) => {
        b.classList.remove("active-filter");
        b.setAttribute("aria-pressed", "false");
        b.style.backgroundColor = "";
        b.style.color = "";
        b.style.borderColor = "var(--color-border)";
      });
      this.classList.add("active-filter");
      this.setAttribute("aria-pressed", "true");
      this.style.backgroundColor = "var(--color-primary)";
      this.style.color = "#fff";
      this.style.borderColor = "var(--color-primary)";

      renderGallery(filter);
    });
  });
}

// ── Lightbox ───────────────────────────────────────────────────────────────
function initLightbox() {
  // Create lightbox DOM (only once)
  if (document.getElementById("gallery-lightbox")) return;

  const lb = document.createElement("div");
  lb.id = "gallery-lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Image lightbox");
  lb.className = "fixed inset-0 z-50 flex items-center justify-center p-4 hidden";
  lb.style.backgroundColor = "rgba(0,0,0,0.9)";

  lb.innerHTML = `
    <button id="lb-close"
      class="absolute top-4 right-4 text-white w-10 h-10 flex items-center justify-center
             rounded-full transition-colors hover:bg-white/20"
      aria-label="Close lightbox">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <button id="lb-prev"
      class="absolute left-2 sm:left-6 text-white w-10 h-10 flex items-center justify-center
             rounded-full transition-colors hover:bg-white/20"
      aria-label="Previous image">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    <div class="max-w-3xl w-full mx-12">
      <img id="lb-image" src="" alt="" class="w-full max-h-[80vh] object-contain rounded-lg">
      <p id="lb-caption" class="text-white text-center mt-3 text-sm font-medium"></p>
    </div>
    <button id="lb-next"
      class="absolute right-2 sm:right-6 text-white w-10 h-10 flex items-center justify-center
             rounded-full transition-colors hover:bg-white/20"
      aria-label="Next image">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>`;

  document.body.appendChild(lb);

  let currentIndex = 0;
  let currentItems = [];

  function openLightbox(items, index) {
    currentItems = items;
    currentIndex = index;
    showImage();
    lb.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.getElementById("lb-close").focus();
  }

  function closeLightbox() {
    lb.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function showImage() {
    const item = currentItems[currentIndex];
    if (!item) return;
    document.getElementById("lb-image").src    = item.dataset.image || "";
    document.getElementById("lb-image").alt    = item.querySelector("img")?.alt || "";
    document.getElementById("lb-caption").textContent = item.dataset.title || "";
  }

  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    showImage();
  });
  document.getElementById("lb-next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentItems.length;
    showImage();
  });
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (lb.classList.contains("hidden")) return;
    if (e.key === "Escape")       closeLightbox();
    if (e.key === "ArrowLeft")    { currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length; showImage(); }
    if (e.key === "ArrowRight")   { currentIndex = (currentIndex + 1) % currentItems.length; showImage(); }
  });

  // Make openLightbox accessible globally for attachLightboxTriggers
  window._openLightbox = openLightbox;
}

function attachLightboxTriggers() {
  const grid  = document.getElementById("gallery-grid");
  if (!grid) return;
  const items = Array.from(grid.querySelectorAll("[data-gallery-id]"));

  items.forEach((item, index) => {
    // Remove old listeners
    const newItem = item.cloneNode(true);
    item.parentNode.replaceChild(newItem, item);

    const handler = () => {
      if (window._openLightbox) window._openLightbox(
        Array.from(grid.querySelectorAll("[data-gallery-id]")),
        index
      );
    };
    newItem.addEventListener("click", handler);
    newItem.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); }
    });
  });
}
