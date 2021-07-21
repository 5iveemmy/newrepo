import React from "react";
import "./Steps.css";

function Steps() {
  return (
    <>
      <div className="steps">
        <div className="get-loan">
          <div className="get-header">
            <h2>Get loan in 3 easy steps</h2>
            <p>
              Tools such as a profit simulator and tax calculator show the value
              of your stock options and exercise cost. The brochure must grab a
              viewer's attention and hold it long enough to deliver the
              pertinent information.
            </p>
            <hr />
            <ul className="the-list">
              <li>Montly recurring revenue</li>
              <li>Customer acquistion cost</li>
              <li>Number of customers</li>
            </ul>
            <div className="more-btn">
              <button className="third-btn">LEARN MORE</button>
            </div>
          </div>
          <div className="picture">
            <img src="./images/black.jpg" alt="man on black" />
          </div>
        </div>
      </div>

      <section className="green">
        <div className="just-green"></div>
      </section>

      <section className="latest-news">
        <div className="latest">
          <div className="news-header">
            <h2>Latest News</h2>
            <hr />
          </div>
          <div className="flex-box">
            <div className="first">
              <img src="./images/first.jpg" alt="finger on pc" />
              <div className="for-date">
                <span className="dates"> 20 March 2021 </span>
              </div>
              <h5>What are my options worth and the cost to exercise </h5>
              <p>
                Tools such as a profit simulator and tax calculator show the
                value of your stock options and exercise cost.
              </p>
            </div>
            <div className="second">
              <img src="./images/second.jpg" alt="white collar" />
              <div className="for-date">
                <span className="dates"> 20 March 2021 </span>
              </div>
              <h5>From start to finish, we were acquired within 30-days</h5>
              <p>
                Tools such as a profit simulator and tax calculator show the
                value of your stock options and exercise cost.
              </p>
            </div>
            <div className="third">
              <img src="./images/third.jpg" alt="men on pc" />
              <div className="for-date">
                <span className="dates"> 20 March 2021 </span>
              </div>
              <h5>We'll connect you with the right people to start</h5>
              <p>
                Tools such as a profit simulator and tax calculator show the
                value of your stock options and exercise cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Steps;
