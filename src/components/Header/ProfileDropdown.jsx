import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ProfileDropdown.css";

function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="position-relative" ref={dropdownRef}>
      <span
        className={`profile-avatar`}
        style={{ cursor: "pointer", marginLeft: 20 }}
        onClick={() => setOpen((prev) => !prev)}
        tabIndex={0}
        onMouseEnter={(e) => e.currentTarget.classList.add("text-danger")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("text-danger")}
      >
        <img
          className="profile-img"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
        />
      </span>

      {/* Dropdown */}
      {open && (
        <div
          className="profile-dropdown-menu shadow rounded-3 p-3"
          style={{
            minWidth: 230,
            position: "absolute",
            top: 48,
            right: 0,
            zIndex: 100,
          }}
        >
          <ul className="list-unstyled mb-0">
            <li>
              <p className="dropdown-item">👋 Hey, User</p>
            </li>
            <hr />
            <li>
              <NavLink
                to="/"
                className="dropdown-item d-flex align-items-center gap-2"
              >
                Profile Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="dropdown-item d-flex align-items-center gap-2"
              >
                Newsletter Settings
              </NavLink>
            </li>
            <li>
              <button className="dropdown-item d-flex align-items-center gap-2 text-danger">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
