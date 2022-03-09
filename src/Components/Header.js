import React from "react";
import { gsap } from "gsap";

function Header(){
    const firstRef = React.useRef()
    const secondRef = React.useRef()    

    React.useLayoutEffect(()=>{

            let tl = gsap.timeline({delay: 0.7}),
            firstBg = document.querySelectorAll('.bg-first'),
            secBg = document.querySelectorAll('.bg-second'),
            word  = document.querySelectorAll('.words');
            tl.to(firstBg, {scaleX:1, duration: 0.2 })
                .to(secBg, {scaleX:1, duration: 0.2})
                .to(word, {opacity:1, duration: 0.1})  
                .to(firstBg, {scaleX:0, duration: 0.2, delay: 0.5})
                .to(secBg, {scaleX:0, duration: 0.2});
    })
    
    return(
        <header>
            <h1 className="first">
                <span className="words" >Jairo Rubio</span>
                <span className="bg-first"><h1>Welcome</h1></span>
            </h1>
            <h1 className="second">
                <span className="words" >Frontend Developer</span>
                <span className="bg-second"></span>
            </h1>
        </header>
    )
}

export default Header