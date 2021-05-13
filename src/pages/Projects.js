import React from "react";
import Project from "../components/Project"
import projectsArr from "../projectsData"

function Projects () {
  return (
    <div>
      {projectsArr.map((project, index) => (
                  <Project key={index} {...project}/>
                ))}
    </div>
  )
}

export default Projects