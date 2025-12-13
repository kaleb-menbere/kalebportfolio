import React, { useRef } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Note: You'll need to sign up at https://www.emailjs.com/ to get these IDs
    // For now, we'll just show an alert and reset the form
    alert('Thank you for your message! This contact form is in demo mode. To make it functional, please set up EmailJS.');
    e.target.reset();
    
    // Uncomment this when you have EmailJS set up:
    /*
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });
    */
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p className="section-subtitle">Let's build something amazing together</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>kaleb.menbere@example.com</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>+251 9xx xxx xxx</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="6" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;