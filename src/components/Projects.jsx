import React from 'react';

export default function Projects() {
  return (
    <>

    <section id="projects-section">
        <canvas id="ember-canvas" />
        <div className="arcane-title-wrap">
            <h2 className="arcane-title">Such Things which I Built</h2>
            <p className="arcane-subtitle">These are not just projects, but a collection of ideas I imagined, designed, and built step by step to turn creativity into functional and meaningful web experiences.</p>
        </div>

        <div className="card-deck">
            <div className="tcg-card">
                <div className="card-header">
                    <h3>ATMOS WEATHER WEB</h3>
                    <span className="card-type">Epic</span>
                </div>
                <div className="card-art">
                    <img src="porject1.png" alt="Tech" />
                </div>
                <div className="card-body">
                    A modern weather experience that transforms real-time forecasts into a clean, minimal, and interactive interface designed for clarity, speed, and beautiful visuals.
                </div>
                <div className="card-footer">
                    <a href="https://github.com/Yashhh710/ATMOS-WEATHER-WEB" className="btn btn-github" target="_blank" rel="noopener noreferrer">Code</a>
                    <a href="https://yashhh710.github.io/ATMOS-WEATHER-WEB/" className="btn btn-live" target="_blank" rel="noopener noreferrer">Live</a>
                </div>
            </div>

            <div className="tcg-card">
                <div className="card-header">
                    <h3>Foodie Express</h3>
                    <span className="card-type">Rare</span>
                </div>
                <div className="card-art">
                    <img src="porject2.png" alt="UI" />
                </div>
                <div className="card-body">
                    A responsive food delivery web app built with modern UI design, focusing on smooth user experience and intuitive ordering flow.
                </div>
                <div className="card-footer">
                    <a href="https://github.com/Yashhh710/FoodieExpress" className="btn btn-github" target="_blank" rel="noopener noreferrer">Code</a>
                    <a href="https://foodie-express-ten-topaz.vercel.app/" className="btn btn-live" target="_blank" rel="noopener noreferrer">Live</a>
                </div>
            </div>

            <div className="tcg-card">
                <div className="card-header">
                    <h3>Portfolio_v1</h3>
                    <span className="card-type">Legendary</span>
                </div>
                <div className="card-art">
                    <img src="porject3.png" alt="Portfolio" />
                </div>
                <div className="card-body">
                    A creative developer building interactive web experiences with cartoon-style design, smooth animations, and modern UI thinking.
                </div>
                <div className="card-footer">
                    <a href="https://github.com/yashhh710/Portfolio_v1" className="btn btn-github" target="_blank" rel="noopener noreferrer">Code</a>
                    <a href="https://yashhh710.github.io/Portfolio_v1/" className="btn btn-live" target="_blank" rel="noopener noreferrer">Live</a>
                </div>
            </div>

            {/* New Card 4 */}
            <div className="tcg-card">
                <div className="card-header">
                    <h3>GTA 6</h3>
                    <span className="card-type">Epic</span>
                </div>
                <div className="card-art">
                    <img src="porject4.png" alt="Ice" />
                </div>
                <div className="card-body">
                    A fun parody GTA 6 loading screen concept made for entertainment and April Fool’s jokes — designed to mimic a cinematic game intro experience with creative UI effects.
                </div>
                <div className="card-footer">
                    <a href="https://github.com/Yashhh710/gta-6" className="btn btn-github" target="_blank" rel="noopener noreferrer">Code</a>
                    <a href="https://yashhh710.github.io/gta-6/" className="btn btn-live" target="_blank" rel="noopener noreferrer">Live</a>
                </div>
            </div>

            {/* New Card 5 */}
            <div className="tcg-card">
                <div className="card-header">
                    <h3>Tic Tac Toe</h3>
                    <span className="card-type">Rare</span>
                </div>
                <div className="card-art">
                    <img src="porject5.png" alt="Void" />
                </div>
                <div className="card-body">
                    A fun and interactive Tic Tac Toe game built with modern web technologies, focusing on clean UI design, smooth gameplay experience, and simple logic for an engaging browser-based game.
                </div>
                <div className="card-footer">
                    <a href="https://github.com/Yashhh710/tic-tac-toe-html-css" className="btn btn-github" target="_blank" rel="noopener noreferrer">Code</a>
                    <a href="https://yashhh710.github.io/tic-tac-toe-html-css/index.html" className="btn btn-live" target="_blank" rel="noopener noreferrer">Live</a>
                </div>
            </div>

            {/* New Card 6 */}
            <div className="tcg-card">
                <div className="card-header">
                    <h3>Axon AI</h3>
                    <span className="card-type">Legendary</span>
                </div>
                <div className="card-art">
                    <img src="porject6.png" alt="Sun" />
                </div>
                <div className="card-body">
                    A modern AI-powered platform built for intelligent and interactive experiences — currently in dev mode, so expect experimental features and a few bugs as it evolves into a next-gen AI system.
                </div>
                <div className="card-footer">
                    <a href="https://github.com/Yashhh710/axon-ai" className="btn btn-github" target="_blank" rel="noopener noreferrer">Code</a>
                    <a href="https://axon-ai-nine.vercel.app/" className="btn btn-live" target="_blank" rel="noopener noreferrer">Live</a>
                </div>
            </div>
        </div>
    </section>

    
    </>
  );
}
