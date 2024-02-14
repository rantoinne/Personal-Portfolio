import LinkedInIcon from '../../assets/icons/linkedin.png';
import contactsLib from '../../utils/contactsLib';
import FooterSection from '../FooterSection';
import './styles.css';

interface ContactSectionProps {
  id?: string;
}

const ContactSection = ({ id }: ContactSectionProps) => {
  const renderContactItems = () => {
    return contactsLib.map(c => (
      <div
        onClick={() => c.action()}
        className="contact_section-contact-item"
      >
        <img
          src={c.logo}
          className="contact_section-contact-icon"
        />
        <p>{c.title}</p>
      </div>
    ))
  }
  
  return (
    <div
      id={id}
      className="contact_section-container-div"
    >
      <p className="contact_section-title">Get in touch</p>
      <p className="contact_section-subtitle">Contact Me</p>

      <div className="contact_section-contacts-content-wrapper">
        <div className="contact_section-contacts-wrapper">
          {renderContactItems()}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactSection;
