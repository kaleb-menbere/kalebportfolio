import React from 'react';
import './Skills.css';
import { FaReact, FaPython, FaDatabase, FaCode, FaServer } from 'react-icons/fa';
import { SiDjango, SiJavascript, SiPostgresql, SiGit, SiBootstrap } from 'react-icons/si';

const skills = {
  frontend: [
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "JavaScript", level: 85, icon: <SiJavascript /> },
    { name: "HTML/CSS", level: 95, icon: <FaCode /> },
    { name: "Bootstrap", level: 90, icon: <SiBootstrap /> }
  ],
  backend: [
    { name: "Python", level: 95, icon: <FaPython /> },
    { name: "Django", level: 90, icon: <SiDjango /> },
    { name: "Django REST", level: 88, icon: <SiDjango /> },
    { name: "REST APIs", level: 92, icon: <FaServer /> }
  ],
  database: [
    { name: "PostgreSQL", level: 85, icon: <SiPostgresql /> },
    { name: "MySQL", level: 80, icon: <FaDatabase /> },
    { name: "Oracle DB", level: 75, icon: <FaDatabase /> }
  ],
  tools: [
    { name: "Git", level: 88, icon: <SiGit /> },
    { name: "VS Code", level: 95, icon: <FaCode /> },
    { name: "Linux", level: 80, icon: <FaServer /> }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
          <p className="section-subtitle">Full-stack expertise for end-to-end development</p>
        </div>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="skill-list">
                {skillList.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-skills">
          <h3>Additional Competencies</h3>
          <div className="competencies">
            <span className="competency-tag">System Design</span>
            <span className="competency-tag">API Development</span>
            <span className="competency-tag">Problem Solving</span>
            <span className="competency-tag">Code Optimization</span>
            <span className="competency-tag">Team Leadership</span>
            <span className="competency-tag">Project Management</span>
            <span className="competency-tag">Agile Methodology</span>
            <span className="competency-tag">Cybersecurity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;