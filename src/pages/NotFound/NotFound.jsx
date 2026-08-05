import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>Sorry! The page you are looking for doesn't exist.</p>

        <button onClick={() => navigate("/")}>Go To Home</button>
      </div>
    </div>
  );
}

export default NotFound;
