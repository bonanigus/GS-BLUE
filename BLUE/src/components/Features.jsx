// src/components/Features.jsx
import React from 'react';
import Carrossel from './Carrossel.jsx';
import './style.css';
import Ocean from '../assets/images/ocean.png'

const Features = () => (
    <section className="features" id="features">
        <div className="heading">
            <h1>Por que os oceanos são tão importantes?</h1>
            <p>Nos dias de hoje, as águas ganharam ainda mais importância, podendo servir como fonte de energia
                renovável, alimentação, rotas comerciais, entre outros. Essa grande dependência da água, portanto,
                também se mostra como uma grande fonte de deterioração da qualidade dos mares e oceanos, como já foi
                exemplificado tantas vezes durante estes últimos anos. </p>
        </div>

        <section className="info-section">
            <h2>Por Fora dos oceanos</h2>
            <div className="container2">
                <div className="info-box">
                    <i className="fa-solid fa-fish"></i>
                    <h3>Serviço 1</h3>
                    <p>Descrição do serviço 1.</p>
                </div>
                <div className="info-box">
                    <i className="fa-solid fa-cloud"></i>
                    <h3>Serviço 2</h3>
                    <p>Descrição do serviço 2.</p>
                </div>
                <div className="info-box">
                    <i className="fa-solid fa-water"></i>
                    <h3>Serviço 3</h3>
                    <p>Descrição do serviço 3.</p>
                </div>
                <div className="info-box">
                    <i className="fa-solid fa-ship"></i>
                    <h3>Serviço 4</h3>
                    <p>Descrição do serviço 4.</p>
                </div>
            </div>
        </section>
        <Carrossel />
    </section>    
);

export default Features;
