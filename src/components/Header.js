import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const logo = new URL("../../assets/logo.png", import.meta.url).toString();

  const [login, setLogin] = useState("Login");

  const name = useContext(UserContext);

  const Logout = () => {
    login == "Login" ? setLogin("Logout") : setLogin("Login");
  };
  //subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex border border-black m-4">
      <Link to={"/"}>
        <div>
          <img className="w-32" src={logo} />
        </div>
      </Link>
      <div className="flex justify-end w-full items-center text-[20px] p-4 m-4">
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold">Cart - {cartItems.length}</li>
          <li>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
              onClick={Logout}
            >
              {login}
            </button>
          </li>
          <li className="font-bold text-lg">{name.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
