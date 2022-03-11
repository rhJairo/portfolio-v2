import React from "react";

function Header(){
    
    return(
        <header>
            <h1 className="first">
                <span className="welcome">Welcome</span>
                <span className="words" >Jairo Rubio</span>
                <span className="bg-1"></span>
            </h1>
            <h1 className="second">
                <span className="words" >Frontend Developer</span>
                <span className="bg-2"></span>
            </h1>
        </header>
    )
}

export default Header