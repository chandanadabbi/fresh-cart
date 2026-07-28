import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉</h1>

        <h2>Order Placed Successfully!</h2>

        <p>
          Thank you for shopping with us.
          Your order has been placed successfully.
        </p>

        <Link to="/" className="continue-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
