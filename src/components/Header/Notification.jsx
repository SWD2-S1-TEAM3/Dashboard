import React, { useState, useRef, useEffect } from "react";
import "./Notification.css";
const notifications = [
  {
    title: "New Update: Horizon UI Dashboard PRO",
    message: "A new update for your downloaded item is available!",
  },
  {
    title: "New Update: Horizon UI Dashboard PRO",
    message: "A new update for your downloaded item is available!",
  },
];

function Notification() {
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
        <i class="fa-solid fa-bell" style={{ fontSize: 22 }}></i>
      </span>

      {/* Dropdown */}
      {open && (
        <div
          className="profile-dropdown-menu shadow rounded-3 p-3"
          style={{
            position: "absolute",
            width: 500,
            top: 48,
            right: 0,
            zIndex: 100,
          }}
        >
          <div className="d-flex justify-content-between mb-4">
            <span>Notification</span>
            <span>Mark all read</span>
          </div>
          {notifications.map((n, i) => (
            <div className="d-flex align-items-center mb-3" key={i}>
              <div className="notif-icon me-3">
                <i className="fa-solid fa-arrow-up"></i>
              </div>
              <div className="Notification">
                <div className="fw-boldtitle">
                  <strong>{n.title}</strong>
                </div>
                <div className="small message">{n.message}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notification;
