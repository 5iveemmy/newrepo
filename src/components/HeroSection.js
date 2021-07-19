import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero">
        <section className="heroSect">
          <div className="hero-text">
            <h2>The simple online home loan</h2>
            <p>Financial uncertainty is had on employees</p>
            <button> Our Services</button>
          </div>

          <div className="form-wrapper">
            <div className="form-title">
              <h2>How much you want?</h2>
              <p>We provide online instant cash loans</p>
            </div>
            <form className="form">
              <div className="form-wrap">
                <div className="select-option">
                  <label htmlFor="amount">Amount you want</label>
                </div>
                <div className="nice-select">
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
                  <label htmlFor="period">Period</label>
                </div>
                <div className="nice-select">
                  <select
                    name="select"
                    id="drowdown"
                    className="form-controi"
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
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
