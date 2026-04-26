import React from 'react';

export default function Craft() {
  return (
    <>

    <section id="craft-section">
        <div className="about-grid">
            <div className="about-image">
                <img src="https://i.pinimg.com/736x/67/20/14/6720147c01699f8148dbcfe1d7e4543e.jpg" alt="About Me" />
            </div>
            <div className="about-content">
                <div className="about-title">About <span>Me</span></div>
                <p>I am a creative developer who builds modern, interactive, and visually engaging web experiences with a sharp eye for design.</p>
                <p>I focus on clean UI, smooth animations, and performance-driven design — turning ideas into polished, real-world products.</p>
                <div className="about-skills">
                    <div className="about-skill">Frontend Development</div>
                    <div className="about-skill">UI / UX Design</div>
                    <div className="about-skill">Creative Animations</div>
                    <div className="about-skill">Graphic Design</div>
                    <div className="about-skill">C++ & DSA</div>
                    <div className="about-skill">Portfolio Design</div>
                </div>
            </div>
        </div>
        <div className="services-wrap">
            <h2>What I <span>Do</span></h2>
            <div className="services-grid">
                <div className="service-item">
                    <h3>Frontend Dev</h3>
                    <p>Modern responsive websites with clean UI, pixel-perfect layouts and high performance using HTML, CSS, JavaScript & React.</p>
                </div>
                <div className="service-item">
                    <h3>UI / UX Design</h3>
                    <p>User-friendly, intuitive interfaces that balance beauty with function — designed in Figma and brought to life in code.</p>
                </div>
                <div className="service-item">
                    <h3>Creative Animations</h3>
                    <p>Smooth motion, GSAP-powered scroll effects, and micro-interactions that make interfaces feel truly alive.</p>
                </div>
                <div className="service-item">
                    <h3>Graphic Design</h3>
                    <p>Posters, branding visuals, and digital art with strong composition, color theory and drawing skills.</p>
                </div>
                <div className="service-item">
                    <h3>Problem Solving</h3>
                    <p>Data structures and algorithmic thinking in C++, applied to building efficient, logical solutions.</p>
                </div>
                <div className="service-item">
                    <h3>Full Stack Ideas</h3>
                    <p>Rapid prototyping with Firebase backend, API integration and interactive dashboards brought to life.</p>
                </div>
            </div>
        </div>
    </section>

    
    </>
  );
}
