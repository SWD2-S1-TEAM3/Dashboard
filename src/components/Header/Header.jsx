import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  let headerContent;
  switch (location.pathname) {
    case "/":
      headerContent = "Main Dashboard";
      break;
    case "/NFTMarketplace":
      headerContent = "NFT Marketplace";
      break;
    case "/DataTables":
      headerContent = "Data Tables";
      break;
    case "/Profile":
      headerContent = "Profile";
      break;
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-3 mx-3">
        <div>
          <p>Pages / {headerContent}</p>
          <h1>{headerContent}</h1>
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
