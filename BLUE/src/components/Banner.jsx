// src/components/Banner.jsx
import React from 'react';
import videoSrc from '../assets/videos/ocean.mp4'; // Importe o vídeo aqui
import './style.css';

const Banner = () => (
  <section className="banner">
    <video autoPlay muted loop>
      <source src={videoSrc} type="video/mp4" />
    </video>
    <div className="container">
      <div className="content">
        <h2>BLUE</h2>
        <p>
          Em colaboração com a Oceans20, uma organização com foco em preservação dos mares e oceanos, nós da
          WMATech tomamos a responsabilidade de criar uma forma de ajudá-los a monitorar e conservar o azul de
          nosso planeta.
        </p>
        <button>Saiba mais.</button>
        <div className="social_icons">
          <i className="fa fa-brands fa-facebook"></i>
          <i className="fa fa-brands fa-twitter"></i>
          <i className="fa fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
