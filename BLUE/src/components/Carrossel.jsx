import React, { useEffect, useState } from 'react';
import Plastico from '../assets/images/plastico 1.png';
import Educ from '../assets/images/Educacao.png';
import Coral from '../assets/images/Design sem nome.png';

const SlideShow = () => {
    const [index, setIndex] = useState(0);
    const time = 3000;

    const imagens = [
        Plastico,
        Coral,
        Educ,
    ];

    const links = [
        'https://www.example.com/link1',
        'https://www.example.com/link2',
        'https://www.example.com/link3',
    ];

    const descricoes = [
        'Limpeza de Plásticos no Oceano',
        'Conservação de Recifes de Coral',
        'Educação e Conscientização Ambiental',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === imagens.length - 1 ? 0 : prevIndex + 1));
        }, time);

        return () => clearInterval(interval); // Cleanup function
    }, []);

    return (
        <div>
            <div className="produtos">
                <h2>Projetos em destaque:</h2>
            </div>
            <div className="produtos-cards">
                <div className="produtos-card">
                    <img
                        className="produtos-cartaz"
                        src={imagens[index]}
                        alt="Imagem"
                        title="Imagem"
                    />
                    <h3>{descricoes[index]}</h3>
                </div>
            </div>
            <div className="produtos-carrossel">
                <a id="produto-link" href={links[index]} target="_blank">
                    <img id="img-produtos" src={imagens[index]} alt="Imagem do produto" />
                </a>
                <h3 id="descricao-produtos">{descricoes[index]}</h3>
            </div>
        </div>
    );
};

export default SlideShow;
