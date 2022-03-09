import React from "react";
import Profile from '../Media/about.jpg'

function About(){
    return(
        <>
        <div className="about--container">
        <h2 id='about' className="section--title">Hi I'm <span>Jairo</span></h2>
            <div className="about--content">
                <p className="about--description">
                    I'm a Mexican Sofware Engineer, I focus mainly on web development
                    and I'm currently working on my backend knowledge and skills so I can
                    be a more well-rounded developer. I have experience developing applications using the following technologies: <br/>
                    HTML, CSS, JavaScript, React, Sass, Next.js,
                    Firebase, MySQL, Git.
                </p>
                <img src={Profile}/>
                <p className="about--description">
                     I also have <span>some</span> experience and basic understanding of these technologies: <br/>
                    Redux, Node.js, Express, MongoDB, Jest, Cypress, Brain.js, Tensorflow.js.
                </p>
                <p className="about--description">

                    Currently learning/practicing: Node.js, Express, MongoDB.
                    Additionaly, I'm highly proficient in spoken and written English.
                </p>
            </div>
        </div>
        </>
    )
}

export default About