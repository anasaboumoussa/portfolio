import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'E-commerce React',
      description: 'Tienda online completa con carrito de compras, autenticación y pasarela de pagos.',
      imageUrl: 'https://via.placeholder.com/600x400?text=E-commerce+React',
      projectUrl: 'https://tuecommerce.com',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Portfolio Artístico',
      description: 'Galería interactiva para artista visual con filtros por categorías y lightbox.',
      imageUrl: 'https://via.placeholder.com/600x400?text=Portfolio+Art',
      projectUrl: 'https://portfolio-artista.com',
      tags: ['JavaScript', 'CSS3', 'GSAP']
    },
    {
      id: 3,
      title: 'App del Clima',
      description: 'Aplicación meteorológica con pronóstico en tiempo real y geolocalización.',
      imageUrl: 'https://via.placeholder.com/600x400?text=Weather+App',
      projectUrl: 'https://clima-app.com',
      tags: ['React', 'API REST', 'Geolocation']
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Mis Proyectos</h2>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="project-image"
              />
            </a>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
