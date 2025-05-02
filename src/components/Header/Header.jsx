import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import { useState, useEffect } from "react";

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

  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for theme preference
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="Header">
      <div className="d-flex justify-content-between mt-3 mx-3">
        <div className="title">
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
            <button
              className="btn"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa fa-moon"></i>
              )}
            </button>
            <img
              className="profile-img"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
