import React from 'react';

export default function ScrollIntro() {
  return (
    <>

    <section className="si-section" id="scroll-intro-section">
        <div className="si-bg-stack" id="si-bg-stack">
            <div className="si-bg-layer" style={{ backgroundImage: `url(${"https://i.pinimg.com/736x/e6/95/88/e69588cea343ad7033d13f1bf282ed9d.jpg"})` }}></div>
            <div className="si-bg-layer" style={{ backgroundImage: `url(${"https://i.pinimg.com/736x/82/6b/54/826b5474ac2b1d0796926894c2927489.jpg"})` }}></div>
            <div className="si-bg-layer" style={{ backgroundImage: `url(${"https://i.pinimg.com/736x/a0/00/4f/a0004fd7b0c994bff21dc53f52b9c503.jpg"})` }}></div>
            <div className="si-bg-layer" style={{ backgroundImage: `url(${"https://i.pinimg.com/736x/bb/cc/9d/bbcc9dd12f8853ddd37922e1003d913d.jpg"})` }}></div>
        </div>
        <div className="si-vignette"></div>
        <div className="si-glow" id="si-glow"></div>
        <div className="si-words-container">
            <div className="si-word">CREATIVE</div>
            <div className="si-word">DEVELOPER</div>
            <div className="si-word">DESIGNER</div>
            <div className="si-word">BUILDER</div>
        </div>
    </section>

    
    </>
  );
}
