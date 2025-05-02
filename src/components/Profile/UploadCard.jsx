import React from "react";
import "./UploadCard.css";

function UploadCard() {
  return (
    <div className="upload-card-container">
      <div className="upload-box">
        <label htmlFor="file-upload" className="upload-label">
          <div className="upload-icon">
            <i className="fa-solid fa-upload"></i>
          </div>
          <div className="upload-text">Upload Files</div>
          <div className="upload-subtext">
            PNG, JPG and GIF files are allowed
          </div>
          <input
            id="file-upload"
            type="file"
            multiple
            accept=".png,.jpg,.jpeg,.gif"
            style={{ display: "none" }}
          />
        </label>
      </div>
      <div className="profile-box">
        <div className="profile-title">Complete Your Profile</div>
        <div className="profile-desc">
          Stay on the pulse of distributed projects with an online whiteboard to
          plan, coordinate and discuss
        </div>
        <button className="publish-btn">Publish now</button>
      </div>
    </div>
  );
}

export default UploadCard;
