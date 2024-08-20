import React from "react";
import "../styles/Navbar.css";
import CartIcon from "../icons/CartIcon";
import AccountIcon from "../icons/AccountIcon";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  console.log(location.pathname, location.pathname === "/home");
  return (
    <div className="navbar-container">
      <div className="title">
        <Link to="/home">GREENMIND</Link>
      </div>
      <div className="links">
        <Link className={location.pathname === "/home" ? "link-clicked":"link"} to="/home">Home</Link>
        <Link className={location.pathname === "/products" ? "link-clicked":"link"} to="/products">Products</Link>
        <Link className={location.pathname === "/contacts" ? "link-clicked":"link"} to="/contacts">Contacts</Link>
      </div>
      <div className="icons">
        <CartIcon />
        <AccountIcon />
      </div>
    </div>
  );
};

export default Navbar;
