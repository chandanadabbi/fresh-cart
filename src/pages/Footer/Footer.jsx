import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2>🛒 FreshCart</h2>

          <p>Fresh groceries delivered to your doorstep.</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p>Home</p>

          <p>Products</p>

          <p>About</p>

          <p>Contact</p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📧 support@freshcart.com</p>

          <p>📞 +91 9876543210</p>
        </div>
      </div>

      <hr />

      <p className="copyright">© 2026 FreshCart. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
