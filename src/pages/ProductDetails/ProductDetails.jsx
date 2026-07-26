import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/products";
import "./ProductDetails.css"

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }
  return (
    <>
    <button className="back-button" onClick={()=>navigate("/")}>← Back</button>
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name}/>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
