
import React, { useState } from 'react';
import Botao1 from './Botao1';
import Botao2 from './Botao2';
import Info from './Info';
import Info2 from './Info2';
import leagueproject from './leagueproject.jpg'
import javaproject from './javaproject.png'
import './index.css';
function Card() {
  const SlideDeTexto = () => {
    const images = [leagueproject,javaproject];
    const langs = ['C#',' Javascript, Java, PHP e MYSQL'];
    const libs = [' React',' Jquery, .Net, SpringBoot e Angular'];
    const [i, setIndex] = useState(0);
    const slides = [
      'Algumas Informações sobre mim, vamos começar?',
      `Me Chamo Lucas, tenho 19 anos e sou um Desenvolvedor Fullstack focado na construção de Websites com ${langs}`,
      `Também gosto de utilizar alguns frameworks e libs para tornar minha rotina de desenvolvimento mais produtiva como ${libs}`,
      'O desejo de aprender me possibilitou criar muitos projetos também...',
      <Info className="imgs-x">{images[i]}</Info>,
      <Info2 className="imgs-x">{images[i]}</Info2>
     
      
      
    ];
    const proxSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }
    const voltaSlide = () => {
      setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
     
    }
    return (
      <div className='container-1'>
        <Botao1 onClick={proxSlide} />
        <Botao2 onClick={voltaSlide} />
        {typeof slides[i] === 'string' ? (
          <p className='p-1'>{slides[i]}</p>
        ) : (
          <>
          <div className='imgs-x'>{slides[i]}</div>
          </>
        )}    
      </div>
    );
  };
  return <SlideDeTexto />;
}
export default Card;

