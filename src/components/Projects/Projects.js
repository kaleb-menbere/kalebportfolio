import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Agri-Connect",
    description: "A web-based platform connecting farmers directly with hotels, retailers, and customers. Eliminates middlemen and improves market access for local farmers.",
    period: "Feb 2025 - Jun 2025",
    technologies: ["Django", "Django REST Framework", "Bootstrap", "PostgreSQL", "HTML/CSS"],
    github: "https://github.com/kalebmenbere/Agri-Connect",
    features: [
      "Farmer registration and product listing",
      "Buyer search and filtering",
      "Secure transaction system",
      "Real-time notifications"
    ]
  },
  {
    id: 2,
    title: "University Help Desk System",
    description: "Streamlined support request system for Dilla University. Reduced request processing time by 60% and eliminated paper-based workflows.",
    period: "Jun 2024 - Sep 2024",
    technologies: ["Django", "Bootstrap", "JavaScript", "MySQL", "REST API"],
    github: "https://github.com/atsewkaleb/Help-Desk",
    features: [
      "Online request submission",
      "Automatic routing to departments",
      "Progress tracking",
      "Admin dashboard"
    ]
  },
  {
    id: 3,
    title: "Dorm Student Management System",
    description: "Java-based application for managing university dormitory allocations and student information with Oracle Database integration.",
    period: "Academic Project",
    technologies: ["Java", "Oracle Database", "Swing", "JDBC", "OOP"],
    github: "https://github.com/atsewkaleb/Dorm_Managment",
    features: [
      "Student registration",
      "Room allocation",
      "Fee management",
      "Report generation"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p className="section-subtitle">Real-world solutions with measurable impact</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-period">{project.period}</div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> View Code
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;