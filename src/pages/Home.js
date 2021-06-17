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
            Full Stack Developer who blends systemic and creative approaches to solve problems. Earned certificate in Web Development from University of Minnesota Coding Bootcamp and completed undergraduate degree in Music Composition for Film, TV, & Games from Berklee Online. Experienced in working on projects as a leader and as a collaborator. Driven to write efficient, organized, scalable code that is easy for developers to modify while still considering the user experience. Strong ability to plan ahead, work efficiently, communicate, and remain flexible.
          </p>
          <a href={process.env.PUBLIC_URL + "/Web_Development_Resume_06-07-2021.pdf"} target="_blank" rel="noreferrer">Resume</a>
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