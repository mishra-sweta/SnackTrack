import React from "react";
import ReactDOM from "react-dom/client";

const logo = new URL("./assets/logo.png", import.meta.url).toString();

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
