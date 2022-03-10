import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function Animations(){
    
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
    
    gsap.registerPlugin(ScrollTrigger);
                
        //projects title
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.project--title',
                start: 'top center',
                // markers: true,
                scrub: true
            }
        })
        tl2
        .from(".line-project", {scaleX: 0, transformOrigin: "left center"})
        .from(".project--title", { duration: 0.5, y: -400 }, "text");
        
        
        //about title
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.p-wrap',
                start: 'top center',
                markers: true,
                scrub: true
            }
        })
        tl3
        .from(".line-about", {scaleX: 0, transformOrigin: "center"})
        .from(".about--title", { x: -200 , opacity: 0}, "text");
        
        
        //project images
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.p-wrap',
                start: 'top 70%',
                // markers: true
            }
        })
        tl4
        .from("img, .hover--content", { duration: 0.50, y: 600 }, "text")
    },[])

    return(<></>)
}

export default Animations