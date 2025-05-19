import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <img
          src="./public/image.JPG"
          alt="Foto de perfil"
          className="about-image"
        />

        <div className="about-content">
          <h2 className="about-title">Sobre Mí</h2>
          <p className="about-description">
            Soy desarrollador web con pasión por crear interfaces atractivas y funcionales.
            Tengo experiencia en React, Node.js y diseño responsivo. Me encanta aprender y
            trabajar en equipo para llevar ideas a la realidad.
          </p>
          <a
            href="CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-button"
          >
            Ver CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
