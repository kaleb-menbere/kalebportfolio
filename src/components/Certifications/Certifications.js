import React, { useEffect, useRef, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import { SiMeta, SiGoogle, SiCoursera } from 'react-icons/si';

const certifications = [
  // ... your certifications array (same as above)
];

const Certifications = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create a ref to track if component is mounted
    let isMounted = true;
    // Store the current element
    const element = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isMounted) {
            // Trigger animations
            certifications.forEach((_, index) => {
              setTimeout(() => {
                if (isMounted) {
                  setVisibleCards((prev) => [...prev, index]);
                }
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, once: true } // 'once: true' is also useful here
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      isMounted = false;
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, []);

  const getIconColor = (issuer) => {
    switch (issuer) {
      case 'Meta':
        return { background: 'linear-gradient(135deg, #1877F2, #4267B2)', icon: <SiMeta /> };
      case 'Google':
        return { background: 'linear-gradient(135deg, #4285F4, #34A853)', icon: <SiGoogle /> };
      default:
        return { background: 'linear-gradient(135deg, #3498db, #2c3e50)', icon: <SiCoursera /> };
    }
  };

  return (
    <section id="certifications" className="section certifications" ref={sectionRef}>
      {/* Rest of your JSX remains the same */}
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p className="section-subtitle">Professional credentials and continuous learning achievements</p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const iconStyle = getIconColor(cert.issuer);
            const isVisible = visibleCards.includes(index);
            
            return (
              <div 
                key={cert.id} 
                className={`certification-card ${isVisible ? 'visible' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderLeftColor: cert.issuer === 'Meta' ? '#1877F2' : 
                                 cert.issuer === 'Google' ? '#4285F4' : '#3498db'
                }}
              >
                <div className="certification-header">
                  <div 
                    className="certification-icon"
                    style={{ background: iconStyle.background }}
                  >
                    {cert.icon}
                  </div>
                  <div className="certification-info">
                    <h3 className="certification-title">{cert.title}</h3>
                    <span className="certification-issuer">{cert.issuer}</span>
                  </div>
                </div>
                
                <div className="certification-details">
                  <div className="certification-date">
                    <FaCalendarAlt />
                    <span>Issued: {cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="certification-id">
                      <FaIdCard style={{ marginRight: '8px' }} />
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  <FaExternalLinkAlt /> View Certificate
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;