import React from "react";
import { gsap } from "gsap";

function Header(){
    const titleRef = React.useRef()
    
    React.useEffect(()=>{
        let tl = gsap.timeline({ repeat: -1 });
        tl.to(titleRef.current, 30, { backgroundPosition: "-960px 0" });
    })
    
    return(
        <header>
            <h1 className="title" ref={titleRef}>
                Jairo Rubio<br/>Frontend Developer
            </h1>
        </header>
    )
}

export default Header