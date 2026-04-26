import React from 'react';

export default function Contact() {
  return (
    <>

    <section id="contact-section">
        <div className="contact-grid">
            <div className="contact-left">
                <span className="contact-eyebrow">// Let's Work Together</span>
                <h2 className="contact-heading">Let's <span>Build</span><br />Something<br />Great.</h2>
                <p className="contact-desc">Have a project in mind? Want to collaborate or just say hi? My inbox is always open. I'll get back to you as fast as possible.</p>
                <div className="contact-links">
                    <a href="mailto:yashtambade56@gmail.com" className="contact-link-item">
                        <div className="contact-link-icon">📧</div>
                        <div className="contact-link-text">
                            <span className="contact-link-label">Email</span>
                            <span className="contact-link-value">yashtambade56@gmail.com</span>
                        </div>
                    </a>
                    <a href="https://github.com/yashtambade56-ux" target="_blank" className="contact-link-item">
                        <div className="contact-link-icon">🐙</div>
                        <div className="contact-link-text">
                            <span className="contact-link-label">GitHub main</span>
                            <span className="contact-link-value">github.com/yashtambade56-ux</span>
                        </div>
                    </a>
                    <a href="https://github.com/Yashhh710" target="_blank" className="contact-link-item">
                        <div className="contact-link-icon">🐙</div>
                        <div className="contact-link-text">
                            <span className="contact-link-label">GitHub 2nd</span>
                            <span className="contact-link-value">github.com/Yashhh710</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/yash-tambade-173508379" target="_blank" className="contact-link-item">
                        <div className="contact-link-icon">💼</div>
                        <div className="contact-link-text">
                            <span className="contact-link-label">LinkedIn</span>
                            <span className="contact-link-value">Yash Tambade</span>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/yashhh.710" target="_blank" className="contact-link-item">
                        <div className="contact-link-icon">📸</div>
                        <div className="contact-link-text">
                            <span className="contact-link-label">Instagram</span>
                            <span className="contact-link-value">@yashhh.710</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="contact-right" style={{ display: "flex", flexDirection: "column", gap: "30px", width: "100%", height: "100%" }}>
            <div className="contact-form-wrap">
                <h3 className="form-title">Send a <span>Message</span></h3>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-input" id="form-name" placeholder="Yash Tambade" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Your Email</label>
                        <input type="email" className="form-input" id="form-email" placeholder="yash@example.com" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-input" id="form-subject" placeholder="Project Collaboration" />
                </div>
                <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" id="form-message" placeholder="Hey Yash, I have a project idea..."></textarea>
                </div>
                <button className="form-submit" id="form-submit">Send Message</button>
                <div className="form-success" id="form-success">
                    <p>✅ Message sent! I'll get back to you soon.</p>
                </div>
            </div>
            <button className="cube-btn" id="form-alt-btn">Schedule a Call</button>
            </div>
        </div>
    </section>

    
    </>
  );
}
