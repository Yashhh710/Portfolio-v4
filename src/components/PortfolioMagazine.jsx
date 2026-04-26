import React from 'react';

export default function PortfolioMagazine() {
  return (
    <>

    <section id="portfolio-section">
        <div className="magazine-frame">
            <div className="col-left">
                <div className="glass-card name-card">
                    <h2>Portfolio - 2026</h2><br />
                    <h1>Yash Tambade</h1>
                </div>
                <div className="glass-card quote-card">
                    <div className="stack-header">Some of My Skills</div>
                    <div className="stack-tags">
                        <span>Drawing</span><span>Graphic Design</span><span>UI/UX</span>
                        <span>HTML / CSS</span><span>JavaScript</span><span>React</span>
                        <span>C++</span><span>Problem Solving</span><span>Sketching</span>
                    </div>
                </div>
                <div className="social-area">
                    <a href="#projects-section" className="social-btn">SEE MY WORK</a>
                    <a href="#contact-section" className="social-btn alt">CONNECT WITH ME</a>
                </div>
            </div>
            <div className="col-mid">
                <div className="glass-card bio-card">
                    I am Yash, a creative and curious learner who enjoys exploring both coding and design. I like building web development projects using HTML, CSS, and JavaScript, and I enjoy experimenting with UI/UX ideas to make interfaces more interactive and visually appealing. I also have skills in drawing and graphic design, where I express my creativity through sketches, digital designs, and visual concepts. I'm continuously improving my technical skills like data structures and JavaScript.
                </div>
                <div className="main-orange-card">
                    <div className="card-nav"><span>HOME</span><span>STORY</span><span>GALLERY</span><span>PICTURE</span></div>
                    <div className="main-title">AND THIS<br />IS ME</div>
                    <div className="preview-grid">
                        <div className="p-box"><img src="1imgme.png" alt="me 1" /></div>
                    </div>
                    <img src="me.png" alt="Profile" className="profile-img-land" id="profile-img" />
                </div>
            </div>
            <div className="col-right">
                <div className="glass-card astral-card">
                    <div className="astral-header">SOCIAL LINKS</div>
                    <div className="astral-links">
                        <a href="https://github.com/yashtambade56-ux" target="_blank">GITHUB MAIN</a>
                        <a href="https://github.com/Yashhh710" target="_blank">GITHUB 2ND</a>
                        <a href="https://www.linkedin.com/in/yash-tambade-173508379" target="_blank">LINKEDIN</a>
                        <a href="https://www.instagram.com/yashhh.710" target="_blank">INSTAGRAM</a>
                    </div>
                </div>
                <div className="hud-grid">
                    <div className="hud-item"><span>🎨 GRAPHIC</span>88%</div>
                    <div className="hud-item"><span>💻 FRONT-END</span>82%</div>
                    <div className="hud-item"><span>🧠 LOGIC</span>75%</div>
                    <div className="hud-item"><span>✏️ SKETCHING</span>78%</div>
                </div>
                <div className="glass-card final-quote-card">
                    <div className="clock-container">
                        <div className="digital-readout" id="digital-clock">00:00:00</div>
                        <div className="clock-center"></div>
                        <div className="hand hour-hand" id="hour"></div>
                        <div className="hand min-hand" id="minute"></div>
                        <div className="hand sec-hand" id="second"></div>
                        <div className="clock-mark" style={{ transform: "rotate(0deg)" }}></div>
                        <div className="clock-mark" style={{ transform: "rotate(90deg)" }}></div>
                        <div className="clock-mark" style={{ transform: "rotate(180deg)" }}></div>
                        <div className="clock-mark" style={{ transform: "rotate(270deg)" }}></div>
                    </div>
                </div>
            </div>
            <img src="idcard.png" alt="ID Card" className="id-card-float" id="scrollIdCard" />
        </div>
    </section>

    
    </>
  );
}
