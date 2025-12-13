import React, { useState } from 'react';
import './Projects.css';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaServer, 
  FaDatabase,
  FaLaptopCode,
  FaUsers,
  FaLeaf,
  FaMobileAlt,
  FaRocket,
  FaStar,
  FaEye,
  FaArrowRight,
  FaGlasses,
  FaTruck,
  FaPalette,
  FaBolt,
  FaLock,
  FaSms,
  FaDesktop,
  FaTimes,
  FaWordpress,
  FaPhp,
  FaBriefcase,
  FaJava
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiPython, 
  SiReact, 
  SiBootstrap, 
  SiPostgresql, 
  SiOracle 
} from 'react-icons/si';

// Project Preview Component
const ProjectPreview = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-preview-overlay">
      <div className="project-preview-modal">
        <div className="preview-header">
          <h3 className="preview-title">{project.title} - Live Preview</h3>
          <button className="close-preview" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="preview-content">
          <div className="preview-info">
            <div className="preview-meta">
              <span className="preview-category" style={{ background: project.color }}>
                {project.category}
              </span>
              <span className="preview-status" style={{ background: project.color }}>
                {project.status}
              </span>
            </div>
            <p className="preview-description">{project.description}</p>
            <div className="preview-links">
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="preview-link"
              >
                <FaExternalLinkAlt /> Open in New Tab
              </a>
            </div>
          </div>
          
          <div className="preview-frame">
            <div className="frame-header">
              <div className="frame-dots">
                <span className="frame-dot red"></span>
                <span className="frame-dot yellow"></span>
                <span className="frame-dot green"></span>
              </div>
              <div className="frame-url">
                <FaDesktop /> {project.liveDemo.replace('https://', '')}
              </div>
            </div>
            <iframe
              src={project.liveDemo}
              title={`${project.title} Preview`}
              className="preview-iframe"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              loading="lazy"
            />
            <div className="preview-note">
              <p>Note: Some features may be restricted in preview mode. Click "Open in New Tab" for full experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Projects Component
const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [previewProject, setPreviewProject] = useState(null);

  // All Projects Array
  const projects = [
    {
      id: 1,
      title: "Agri-Connect",
      tagline: "Bridging Farmers & Businesses",
      description: "A web-based platform connecting local farmers directly with hotels, retailers, and customers.",
      period: "Feb 2025 - Jun 2025",
      technologies: [
        { name: "Django", icon: <SiDjango />, color: "#092E20" },
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" }
      ],
      github: "https://github.com/kalebmenbere/Agri-Connect",
      liveDemo: null,
      features: [
        "Farmer registration and product listing",
        "Buyer search and filtering system",
        "Secure online transaction processing",
        "Real-time notifications and alerts"
      ],
      impact: [
        "Direct market access for 100+ farmers",
        "Reduced transaction costs by 40%",
        "Increased farmer income by 30%"
      ],
      icon: <FaLeaf />,
      color: "#27ae60",
      category: "Full Stack",
      status: "Completed",
      complexity: "Advanced"
    },
    {
      id: 2,
      title: "University Help Desk",
      tagline: "Streamlining University Support",
      description: "A support request system for Dilla University that digitized paper-based workflows.",
      period: "Jun 2024 - Sep 2024",
      technologies: [
        { name: "Django", icon: <SiDjango />, color: "#092E20" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
        { name: "JavaScript", icon: <FaCode />, color: "#F7DF1E" }
      ],
      github: "https://github.com/atsewkaleb/Help-Desk",
      liveDemo: null,
      features: [
        "Online request submission portal",
        "Automatic routing to departments",
        "Real-time progress tracking",
        "Comprehensive admin dashboard"
      ],
      impact: [
        "Reduced processing time by 60%",
        "Eliminated paper-based workflows",
        "Served 500+ university employees"
      ],
      icon: <FaUsers />,
      color: "#3498db",
      category: "Full Stack",
      status: "Deployed",
      complexity: "Intermediate"
    },
    {
      id: 3,
      title: "Dorm Management System",
      tagline: "Automated Student Housing",
      description: "A Java-based desktop application for managing university dormitory allocations.",
      period: "Academic Project",
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "Oracle DB", icon: <SiOracle />, color: "#F80000" },
        { name: "Swing", icon: <FaLaptopCode />, color: "#E34F26" },
        { name: "OOP", icon: <FaCode />, color: "#F7DF1E" }
      ],
      github: "https://github.com/atsewkaleb/Dorm_Managment",
      liveDemo: null,
      features: [
        "Student registration and management",
        "Automated room allocation",
        "Fee calculation and tracking",
        "Report generation"
      ],
      impact: [
        "Streamlined dorm management process",
        "Reduced administrative workload by 50%",
        "Improved data accuracy"
      ],
      icon: <FaRocket />,
      color: "#9b59b6",
      category: "Desktop App",
      status: "Completed",
      complexity: "Intermediate"
    },
    {
      id: 4,
      title: "Sun Optical Technologies",
      tagline: "Premium Eyewear E-Commerce",
      description: "Corporate website for Ethiopia's premier optical solutions provider.",
      period: "Development Period",
      technologies: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "CSS3", icon: <FaLaptopCode />, color: "#1572B6" },
        { name: "UI/UX", icon: <FaPalette />, color: "#FF6B6B" },
        { name: "Responsive", icon: <FaMobileAlt />, color: "#7952B3" }
      ],
      github: "https://github.com/your-username/sun-optical",
      liveDemo: "https://sun-frontend-cyan.vercel.app",
      features: [
        "Product showcase with categories",
        "Company history timeline",
        "Certification display",
        "Multi-language support"
      ],
      impact: [
        "Modern digital presence for 30+ year company",
        "Increased online inquiries by 40%",
        "Improved brand credibility"
      ],
      icon: <FaGlasses />,
      color: "#FF6B35",
      category: "E-Commerce Website",
      status: "Live & Deployed",
      complexity: "Intermediate"
    },
    {
      id: 5,
      title: "Leo Blue Delivery",
      tagline: "Modern Delivery Service Platform",
      description: "A sleek delivery service website offering logistics solutions and package tracking.",
      period: "Development Period",
      technologies: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <FaPalette />, color: "#38B2AC" },
        { name: "JavaScript", icon: <FaCode />, color: "#F7DF1E" },
        { name: "Responsive", icon: <FaMobileAlt />, color: "#7952B3" }
      ],
      github: "https://github.com/your-username/leo-blue",
      liveDemo: "https://leo-blue-pi.vercel.app",
      features: [
        "Service pricing and package options",
        "Live tracking system interface",
        "Customer dashboard",
        "Business partnership information"
      ],
      impact: [
        "Streamlined customer onboarding",
        "Increased service inquiries by 35%",
        "Enhanced brand visibility"
      ],
      icon: <FaTruck />,
      color: "#3498db",
      category: "Service Website",
      status: "Live & Deployed",
      complexity: "Intermediate"
    },
    {
      id: 6,
      title: "Vision Tech",
      tagline: "Digital Solutions & Telecom Services",
      description: "Corporate website for a digital services and telecom solutions company.",
      period: "Development Period",
      technologies: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Modern CSS", icon: <FaLaptopCode />, color: "#1572B6" },
        { name: "UI Design", icon: <FaPalette />, color: "#FF6B6B" },
        { name: "Performance", icon: <FaBolt />, color: "#F7DF1E" }
      ],
      github: "https://github.com/your-username/vision-tech",
      liveDemo: "https://visiontech-three.vercel.app",
      features: [
        "Service showcase",
        "Company mission presentation",
        "Partner statistics display",
        "Clean, minimalistic design"
      ],
      impact: [
        "Professional corporate identity",
        "Increased partnership inquiries",
        "Clear communication of services"
      ],
      icon: <FaEye />,
      color: "#2ecc71",
      category: "Corporate Website",
      status: "Live & Deployed",
      complexity: "Intermediate"
    },
    {
      id: 7,
      title: "W Import & Technology",
      tagline: "SMS Subscription Platform",
      description: "Web application for SMS-based subscription services with user authentication.",
      period: "Development Period",
      technologies: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Authentication", icon: <FaLock />, color: "#FF6B6B" },
        { name: "SMS Integration", icon: <FaSms />, color: "#FFA500" },
        { name: "Mobile-First", icon: <FaMobileAlt />, color: "#7952B3" }
      ],
      github: "https://github.com/your-username/w-import",
      liveDemo: "https://w-import-and-technology.vercel.app",
      features: [
        "Phone number verification via SMS",
        "User authentication system",
        "Subscription management",
        "Free trial period"
      ],
      impact: [
        "Streamlined user onboarding",
        "Increased subscription conversion",
        "Enhanced security"
      ],
      icon: <FaMobileAlt />,
      color: "#9b59b6",
      category: "Web Application",
      status: "Live & Deployed",
      complexity: "Advanced"
    },
    {
      id: 8,
      title: "Star Tech",
      tagline: "WordPress Job Posting & Recruitment Platform",
      description: "A comprehensive WordPress-based job portal and recruitment website with advanced job posting functionality, candidate management, and employer dashboard.",
      period: "Development Period",
      technologies: [
        { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
        { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
        { name: "JavaScript", icon: <FaCode />, color: "#F7DF1E" },
        { name: "CSS3", icon: <FaLaptopCode />, color: "#1572B6" },
        { name: "Responsive", icon: <FaMobileAlt />, color: "#7952B3" }
      ],
      github: "https://github.com/your-username/star-tech",
      liveDemo: "http://startech.great-site.net/",
      secondaryLink: "http://star-tech.website/",
      features: [
        "Advanced job posting system with categories",
        "Employer registration and dashboard",
        "Job seeker profile management",
        "Job application tracking system",
        "Search and filter functionality",
        "Email notifications for applicants",
        "Admin management panel",
        "Responsive mobile-friendly design"
      ],
      impact: [
        "Streamlined recruitment process for tech companies",
        "Reduced hiring time by 40%",
        "Increased applicant engagement by 60%",
        "Improved employer-candidate matching"
      ],
      icon: <FaBriefcase />,
      color: "#FF6B35",
      category: "WordPress Website",
      status: "Live & Deployed",
      complexity: "Advanced"
    }
  ];

  // Filter projects based on selection
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return project.category === 'Full Stack';
    if (filter === 'website') return ['Corporate Website', 'E-Commerce Website', 'Service Website'].includes(project.category);
    if (filter === 'application') return ['Web Application', 'Desktop App'].includes(project.category);
    return true;
  });

  // Open project preview
  const openPreview = (project) => {
    if (project.liveDemo) {
      setPreviewProject(project);
    }
  };

  // Close project preview
  const closePreview = () => {
    setPreviewProject(null);
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">
              <span className="title-number">03</span>
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Real-world solutions with measurable impact
              <span className="subtitle-line"></span>
            </p>
          </div>
          <div className="section-description">
            <p>
              A showcase of my technical projects that solve real problems.
            </p>
          </div>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <FaCode /> All Projects
            </button>
            <button 
              className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setFilter('fullstack')}
            >
              <FaServer /> Full Stack
            </button>
            <button 
              className={`filter-btn ${filter === 'website' ? 'active' : ''}`}
              onClick={() => setFilter('website')}
            >
              <FaDesktop /> Websites
            </button>
            <button 
              className={`filter-btn ${filter === 'application' ? 'active' : ''}`}
              onClick={() => setFilter('application')}
            >
              <FaLaptopCode /> Applications
            </button>
          </div>
          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              ▦
            </button>
            <button 
              className={`view-btn ${viewMode === 'detail' ? 'active' : ''}`}
              onClick={() => setViewMode('detail')}
              title="Detailed View"
            >
              ☰
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ '--color': project.color }}
                onClick={() => {
                  setActiveProject(index);
                  setViewMode('detail');
                }}
              >
                <div className="project-card-header">
                  <div className="project-icon" style={{ background: project.color }}>
                    {project.icon}
                  </div>
                  <div className="project-status" style={{ background: project.color }}>
                    {project.status}
                  </div>
                </div>
                
                <div className="project-card-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  
                  <div className="project-description-short">
                    {project.description.substring(0, 100)}...
                  </div>
                  
                  <div className="project-tech-preview">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <div 
                        key={idx} 
                        className="tech-preview-icon"
                        style={{ color: tech.color }}
                        title={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                  
                  <div className="project-complexity">
                    <div className="complexity-label">Complexity:</div>
                    <div className="complexity-badge">{project.complexity}</div>
                  </div>
                </div>
                
                <div className="project-card-footer">
                  <div className="project-period">{project.period}</div>
                  <button 
                    className="view-details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.liveDemo) {
                        openPreview(project);
                      } else {
                        setActiveProject(index);
                        setViewMode('detail');
                      }
                    }}
                  >
                    {project.liveDemo ? <FaEye /> : <FaArrowRight />}
                    {project.liveDemo ? 'Live Preview' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Detailed View */
          <div className="project-detail-view">
            <div className="project-detail-nav">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.id}
                  className={`project-nav-item ${activeProject === index ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                  style={{ '--color': project.color }}
                >
                  <div className="nav-icon">{project.icon}</div>
                  <span className="nav-title">{project.title}</span>
                </button>
              ))}
              <button 
                className="back-to-grid"
                onClick={() => setViewMode('grid')}
              >
                ← Back to Grid
              </button>
            </div>
            
            <div className="project-detail-content">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`project-detail ${activeProject === index ? 'active' : ''}`}
                  style={{ '--color': project.color }}
                >
                  <div className="detail-header">
                    <div className="detail-icon" style={{ background: project.color }}>
                      {project.icon}
                    </div>
                    <div className="detail-title-section">
                      <div className="detail-meta">
                        <span className="detail-category" style={{ background: project.color }}>
                          {project.category}
                        </span>
                        <span className="detail-status" style={{ background: project.color }}>
                          {project.status}
                        </span>
                      </div>
                      <h2 className="detail-title">{project.title}</h2>
                      <h3 className="detail-tagline">{project.tagline}</h3>
                      <div className="detail-period">{project.period}</div>
                    </div>
                  </div>
                  
                  <div className="detail-body">
                    <div className="detail-section">
                      <h4>Project Overview</h4>
                      <p className="detail-description">{project.description}</p>
                    </div>
                    
                    <div className="detail-grid">
                      <div className="detail-features">
                        <h4><FaCode /> Key Features</h4>
                        <ul className="features-list">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="feature-item">
                              <div className="feature-number">{idx + 1}</div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="detail-impact">
                        <h4><FaRocket /> Impact & Results</h4>
                        <ul className="impact-list">
                          {project.impact.map((impact, idx) => (
                            <li key={idx} className="impact-item">
                              <div className="impact-icon" style={{ background: project.color }}>
                                ✓
                              </div>
                              <span>{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="detail-technologies">
                      <h4>Technology Stack</h4>
                      <div className="tech-stack">
                        {project.technologies.map((tech, idx) => (
                          <div 
                            key={idx} 
                            className="tech-item"
                            style={{ '--tech-color': tech.color }}
                          >
                            <div className="tech-icon" style={{ color: tech.color }}>
                              {tech.icon}
                            </div>
                            <div className="tech-info">
                              <span className="tech-name">{tech.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="detail-links">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link github-link"
                        >
                          <FaGithub /> View Code
                        </a>
                      )}
                      {project.liveDemo && (
                        <button
                          className="project-link demo-link"
                          onClick={() => openPreview(project)}
                        >
                          <FaEye /> Live Preview
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Stats */}
        <div className="projects-stats">
          <div className="stats-card">
            <div className="stats-icon" style={{ background: '#27ae60' }}>
              <FaCode />
            </div>
            <div className="stats-content">
              <h3>7+</h3>
              <p>Completed Projects</p>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon" style={{ background: '#3498db' }}>
              <FaServer />
            </div>
            <div className="stats-content">
              <h3>15+</h3>
              <p>Technologies Used</p>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon" style={{ background: '#9b59b6' }}>
              <FaUsers />
            </div>
            <div className="stats-content">
              <h3>1000+</h3>
              <p>Users Impacted</p>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon" style={{ background: '#e74c3c' }}>
              <FaRocket />
            </div>
            <div className="stats-content">
              <h3>60%</h3>
              <p>Efficiency Improved</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Preview Modal */}
      {previewProject && (
        <ProjectPreview 
          project={previewProject} 
          onClose={closePreview} 
        />
      )}
    </section>
  );
};

export default Projects;