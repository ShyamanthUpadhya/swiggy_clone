import { Link } from "react-router-dom";
import "./Container.css";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="nav-logo"
        alt="logo"
        src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Chef-restaurant-logo-by-DEEMKA-STUDIO-4.jpg"
      ></img>
      <div className="nav-items">
        <ul>
          <Link to="/about">
            <li className="nav-li">Home</li>
          </Link>
          <Link to="/about">
            <li>Contact</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
