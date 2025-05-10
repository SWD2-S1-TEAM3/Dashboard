import React, { useState } from "react";
import "./NotificationsCard.css";

const notificationsList = [
  "Item comment notifications",
  "Buyer review notifications",
  "Rating reminders notifications",
  "Meetups near you notifications",
  "Company news notifications",
  "New launches and projects",
  "Monthly product changes",
  "Subscribe to newsletter",
  "Email me when someone follows me",
];

function NotificationsCard() {
  
  const [toggles, setToggles] = useState(
    Array(notificationsList.length).fill(false)
  );

  const handleToggle = (idx) => {
    setToggles((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <div className="notifications-card">
      <div className="notifications-header">
        <span className="notifications-title">Notifications</span>
        <button className="notifications-menu-btn" title="More options">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="2" fill="#b0b8e8" />
            <circle cx="12" cy="12" r="2" fill="#b0b8e8" />
            <circle cx="19" cy="12" r="2" fill="#b0b8e8" />
          </svg>
        </button>
      </div>
      <ul className="notifications-list">
        {notificationsList.map((label, idx) => (
          <li className="notifications-item" key={label}>
            <label className="notifications-switch">
              <input
                type="checkbox"
                checked={toggles[idx]}
                onChange={() => handleToggle(idx)}
              />
              <span className="slider"></span>
            </label>
            <span className="notifications-label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsCard;
