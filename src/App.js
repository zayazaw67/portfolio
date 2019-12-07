import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Intro from './components/intro';
import Bio from './components/bio';
import Portfolio from './components/portfolio';
import Tech from './components/technologies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Bio />
      <Tech />
      <Portfolio />
    </div>
  );
}

export default App;
