import React from "react";
import "./MainDashboard.css";

function Header() {
  return (
    <>
      <div className="d-flex justify-content-between mt-3 mx-3">
        <div>
          <h1>Main Dashboard</h1>
        </div>
        <div className="topbar d-flex">
          <div className="search-container">
            <i className="fa fa-search search-icon"></i>
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="topbar-actions">
            <i className="fa fa-bell"></i>
            <i className="fa fa-info-circle"></i>
            <i className="fa fa-moon"></i>
            <img
              className="profile-img"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
