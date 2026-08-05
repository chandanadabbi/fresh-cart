import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    totalItems,
    totalPrice,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const deliveryCharge = totalPrice >= 500 ? 0 : 40;
  const gst = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + deliveryCharge + gst;

  return (
    <div className="cart-container">
      <h1>🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your Cart is Empty</h2>

          <p>Looks like you haven't added any products yet.</p>

          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <p className="items-count">
            Total Items : <strong>{totalItems}</strong>
          </p>

          {cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.id}>
              <img
                src={cartItem.image}
                alt={cartItem.name}
                className="cart-image"
              />

              <div className="cart-details">
                <h3>{cartItem.name}</h3>

                <p className="price">₹{cartItem.price}</p>

                <p className="stock-text">Stock Available : {cartItem.stock}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(cartItem)}>-</button>

                  <span>{cartItem.quantity}</span>

                  <button onClick={() => addToCart(cartItem)}>+</button>
                </div>

                <p className="subtotal">
                  Subtotal :
                  <strong>₹{cartItem.price * cartItem.quantity}</strong>
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(cartItem)}
                >
                  🗑 Remove
                </button>
              </div>
            </div>
          ))}

          {deliveryCharge === 0 ? (
            <p className="free-msg">
              🎉 Congratulations! You got FREE Delivery.
            </p>
          ) : (
            <p className="delivery-msg">
              Add ₹{500 - totalPrice} more to get FREE Delivery 🚚
            </p>
          )}

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <h3>
              <span>Items</span>
              <span>{totalItems}</span>
            </h3>

            <h3>
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </h3>

            <h3>
              <span>Delivery</span>

              <span className={deliveryCharge === 0 ? "free-delivery" : ""}>
                {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
              </span>
            </h3>

            <h3>
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </h3>

            <hr />

            <h2>
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </h2>

            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>

              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

              <button className="continue-btn" onClick={() => navigate("/")}>
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
