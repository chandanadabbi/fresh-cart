import { useState, useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartContext from "../../context/CartContext";
import heroBanner from "../../assets/hero/hero-banner.jpg";
import productsData from "../../data/productsData";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const { addToCart } = useContext(CartContext);

  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Bakery",
    "Beverages",
    "Snacks",
    "Rice & Grains",
    "Dry Fruits",
    "Oils & Spices",
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case "lowtoHigh":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "hightoLow":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "nameAZ":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "nameZA":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;

    default:
      break;
  }

  return (
    <div className="home">

      {/* Hero Section */}

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="hero-overlay">
          <h1>Fresh Groceries Delivered to Your Doorstep</h1>

          <p>
            Fresh Fruits • Vegetables • Dairy • Snacks • Beverages
          </p>

          <button
            className="shop-now-btn"
            onClick={() =>
              document
                .getElementById("products-section")
                .scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">
          <span>🚚</span>
          <h3>Free Delivery</h3>
          <p>On orders above ₹500</p>
        </div>

        <div className="feature-card">
          <span>🥬</span>
          <h3>Fresh Products</h3>
          <p>Directly from Local Farms</p>
        </div>

        <div className="feature-card">
          <span>💳</span>
          <h3>Secure Payment</h3>
          <p>100% Safe Checkout</p>
        </div>

        <div className="feature-card">
          <span>⭐</span>
          <h3>Best Quality</h3>
          <p>Premium Grocery Products</p>
        </div>

      </section>

      {/* Categories */}

      <section className="category-buttons">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </section>

      {/* Products */}

      <section id="products-section">

        <h2 className="section-title">
          Featured Products
        </h2>

        <div className="toolbar">

          <div className="search-section">
            <input
              type="text"
              placeholder="🔍 Search fruits, vegetables, dairy..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="sort-section">
            <label>Sort By</label>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="lowtoHigh">Price: Low to High</option>
              <option value="hightoLow">Price: High to Low</option>
              <option value="nameAZ">Name: A-Z</option>
              <option value="nameZA">Name: Z-A</option>
            </select>
          </div>

        </div>

        <div className="search-info">

          {search && (
            <p>
              Search :
              <strong> "{search}"</strong>
            </p>
          )}

          <p>
            {sortedProducts.length} Products Available
          </p>

        </div>

        <div className="products-container">

          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                stock={product.stock}
                onAddToCart={() => addToCart(product)}
              />
            ))
          ) : (
            <div className="no-products">
              <h2>😔 No Products Found</h2>
              <p>Try searching with another keyword.</p>
            </div>
          )}

        </div>

      </section>

    </div>
  );
}

export default Home;