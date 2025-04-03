import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const logo = new URL("../../assets/logo.png", import.meta.url).toString();

  const [login, setLogin] = useState("Login");

  const Logout = () => {
    login == "Login" ? setLogin("Logout") : setLogin("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <li className="nav-item">Home</li>
          </Link>
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="nav-item">About US</li>
          </Link>
          <Link
            to={"/contact"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="nav-item">Contact Us</li>
          </Link>
          <li className="nav-item">Cart</li>
          <button className="login" onClick={Logout}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
