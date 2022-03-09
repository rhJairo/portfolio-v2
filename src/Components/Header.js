import React from "react";
import { gsap } from "gsap";

function Header(){
    const firstRef = React.useRef()
    const secondRef = React.useRef()    

    React.useLayoutEffect(()=>{
        // let tl = gsap.timeline({ repeat: -1 });
        // tl.to(headerRef.current, { backgroundPosition: "-2554px 0", duration: 30});
        // gsap.to(titleRef.current, { delay: 1, duration: .6, opacity: 1, y: 0});
        // gsap.to(nameRef.current, { delay: 0.3, duration: .9, opacity: 1, y: 0});
            let tl = gsap.timeline({delay: 0.5}),
            firstBg = document.querySelectorAll('.bg-first'),
            secBg = document.querySelectorAll('.bg-second'),
            word  = document.querySelectorAll('.words');
            tl.to(firstBg, {scaleX:1, duration: 0.2})
                .to(secBg, {scaleX:1, duration: 0.2})
                .to(word, {opacity:1, duration: 0.1})  
                .to(firstBg, {scaleX:0, duration: 0.2})
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