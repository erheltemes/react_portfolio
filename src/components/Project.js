import React, {useState} from "react";



function Project(props) {
  const [display, setDisplay] = useState({shown: false})

  function toggleDisplay() {
    setDisplay({shown: !display.shown})
  }

  return (
    <div className="project">
      <h3>{props.title}</h3>

      <div onMouseEnter={toggleDisplay} onMouseLeave={toggleDisplay} className={display.shown ? "image-cover" : "image"}>
        <img className={display.shown ? "opacity" : ""} src={process.env.PUBLIC_URL +props.img} alt={props.title}/>
        <div className={display.shown ? 'project-des-show' : "project-des-hide"}>
          <p><i>Description: </i>{props.description}</p>
          <p><i>Technologies Used: </i>{props.techs_used}</p>
        </div>
      </div>
      <div className="links">
        <a href={props.deployedLink} target="_blank" rel="noreferrer">Deployed App</a>
        <a href={props.githubLink} target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    </div>
  )
}
    
export default Project;
