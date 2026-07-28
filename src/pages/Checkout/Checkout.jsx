import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cartItems, totalItems, totalPrice, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    clearCart();
    navigate("/order-success");
  };
  return (
    <div className="checkout-container">
      <div className="billing-section">
        <h2>Billing Details</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            placeholder="Enter your complete address"
            rows="4"
          ></textarea>
        </div>
        <div className="row">
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter your city" />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" placeholder="Enter your state" />
          </div>
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter your pincode"
          />
        </div>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="summary-item">
            <div className="summary-header">
              <h4>{item.name}</h4>

              <span>₹{item.price * item.quantity}</span>
            </div>

            <p>
              ₹{item.price} × {item.quantity}
            </p>
          </div>
        ))}
        <hr />
        <h3>Total Items: {totalItems}</h3>

        <h3>Total Price: ₹{totalPrice}</h3>

        <button className="checkout-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
