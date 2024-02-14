import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileBanner from './components/ProfileBanner';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileBanner />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </div>
  );
}

export default App;
