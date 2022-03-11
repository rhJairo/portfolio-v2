import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function Animations(){
    
  React.useLayoutEffect(()=>{
    let tl = gsap.timeline({delay: 0.7}),
    firstBg = document.querySelectorAll('.bg-1'),
    bg7 = document.querySelectorAll('.bg-7'),
    word  = document.querySelectorAll('.words');
    
    tl
    .to(firstBg, {scaleX:1, duration: 0.2})
    .to(bg7, {scaleX:1, duration: 0.2, transformOrigin: "right center"})
    .from('.welcome', {x: -2000, duration: 0.2},"text")
    .to(word, {opacity:1, duration: 0.1})  
    .to('nav', {opacity:1, duration: 0.1})
    .to('.welcome', {x: -2000, opacity: 0, duration: 0.2, delay: 0.6})
    .to(firstBg, {scaleX:0, duration: 0.2})
    .to(bg7, {scaleX:0, duration: 0.2, transformOrigin: "left center"});
    
    gsap.registerPlugin(ScrollTrigger);
        
        //projects title
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.projects--container',
                start: 'top center',
                end: '40% ',
                toggleActions:'play reset play reset',
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
                start: '-10% center',
                toggleActions:'play reset play reset',
                markers: true
            }
        })
        tl4
        .from(".thumbnail-image, .hover--content", { duration: 0.2, y: 600 }, "text")

        //about text
        let tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.about--content',
                start: 'top center',
                toggleActions:'play reset play reset',
                // markers: true
            }
        })
        tl5.to('.bg-3', {scaleX:1, duration: 0.2 })
        .to('.bg-4', {scaleX:1, duration: 0.2, transformOrigin: "right center"})
        .to('.bg-5', {scaleX:1, duration: 0.2})
        .to('.bg-6', {scaleX:1, duration: 0.2, transformOrigin: "right center"})
        .to('.about--description', {opacity:1, duration: 0.1})  
        .to('.bg-3', {scaleX:0, duration: 0.2})
        .to('.bg-4', {scaleX:0, duration: 0.2})
        .to('.bg-5', {scaleX:0, duration: 0.2})
        .to('.bg-6', {scaleX:0, duration: 0.2});
    },[])

    return(<></>)
}

export default Animations