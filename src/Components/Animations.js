import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function Animations(){
    
  React.useLayoutEffect(()=>{
    let tl = gsap.timeline({delay: 0.7}),
    firstBg = document.querySelectorAll('.bg-1'),
    bg7 = document.querySelectorAll('.bg-7'),
    word  = document.querySelectorAll('.words');
    
    tl.to(firstBg, {scaleX:1, duration: 0.2})
    .to(bg7, {scaleX:1, duration: 0.2, transformOrigin: "right center"})
    .from('.welcome', {x: -2000, duration: 0.2}, "text")
    .to(word, {opacity:1, duration: 0.1})  
    .to('nav', {opacity:1, duration: 0.1})
    .to('.welcome', {x: -2000, opacity: 0, duration: 0.2, delay: 0.6})
    .to(firstBg, {scaleX:0, duration: 0.2})
    .to(bg7, {scaleX:0, duration: 0.2});
    
    gsap.registerPlugin(ScrollTrigger);
                
        //projects title
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: 'header',
                start: 'bottom center',
                // markers: true,
                // scrub: true
            }
        })
        tl2
        .from(".line-project", {scaleX: 0, transformOrigin: "center"})
        .from(".project--title", { y: 200, opacity: 0 }, "text")
        
        
        //about title
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.p-wrap',
                start: '70% bottom',
                // markers: true,
                scrub: true
            }
        })
        tl3
        .from(".about--title", { x: -500 , opacity: 0}, "text")
        
        
        //project images
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.p-wrap',
                start: 'top center',
                // markers: true
            }
        })
        tl4
        .from(".thumbnail-image, .hover--content", { duration: 0.2, y: 600 }, "text")

        let tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about--content',
                start: 'top center',
                // markers: true
            }
        })

        let bg3 = document.querySelectorAll('.bg-3'),
        bg4 = document.querySelectorAll('.bg-4'),
        bg5 = document.querySelectorAll('.bg-5'),
        bg6 = document.querySelectorAll('.bg-6'),
        word2  = document.querySelectorAll('.about--description');
        
        tl5.to(bg3, {scaleX:1, duration: 0.2 })
        .to(bg4, {scaleX:1, duration: 0.2, transformOrigin: "right center"})
        .to(bg5, {scaleX:1, duration: 0.2})
        .to(bg6, {scaleX:1, duration: 0.2, transformOrigin: "right center"})
        .to(word2, {opacity:1, duration: 0.1})  
        .to(bg3, {scaleX:0, duration: 0.2})
        .to(bg4, {scaleX:0, duration: 0.2})
        .to(bg5, {scaleX:0, duration: 0.2})
        .to(bg6, {scaleX:0, duration: 0.2});
    },[])

    return(<></>)
}

export default Animations