import React from "react";

function Project(props) {
  return (
    <div clasName="project">
      <h2>{props.title}</h2>
      <p>{props.discription}</p>
      <a href={props.deployedLink}>Deployed App</a>
      <a href={props.githubLink}>GitHub Repo</a>
      <img src={props.img} alt={props.title}/>
    </div>
  )
}
    

export default Project;
