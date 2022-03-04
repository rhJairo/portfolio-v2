import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Cursor from './Components/Cursor';
import Projects from './Components/Projects';
import Presentation from './Components/Presentation';
import Scrollbar from 'smooth-scrollbar';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import './RollingText.scss'
import './App.css';

function App() {
  const scrollRef = React.useRef()
  const panelRef = React.useRef([])
  const panelTextRef = React.useRef([])
  const projectsRef = React.useRef()

  React.useEffect(() => {
  let bodyScrollBar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
  });
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.scrollerProxy(scrollRef.current, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });
  bodyScrollBar.addListener(ScrollTrigger.update);

  gsap.set(".image--container", { zIndex: (i, target, targets) => targets.length - i });
  let images = gsap.utils.toArray(".image--container:not(.last)");

  images.forEach((image, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        scroller: scrollRef.current,
        start: () => "top -" + (window.innerHeight*(i+0.5)),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,     
      }
    })
    tl.to(image, { height: 0 });
  });

  gsap.set(".content--container", { zIndex: (i, target, targets) => targets.length - i });
  var texts = gsap.utils.toArray(".content--container");

  texts.forEach((text, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: projectsRef.current,
      scroller: scrollRef.current,
      start: () => "top -" + (window.innerHeight*i),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
    }
    
  })
  tl.to(text, { duration: 0.33, opacity: 1, y:"30%" })  
    .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66);
  });

    ScrollTrigger.create({
      trigger: projectsRef.current,
      scroller: scrollRef.current,
      scrub: true,
      markers: false,
      pin: true,
      start: () => "top top",
      end: () => "+=" + ((images.length + 1) * window.innerHeight),
      invalidateOnRefresh: true,
    });
  },[])

  return (
    <div className='scroller' ref={scrollRef}>
      <Header />
      <Projects container={projectsRef} text={panelTextRef} image={panelRef}/>
      <Presentation />
    </div>
  );
}

export default App;