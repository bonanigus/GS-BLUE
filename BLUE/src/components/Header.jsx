import React, { useEffect } from 'react';
import Logo from '../assets/images/1.png';

const Header = () => {
    useEffect(() => {
        const menu = document.querySelector('nav');
        const menuBtn = document.querySelector('.menu-btn');
        const closeBtn = document.querySelector('.close-btn');

        menuBtn.addEventListener('click', function () {
            menu.classList.add('active');
        });
        closeBtn.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    }, []);

    return (
        <header style={{ background: '#002d5a', position: 'relative' }}>
            <div style={{ maxWidth: '85%', padding: '0.5rem 80px', margin: '0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="logo" style={{ width: '40%' }}>
                        <img
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                    <nav style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 0' }}>
                        <div className="btn" style={{ fontSize: '1.2rem', color: '#fff', alignItems: 'center', cursor: 'pointer', display: 'none' }}>
                            <i className="fa fa-times close-btn"></i>
                        </div>
                        <ul style={{ display: 'flex', listStyle: 'none', marginLeft: '0.5rem' }}>
                            <li style={{ listStyle: 'none', marginLeft: '0.5rem' }}>
                                <a href="#" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.1rem', padding: '0.7rem 0.6rem', borderRadius: '6px', transition: 'all 0.4s ease-in' }}>
                                    Home
                                </a>
                            </li>
                            <li style={{ listStyle: 'none', marginLeft: '0.5rem' }}>
                                <a href="#" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.1rem', padding: '0.7rem 0.6rem', borderRadius: '6px', transition: 'all 0.4s ease-in' }}>
                                    Sobre
                                </a>
                            </li>
                            <li style={{ listStyle: 'none', marginLeft: '0.5rem' }}>
                                <a href="#" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.1rem', padding: '0.7rem 0.6rem', borderRadius: '6px', transition: 'all 0.4s ease-in' }}>
                                    Serviços
                                </a>
                            </li>
                            <li style={{ listStyle: 'none', marginLeft: '0.5rem' }}>
                                <a href="#" style={{ textDecoration: 'none', color: '#fff', fontSize: '1.1rem', padding: '0.7rem 0.6rem', borderRadius: '6px', transition: 'all 0.4s ease-in' }}>
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="btn" style={{ fontSize: '1.2rem', color: '#fff', alignItems: 'center', cursor: 'pointer' }}>
                        <i className="fa fa-bars menu-btn"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
