/* MyClothing Product Catalog – Prices in Philippine Peso (₱) */

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Navy Oxford Shirt",
    category: "men",
    subcategory: "shirts",
    price: 1899,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-11090306c45a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1620012253295-c5d4e3e1c1e0?w=600&h=800&fit=crop"
    ],
    description: "A timeless navy oxford shirt crafted from premium cotton. Perfect for both casual Fridays and smart-casual evenings. Breathable, durable, and effortlessly stylish.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Navy", hex: "#0a1628" },
      { name: "White", hex: "#ffffff" },
      { name: "Light Blue", hex: "#a8c5d4" }
    ],
    stock: 45,
    rating: 4.8,
    reviews: 124,
    badges: ["best", "sale"],
    isNew: false
  },
  {
    id: 2,
    name: "Minimalist White Tee",
    category: "men",
    subcategory: "tshirts",
    price: 799,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop"
    ],
    description: "Ultra-soft premium cotton t-shirt with a clean, modern fit. The essential wardrobe staple that pairs with everything.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#0d0d0d" },
      { name: "Heather Gray", hex: "#9ca3af" }
    ],
    stock: 120,
    rating: 4.9,
    reviews: 312,
    badges: ["best"],
    isNew: false
  },
  {
    id: 3,
    name: "Oversized Black Hoodie",
    category: "men",
    subcategory: "hoodies",
    price: 2499,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578768078345-6a5c8c2c0f5e?w=600&h=800&fit=crop"
    ],
    description: "Heavyweight French terry hoodie with an oversized silhouette. Soft brushed interior and reinforced kangaroo pocket for everyday comfort.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#0d0d0d" },
      { name: "Charcoal", hex: "#374151" },
      { name: "Cream", hex: "#f5f0e8" }
    ],
    stock: 38,
    rating: 4.7,
    reviews: 89,
    badges: ["new"],
    isNew: true
  },
  {
    id: 4,
    name: "Tailored Wool Blend Blazer",
    category: "men",
    subcategory: "jackets",
    price: 5999,
    originalPrice: 7499,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop"
    ],
    description: "Sophisticated wool-blend blazer with a modern slim cut. Fully lined, structured shoulders, and functional buttons for a polished look.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal", hex: "#374151" },
      { name: "Navy", hex: "#0a1628" }
    ],
    stock: 22,
    rating: 4.9,
    reviews: 56,
    badges: ["sale", "best"],
    isNew: false
  },
  {
    id: 5,
    name: "Slim Fit Chino Pants",
    category: "men",
    subcategory: "pants",
    price: 1699,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop"
    ],
    description: "Versatile slim-fit chinos in a soft stretch cotton blend. Clean lines and a modern taper make them office-to-weekend ready.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Khaki", hex: "#c3b091" },
      { name: "Navy", hex: "#0a1628" },
      { name: "Black", hex: "#0d0d0d" },
      { name: "Olive", hex: "#556b2f" }
    ],
    stock: 67,
    rating: 4.6,
    reviews: 178,
    badges: [],
    isNew: false
  },
  {
    id: 6,
    name: "Silk Blend Midi Dress",
    category: "women",
    subcategory: "dresses",
    price: 4299,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop"
    ],
    description: "Elegant silk-blend midi dress with a flattering wrap silhouette. Lightweight, drapey fabric that moves beautifully with you.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Blush", hex: "#e8b4b8" },
      { name: "Black", hex: "#0d0d0d" },
      { name: "Emerald", hex: "#046307" }
    ],
    stock: 28,
    rating: 4.9,
    reviews: 94,
    badges: ["sale", "best"],
    isNew: false
  },
  {
    id: 7,
    name: "Cashmere Crew Neck Sweater",
    category: "women",
    subcategory: "tops",
    price: 3899,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop"
    ],
    description: "Luxuriously soft cashmere-blend sweater with a relaxed crew neck. Lightweight yet warm—ideal for layering or wearing alone.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Ivory", hex: "#fffff0" },
      { name: "Camel", hex: "#c19a6b" },
      { name: "Gray", hex: "#6b7280" }
    ],
    stock: 41,
    rating: 4.8,
    reviews: 67,
    badges: ["new"],
    isNew: true
  },
  {
    id: 8,
    name: "High-Waist Wide Leg Trousers",
    category: "women",
    subcategory: "pants",
    price: 2299,
    originalPrice: 2899,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop"
    ],
    description: "Flattering high-waist wide-leg trousers with a fluid drape. Pair with a tucked blouse for an elevated everyday look.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#0d0d0d" },
      { name: "Cream", hex: "#f5f0e8" },
      { name: "Navy", hex: "#0a1628" }
    ],
    stock: 35,
    rating: 4.7,
    reviews: 112,
    badges: ["sale"],
    isNew: false
  },
  {
    id: 9,
    name: "Structured Leather Jacket",
    category: "women",
    subcategory: "jackets",
    price: 6999,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop"
    ],
    description: "Premium faux-leather biker jacket with asymmetric zip and quilted panels. A statement piece that elevates any outfit.",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Black", hex: "#0d0d0d" },
      { name: "Cognac", hex: "#9a463d" }
    ],
    stock: 18,
    rating: 4.9,
    reviews: 43,
    badges: ["new", "best"],
    isNew: true
  },
  {
    id: 10,
    name: "Linen Button-Up Shirt",
    category: "women",
    subcategory: "tops",
    price: 1599,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop"
    ],
    description: "Breathable pure linen shirt with a relaxed oversized fit. Perfect for warm days and effortless weekend style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Sky Blue", hex: "#87ceeb" },
      { name: "Sage", hex: "#9caf88" }
    ],
    stock: 52,
    rating: 4.6,
    reviews: 88,
    badges: [],
    isNew: false
  },
  {
    id: 11,
    name: "Graphic Print Tee",
    category: "men",
    subcategory: "tshirts",
    price: 999,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485cf?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485cf?w=600&h=800&fit=crop"
    ],
    description: "Soft cotton tee featuring an exclusive MyClothing graphic print. Limited drop—stand out with understated edge.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#0d0d0d" },
      { name: "White", hex: "#ffffff" }
    ],
    stock: 60,
    rating: 4.5,
    reviews: 201,
    badges: ["sale", "new"],
    isNew: true
  },
  {
    id: 12,
    name: "Pleated Midi Skirt",
    category: "women",
    subcategory: "dresses",
    price: 2199,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop"
    ],
    description: "Flowing pleated midi skirt with an elastic waistband. Moves gracefully and pairs beautifully with both fitted and oversized tops.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#0d0d0d" },
      { name: "Burgundy", hex: "#722f37" },
      { name: "Navy", hex: "#0a1628" }
    ],
    stock: 33,
    rating: 4.8,
    reviews: 76,
    badges: [],
    isNew: false
  },
  {
    id: 13,
    name: "Quilted Bomber Jacket",
    category: "men",
    subcategory: "jackets",
    price: 3499,
    originalPrice: 4299,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop"
    ],
    description: "Lightweight quilted bomber with a modern silhouette. Water-resistant outer shell and cozy insulated lining.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Olive", hex: "#556b2f" },
      { name: "Black", hex: "#0d0d0d" },
      { name: "Navy", hex: "#0a1628" }
    ],
    stock: 29,
    rating: 4.7,
    reviews: 54,
    badges: ["sale"],
    isNew: false
  },
  {
    id: 14,
    name: "Ribbed Knit Top",
    category: "women",
    subcategory: "tops",
    price: 1299,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop"
    ],
    description: "Soft ribbed knit top with a flattering fitted cut. Stretchy, comfortable, and perfect for layering under blazers or jackets.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#0d0d0d" },
      { name: "White", hex: "#ffffff" },
      { name: "Camel", hex: "#c19a6b" },
      { name: "Dusty Rose", hex: "#d4a5a5" }
    ],
    stock: 78,
    rating: 4.6,
    reviews: 145,
    badges: ["best"],
    isNew: false
  },
  {
    id: 15,
    name: "Denim Jacket Classic",
    category: "men",
    subcategory: "jackets",
    price: 2799,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=800&fit=crop"
    ],
    description: "Iconic denim jacket in a medium wash. Durable construction with classic details—a wardrobe essential for every season.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Medium Wash", hex: "#4a6fa5" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    stock: 44,
    rating: 4.8,
    reviews: 198,
    badges: ["best"],
    isNew: false
  },
  {
    id: 16,
    name: "Satin Slip Dress",
    category: "women",
    subcategory: "dresses",
    price: 3299,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1515372039744-b8f1729e95f7?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f1729e95f7?w=600&h=800&fit=crop"
    ],
    description: "Luxurious satin slip dress with adjustable straps and a bias cut. Effortlessly glamorous for evenings out or special occasions.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#f7e7ce" },
      { name: "Black", hex: "#0d0d0d" },
      { name: "Silver", hex: "#c0c0c0" }
    ],
    stock: 25,
    rating: 4.9,
    reviews: 61,
    badges: ["new"],
    isNew: true
  }
];

function formatPrice(amount) {
  return "₱" + amount.toLocaleString("en-PH");
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}

function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category || p.subcategory === category);
}

function getRelatedProducts(product, limit = 4) {
  return PRODUCTS
    .filter(p => p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory))
    .slice(0, limit);
}