import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const [formData, setFormData] = useState(() => {
    const savedForm = localStorage.getItem("checkoutForm");

    return savedForm
      ? JSON.parse(savedForm)
      : {
          fullName: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
        };
  });
  const [errors, setErrors] = useState({});
  const { cartItems, totalItems, totalPrice, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be exactly 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be exactly 6 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handlePlaceOrder = () => {
    if (!validateForm()) {
      return;
    }

    clearCart();
    localStorage.removeItem("checkoutForm");
    navigate("/order-success");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("checkoutForm", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="checkout-container">
      <div className="billing-section">
        <h2>Billing Details</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            name="fullName"
            onChange={handleChange}
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            name="phone"
            onChange={handleChange}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            placeholder="Enter your complete address"
            rows="4"
            value={formData.address}
            name="address"
            onChange={handleChange}
          ></textarea>
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>
        <div className="row">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              name="city"
              onChange={handleChange}
            />
            {errors.city && <p className="error-text">{errors.city}</p>}
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              placeholder="Enter your state"
              value={formData.state}
              name="state"
              onChange={handleChange}
            />
            {errors.state && <p className="error-text">{errors.state}</p>}
          </div>
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter your pincode"
            value={formData.pincode}
            name="pincode"
            onChange={handleChange}
          />
          {errors.pincode && <p className="error-text">{errors.pincode}</p>}
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
