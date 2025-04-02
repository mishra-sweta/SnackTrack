import { useState } from "react";
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
          <li className="nav-item">Home</li>
          <li className="nav-item">About US</li>
          <li className="nav-item">Contact Us</li>
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
