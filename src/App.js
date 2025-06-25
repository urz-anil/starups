import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';  // <-- Make sure this is imported
import MissionSection from './components/MissionSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />  {/* <-- This contains the statistic cards */}
      <MissionSection />
    </div>
  );
}

export default App;