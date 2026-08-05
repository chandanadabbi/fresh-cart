import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import CartContext from "../../context/CartContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {  totalItems } = useContext(CartContext);

  return (
    <nav>
      <div className="logo">
        <Link to="/" className="logo-link"  onClick={() => setIsMenuOpen(false)}>
          <h2>🛒 FreshCart</h2>
        </Link>
      </div>
      <button className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <div className="nav-actions">
        <Link to="/cart" className="cart-btn">
          🛒 Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
