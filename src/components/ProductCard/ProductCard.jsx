import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ name, price, image, onAddToCart, id }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p className="price">₹{price}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
