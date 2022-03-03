import React from "react";
import { gsap } from "gsap";

function Header(){
    let tl = gsap.timeline({ repeat: -1 });
    tl.duration("h1", 30, { backgroundPosition: "-960px 0" });

    return(
        <>
        <header>
            <h1 className="title">Frontend Developer</h1>
        </header>
        <h2>Jairo Rubio</h2>
        </>
    )
}

export default Header