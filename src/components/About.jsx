import React from 'react';
import photo from '../images/photo.jpg';

const About = () => {
  return (
    <div className='mx-5 md:mx-10'>
        <section
    id="about"
    className="relative flex flex-col items-center justify-center md:mt-52 px-4 md:px-"
>
    {/* Fundo preto com opacidade */}
    <div className="absolute inset-0 pointer-events-none border border-violet-400 rounded mb-10"></div>
    
    <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl items-center justify-center mb-14 text-white p-7 animate-pulse">
    <div className="w-full md:w-4/5 text-justify p-5 md:p-10 md:order-none order-last bg-local">
        <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl md:tracking-wide leading-8 md:leading-10 group-hover:text-gray-500">
            Olá!
        </h1>
        <p className="text-lg sm:text-xl leading-8 md:leading-10">
            Me chamo <span className="uppercase text-indigo-300 font-bold">Adriely Queiroz</span> e atualmente sou estagiária
            <span className="uppercase text-indigo-300 font-bold"> Desenvolvedora Front-end </span>
            na Secretaria do Verde e Meio Ambiente. Estudo Análise e Desenvolvimento de Sistemas.
            Prezo pelo estudo e qualidade para que consiga atender a expectativa do usuário e junto,
            meu crescimento profissional. Sou apaixonada em criar interfaces dinâmicas, interativas e
            responsivas, e estou sempre pronta para aprender e colocar em prática todo conhecimento adquirido.
        </p>
    </div>
    
    <img
        src={photo}
        alt="foto"
        className="w-3/4 sm:w-2/3 md:w-full max-w-xs md:max-w-md rounded-full mb-4 md:mb-0 md:mr-10 lg:ml-20 order-last md:order-none group border-indigo-500 shadow-white"
    />
    </div>
    </section>
</div>

  )
}

export default About