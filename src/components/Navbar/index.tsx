import React from 'react';
import './styles.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar_logo"><p>Ravi C. Asthana</p></div>
      <div>
        <ul className="navbar_links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
