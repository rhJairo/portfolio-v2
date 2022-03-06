import React from "react";
import { gsap } from "gsap";

function Header(){
    const titleRef = React.useRef()
    const nameRef = React.useRef()
    
    React.useLayoutEffect(()=>{
        let tl = gsap.timeline({ repeat: -1 });
        tl.to(titleRef.current, { backgroundPosition: "-960px 0", duration: 30});
        gsap.to(titleRef.current, { delay: 1, duration: .6, opacity: 1, y: 0});
        gsap.to(nameRef.current, { delay: 0.3, duration: .9, opacity: 1, y: 0});
    })
    
    return(
        <header>
            <h1 ref={nameRef}>Jairo Rubio</h1>
            <h1 className="title" ref={titleRef}> Frontend Developer</h1>
        </header>
    )
}

export default Header