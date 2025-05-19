
import './ProjectCard.css';


const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
          />
        </a>
        
        <div className="project-card-body">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>
          
          <div className="project-card-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card-button"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  