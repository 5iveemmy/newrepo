import React from "react";
import { VscHome } from "@react-icons/all-files/vsc/VscHome";
import { BiCar } from "@react-icons/all-files/bi/BiCar";
import { HiOutlineOfficeBuilding } from "@react-icons/all-files/hi/HiOutlineOfficeBuilding";
import "./Need.css";
import { FaHandHoldingUsd, FaRegHandPointUp } from "react-icons/fa";
import { WiTime4 } from "@react-icons/all-files/wi/WiTime4";
import { FiBookOpen } from "@react-icons/all-files/fi/FiBookOpen";
// import { Button } from "./Button";

function Need() {
  return (
    <>
      <div className="need">
        <div className="container">
          <div className="need-header">
            <h1>
              Solutions for every business need.
              <hr />
            </h1>
            <p>
              The brochure must grab a viewer's attention and hold it long
              enough to deliver the pertinent information.
            </p>
          </div>
          <div className="loan-section">
            <div className="home-loan">
              <div className="home-icon">
                <VscHome className="icons" />
                <h2 className="loan-type">Home Loan</h2>
                <h3 className="options">
                  What are my options and the cost to exercise?
                </h3>
                <p className="paragraph">
                  Tools such as a profit and tax calculator show the value of
                  your stock options and exercise cost
                </p>
              </div>
            </div>
            <div className="car-loan">
              <BiCar className="icons" />
              <h2 className="loan-type">Car Loan</h2>
              <h3 className="options">
                Should i exercise now or later? How can i afford it?
              </h3>
              <p className="paragraph">
                Tools Such as a profit and tax calculator show the value of your
                stock options and exercise cost
              </p>
            </div>
            <div className="business-loan">
              <HiOutlineOfficeBuilding className="icons" />
              <h2 className="loan-type">Business Loan</h2>
              <h3 className="options">
                i own my shares - can i get liquidity now without selling?
              </h3>
              <p className="paragraph">
                Tools such as a profit and tax calculator show the value of your
                stock options and exercise cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="satisfaction">
        <div className="sat-container">
          <div className="image">
            <img src="./images/lapMan.jpg" alt="man on laptop" />
            <div className="just-color">
              <h3>99%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
          <div className="guide">
            <h2>
              We guide projects and organiszations in making the right
              decisions.
            </h2>
            <p>
              Tools such as a profit simulator and tax calculator show the value
              of your stock options and exercise cost. The brochure must grab a
              viewer's attention and hold it long enough to deliver the
              partinent information.
            </p>
            <hr />
            <ul className="just-list">
              <li>Monthly recurring revenue</li>
              <li>Customer acquisition cost</li>
              <li>Number of customers</li>
            </ul>
            <div className="thid-btn">
              <button className="third-btn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      <section className="choice">
        <div className="why">
          <div className="why-header">
            <h2>Why choose us?</h2>
            <hr />
            <p>
              The brochure must grab a viewer's attention and hold it long
              enough to deliver the pertinent information.
            </p>
          </div>
          <div className="flex-section">
            <div className="quick">
              <div className="bag-icon">
                <div className="icon-bag">
                  <div className="main-icon">
                    <FaRegHandPointUp className="icon" />
                  </div>
                </div>
              </div>
              <h2>Quick apply</h2>
              <p>
                Tools such as a profit simulator and tax simulator calculator
                show the value of your stock options and exercise cost
              </p>
            </div>
            <div className="online">
              <div className="bag-icon">
                <div className="icon-bag">
                  <div className="main-icon">
                    <FiBookOpen className="icon" />
                  </div>
                </div>
              </div>
              <h2>Online & Secure</h2>
              <p>
                Tools such as a profit simulator and tax simulator calculator
                show the value of your stock options and exercise cost
              </p>
            </div>
            <div className="time">
              <div className="bag-icon">
                <div className="icon-bag">
                  <div className="main-icon">
                    <WiTime4 className="icon" />
                  </div>
                </div>
              </div>
              <h2>Just time</h2>
              <p>
                Tools such as a profit simulator and tax simulator calculator
                show the value of your stock options and exercise cost
              </p>
            </div>
            <div className="low">
              <div className="bag-icon">
                <div className="icon-bag">
                  <div className="main-icon">
                    <FaHandHoldingUsd className="icon" />
                  </div>
                </div>
              </div>
              <h2>Low interest</h2>
              <p>
                Tools such as a profit simulator and tax simulator calculator
                show the value of your stock options and exercise cost
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Need;
