import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ id, name, price, image, category, stock, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <img src={image} alt={name} />

        <span className="category-badge">{category}</span>

        <h3>{name}</h3>
      </Link>

      <p className="price">₹{price}</p>

      <p className={stock > 0 ? "in-stock" : "out-stock"}>
        {stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <button onClick={onAddToCart} disabled={stock === 0}>
        {stock > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}

export default ProductCard;
