import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Kaleb <span className="highlight">Menbere</span>
          </h1>
          <h2 className="hero-subtitle">
            Full-Stack Developer | React & Django Specialist
          </h2>
          <p className="hero-description">
            Building modern, scalable applications with clean code and robust architecture.
            Passionate about solving real-world problems through technology.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              className="btn btn-secondary"
              download
            >
              <FaFileDownload /> Download Resume
            </a>
          </div>
          <div className="hero-social">
            <a 
              href="https://github.com/kalebmenbere" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/kalebmenbere" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-snippet">
            <pre>
{`const developer = {
  name: "Kaleb Menbere",
  role: "Full-Stack Developer",
  skills: ["React", "Django", "Python", "REST APIs"],
  location: "Addis Ababa, Ethiopia",
  education: "BSc Computer Science (3.81 GPA)",
  motto: "Transform ideas into production-ready solutions"
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;