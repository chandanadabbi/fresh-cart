import { useState, useContext } from "react";
import products from "../../data/products.js";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartContext from "../../context/CartContext.jsx";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const { addToCart } = useContext(CartContext);

  const categories = ["All", "Fruits", "Vegetables"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts];
  if(sortBy==="lowtoHigh"){
    sortedProducts.sort((a, b) => a.price - b.price);
  }
  else if(sortBy==="hightoLow"){
    sortedProducts.sort((a, b) => b.price - a.price);
  }
  else if(sortBy==="nameAZ"){
    sortedProducts.sort((a,b)=>a.name.localeCompare(b.name))
  }
  else if(sortBy==="nameZA"){
    sortedProducts.sort((a,b)=>b.name.localeCompare(a.name))
  }
  return (
    <>
      <div className="category-buttons">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={category === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="sort-section">
        <label>Sort By: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="lowtoHigh">Price: Low to High</option>
          <option value="hightoLow">Price: High to Low</option>
          <option value="nameAZ">Name: A-Z</option>
          <option value="nameZA">Name: Z-A</option>
        </select>
      </div>
      <div className="search-info">
        {search && (
          <p>
            Search: <strong>"{search}"</strong>
          </p>
        )}

        <h2>
          Showing {sortedProducts.length}{" "}
          {sortedProducts.length === 1 ? "Product" : "Products"}
        </h2>
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
              onAddToCart={() => addToCart(product)}
            />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </>
  );
}

export default Home;
