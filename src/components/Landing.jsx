import React from 'react';

export default function Landing() {
  return (
    <>

    <section id="landing-section">
        <div className="sun-container"><div className="sun"></div></div>
        <canvas id="smokeCanvas" />
        <div className="image-wrapper" id="container">
            <img src="mainimg.png" className="base-layer" alt="Base" />
            <img src="mainbg1.png" id="revealImg" className="reveal-layer" alt="Reveal" />
        </div>
        <div className="scroll-hint">
            <div className="scroll-line"></div>
            <span>Scroll</span>
        </div>
    </section>

    
    </>
  );
}
