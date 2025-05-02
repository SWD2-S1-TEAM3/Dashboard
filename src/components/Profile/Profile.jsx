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
          <div className="col-lg-4 col-md-12 my-2">
            <ProfileCard />
          </div>
          <div className="col-lg-3 col-md-12 my-2">
            <StorageCard />
          </div>
          <div className="col-lg-5 col-md-12 my-2">
            <UploadCard />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-4 col-md-12 my-2">
            <ProjectsList />
          </div>
          <div className="col-lg-5 col-md-12 my-2">
            <GeneralInfoCard />
          </div>
          <div className="col-lg-3 col-md-12 my-2">
            <NotificationsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
