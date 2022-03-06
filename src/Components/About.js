import React from "react";

function About(){
    return(
        <>
        <h2 className="section--title">Hi I'm <span>Jairo</span></h2>
        <div className="about--container">
            <div className="content--contianer">
                <h2 className="content--title">About</h2>    
                <p className="content--description">
                    I'm a Mexican Sofware Engineer, I focus mainly on web development
                    and I'm currently working on my backend knowledge and skill so I can
                    be a more well-rounded developer.
                </p>
                <p className="content--description">
                    I have experience developing applications using the following technologies: <br/>
                    HTML, CSS, JavaScript, React, Sass, Next.js
                    Firebase, MySQL, Git.
                    I also have <span>some</span> experience and basic understanding of these: <br/>
                    Redux, Node.js, Express, MongoDB, Jest, Cypress, Brain.js, Tensorflow.js.
                    Currently learning/practicing: Node.js, Express, MongoDB.
                    Additionaly, I'm highly proficient in spoken and written English. 
                </p>
            </div>
        </div>
        </>
    )
}

export default About