import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import About from './Components/About';
import Animations from './Components/Animations'
import './style.scss'
import './App.css';


function App() {

  return (
    <>
      <Animations />
      <Navbar />
      <Header />
      <Projects />
      <About />
    </>
  );
}

export default App;