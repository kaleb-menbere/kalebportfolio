import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaFileDownload, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { SiPython, SiDjango, SiReact } from 'react-icons/si';
import { ReactTyped } from 'react-typed'; // Changed import

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    { icon: <SiReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiDjango />, name: 'Django', color: '#092E20' },
    { icon: <SiPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaDatabase />, name: 'PostgreSQL', color: '#336791' },
    { icon: <FaServer />, name: 'REST APIs', color: '#FF6B6B' },
    { icon: <FaCode />, name: 'JavaScript', color: '#F7DF1E' }
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Full-Stack Developer</span>
          </div>
          
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">
              <span className="name-part">Kaleb</span>
              <span className="name-part highlight">Menbere</span>
            </span>
          </h1>
          
          <div className="hero-typed">
            <ReactTyped // Changed component name
              strings={[
                'Building Scalable Web Applications',
                'Creating Robust Backend Systems',
                'Designing Modern User Interfaces',
                'Developing RESTful APIs',
                'Solving Complex Problems with Code'
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
              showCursor
              cursorChar="|"
            />
          </div>
          
          <p className="hero-description">
            I specialize in transforming ideas into production-ready solutions using 
            <strong> React, Django, and Python</strong>. With a focus on clean code, 
            scalability, and user experience, I build applications that make an impact.
          </p>
          
          <div className="hero-tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-icons">
              {techStack.map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-icon"
                  style={{ 
                    '--delay': `${index * 0.1}s`,
                    '--color': tech.color
                  }}
                >
                  <div className="tech-icon-inner">
                    {tech.icon}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <FaCode /> View Projects
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
            >
              <FaCode /> Let's Collaborate
            </a>
            
<a 
  href="/resume/Kaleb_Menbere_CV+Edu.pdf" // Updated with folder
  className="btn btn-outline"
  download="Kaleb_Menbere_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFileDownload /> Download Resume
</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div 
            className="floating-code"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-title">portfolio.js</span>
              </div>
              <pre className="code-content">
{`class Developer {
  constructor() {
    this.name = "Kaleb Menbere";
    this.title = "Full-Stack Developer";
    this.skills = {
      frontend: ["React", "JavaScript", "HTML5/CSS3"],
      backend: ["Django", "Python", "REST APIs"],
      database: ["PostgreSQL", "MySQL", "MongoDB"],
      tools: ["Git", "Docker", "AWS"]
    };
    this.experience = "4+ years";
    this.education = "BSc Computer Science";
  }

  buildProject(requirements) {
    const { frontend, backend, database } = this.skills;
    return \`Building with \${frontend[0]} & \${backend[0]}\`;
  }

  solveProblem(problem) {
    return "Clean, efficient solution delivered";
  }
}

const kaleb = new Developer();
console.log(kaleb.buildProject());`}
              </pre>
            </div>
          </div>
          
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;