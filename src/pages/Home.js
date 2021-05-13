import React from "react";
import Project from "../components/Project"
import projectsArr from "../projectsData"
// import headshot from "../img/ERIC_HELTEMES_headshot.jpg"


function Home() {
  return (
    <main>
      <div className="profile">
        <div className="photo">
          <img src="/img/ERIC_HELTEMES_headshot.jpg" alt="eric_heltemes_headshot"/>
        </div>

        <div id="about-me" className="about-me">
          <h2>About Me</h2>
          <p>I am a full-stack web developer who recently began the University of Minnesota's full-stack coding bootcamp. I still have a lot to learn, but am doing so at a rapid pace. </p>
          <a href="/first-draft-resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>

      <div className="featured-project">
        <Project key={0} {...projectsArr[0]}/>
      </div>

    </main>
  )
}

export default Home;