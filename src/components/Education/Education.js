import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendarAlt, FaStar } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p className="section-subtitle">Academic background and achievements</p>
        </div>
        
        <div className="education-card">
          <div className="education-header">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-info">
              <h3>Bachelor of Science in Computer Science</h3>
              <h4>Dilla University</h4>
            </div>
          </div>
          
          <div className="education-details">
            <div className="detail-item">
              <FaCalendarAlt />
              <span>June 2021 - June 2025</span>
            </div>
          </div>
          
          <div className="education-stats">
            <div className="stat-item">
              <div className="stat-value">3.81</div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">85%</div>
              <div className="stat-label">Exit Exam Score</div>
            </div>
          </div>
          
          <div className="education-achievements">
            <h4>Key Achievements & Activities:</h4>
            <ul>
              <li><FaStar /> Member of Charity Committee (Executive Committee - Blood Donation Section)</li>
              <li><FaStar /> DAAP Training Participant and Peer Helper</li>
              <li><FaStar /> Entrepreneurship Training at R&D Group</li>
              <li><FaStar /> Active participation in University Exhibitions and Innovation Center</li>
              <li><FaStar /> Developed multiple real-world projects addressing community needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;   