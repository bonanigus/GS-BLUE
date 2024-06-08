// src/components/Videos.jsx
import React from 'react';
import './style.css';

const Videos = () => (
    <section className="videos">
        <h2>Arduino Sonar</h2>
        <div className="video-container">
            <iframe width="560" height="315" src="https://youtube.com/embed/pUTYid-GDiQ" frameBorder="0"
                allowFullScreen></iframe>
        </div>
        <h2>BLUE IA</h2>
        <div className="video-container">
            <iframe width="560" height="315" src="https://youtube.com/embed/KfCqg7VF-x0" frameBorder="0"
                allowFullScreen></iframe>
        </div>
    </section>
);

export default Videos;
