import React from "react";
import { FaAngleDoubleRight, FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-flex">
            <div className="easylo">
              <div className="new-logo">
                <FaWarehouse />
                <span className="das-logo">EasyLo.</span>
              </div>
              <p>
                Tools such as a profit simulator and tax calculator show the
                value of your stock options and exercise cost.
              </p>
            </div>
            <div className="quick-link">
              <h5>Quick Links</h5>
              <ul>
                <li>Work</li>
                <li>Services</li>
                <li>Products</li>
                <li>Tips & Tricks</li>
              </ul>
            </div>
            <div className="solution">
              <h5>Solution</h5>
              <ul>
                <li>Air freight</li>
                <li>Ocean freight</li>
                <li>Large projects</li>
              </ul>
            </div>
            <div className="letter">
              <h5>Newsletter</h5>
              <p>subscribe newsletter to get updates.</p>
              <form>
                <input type="text" placeholder="Enter your email" />
                <div className="for-button">
                  <button>
                    <FaAngleDoubleRight />
                  </button>
                </div>
              </form>
              <div class="social-icons">
                <Link
                  class="social-icon-link facebook"
                  to="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i class="fab fa-facebook-f" />
                </Link>
                <Link
                  class="social-icon-link instagram"
                  to="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i class="fab fa-instagram" />
                </Link>
                <Link
                  class="social-icon-link youtube"
                  to="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <i class="fab fa-youtube" />
                </Link>
                <Link
                  class="social-icon-link twitter"
                  to="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <i class="fab fa-twitter" />
                </Link>
                <Link
                  class="social-icon-link twitter"
                  to="/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i class="fab fa-linkedin" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright 2021 All rights reserved | This template is made by 5ive
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
