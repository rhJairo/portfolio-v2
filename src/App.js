import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Cursor from './Components/Cursor';
import Projects from './Components/Projects';
import About from './Components/About';
import './style.scss'
import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <About />
    </div>
  );
}

export default App;