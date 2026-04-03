import React, { useState } from 'react';
import './Experience.css';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode,
  FaRocket,
  FaUsers,
  FaStar,
  FaCogs,
  FaChartLine,
  FaUsersCog,
  FaLaptopCode,
  FaDatabase
} from 'react-icons/fa';
import { SiDjango, SiReact, SiPython, SiJavascript, SiBootstrap, SiPostgresql } from 'react-icons/si';

const experiences = [
  {
    id: 1,
    title: "Full-stack Developer",
    company: "Star Technologies",
    period: "Sep 2025 - Present",
    duration: "4 mos",
    location: "Addis Ababa, Ethiopia · On-site",
    description: "Building modern, scalable applications using React and Django. Focus on creating robust backend systems and seamless API integrations for enterprise clients.",
    achievements: [
      "Developed 5+ production-grade applications from scratch",
      "Implemented RESTful APIs with Django REST Framework",
      "Optimized application performance by 40% through code optimization",
      "Mentored 2 junior developers in React and Django best practices",
      "Integrated third-party APIs including payment gateways and SMS services"
    ],
    skills: ["React", "Django", "REST APIs", "Python", "PostgreSQL", "Docker", "JavaScript", "AWS"],
    icon: <FaRocket />,
    color: "#3498db",
    techIcons: [<SiReact />, <SiDjango />, <SiPython />, <SiPostgresql />]
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "Dilla University ICT Directorate",
    period: "Jun 2024 - Aug 2024",
    duration: "3 mos",
    location: "Dilla, Ethiopia",
    description: "Developed a comprehensive Help Desk system to streamline support requests across the university. Built with Django backend and Bootstrap frontend, reducing processing time significantly.",
    achievements: [
      "Reduced request processing time by 60% through automation",
      "Eliminated paper-based workflows completely",
      "Implemented real-time notifications for users and admins",
      "Created comprehensive admin dashboard with analytics",
      "Trained 15+ staff members on system usage"
    ],
    skills: ["Django", "Bootstrap", "HTML/CSS", "JavaScript", "MySQL", "REST API", "Git", "Linux"],
    icon: <FaLaptopCode />,
    color: "#2ecc71",
    techIcons: [<SiDjango />, <SiBootstrap />, <SiJavascript />, <FaDatabase />]
  },
  {
    id: 3,
    title: "Charity Committee - Executive Member",
    company: "Dilla University",
    period: "Jun 2021 - Jun 2025",
    duration: "4 yrs 1 mo",
    location: "Gedio, Ethiopia",
    description: "Led initiatives helping students and community members through economic support, education, and psychological assistance. Organized prison and elder care programs while developing leadership skills.",
    achievements: [
      "Organized 10+ community outreach programs serving 500+ people",
      "Managed fundraising events raising over $5,000 for student support",
      "Provided educational support to 200+ students",
      "Coordinated volunteer teams of 50+ members effectively",
      "Implemented digital tracking system for charity activities"
    ],
    skills: ["Leadership", "Project Management", "Communication", "Team Building", "Event Planning", "Fundraising", "Community Service"],
    icon: <FaUsers />,
    color: "#9b59b6",
    techIcons: [<FaUsersCog />, <FaChartLine />, <FaCogs />]
  }
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">
              <span className="title-number">02</span>
              Professional Experience
            </h2>
            <p className="section-subtitle">
              Career Timeline & Achievements
              <span className="subtitle-line"></span>
            </p>
          </div>
          <div className="section-description">
            <p>
              A journey through my professional development, showcasing growth in 
              <strong> technical expertise</strong>, <strong>leadership</strong>, and 
              <strong> problem-solving abilities</strong>. Each role represents a step 
              forward in my career as a full-stack developer.
            </p>
          </div>
        </div>
        
        <div className="experience-container">
          {/* Simple Timeline Navigation - Always Visible */}
          <div className="simple-timeline-nav">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`simple-timeline-item ${activeExp === index ? 'active' : ''}`}
                onClick={() => setActiveExp(index)}
                style={{ '--color': exp.color }}
              >
                <div className="simple-timeline-dot">
                  {exp.icon}
                </div>
                <div className="simple-timeline-content">
                  <h3 className="simple-timeline-company">
                    <strong>{exp.company}</strong>
                  </h3>
                  <p className="simple-timeline-period">
                    <strong>{exp.period}</strong>
                    <span className="simple-timeline-duration"> · {exp.duration}</span>
                  </p>
                  <div className="simple-timeline-tech">
                    {exp.techIcons.map((Icon, idx) => (
                      <span key={idx} className="tech-icon-small">
                        {Icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Experience Details */}
          <div className="experience-details-wrapper">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`experience-detail-card ${activeExp === index ? 'active' : ''}`}
                style={{ '--color': exp.color }}
              >
                <div className="detail-header">
                  <div className="detail-icon">
                    {exp.icon}
                  </div>
                  <div className="detail-title">
                    <h3>{exp.title}</h3>
                    <div className="detail-company-period">
                      <span className="company-name">{exp.company}</span>
                      <span className="company-period">
                        {exp.period} · {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="detail-location">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>
                
                <p className="detail-description">{exp.description}</p>
                
                {/* Tech Stack Preview */}
                <div className="tech-stack-preview">
                  <h4>Primary Technologies</h4>
                  <div className="tech-icons-large">
                    {exp.techIcons.map((Icon, idx) => (
                      <div key={idx} className="tech-icon-large">
                        {Icon}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="detail-achievements">
                  <h4>
                    <FaStar className="achievement-header-icon" />
                    Key Achievements
                  </h4>
                  <div className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="achievement-item">
                        <div className="achievement-number">{idx + 1}</div>
                        <div className="achievement-content">
                          <span className="achievement-text">{achievement}</span>
                          <div className="achievement-line"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Skills */}
                <div className="detail-skills">
                  <h4>
                    <FaCogs className="skills-header-icon" />
                    Technologies & Skills
                  </h4>
                  <div className="skills-tags">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Timeline Progress */}
                <div className="timeline-progress">
                  <div className="progress-dots">
                    {experiences.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`progress-dot ${idx === index ? 'active' : ''} ${idx < index ? 'completed' : ''}`}
                        onClick={() => setActiveExp(idx)}
                      >
                        {idx + 1}
                      </div>
                    ))}
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${(index / (experiences.length - 1)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Career Stats */}
        <div className="career-stats">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#3498db' }}>
              <FaCalendarAlt />
            </div>
            <div className="stat-content">
              <h3>4+ Years</h3>
              <p>Professional Experience</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#2ecc71' }}>
              <FaCode />
            </div>
            <div className="stat-content">
              <h3>10+ Projects</h3>
              <p>Completed Successfully</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#9b59b6' }}>
              <FaUsers />
            </div>
            <div className="stat-content">
              <h3>500+ Lives</h3>
              <p>Impacted through Service</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e74c3c' }}>
              <FaChartLine />
            </div>
            <div className="stat-content">
              <h3>60% Efficiency</h3>
              <p>Process Improvement</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="experience-bg">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
    </section>
  );
};

export default Experience;