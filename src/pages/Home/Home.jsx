import { useState,useContext } from "react";
import products from "../../data/products.js";
import ProductCard from "../../components/ProductCard/ProductCard";
import CartContext from "../../context/CartContext.jsx"
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  
  const {addToCart}=useContext(CartContext)
  

  const categories = ["All", "Fruits", "Vegetables"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });
  return (
    <>
      <div className="category-buttons">
        {categories.map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={category===item?"active":""}>
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
      <div className="search-info">
        {search && (
          <p>
            Search: <strong>"{search}"</strong>
          </p>
        )}

        <h2>
          Showing {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "Product" : "Products"}
        </h2>
      </div>
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              onAddToCart={()=>addToCart(product)}
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
