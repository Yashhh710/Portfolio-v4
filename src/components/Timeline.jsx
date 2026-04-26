import React from 'react';

export default function Timeline() {
  return (
    <>

    <section id="timeline-section">
        <div className="section-intro">
            <h2 className="timeline-header" id="main-title">My Journey of coding</h2>
            <p>From basics to building real experiences..</p>
        </div>
        <div className="timeline-container">
            <div className="svg-container">
                <svg id="path-svg" viewBox="0 0 1000 4500" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff4d00"/>
                            <stop offset="100%" stopColor="#ff8c00"/>
                        </linearGradient>
                    </defs>
                    <path className="base-path" d="M500,0 C560,500 440,1000 500,1500 C560,2000 440,2500 500,3000 C560,3500 440,4000 500,4500"/>
                    <path id="main-path" className="drawing-path" d="M500,0 C560,500 440,1000 500,1500 C560,2000 440,2500 500,3000 C560,3500 440,4000 500,4500"/>
                    <circle id="follower" className="path-follower" r="8" cx="0" cy="0"/>
                </svg>
            </div>
            <div className="timeline-item item-left">
                <div className="timeline-content">
                    <span className="timeline-year">2025</span>
                    <h2>The Beginning</h2>
                    <p>Started my coding journey with HTML & CSS, building a strong foundation in web structure and styling.</p>
                </div>
            </div>
            <div className="timeline-item item-right">
                <div className="timeline-content">
                    <span className="timeline-year">2025</span>
                    <h2>Diving Deeper</h2>
                    <p>Built my first website, understanding layouts, responsiveness, and real-world implementation.</p>
                </div>
            </div>
            <div className="timeline-item item-left">
                <div className="timeline-content">
                    <span className="timeline-year">2025</span>
                    <h2>Advanced Frameworks</h2>
                    <p>Focused on logic and problem-solving, learning C++ and Data Structures alongside JavaScript fundamentals.</p>
                </div>
            </div>
            <div className="timeline-item item-right">
                <div className="timeline-content">
                    <span className="timeline-year">2026</span>
                    <h2>Creative Developer</h2>
                    <p>Began creating interactive UI components and animations, exploring modern frontend and UX design principles.</p>
                </div>
            </div>
            <div className="timeline-item item-center">
                <div className="timeline-content" id="final-box">
                    <span className="timeline-year">PRESENT</span>
                    <h2>What's Next?</h2>
                    <p>Building creative and real-world projects, improving performance, design, and development skills.</p>
                </div>
            </div>
        </div>
    </section>

    
    </>
  );
}
