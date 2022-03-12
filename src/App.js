import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact'
import Animations from './Components/Animations'
import './style.scss'
import './App.css';


function App() {

  return (
    <>
      <Animations />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

/*
correct bad practices
-declaring the child inside the parent in Projects.js in the projectCovers
-can use spread to pass data to childs instead of multiple individual props
-use fragments instead of divs
-useMemo to prevent needless rerenders
-curry functions for functions that take events as arguments
*/