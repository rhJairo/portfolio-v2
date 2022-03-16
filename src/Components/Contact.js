import React from "react";
import github from '../Media/github.png'
import linkedin from '../Media/linkedin.png'

function Contact() {
  return (
    <>
        <div className="title--wraper">
          <h2 id="about" className="contact--title">
            Contact
          </h2>
        </div>
      <div id="contact" className="contact--container">
        <div className="contact--content">
            <div className="contact--mail">jairorh94@outlook.com</div>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jairo-r-h/">
                <div className="contact--links"><img src={linkedin} alt=""/></div>
            </a>
            <a rel="noreferrer" target="_blank" href="https://github.com/rhJairo/">
                <div className="contact--links"><img src={github} alt=""/></div>
            </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
