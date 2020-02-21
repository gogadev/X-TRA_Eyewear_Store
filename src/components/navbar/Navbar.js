import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import shoppingIcon from "../../assets/shop-icon.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img id="logo" src={logo} alt="Logo" />
      </Link>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            <h2>X-TRA EYEWEAR</h2>
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="cart">
      <img src={shoppingIcon} alt="Icon"/>
      </Link>
    </nav>
  );
};

// const ButtonCont = styled.button`
//   text-transform: capitalize;
// `;

export default Navbar;
