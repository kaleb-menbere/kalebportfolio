import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Animated particles background */}
      <div className="footer-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">KM</span>
            <p className="footer-tagline">
              Building the future, one line of code at a time
            </p>
            <div className="footer-extra">
              <span className="extra-item">
                <FaCode className="icon-code" /> Full-Stack Developer
              </span>
              <span className="extra-item">
                🔥 Passionate about Innovation
              </span>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#hero">
                  <FaArrowRight className="icon-arrow" /> Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <FaArrowRight className="icon-arrow" /> About
                </a>
              </li>
              <li>
                <a href="#experience">
                  <FaArrowRight className="icon-arrow" /> Experience
                </a>
              </li>
              <li>
                <a href="#projects">
                  <FaArrowRight className="icon-arrow" /> Projects
                </a>
              </li>
              <li>
                <a href="#education">
                  <FaArrowRight className="icon-arrow" /> Education
                </a>
              </li>
              <li>
                <a href="#contact">
                  <FaArrowRight className="icon-arrow" /> Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a 
                href="https://github.com/kaleb-menbere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github-link"
                aria-label="GitHub Profile"
              >
                <FaGithub className="social-icon" />
                <span className="tooltip">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/kalebmenbere" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="social-icon" />
                <span className="tooltip">LinkedIn</span>
              </a>
            </div>
            <div className="social-info">
              <p>Let's build something amazing together!</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Kaleb Menbere. All rights reserved.
            <br />
            Crafted with <FaHeart className="heart-beat" /> in Ethiopia 
            <span className="country-flag" role="img" aria-label="Ethiopia">🇪🇹</span>
          </p>
          <div className="footer-credits">
            <small>Built with React & lots of ☕</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;