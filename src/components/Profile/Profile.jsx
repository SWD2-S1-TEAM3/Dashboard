import React from "react";
import ProfileCard from "./profileCard";
import StorageCard from "./storageCard";
import UploadCard from "./UploadCard";
import ProjectsList from "./ProjectsList";
import GeneralInfoCard from "./GeneralInfoCard";
import NotificationsCard from "./NotificationsCard";

function Profile() {
  return (
    <div className="Profile">
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-4">
            <ProfileCard />
          </div>
          <div className="col-3">
            <StorageCard />
          </div>
          <div className="col-5">
            <UploadCard />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <ProjectsList />
          </div>
          <div className="col-5">
            <GeneralInfoCard />
          </div>
          <div className="col-3">
            <NotificationsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
