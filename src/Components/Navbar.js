import React from "react";

function Navbar(){
    return(
        <>
        <nav>
            <div className="nav--container">
                <h3 className='menu--item'><a href="#projects">PROJECTS</a></h3>
                <h3 className='menu--item'><a href="#about">ABOUT</a></h3>
                <h3 className='menu--item'><a href="#contact">CONTACT</a></h3>
            </div>
                <span className="nav--border"></span>
        </nav>
        <span className="bg-7"></span>
        </>
    )
}

export default Navbar