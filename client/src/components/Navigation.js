import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/logo.png";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <img
        src={logo}
        alt={"hello"}
      />
      <div className="nav-links">
        <Link className="nav-inner-links">Home</Link>
        <Link className="nav-inner-links">Login</Link>
      </div>
    </nav>
  );
};

export default Navigation;
