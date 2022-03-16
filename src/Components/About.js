import React from "react";
import Profile from '../Media/about.png'

function About(){
    return(
        <>
        <div className="about--container">
        <div className="title--wraper">
            <h2 id='about' className="about--title">Hello <span>World!</span></h2>
        </div>
            <div className="about--content">
                <div className="about--wrap">
                    <p className="about--description">
                    Hi my name is Jairo, I'm a Sofware Engineer and I work mainly on web development.
                     I have experience developing applications using the following technologies: <br/>
                    <strong>HTML, CSS, JavaScript, ReactJs, Sass, Gsap,
                    Firebase, MySQL, Git.</strong>
                    <br/> And <span>basic</span> understanding of these ones: <strong>Next.js, Redux, Node.js, Express, MongoDB, Figma, Jest, Cypress.</strong>
                    </p>
                    <span className="bg-3"></span>
                </div>
                <div className="about--wrap">
                    <img alt="technologies and tools" className="about--description" src={Profile}/>
                    <span className="bg-4"></span>
                </div>
                <div className="about--wrap">
                    <p className="about--description">
                    I consider myself an open minded and dependable individual. I constantly look for new ways to improve both myself and my professional skills.
                    </p>
                    <span className="bg-5"></span>
                </div>
                <div className="about--wrap">
                    <p className="about--description">
                    Additionaly, I'm highly proficient in spoken and written English and I'm building my way into becoming a fullstack developer.
                    <br/>Currently working on my knowledge of: <strong>Node.js, Express and Next.js.</strong>
                    </p>
                    <span className="bg-6"></span>               
                </div>
            </div>
        </div>
        </>
    )
}

export default About