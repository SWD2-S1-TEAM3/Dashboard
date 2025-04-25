import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <Link to="/" className="sidebar-logo-link">
          Dashboard
        </Link>
      </div>
      <hr />
      <ul className="sidebar-links">
        <li>
          <NavLink className="sidebar-link" to="/" end>
            <span className="sidebar-icon">
              <i className="fa-solid fa-house"></i>
            </span>
            <span className="sidebar-text">Main Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="sidebar-link" to="/NFTMarketplace">
            <span className="sidebar-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="sidebar-text">NFT Marketplace</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="sidebar-link" to="/DataTables">
            <span className="sidebar-icon">
              <i className="fa-solid fa-chart-simple"></i>
            </span>
            <span className="sidebar-text">Data Tables</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="sidebar-link" to="/Profile">
            <span className="sidebar-icon">
              <i className="fa-solid fa-user"></i>
            </span>
            <span className="sidebar-text">Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="sidebar-link" to="/SignIn">
            <span className="sidebar-icon">
              <i className="fa-solid fa-lock"></i>
            </span>
            <span className="sidebar-text">Sign In</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;