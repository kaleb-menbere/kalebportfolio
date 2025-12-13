import React from 'react';
import './Experience.css';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    title: "Full-stack Developer",
    company: "Star Technologies",
    period: "Sep 2025 - Present · 4 mos",
    location: "Addis Ababa, Ethiopia · On-site",
    description: "Building modern, scalable applications using React and Django. Focus on creating robust backend systems and seamless API integrations.",
    skills: ["React", "Django", "REST APIs", "Python", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "Dilla University ICT Directorate",
    period: "Jun 2024 - Aug 2024 · 3 mos",
    location: "Dilla, Ethiopia",
    description: "Developed a Help Desk system to streamline support requests. Built with Django backend and Bootstrap frontend, reducing processing time by 60%.",
    skills: ["Django", "Bootstrap", "HTML/CSS", "JavaScript", "MySQL"]
  },
  {
    id: 3,
    title: "Charity Committee - Executive Member",
    company: "Dilla University",
    period: "Jun 2021 - Jun 2025 · 4 yrs 1 mo",
    location: "Gedio, Ethiopia",
    description: "Led initiatives helping students and community members through economic support, education, and psychological assistance. Organized prison and elder care programs.",
    skills: ["Leadership", "Community Service", "Project Management", "Communication"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
              </div>
              
              <div className="experience-details">
                <div className="detail-item">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <div className="experience-skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;