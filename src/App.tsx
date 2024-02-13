import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileBanner from './components/ProfileBanner';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileBanner />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
    </div>
  );
}

export default App;
