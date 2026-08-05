import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import products from "../../data/productsData";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductDetails.css";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found 😔</h2>

        <button onClick={() => navigate("/")}>Go Back Home</button>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <>
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>

          <p className="price">
            ₹{product.price}
            <span className="tax-text">Inclusive of all taxes</span>
          </p>

          <p className={product.stock > 0 ? "in-stock" : "out-stock"}>
            {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
          </p>

          <p>
            <strong>Category :</strong> {product.category}
          </p>

          <p>
            <strong>Available Stock :</strong> {product.stock}
          </p>

          <h3>Description</h3>

          <p className="description">{product.description}</p>

          <div className="extra-info">
            <p>🚚 Free Delivery on orders above ₹500</p>

            <p>🔄 7 Days Easy Return</p>

            <p>🔒 100% Secure Checkout</p>
          </div>
          <button
            className="add-cart-btn"
            disabled={product.stock === 0}
            onClick={handleAddToCart}
          >
            {product.stock === 0 ? "Out Of Stock" : "Add To Cart"}
          </button>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>

        <div className="related-grid">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              category={item.category}
              stock={item.stock}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
