import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with FreshCart.
        </p>

        <p>
          Your order has been placed successfully and will be delivered soon.
        </p>

        <div className="success-buttons">

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>

          <button
            className="orders-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;