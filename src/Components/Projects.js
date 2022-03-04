import React from 'react'

function Projects(){
    return(
        <>
        <h2 className='section--title' id='projects'>Here you can check some of <span>my projects</span></h2>
        <div className='projects--container' >
            <div className='content--container'>
                <h2 className='content--title'>Emoji Hangman Game</h2>
                <p className='content--description'>
                    Play the classic game <span>hangman</span> on the web.
                    Try to guess the movie before the <span>emoji</span> dies.
                </p>
                <p className='content--details'>
                    Frontend: <span>REACT  HTML CSS JavaScript</span>.<br/>
                    Data fetched from a free <span>Movie API</span>
                </p>
            </div>
            <div className='content--container'>
                <h2 className='content--title'>Real-Time Chatroom</h2>
                <p className='content--description'>
                    Login with your Google account to enter this public Chatroom.
                    (Theres no <span>live demo</span>because the auto-moderation is a paid feature)
                </p>
                <p className='content--details'>
                    Frontend: <span>REACT  HTML CSS JavaScript</span>.<br/>
                    User autentication with google and database for message log made with <span>Firebase.</span>
                </p>
            </div>
            <div className='content--container'>
                <h2 className='content--title'>Object Recognition with Machine Learning</h2>
                <p className='content--description'>
                    Give camera access to this app, 
                    then show it something and it will guess what it is
                </p>
                <p className='content--details'>
                    <br/>
                </p>
            </div>
            <div className='image--container'>
                <h2>image</h2>
            </div>
        </div>
        </>
    )
}

export default Projects