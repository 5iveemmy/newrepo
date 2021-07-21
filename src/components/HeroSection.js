import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { FaWarehouse } from "react-icons/fa";

function HeroSection() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [button, setButton] = useState(true);

  return (
    <>
      <div className="hero">
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="logo">
              <FaWarehouse /> <span className="da-logo">EasyLo.</span>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className="fas fa-bars fa-sm" />
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
                <div className="right-btn">
                  <button className="first-btn ">Apply for loan</button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <div className="heroSect">
          <div className="hero-text">
            <h2>
              The simple online home loan.
              <hr />
            </h2>
            <p>Financial uncertainty is hard on employees that causes even.</p>
            <div className="service-btn">
              <button className="second-btn">Our Services</button>
            </div>
          </div>

          <div className="just-form">
            <div className="form-wrapper">
              <div className="form-title">
                <h2>How much you want?</h2>
                <p>We provide online instant cash loans</p>
                <hr />
              </div>
              <form className="form">
                <div className="form-wrap">
                  <div className="select-option">
                    <label className="label">Amount you want</label>
                    <select
                      name="select"
                      id="dropdown"
                      className="form-control"
                      required
                    >
                      <option disabled selected value>
                        Select Amount
                      </option>
                      <option value="category-1">Category 1</option>
                      <option value="category-2">Category 2</option>
                      <option value="category-3">Category 3</option>
                    </select>
                  </div>
                  <div className="select-option">
                    <label className="label">Period</label>

                    <select
                      name="select"
                      id="dropdown"
                      className="form-control"
                      required
                    >
                      <option disabled selected value>
                        {" "}
                        Select Period
                      </option>
                      <option value="year">Year</option>
                      <option value="year">Week</option>
                      <option value="year">Day 3</option>
                    </select>
                  </div>
                </div>
                <div className="pay">
                  <label>YOU HAVE TO PAY: </label>
                  <button className="apply">APPLY NOW</button>
                  <p>We provide online instant cash loans</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
