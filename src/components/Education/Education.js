import React, { useEffect, useRef } from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendarAlt, FaTrophy, FaUsers, FaLightbulb, FaHeart, FaProjectDiagram } from 'react-icons/fa';

const Education = () => {
  const cardRef = useRef(null);
  const statRefs = useRef([]);
  const achievementRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats with delay
            statRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.style.animationPlayState = 'running';
                }, index * 200);
              }
            });

            // Animate achievements with delay
            achievementRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.style.animation = 'slideInRight 0.5s ease-out forwards';
                  ref.style.animationDelay = `${1.4 + index * 0.1}s`;
                }, 600 + index * 100);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: <FaUsers />, text: "Member of Charity Committee (Executive Committee - Blood Donation Section)", color: "#e74c3c" },
    { icon: <FaHeart />, text: "DAAP Training Participant and Peer Helper", color: "#3498db" },
    { icon: <FaLightbulb />, text: "Entrepreneurship Training at R&D Group", color: "#f39c12" },
    { icon: <FaTrophy />, text: "Active participation in University Exhibitions and Innovation Center", color: "#2ecc71" },
    { icon: <FaProjectDiagram />, text: "Developed multiple real-world projects addressing community needs", color: "#9b59b6" }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p className="section-subtitle">Academic background and achievements</p>
        </div>
        
        <div className="education-card" ref={cardRef}>
          {/* Animated Progress Circle */}
          <div className="progress-circle"></div>
          
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
              <span>June 2021 - June 2025 • 4 Years • Undergraduate</span>
            </div>
          </div>
          
          <div className="education-stats">
            <div 
              className="stat-item"
              ref={el => statRefs.current[0] = el}
            >
              <div className="stat-value">3.81</div>
              <div className="stat-label">Cumulative GPA</div>
              <div className="stat-subtext">Outstanding Academic Performance</div>
            </div>
            
            <div 
              className="stat-item"
              ref={el => statRefs.current[1] = el}
            >
              <div className="stat-value">85%</div>
              <div className="stat-label">Exit Exam Score</div>
              <div className="stat-subtext">Top Performance in National Exam</div>
            </div>
          </div>
          
          <div className="education-achievements">
            <h4>🏆 Key Achievements & Activities</h4>
            <ul>
              {achievements.map((achievement, index) => (
                <li 
                  key={index}
                  ref={el => achievementRefs.current[index] = el}
                  style={{
                    borderLeft: `4px solid ${achievement.color}`,
                    animationDelay: `${1.4 + index * 0.1}s`
                  }}
                >
                  <div className="achievement-icon" style={{ color: achievement.color }}>
                    {achievement.icon}
                  </div>
                  <span>{achievement.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="additional-info">
              <div className="info-item">
                <span className="info-label">Degree Type:</span>
                <span className="info-value">Regular Undergraduate</span>
              </div>
              <div className="info-item">
                <span className="info-label">Graduation:</span>
                <span className="info-value">June 2025</span>
              </div>
              <div className="info-item">
                <span className="info-label">Focus Areas:</span>
                <span className="info-value">Software Engineering, Web Development, Database Systems</span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="decoration-element deco-1">🚀</div>
          <div className="decoration-element deco-2">💡</div>
          <div className="decoration-element deco-3">🎯</div>
        </div>
      </div>
    </section>
  );
};

export default Education;