import React from "react";

function Project(props) {
  console.log(process.env.PUBLIC_URL +props.img)
  return (
    <div className="project">
      <h3>{props.title}</h3>
      <p>{props.discription}</p>
      <div className="image">
        <img src={process.env.PUBLIC_URL +props.img} alt={props.title}/>
      </div>
      <div className="links">
        <a href={props.deployedLink} target="_blank" rel="noreferrer">Deployed App</a>
        <a href={props.githubLink} target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    </div>
  )
}
    
export default Project;
