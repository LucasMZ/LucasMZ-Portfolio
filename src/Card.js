import React, { useState } from 'react';
import Botao1 from './Botao1';
import Botao2 from './Botao2';
import './index.css';

function Card() {
  const SlideDeTexto = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
      'Olá me chamo Lucas Moura e sou um dev fullstack, atualmente busco por vagas de c#/aspnet, java e react',
      'Eu namoro a guria mais linda desse mundo',
      'Julia é o nome dela',
      'fumei limaba vencida'
    ];

    const proxSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1 + slides.length) % slides.length);
    };

    const voltaSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

   

    return (
      <div className='container-1'>
        <Botao1 onClick={proxSlide} />
        <Botao2 onClick={voltaSlide} />
        <p className='p-1'>{slides[currentIndex]}</p>
      </div>
    );
  };

  return <SlideDeTexto />;
}

export default Card;
