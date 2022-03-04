import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Cursor from './Components/Cursor';
import Projects from './Components/Projects';
import Presentation from './Components/Presentation';

import './RollingText.scss'
import './App.css';

function App() {

  return (
    <div>
      <Cursor />
      <Navbar />
      <Header />
      <Projects />
      <Presentation />
    </div>
  );
}

export default App;
