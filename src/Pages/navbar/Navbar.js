import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">LOGO</h3>
      <ul
        onClick={() => setisMobile(false)}
        className={isMobile ? "nav-links-mobile" : "nav-links"}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/shop" className="shop">
          <li>Shop</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>

        <Link to="/contact" className="contact">
          <li>Contact</li>
        </Link>
        <Link to="/signup" className="signup">
          <li>Signup</li>
        </Link>
      </ul>

      <button
        className="mobile-menu-icon"
        onClick={() => setisMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
