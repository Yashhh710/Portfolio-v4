import React from 'react';

export default function Skills() {
  return (
    <>

    <section id="skills-section">
        <h2 className="skills-title">Technical Arsenal</h2>
        <div className="skills-marquee-row marquee-left">
            <div className="skills-marquee-content">
                <span>HTML5 / CSS3</span> • <span>JAVASCRIPT</span> • <span>RESPONSIVE DESIGN</span> • <span>CSS ANIMATIONS</span> • <span>GSAP</span> • <span>THREE.JS</span> • <span>PERFORMANCE</span> •
            </div>
            <div className="skills-marquee-content">
                <span>HTML5 / CSS3</span> • <span>JAVASCRIPT</span> • <span>RESPONSIVE DESIGN</span> • <span>CSS ANIMATIONS</span> • <span>GSAP</span> • <span>THREE.JS</span> • <span>PERFORMANCE</span> •
            </div>
        </div>
        <div className="skills-marquee-row marquee-right">
            <div className="skills-marquee-content">
                <span>GRAPHIC DESIGN</span> • <span>DRAWING</span> • <span>UI DESIGN</span> • <span>COLOR THEORY</span> • <span>LAYOUT DESIGN</span> • <span>POSTER DESIGN</span> • <span>UI/UX</span> •
            </div>
            <div className="skills-marquee-content">
                <span>GRAPHIC DESIGN</span> • <span>DRAWING</span> • <span>UI DESIGN</span> • <span>COLOR THEORY</span> • <span>LAYOUT DESIGN</span> • <span>POSTER DESIGN</span> • <span>UI/UX</span> •
            </div>
        </div>
        <div className="skills-marquee-row marquee-left">
            <div className="skills-marquee-content">
                <span>C++ PROGRAMMING</span> • <span>DATA STRUCTURES</span> • <span>PROBLEM SOLVING</span> • <span>GIT & GITHUB</span> • <span>FIGMA</span> • <span>FIREBASE</span> • <span>VS CODE</span> •
            </div>
            <div className="skills-marquee-content">
                <span>C++ PROGRAMMING</span> • <span>DATA STRUCTURES</span> • <span>PROBLEM SOLVING</span> • <span>GIT & GITHUB</span> • <span>FIGMA</span> • <span>FIREBASE</span> • <span>VS CODE</span> •
            </div>
        </div>
        <div className="terminal-container">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="dot red"></div><div className="dot yellow"></div><div className="dot green"></div>
                </div>
                <div className="terminal-body" id="termBody">
                    <div id="termContent" className="terminal-content"></div>
                    <span className="t-cursor"></span>
                    <div className="terminal-controls" id="termControls">
                        <button id="runTerminalBtn" className="terminal-btn">Show Details</button>
                        <p className="terminal-status">System: Ready to execute</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    </>
  );
}
