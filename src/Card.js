import React, { useState } from 'react';
import Botao1 from './Botao1';
import Botao2 from './Botao2';

import './index.css';

function Card() {
  const SlideDeTexto = () => {
    const [i, setIndex] = useState(0);
    const slides = [
      'Algumas Informações sobre mim, vamos começar?',
      'Me Chamo Lucas, tenho 19 anos e atualmente sou um Desenvolvedor Fullstack focado na construção de Websites',
      'Estudar e buscar certificações é uma das minhas grandes paixões',
      'Mas, de que adiantariam as certificações sem colocar esse conhecimento em prática?',
      'Então chegou a hora de falar de Projetos, todos aqueles que construi nessa jornada!',
      'Sou um pessoa bastante criativa e no Javascript encontrei uma linguagem interessante',
      'Nela me aprofundei cada vez mais, montando projetos e mais projetos...',
      'oi',
    ];
    const proxSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const voltaSlide = () => {
      setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
    return (
      <div className='container-1'>
        <Botao1 onClick={proxSlide} />
        <Botao2 onClick={voltaSlide} />
        <p className='p-1'>{slides[i]}</p>
      </div>
    );
  };
  return <SlideDeTexto />;
}

export default Card;
