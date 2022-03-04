import React from "react";
import { gsap } from "gsap";

function Header(){
    const titleRef = React.useRef()
    
    React.useEffect(()=>{
        let tl = gsap.timeline({ repeat: -1 });
        tl.to(titleRef.current, { backgroundPosition: "-960px 0", duration: 30});
    })
    
    return(
        <header>
            <h1>Jairo Rubio</h1>
            <h1 className="title" ref={titleRef}> Frontend Developer</h1>
        </header>
    )
}

export default Header