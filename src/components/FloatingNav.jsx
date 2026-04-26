import React from 'react';

export default function FloatingNav() {
  return (
    <>

    <nav id="floating-nav">
        <a href="#landing-section" className="nav-logo">YASH</a>
        <button className="nav-menu-btn" id="menu-toggle">☰</button>
        <a href="#landing-section" className="nav-link active">Home</a>
        <a href="#craft-section" className="nav-link">About</a>
        <a href="#skills-section" className="nav-link">sKILLS</a>
        <a href="#timeline-section" className="nav-link">Journey</a>
        <a href="#projects-section" className="nav-link">Work</a>
        <a href="#contact-section" className="nav-link">Contact</a>
        <a href="#contact-section" className="nav-cta">Hire Me</a>
    </nav>

    
    </>
  );
}
