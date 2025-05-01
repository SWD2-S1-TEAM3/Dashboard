import React from "react";
import "./StorageCard.css";
import { FiMoreVertical } from "react-icons/fi";

function StorageCard() {
  const totalStorage = 50;
  const usedStorage = 25.6;

  const usagePercentage = (usedStorage / totalStorage) * 100;

  return (
    <div className="storage-card">
      <div className="card-header">
        <div className="icon-container">
          <div className="cloud-icon">
            <i className="fa-solid fa-cloud-arrow-up fa-2x"></i>
          </div>
        </div>
        <button className="more-button">
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>

      <div className="card-content">
        <div className="text-center my-5">
          <h2 className="title">Your storage</h2>
          <p className="subtitle">
            Supervise your drive space in the easiest way
          </p>
        </div>
        <div className="mt-5">
          <div className="storage-info">
            <span className="used-storage">{usedStorage} GB</span>
            <span className="total-storage">{totalStorage} GB</span>
          </div>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${usagePercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorageCard;
