import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav>
      <ul className="page-links">
        <li>
          <li>
            <Link to="/react_portfolio/home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/react_portfolio/projects">
              Projects
            </Link>
          </li>
        </li>
        <li>
          <li>
            <a href="https://www.linkedin.com/in/eric-heltemes" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/erheltemes" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + "/heltemes_web_development_resume_6-23-2021.pdf"} target="_blank" rel="noreferrer">Resume</a>
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
