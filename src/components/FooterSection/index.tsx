import Navbar from '../Navbar';
import './styles.css';

interface FooterSectionProps {
  id?: string;
}

const FooterSection = ({ id }: FooterSectionProps) => {
  return (
    <div
      id={id}
      className="footer_section-container-div"
    >
      <nav>
        <div>
          <ul className="navbar_links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <p>
        Copyright © 2024 Ravi Asthana. All Rights Reserved
      </p>
    </div>
  );
};

export default FooterSection;
