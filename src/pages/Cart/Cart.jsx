import React, { useContext } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h1>🛒</h1>

          <h2>Your Cart is Empty</h2>

          <p>Looks like you haven't added any products yet.</p>

          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <p>Total Items: {totalItems}</p>

          {cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.id}>
              <img src={cartItem.image} alt={cartItem.name} width="100" />

              <div className="cart-details">
                <h3>{cartItem.name}</h3>

                <p>₹{cartItem.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(cartItem)}>-</button>

                  <span>{cartItem.quantity}</span>

                  <button onClick={() => addToCart(cartItem)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(cartItem)}
                >
                  Remove
                </button>

                <p>
                  <strong>
                    Subtotal: ₹{cartItem.price * cartItem.quantity}
                  </strong>
                </p>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </h3>

            <h3>
              <span>Total Price:</span>
              <span>₹{totalPrice}</span>
            </h3>
            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
