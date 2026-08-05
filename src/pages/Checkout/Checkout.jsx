import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const [errors, setErrors] = useState({});
  const { totalItems, totalPrice, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash On Delivery",
  });

  const deliveryCharge = totalPrice >= 500 ? 0 : 40;

  const gst = Math.round(totalPrice * 0.05);

  const grandTotal = totalPrice + deliveryCharge + gst;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Invalid email";
        }
        break;

      case "phone":
        if (!/^[6-9]\d{9}$/.test(value)) {
          error = "Enter a valid phone number";
        }
        break;

      case "address":
        if (!value.trim()) {
          error = "Address is required";
        }
        break;

      case "city":
        if (!value.trim()) {
          error = "City is required";
        }
        break;

      case "pincode":
        if (!/^\d{6}$/.test(value)) {
          error = "Pincode must be 6 digits";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    clearCart();

    navigate("/order-success");
  }

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Shipping Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <textarea
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}
        <input
          type="text"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}

        <input
          type="text"
          placeholder="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        {errors.pincode && <p className="error">{errors.pincode}</p>}

        <h3>Payment Method</h3>

        <label>
          <input
            type="radio"
            name="payment"
            value="Cash On Delivery"
            checked={formData.payment === "Cash On Delivery"}
            onChange={handleChange}
          />
          Cash On Delivery
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={handleChange}
          />
          UPI
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Card"
            onChange={handleChange}
          />
          Credit / Debit Card
        </label>
      </form>

      <div className="order-summary">
        <h2>Order Summary</h2>

        <p>
          <span>Items</span>

          <span>{totalItems}</span>
        </p>

        <p>
          <span>Subtotal</span>

          <span>₹{totalPrice}</span>
        </p>

        <p>
          <span>Delivery</span>

          <span>{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</span>
        </p>

        <p>
          <span>GST</span>

          <span>₹{gst}</span>
        </p>

        <hr />

        <h3>
          <span>Total</span>

          <span>₹{grandTotal}</span>
        </h3>

        <button className="place-order-btn" onClick={handleSubmit}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
