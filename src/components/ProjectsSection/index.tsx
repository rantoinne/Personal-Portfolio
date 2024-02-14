import projectsLib from '../../utils/projectsLib';
import Button from '../Button';
import './styles.css';

interface ProjectsSectionProps {
  id?: string;
}

const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  const renderProjects = () => {
    return projectsLib.map(p => (
      <div className="project_section-projects">
        <img
          src={p.logo}
          className="project_section-project-logo"
        />
        <p className="project_section-project-title">{p.title}</p>
        <div className="project_section-button-container">
          <Button
            title="Github Link"
            onClick={() => window.open(p.githubLink)}
          />
          <Button
            title="Live Demo"
            className="project_section-live-demo-button"
            onClick={() => window.open(p.liveDemoLink)}
          />
        </div>
      </div>
    ))
  };
  
  return (
    <div
      id={id}
      className="project_section-container-div"
    >
      <p className="project_section-title">Browse my</p>
      <p className="project_section-subtitle">Projects</p>

      <div className="project_section-projects-wrapper">
        {renderProjects()}
      </div>
    </div>
  );
};

export default ProjectsSection;
