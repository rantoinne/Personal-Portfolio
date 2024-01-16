import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileBanner from './components/ProfileBanner';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileBanner />
      <AboutSection id="about" />
    </div>
  );
}

export default App;
