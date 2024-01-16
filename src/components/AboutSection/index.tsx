import React from 'react';
import AboutSvg from '../../assets/images/about.svg';
import MedalIcon from '../../assets/icons/medal.png';
import EducationIcon from '../../assets/icons/education.png';
import './styles.css';

interface AboutSectionProps {
  id?: string;
}

const AboutSection = ({ id }: AboutSectionProps) => {
  return (
    <div
      id={id}
      className="about_section-container-div"
    >
      <p className="about_section-title">Get To Know More</p>
      <p className="about_section-subtitle">About Me</p>

      <div className="about_section-about-container">
        <img
          src={AboutSvg}
          className="about_section-headshot-image"
        />
        <div className="about_section-text-content-container">
          {/* XP div */}
          <div className="about_section-experience-container">
            <img
              src={MedalIcon}
            />
            <p>Experience</p>
            <p className="about_section-detail-text">5+ years</p>
            <p className="about_section-detail-text">Full Stack development</p>
          </div>

          {/* Ed div */}
          {/* <div className="about_section-education-container">
            <img
              src={EducationIcon}
            />
            <p>Education</p>
            <p>Bachelor of Technology</p>
            <p>Computer Science</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
