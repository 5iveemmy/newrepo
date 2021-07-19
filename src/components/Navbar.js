import React, { useState } from "react";
import { FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <div className="logo"> */}
          <Link to="/" className="logo">
            <FaWarehouse /> <span className="da-logo">EasyLo.</span>
          </Link>
          {/* </div> */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div className="navigation-bar">
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
            </ul>
            {button && <Button buttonStyle="btn-medium">Apply for loan</Button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
