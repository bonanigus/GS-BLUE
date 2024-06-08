// src/components/Contact.jsx
import React from 'react';
import './style.css';

const Contact = () => (
    <section className="contato">
        <div className="contato-container">
            <div id="contato-info">
                <h1>Fale Conosco!</h1>
                <h3>Nós da WMATech adoraríamos te ajudar<br /> com qualquer dúvida que tiver</h3>
            </div>
            <div id="contato-form">
                <label htmlFor="msg">Sua Mensagem:</label><br />
                <textarea id='msg' placeholder="Sua Mensagem Aqui"></textarea><br />
                <label htmlFor="email">Seu Email:</label><br />
                <input id='email' type="email" placeholder="seunome@email.com" /><br />
                <button type="button" id="enviar-msg">Enviar</button>
            </div>
        </div>
    </section>
);

export default Contact;
