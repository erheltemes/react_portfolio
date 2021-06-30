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

        <div className="summary">
          <h2>About Me</h2>
          <ul>
            <li>Full Stack Developer who blends systematic and creative approaches to solve problems.</li>
            <li>Earned certificate in Web Development from University of Minnesota Coding Bootcamp and completed undergraduate degree in Music Composition for Film, TV, & Games from Berklee Online.</li>
            <li>Experienced in working on projects as a leader and as a collaborator.</li>
            <li>Driven to write efficient, organized, scalable code that is easy for developers to modify while still considering the user experience.</li>
            <li>Strong ability to plan ahead, work efficiently, communicate, and remain flexible.</li>
          </ul>
        </div>
      </div>

      <div id="about-me" className="profile">
        <div className="summary">
        <h2>Technical Skills</h2>
          <ul>
            <li><i>Languages:</i> HTML5, CSS, JavaScript, SQL, NoSQL</li>
            <li><i>Applications:</i> MySQL, MongoDB, Github, Insomnia</li>
            <li><i>Tools:</i> jQuery, Express, Node, React.js, Handlebars</li>
          </ul>
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