import React, { useEffect, useRef } from 'react';
import './About.css';
import { FaUser, FaGraduationCap, FaBullseye, FaCode, FaDatabase, FaUsers } from 'react-icons/fa';

const About = () => {
  const aboutRef = useRef(null);
  const highlightsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe text paragraphs
    const textElements = aboutRef.current?.querySelectorAll('.about-text p');
    textElements?.forEach((el) => observer.observe(el));

    // Observe highlight cards
    highlightsRef.current?.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about" ref={aboutRef}>
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p className="section-subtitle">Passionate developer focused on creating impactful solutions</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>I build solutions that matter</h3>
            <p>
              I am a dedicated <strong>full-stack developer</strong> specializing in building modern, 
              scalable applications using <strong>React, Django, and RESTful APIs</strong>. My core strength 
              is translating complex requirements into clean, efficient, and production-ready solutions.
            </p>
            <p>
              With strong <strong>Python expertise</strong>, I create robust backend systems, seamless 
              API integrations, and secure, high-performance web services. I approach every project 
              with a focus on reliability, code quality, and long-term maintainability.
            </p>
            <p>
              Beyond coding, I'm passionate about <strong>community service</strong> and have dedicated 
              significant time to helping students and community members through various initiatives 
              at Dilla University, fostering both technical and personal growth.
            </p>
          </div>
          
          <div className="about-highlights">
            <div 
              className="highlight-card"
              ref={el => highlightsRef.current[0] = el}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="highlight-icon">
                <FaUser />
              </div>
              <h4>Professional Focus</h4>
              <p>Full-stack development with expertise in React frontend and Django backend systems, delivering scalable web applications</p>
            </div>
            
            <div 
              className="highlight-card"
              ref={el => highlightsRef.current[1] = el}
              style={{ animationDelay: '0.6s' }}
            >
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>
              <h4>Academic Excellence</h4>
              <p>BSc in Computer Science from Dilla University, graduating with a 3.81 CGPA and 85% exit exam score</p>
            </div>
            
            <div 
              className="highlight-card"
              ref={el => highlightsRef.current[2] = el}
              style={{ animationDelay: '0.9s' }}
            >
              <div className="highlight-icon">
                <FaBullseye />
              </div>
              <h4>Mission & Vision</h4>
              <p>To create technology solutions that solve real-world problems and improve lives in my community</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="highlight-stats">
          <div className="stat-item">
            <div className="stat-number">3.81</div>
            <div className="stat-label">CGPA</div>
            <FaGraduationCap style={{ marginTop: '10px', color: '#3498db', fontSize: '1.5rem' }} />
          </div>
          <div className="stat-item">
            <div className="stat-number">85%</div>
            <div className="stat-label">Exit Exam</div>
            <FaCode style={{ marginTop: '10px', color: '#2ecc71', fontSize: '1.5rem' }} />
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects</div>
            <FaDatabase style={{ marginTop: '10px', color: '#e74c3c', fontSize: '1.5rem' }} />
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Hours Volunteered</div>
            <FaUsers style={{ marginTop: '10px', color: '#9b59b6', fontSize: '1.5rem' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;