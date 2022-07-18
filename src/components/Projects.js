import React from "react";
import ProjectCard from "../utils/ProjectCard";
import Heading from "../utils/Heading";
import "../styles/projectcard.css";
import projects from "../constants/projectdata";

function ProjectCardData(project) {
  return (
    <ProjectCard
      img={project.image}
      name={project.name}
      description={project.description}
      link={project.link}
    />
  );
}

const Projects = () => {
  return (
    <div className="container wrapper">
      <div className="row" id="projects">
        <Heading heading={"PORTFOLIO"} />
        <h3>Some of my latest work</h3>
        {projects.map(ProjectCardData)}
      </div>
    </div>
  );
};

export default Projects;
