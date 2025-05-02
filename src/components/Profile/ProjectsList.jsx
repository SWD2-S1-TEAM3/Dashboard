import React from "react";
import "./ProjectsList.css";
import projectImage1 from "./../../assets/image1.png";
import projectImage2 from "./../../assets/image2.png";
import projectImage3 from "./../../assets/image3.png";

function ProjectsList() {
  const projects = [
    {
      id: 1,
      title: "Technology behind the Blockchain",
      image: projectImage1,
      projectNumber: "Project #1",
    },
    {
      id: 2,
      title: "Technology behind the Blockchain",
      image: projectImage2,
      projectNumber: "Project #1",
    },
    {
      id: 3,
      title: "Technology behind the Blockchain",
      image: projectImage3,
      projectNumber: "Project #1",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">All projects</h2>
      <p className="projects-description">
        Here you can find more details about your projects. Keep you user
        engaged by providing meaningful information.
      </p>

      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card shadow" key={project.id}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-meta">
                <span className="project-number">{project.projectNumber}</span>
                <a href="#" className="project-link">
                  See product details
                </a>
              </div>
            </div>
            <button className="edit-button">
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
