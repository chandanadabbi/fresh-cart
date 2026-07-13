import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
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
      </ul>
      <div className="nav-actions">
        <button>Login</button>
        <button
          onClick={() => {
            setCartCount((prev)=>prev+1);
            setCartCount((prev)=>prev+1);
          }}
        >
          🛒 Cart({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
