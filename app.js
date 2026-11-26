/* MyClothing – Core Application Logic */

// ===== Cart & Wishlist (localStorage) =====
const Cart = {
  key: "myclothing_cart",
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch {
      return [];
    }
  },
  save(items) {
    localStorage.setItem(this.key, JSON.stringify(items));
    this.updateUI();
  },
  add(product, size, color, qty = 1) {
    const items = this.get();
    const existing = items.find(
      i => i.id === product.id && i.size === size && i.color === color
    );
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        color,
        qty
      });
    }
    this.save(items);
    showToast(`Added "${product.name}" to cart`);
  },
  remove(index) {
    const items = this.get();
    items.splice(index, 1);
    this.save(items);
  },
  updateQty(index, qty) {
    const items = this.get();
    if (qty < 1) {
      this.remove(index);
      return;
    }
    items[index].qty = qty;
    this.save(items);
  },
  count() {
    return this.get().reduce((sum, i) => sum + i.qty, 0);
  },
  subtotal() {
    return this.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  clear() {
    this.save([]);
  },
  updateUI() {
    const count = this.count();
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
    this.renderDrawer();
  },
  renderDrawer() {
    const body = document.getElementById("cart-body");
    const footer = document.getElementById("cart-footer");
    if (!body) return;

    const items = this.get();
    if (items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <p>Your cart is empty</p>
          <a href="shop.html" class="btn btn-primary btn-sm" style="margin-top:16px">Start Shopping</a>
        </div>`;
      if (footer) footer.style.display = "none";
      return;
    }

    body.innerHTML = items
      .map(
        (item, i) => `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${item.image}" alt="${item.name}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${item.size} · ${item.color}</div>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="Cart.updateQty(${i}, ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="Cart.updateQty(${i}, ${item.qty + 1})">+</button>
          </div>
          <button class="cart-item-remove" onclick="Cart.remove(${i})">Remove</button>
        </div>
      </div>`
      )
      .join("");

    if (footer) {
      footer.style.display = "block";
      const sub = document.getElementById("cart-subtotal");
      if (sub) sub.textContent = formatPrice(this.subtotal());
    }
  }
};

const Wishlist = {
  key: "myclothing_wishlist",
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch {
      return [];
    }
  },
  save(ids) {
    localStorage.setItem(this.key, JSON.stringify(ids));
    this.updateUI();
  },
  toggle(id) {
    const ids = this.get();
    const idx = ids.indexOf(id);
    if (idx > -1) {
      ids.splice(idx, 1);
      showToast("Removed from wishlist");
    } else {
      ids.push(id);
      showToast("Added to wishlist");
    }
    this.save(ids);
  },
  has(id) {
    return this.get().includes(id);
  },
  count() {
    return this.get().length;
  },
  updateUI() {
    const count = this.count();
    document.querySelectorAll(".wishlist-count").forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
    document.querySelectorAll("[data-wishlist]").forEach(btn => {
      const id = Number(btn.dataset.wishlist);
      btn.classList.toggle("active", this.has(id));
    });
  }
};

// ===== Toast =====
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> ${message}`;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

// ===== Cart Drawer =====
function openCart() {
  document.getElementById("cart-overlay")?.classList.add("open");
  document.getElementById("cart-drawer")?.classList.add("open");
  document.body.style.overflow = "hidden";
  Cart.renderDrawer();
}

function closeCart() {
  document.getElementById("cart-overlay")?.classList.remove("open");
  document.getElementById("cart-drawer")?.classList.remove("open");
  document.body.style.overflow = "";
}

// ===== Product Card Renderer =====
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = "★".repeat(full);
  if (half) stars += "½";
  stars += "☆".repeat(5 - full - (half ? 1 : 0));
  return stars;
}

function renderProductCard(product) {
  const badges = [];
  if (product.isNew || product.badges.includes("new"))
    badges.push('<span class="product-badge badge-new">New</span>');
  if (product.badges.includes("sale") && product.originalPrice)
    badges.push('<span class="product-badge badge-sale">Sale</span>');
  if (product.badges.includes("best"))
    badges.push('<span class="product-badge badge-best">Best Seller</span>');

  const priceHtml = product.originalPrice
    ? `<span class="price-current">${formatPrice(product.price)}</span>
       <span class="price-old">${formatPrice(product.originalPrice)}</span>`
    : `<span class="price-current">${formatPrice(product.price)}</span>`;

  const wishActive = Wishlist.has(product.id) ? "active" : "";

  return `
    <article class="product-card fade-in">
      <div class="product-image">
        <a href="product.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
        <div class="product-badges">${badges.join("")}</div>
        <button class="product-wishlist ${wishActive}" data-wishlist="${product.id}" onclick="Wishlist.toggle(${product.id})" aria-label="Wishlist">
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category === "men" ? "Men" : "Women"} · ${product.subcategory}</div>
        <a href="product.html?id=${product.id}"><h3 class="product-name">${product.name}</h3></a>
        <div class="product-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span>(${product.reviews})</span>
        </div>
        <div class="product-price">${priceHtml}</div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="quickAdd(${product.id})">Add to Cart</button>
          <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">View</a>
        </div>
      </div>
    </article>`;
}

function quickAdd(id) {
  const product = getProductById(id);
  if (!product) return;
  const size = product.sizes[Math.floor(product.sizes.length / 2)] || product.sizes[0];
  const color = product.colors[0].name;
  Cart.add(product, size, color, 1);
}

// ===== Header scroll & mobile nav =====
function initHeader() {
  const header = document.querySelector(".header");
  const toggle = document.querySelector(".mobile-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
    document.querySelector(".back-to-top")?.classList.toggle("show", window.scrollY > 400);
  });

  toggle?.addEventListener("click", () => {
    toggle.classList.toggle("active");
    mobileNav?.classList.toggle("open");
  });

  mobileNav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      toggle?.classList.remove("active");
      mobileNav?.classList.remove("open");
    });
  });
}

// ===== Scroll animations =====
function initAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

// ===== Shared HTML pieces =====
function injectShared() {
  // Cart drawer
  if (!document.getElementById("cart-drawer")) {
    const drawer = document.createElement("div");
    drawer.innerHTML = `
      <div class="cart-overlay" id="cart-overlay" onclick="closeCart()"></div>
      <aside class="cart-drawer" id="cart-drawer">
        <div class="cart-header">
          <h3>Your Cart</h3>
          <button class="cart-close" onclick="closeCart()" aria-label="Close">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="cart-body" id="cart-body"></div>
        <div class="cart-footer" id="cart-footer" style="display:none">
          <div class="cart-subtotal">
            <span>Subtotal</span>
            <span id="cart-subtotal">₱0</span>
          </div>
          <button class="btn btn-primary btn-full" onclick="alert('Checkout is a demo. Thank you for exploring MyClothing!')">Checkout</button>
        </div>
      </aside>
      <button class="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Back to top">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
      </button>`;
    document.body.appendChild(drawer);
  }
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  injectShared();
  initHeader();
  Cart.updateUI();
  Wishlist.updateUI();
  initAnimations();

  // Highlight active nav
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});