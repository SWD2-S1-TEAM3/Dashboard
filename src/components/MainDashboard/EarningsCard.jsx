import React from "react";
import "./EarningsCard.css";

function EarningsCard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 my-2">
          <div className="earnings-card">
            <div className="icon-container">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <div className="earnings-info">
              <span className="earnings-label">Earnings</span>
              <span className="earnings-value">$340.5</span>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 my-2">
          <div className="earnings-card">
            <div className="icon-container">
              <i className="fa-solid fa-file"></i>
            </div>
            <div className="earnings-info">
              <span className="earnings-label">Spend this month</span>
              <span className="earnings-value">$642.39</span>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 my-2">
          <div className="earnings-card">
            <div className="icon-container">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <div className="earnings-info">
              <span className="earnings-label">Sales</span>
              <span className="earnings-value">$574.34</span>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 my-2">
          <div className="earnings-card">
            <div className="icon-container">
              <i className="fa-solid fa-chart-column"></i>
            </div>
            <div className="earnings-info">
              <span className="earnings-label">Your Balance</span>
              <span className="earnings-value">$1,000</span>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 my-2">
          <div className="earnings-card">
            <div className="icon-container">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <div className="earnings-info">
              <span className="earnings-label">New Tasks</span>
              <span className="earnings-value">145</span>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 my-2">
          <div className="earnings-card">
            <div className="icon-container">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="earnings-info">
              <span className="earnings-label">Total Projects</span>
              <span className="earnings-value">$2433</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarningsCard;
