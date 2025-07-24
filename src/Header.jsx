import { Link } from "react-router-dom";
import { useContext } from "react";
import JustContext from "./util/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { loggedInUser } = useContext(JustContext);
  return (
    <div className="flex justify-between bg-orange-200">
      <img
        className="size-32"
        alt="logo"
        src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Chef-restaurant-logo-by-DEEMKA-STUDIO-4.jpg"
      ></img>
      <div>
        <ul className="flex">
          <Link to="/">
            <li className="m-4 underline">Home</li>
          </Link>
          <Link to="/cart">
            <li className="m-4 underline">Cart({cartItems.length})</li>
          </Link>
          <Link to="/about">
            <li className="m-4 underline">About</li>
          </Link>
          <li className="m-4 underline">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
