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
          className="about_section-image"
        />

        <div className="about_section-text-content-column-wrapper">
          <div className="about_section-text-content-container">
            {/* XP div */}
            <div className="about_section-experience-container">
              <img
                src={MedalIcon}
                className="about_section-highlight-image"
              />
              <p>Experience</p>
              <p className="about_section-detail-text">5+ years</p>
              <p className="about_section-detail-text">Full Stack development</p>
            </div>

            {/* Ed div */}
            <div className="about_section-experience-container">
              <img
                src={EducationIcon}
                className="about_section-highlight-image"
              />
              <p>Education</p>
              <p className="about_section-detail-text">Bachelor of Technology</p>
              <p className="about_section-detail-text">Computer Science</p>
            </div>
          </div>

          {/* Summary */}
          <p className="about_section-summary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
