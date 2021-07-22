import React, { useState } from "react";
import { FaArrowUp, FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      (document.getElementById("navbar").style.top = "0") &&
        (document.getElementById("myBtn").style.display = "block");
    } else {
      (document.getElementById("navbar").style.top = "-100px") &&
        (document.getElementById("myBtn").style.display = "none");
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <nav id="navbar" className="navbar">
        <div className="navbar-container" id="navbar-container">
          <Link to="/" className="logo">
            <FaWarehouse /> <span className="da-logo">EasyLo.</span>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className="fas fa-bars" />
          </div>
          <div className="navigation-bar" id="navigation-bar">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Contact
                </Link>
              </li>
              <div className="right-btn">
                <button className="first-btn">Apply For Loan</button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <button onClick={topFunction} id="myBtn" title="Go to Top">
        <FaArrowUp className="arrow" />
      </button>
    </>
  );
}

export default Navbar;
