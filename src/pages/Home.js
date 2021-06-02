import React from "react";
import Project from "../components/Project"
import projectsArr from "../projectsData"
// import headshot from "../img/ERIC_HELTEMES_headshot.jpg"


function Home() {
  return (
    <main>
      <div className="profile">
        <div className="photo">
          <img src={process.env.PUBLIC_URL + "/img/ERIC_HELTEMES_headshot.jpg"} alt="eric_heltemes_headshot"/>
        </div>

        <div id="about-me" className="about-me">
          <h2>About Me</h2>
          <p>
          Full Stack Developer who blends systemic and creative approaches to solve problems. Earned certificate in web development from University of Minnesota where I honed my technical skills in node.js, databases, and react.js, and exercised my ability to learn quickly while still delivering quality products. Completing undergraduate degree in Music for Film TV & Games and working on many musical productions as a Music Director has given me experience in working with others to complete large projects both in leadership and collaborative positions. Driven to write efficient, organized, scaleable code that is easy for developers to modify while still considering the user experience Strong ability to plan ahead, work efficiently, communicate, and remain flexible.
          </p>
          <a href={process.env.PUBLIC_URL + "/first-draft-resume.pdf"} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>

      <div className="featured-project">
        <h2>Featured Project</h2>
        <Project key={0} {...projectsArr[0]}/>
      </div>

    </main>
  )
}

export default Home;