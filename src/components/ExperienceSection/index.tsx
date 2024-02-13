import './styles.css';
import skillsImageLib from '../../utils/skillsImageLib';
import { SKILL_TYPE } from '../../utils/enums';

interface ExperienceSectionProps {
  id?: string;
}

const ExperienceSection = ({ id }: ExperienceSectionProps) => {
  const renderSkillsWithLevels = (type: SKILL_TYPE) => {
    return skillsImageLib[type].map(({ title, logo, level }) => {
      if (title === 'HIDE') return (
        <div key={title} className="experience_section-skill-item experience_section-hide-skill"/>
      );
      return (
        <div key={title} className="experience_section-skill-item">
          <img
            src={logo}
            className="experience_section-skill-logo"
          />
          <div className="experience_section-skill-level-info-container">
            <p>{title}</p>
            <p>{level}</p>
          </div>
        </div>
      );
    });
  };
  
  return (
    <div
      id={id}
      className="experience_section-container-div"
    >
      <p className="experience_section-title">Explore my</p>
      <p className="experience_section-subtitle">Experience</p>

      <div className="experience_section-cards-wrapper">
        <div className="experience_section-skills-section-container">
          <p className="experience_section-skill-type-text">{SKILL_TYPE.FRONT_END}</p>
          <div className="experience_section-skills-section">
            {renderSkillsWithLevels(SKILL_TYPE.FRONT_END)}
          </div>
        </div>
        <div className="experience_section-skills-section-container">
          <p className="experience_section-skill-type-text">{SKILL_TYPE.BACK_END}</p>
          <div className="experience_section-skills-section">
            {renderSkillsWithLevels(SKILL_TYPE.BACK_END)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
