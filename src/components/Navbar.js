import React, { useState } from "react";
import { FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
  }

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 550 ||
  //     document.documentElement.scrollTop > 550
  //   ) {
  //     document.getElementsByClassName("nav-menu").style.top = "10";
  //   } else {
  //     document.getElementsByClassName("nav-menu").style.top = "100px";
  //   }
  // }

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
                <button className="first-btn ">Apply for loan</button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
