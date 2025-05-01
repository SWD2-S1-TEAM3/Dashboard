import * as React from "react";
import avatar from "./../../assets/avatar2.png";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card__header-gradient rounded rounded-3"></div>
      <div className="profile-card__avatar-wrapper">
        <img
          src={avatar}
          alt="Adela Parkson"
          className="profile-card__avatar"
        />
      </div>
      <div className="profile-card__content">
        <h2 className="profile-card__name">Adela Parkson</h2>
        <p className="profile-card__title">Product Manager</p>
        <div className="profile-card__stats">
          <div className="profile-card__stat-item">
            <span className="profile-card__stat-number">17</span>
            <span className="profile-card__stat-label">Posts</span>
          </div>
          <div className="profile-card__stat-item">
            <span className="profile-card__stat-number">9.7K</span>
            <span className="profile-card__stat-label">Followers</span>
          </div>
          <div className="profile-card__stat-item">
            <span className="profile-card__stat-number">434</span>
            <span className="profile-card__stat-label">Following</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
