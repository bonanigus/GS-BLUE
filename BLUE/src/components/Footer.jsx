// src/components/Footer.jsx
import React from 'react';
import './style.css';

const Footer = () => (
    <footer>
        <section className="newsletter">
            <h2>Inscreva-se na nossa newsletter</h2>
            <form>
                <input type="email" placeholder="Seu e-mail" required />
                <button id='subscribe' type="submit">Inscrever</button>
            </form>
        </section>
        <div className="footer-bottom">
            <div className="social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
            <div className="global-sites">
                <a href="#">EUA</a>
                <a href="#">Brazil</a>
                <a href="#">Canada</a>
                <a href="#">China</a>
            </div>
            <p>&copy; 2024 BLUE. Todos os direitos reservados.</p>
        </div>
    </footer>
);

export default Footer;
