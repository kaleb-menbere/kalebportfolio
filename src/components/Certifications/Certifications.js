import React from 'react';
import './Certifications.css';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMeta, SiGoogle, SiCoursera } from 'react-icons/si';

const certifications = [
  {
    id: 1,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Apr 2024",
    credentialId: "Z9CLBJSF34UV",
    link: "https://www.coursera.org/account/accomplishments/records/Z9CLBJSF34UV",
    icon: <SiMeta />
  },
  {
    id: 2,
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google",
    date: "Nov 2023",
    credentialId: "G6NDQP6JWGQM",
    link: "https://www.coursera.org/account/accomplishments/records/G6NDQP6JWGQM",
    icon: <SiGoogle />
  },
  {
    id: 3,
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "Nov 2023",
    credentialId: "HAGZ5YKJBPX7",
    link: "https://www.coursera.org/account/accomplishments/certificate/HAGZ5YKJBPX7",
    icon: <SiGoogle />
  },
  {
    id: 4,
    title: "Introduction to Android Mobile Application Development",
    issuer: "Meta",
    date: "Nov 2023",
    credentialId: "MLAFZPDWXY4E",
    link: "https://www.coursera.org/account/accomplishments/records/MLAFZPDWXY4E",
    icon: <SiMeta />
  },
  {
    id: 5,
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    date: "Nov 2023",
    credentialId: "5ZUGDSXKKRDR",
    link: "https://www.coursera.org/account/accomplishments/certificate/5ZUGDSXKKRDR",
    icon: <SiGoogle />
  },
  {
    id: 6,
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    date: "Nov 2023",
    credentialId: null,
    link: "https://coursera.org/share/f48b809ce71abda54043d59672506bc9",
    icon: <SiCoursera />
  },
  {
    id: 7,
    title: "Version Control",
    issuer: "Meta",
    date: "Nov 2023",
    credentialId: "8MGSAUU9ZSGV",
    link: "https://www.coursera.org/account/accomplishments/records/8MGSAUU9ZSGV",
    icon: <SiMeta />
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p className="section-subtitle">Professional credentials and continuous learning</p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  {cert.icon}
                </div>
                <div className="certification-info">
                  <h3 className="certification-title">{cert.title}</h3>
                  <h4 className="certification-issuer">{cert.issuer}</h4>
                </div>
              </div>
              
              <div className="certification-details">
                <div className="certification-date">
                  <FaCertificate />
                  <span>Issued: {cert.date}</span>
                </div>
                {cert.credentialId && (
                  <div className="certification-id">
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certification-link"
              >
                <FaExternalLinkAlt /> View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;