import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBars, FaTimes, FaCode, FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <FaLaptopCode className="logo-icon" />
            <span className="logo-text">
              <span className="logo-first">KALEB</span>
              <span className="logo-second">MENBERE</span>
            </span>
          </div>
          
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-text">{item.name}</span>
                <span className="nav-dot"></span>
              </Link>
            ))}
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
      
      {/* Animated background elements */}
      <div className="header-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
    </header>
  );
};

export default Header;