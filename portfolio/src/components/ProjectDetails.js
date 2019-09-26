import React from "react";
import { myProjects } from "./Projects";

const ProjectDetails = props => {
  const id = props.match.params.id;

  const foundProject = myProjects.find(el => {
    //   if (el.id === id) return true
    return el.id === id;
  });

  return (
    <div>
      <h2>
        {foundProject.name}{" "}
        <span style={{ fontSize: "14px" }}>{foundProject.year}</span>
      </h2>
      <h3>Used technologies: {foundProject.technologies}</h3>
      <p>{foundProject.description}</p>
    </div>
  );
};

export default ProjectDetails;
