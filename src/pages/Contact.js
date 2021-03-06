import React from "react";

function Contact () {
  return (
    <div className="contact-page">
      <div class="core-contact">
          <h2>Contact</h2>
          <ul>
              <li>
                <a href="https://www.linkedin.com/in/eric-heltemes" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/erheltemes" target="_blank" rel="noreferrer">GitHub</a>
              </li>
              <li>(XXX)XXX-XXXX</li>
          </ul>
      </div>

      <form>
          <h2>Email Me</h2>
          <p>(Email not operational)</p>
          <input id="user-email" placeholder="Your Email"/>
          <div>
              <textarea placeholder="Email Body"></textarea>
              <button id="send-email" type="submit">Send</button>
          </div>
      </form>
    </div>
    )
  }

export default Contact