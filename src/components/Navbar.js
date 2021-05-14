import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav>
        <ul>
          <li>
            <Link
              to="/"
              // className={
              //   window.location.pathname === "/" || window.location.pathname === "/home"
              //     ? "hide-link"
              //     : "show-link"
              // }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              // className={window.location.pathname === "/projects" 
              //   ? "hide-link" 
              //   : "show-link"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              // className={window.location.pathname === "/contact" 
              //   ? "hide-link" 
              //   : "show-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;
