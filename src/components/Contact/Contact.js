import React, { useState } from 'react';
import './Contact.css';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaWhatsapp, 
  FaGithub, 
  FaCalendarAlt,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('professional');

  // Your actual contact information
  const contactInfo = {
    email: 'kalebmenbere@gmail.com',
    phone: '+251 97 695 7649',
    whatsapp: '+251976957649',
    location: 'Addis Ababa, Ethiopia',
    timezone: 'EAT (UTC+3)',
    
    // Professional profiles
    linkedin: 'https://linkedin.com/in/kalebmenbere',
    github: 'https://github.com/kalebmenbere',
    github1: 'https://github.com/kaleb-menbere',
    
    // Optional coding profiles
    leetcode: 'https://leetcode.com/kalebmenbere',
    
    // Scheduling - consider setting this up later
    calendly: '#'
  };

  const sendEmail = () => {
    window.location.href = `mailto:${contactInfo.email}?subject=Portfolio%20Inquiry`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Kaleb, I saw your portfolio and wanted to connect...");
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const openCalendly = () => {
    if (contactInfo.calendly !== '#') {
      window.open(contactInfo.calendly, '_blank');
    } else {
      // Fallback to email if Calendly not set up
      sendEmail();
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            <FaMapMarkerAlt /> {contactInfo.location} • {contactInfo.timezone}
            <span className="timezone-badge">Available for Remote Work</span>
          </p>
        </div>

        {/* Contact Method Tabs */}
        <div className="contact-tabs">
          <button 
            className={`tab-btn ${activeTab === 'professional' ? 'active' : ''}`}
            onClick={() => setActiveTab('professional')}
          >
            <FaEnvelope /> Email & Professional
          </button>
          <button 
            className={`tab-btn ${activeTab === 'quick' ? 'active' : ''}`}
            onClick={() => setActiveTab('quick')}
          >
            <FaWhatsapp /> Quick Connect
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <FaGithub /> Tech Profiles
          </button>
        </div>

        {/* Professional Contact (Default Tab) */}
        {activeTab === 'professional' && (
          <div className="contact-cards-grid">
            <div className="contact-card primary" onClick={sendEmail}>
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>{contactInfo.email}</p>
              <div className="contact-meta">
                <span className="badge">Best for detailed discussions</span>
              </div>
              <button className="card-action-btn">
                Compose Email
              </button>
            </div>

            <div className="contact-card" onClick={() => window.open(contactInfo.linkedin, '_blank')}>
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p>View my professional experience</p>
              <div className="contact-meta">
                <span className="badge">Career network</span>
              </div>
              <button className="card-action-btn">
                Connect on LinkedIn
              </button>
            </div>

            <div className="contact-card" onClick={openCalendly}>
              <div className="contact-icon">
                <FaCalendarAlt />
              </div>
              <h3>Schedule a Call</h3>
              <p>Let's discuss opportunities</p>
              <div className="contact-meta">
                <span className="badge">30-minute consultation</span>
              </div>
              <button className="card-action-btn">
                {contactInfo.calendly === '#' ? 'Contact via Email' : 'Book Meeting'}
              </button>
            </div>
          </div>
        )}

        {/* Quick Chat Tab */}
        {activeTab === 'quick' && (
          <div className="contact-cards-grid">
            <div className="contact-card" onClick={openWhatsApp}>
              <div className="contact-icon whatsapp">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>{contactInfo.phone}</p>
              <div className="contact-meta">
                <span className="badge">Fast response</span>
              </div>
              <button className="card-action-btn">
                Message on WhatsApp
              </button>
            </div>

            <div className="contact-card" onClick={sendEmail}>
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Direct Email</h3>
              <p>For formal inquiries</p>
              <div className="contact-meta">
                <span className="badge">Professional correspondence</span>
              </div>
              <button className="card-action-btn">
                Send Email
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <h3>Phone Call</h3>
              <p>{contactInfo.phone}</p>
              <div className="contact-meta">
                <span className="badge">Voice or SMS</span>
              </div>
              <button className="card-action-btn" onClick={() => window.location.href = `tel:${contactInfo.phone}`}>
                Call or Text
              </button>
            </div>
          </div>
        )}

        {/* Tech Profiles Tab */}
        {activeTab === 'tech' && (
          <div className="contact-cards-grid">
            <div className="contact-card" onClick={() => window.open(contactInfo.github, '_blank')}>
              <div className="contact-icon github">
                <FaGithub />
              </div>
              <h3>GitHub Portfolio</h3>
              <p>View my code and projects</p>
              <div className="contact-meta">
                <span className="badge">Open source contributions</span>
              </div>
              <button className="card-action-btn">
                Explore My Code
              </button>
            </div>

            <div className="contact-card" onClick={() => window.open(contactInfo.github1, '_blank')}>
              <div className="contact-icon github">
                <FaGithub />
              </div>
              <h3>GitHub Portfolio2</h3>
              <p>View my code and projects</p>
              <div className="contact-meta">
                <span className="badge">Open source contributions</span>
              </div>
              <button className="card-action-btn">
                Explore My Code
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaGlobe />
              </div>
              <h3>Online Portfolio</h3>
              <p>This website & projects</p>
              <div className="contact-meta">
                <span className="badge">Full-stack development</span>
              </div>
              <button className="card-action-btn" onClick={() => window.location.href = '/#projects'}>
                View My Work
              </button>
            </div>
          </div>
        )}

        {/* Clear Call to Action */}
        <div className="contact-cta">
          <h3>Ready to Work Together?</h3>
          <p>I'm currently available for freelance projects and full-time opportunities.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={sendEmail}>
              <FaEnvelope /> Email Me Now
            </button>
            <button className="btn-secondary" onClick={openWhatsApp}>
              <FaWhatsapp /> WhatsApp Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;