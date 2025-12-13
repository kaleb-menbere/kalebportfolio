import React from 'react';
import './About.css';
import { FaUser, FaGraduationCap, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p className="section-subtitle">Passionate developer focused on creating impactful solutions</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>I build solutions that matter</h3>
            <p>
              I am a dedicated web developer specializing in building modern, scalable applications 
              using <strong>React, Django, and RESTful APIs</strong>. My core strength is translating 
              complex requirements into clean, efficient, and production-ready solutions.
            </p>
            <p>
              With strong Python expertise, I create robust backend systems, seamless API integrations, 
              and secure, high-performance web services. I approach every project with a focus on 
              reliability, code quality, and long-term maintainability.
            </p>
            <p>
              Beyond coding, I'm passionate about community service and have dedicated significant time 
              to helping students and community members through various initiatives at Dilla University.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaUser />
              </div>
              <h4>Professional Focus</h4>
              <p>Full-stack development with expertise in React frontend and Django backend systems</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>
              <h4>Educational Background</h4>
              <p>BSc in Computer Science from Dilla University, graduating with a 3.81 CGPA and 85% exit exam score</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaBullseye />
              </div>
              <h4>Mission</h4>
              <p>To create technology solutions that solve real-world problems and improve lives in my community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;