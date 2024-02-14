import React from 'react';
import ProfileImage from '../../assets/images/headshot.jpeg';
import GithubIcon from '../../assets/icons/github.png';
import LinkedinIcon from '../../assets/icons/linkedin.png';
import './styles.css';
import Button from '../Button';


const ProfileBanner = () => {
  return (
    <div className="profile_banner-wrapper-div">
      <img
        className="profile_banner-headshot"
        // src={ProfileImage}
      />

      <div className="profile_banner-profile-info-wrapper-div">
        <p className="profile_banner-greeting-text">Hi I&apos;m</p>
        <p className="profile_banner-full-name">Ravi Asthana</p>
        <p className="profile_banner-designation">Full Stack Developer</p>

        <div className="profile_banner-row-wrapper-div">
          <Button
            title="Download CV"
            onClick={() => window.open('../../assets/docs/Resume.pdf')}
          />
          <Button
            title="Contact me"
            className="profile_banner-contact-btn"
          />
        </div>

        <div className="profile_banner-row-wrapper-div profile_banner-margin">
          <img
            src={GithubIcon}
            className="profile_banner-icon"
            onClick={() => window.open("https://github.com/rantoinne")}
            />
          <img
            src={LinkedinIcon}
            className="profile_banner-icon"
            onClick={() => window.open("https://www.linkedin.com/in/ravi-asthana-rndev/")}
          />
        </div>
      </div>

    </div>
  );
}

export default ProfileBanner;
