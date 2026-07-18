import { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import CartContext from "../../context/CartContext"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {cartItems,totalItems}=useContext(CartContext)
  
  return (
    <nav>
      <div className="logo">
        <h2>🛒 FreshCart</h2>
      </div>
      <button className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart({totalItems})
          </NavLink>
        </li>
        
      </ul>
      <div className="nav-actions">
        <button>Login</button>
        <button
        >
          🛒 Cart({totalItems})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
