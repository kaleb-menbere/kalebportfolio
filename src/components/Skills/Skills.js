import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { FaReact, FaPython, FaDatabase, FaCode, FaServer } from 'react-icons/fa';
import { SiDjango, SiJavascript, SiPostgresql, SiGit, SiBootstrap, SiHtml5, SiCss3 } from 'react-icons/si';

const skills = {
  frontend: [
    { name: "React", level: 90, icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", level: 85, icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "HTML5", level: 95, icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", level: 95, icon: <SiCss3 />, color: "#1572B6" },
    { name: "Bootstrap", level: 90, icon: <SiBootstrap />, color: "#7952B3" }
  ],
  backend: [
    { name: "Python", level: 95, icon: <FaPython />, color: "#3776AB" },
    { name: "Django", level: 90, icon: <SiDjango />, color: "#092E20" },
    { name: "Django REST", level: 88, icon: <SiDjango />, color: "#092E20" },
    { name: "REST APIs", level: 92, icon: <FaServer />, color: "#FF6B6B" }
  ],
  database: [
    { name: "PostgreSQL", level: 85, icon: <SiPostgresql />, color: "#4169E1" },
    { name: "MySQL", level: 80, icon: <FaDatabase />, color: "#4479A1" },
    { name: "Oracle DB", level: 75, icon: <FaDatabase />, color: "#F80000" }
  ],
  tools: [
    { name: "Git", level: 88, icon: <SiGit />, color: "#F05032" },
    { name: "VS Code", level: 95, icon: <FaCode />, color: "#007ACC" },
    { name: "Linux", level: 80, icon: <FaServer />, color: "#FCC624" }
  ]
};

const Skills = () => {
  const skillRefs = useRef([]);
  const progressRefs = useRef([]);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars
            progressRefs.current.forEach((ref, index) => {
              if (ref && ref.dataset.level) {
                setTimeout(() => {
                  ref.style.width = `${ref.dataset.level}%`;
                }, index * 100);
              }
            });

            // Animate skill items
            skillRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.style.opacity = '1';
                  ref.style.transform = 'translateX(0)';
                }, index * 100 + 300);
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills">
      {/* Animated Particles Background */}
      <div className="particles">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
          <p className="section-subtitle">Full-stack expertise for end-to-end development</p>
        </div>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div 
              key={category} 
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.1 + 0.3}s` }}
            >
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
              </h3>
              <div className="skill-list">
                {skillList.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                    ref={el => skillRefs.current[index] = el}
                    style={{ 
                      animationDelay: `${categoryIndex * 0.1 + index * 0.1 + 0.5}s`,
                      borderLeft: `3px solid ${skill.color}20`,
                      paddingLeft: '15px'
                    }}
                  >
                    <div className="skill-header">
                      <div 
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        ref={el => progressRefs.current[categoryIndex * 4 + index] = el}
                        className="skill-progress"
                        data-level={skill.level}
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                          boxShadow: `0 0 15px ${skill.color}40`
                        }}
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
            <span className="competency-tag">DevOps</span>
            <span className="competency-tag">Testing</span>
            <span className="competency-tag">Documentation</span>
            <span className="competency-tag">Mentoring</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;