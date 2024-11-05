import React from 'react';
import Footer from './Footer/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app-container">
      {/* home */}
      <Home />
      {/* about */}
      <About />

      {/* skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
























































// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { VscGithub } from "react-icons/vsc";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { CiLinkedin } from "react-icons/ci";
// import { SiGmail } from "react-icons/si";
// import { FaAlignJustify } from "react-icons/fa";
// import bg from './images/bg.jpg';
// import html from './images/html.png';
// import css from './images/css.png';
// import js from './images/js.png';
// import php from './images/php.png';
// import tailwind from './images/tailwind.png';
// import react from './images/react.png';
// import Photo from './images/photo.jpg';
// import Projeto_samsung from './images/projeto_samsung.png';
// import Footer from './Footer/Footer';

// const App() {
  // const [showEmail, setShowEmail] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  // const handleToggleEmail = () => {
  //   setShowEmail((prev) => !prev);
  // };

  // const toggleMenu = () => {
  //   setMenuOpen((prev) => !prev);
  // };

  // const scrollToSection = (id) => {
  //   document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  //   setMenuOpen(false); // Fecha o menu após clicar em um item
  // };

  // return (
  //   <div className="relative min-h-screen">
  //      {/* Pseudo-elemento para imagem de fundo */}
  //    <div
  // //       className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
  // //       style={{
  // //         backgroundImage: `url(${bg})`,
  // //       }}
  // //     ></div>

  // //     {/* Conteúdo principal */}
  // //     <div className="relative z-10">
  // //       <section
  // //         id="home"
  // //         className="h-screen flex flex-col"
  // //       >
  // //         <nav className="absolute top-0 left-0 right-0 border-b-2 p-5 border-indigo-300 mx-10">
  // //           <div className="sm:hidden flex justify-between items-center">
  // //             <button onClick={toggleMenu} className="text-indigo-300 text-2xl">
  // //               <FaAlignJustify />
  // //             </button>
  // //           </div>

  // //           {/* Lista de navegação */}
  // //           <ul
  // //             className={`flex-col sm:flex sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-10 text-indigo-300 sm:text-sm text-lg md:text-xl font-semibold tracking-wide ${
  // //               menuOpen ? 'flex' : 'hidden'
  // //             }`}
  // //           >
  // //             <li className="hover:text-indigo-400">
  // //               <button onClick={() => scrollToSection('home')}>Home</button>
  // //             </li>
  // //             <li className="hover:text-indigo-400">
  // //               <button onClick={() => scrollToSection('about')}>Sobre</button>
  // //             </li>
  // //             <li className="hover:text-indigo-400">
  // //               <button onClick={() => scrollToSection('projects')}>Projetos</button>
  // //             </li>
  // //             <li className="hover:text-indigo-400">
  // //               <button onClick={() => scrollToSection('skills')}>Habilidades</button>
  // //             </li>
  // //             <li className="hover:text-indigo-400">
  // //               <button onClick={() => scrollToSection('contact')}>Contato</button>
  // //             </li>
  // //           </ul>
  // //         </nav>

  // //         <div className="m-auto mt-46">
  // //           <p className="font-PTSerif text-center text-indigo-200 font-semibold sm:text-3xl md:text-5xl">
  // //             Bem-vindo!
  // //           </p>
  // //           <div className="flex text-yellow-600 space-x-10 justify-center mt-5 text-3xl p-2 rounded-xl">
  // //             <VscGithub
  // //               className="cursor-pointer hover:text-yellow-300"
  // //               onClick={() => window.open('https://github.com/AdrielyQueiroz')}
  // //             />
  // //             <CiLinkedin
  // //               className="cursor-pointer hover:text-yellow-300"
  // //               onClick={() => window.open('https://www.linkedin.com/in/adriely-queiroz-b5b2481b2/')}
  // //             />
  // //           </div>
  // //         </div>
  // //       </section>

  //       <section
  // id="about"
  // className="relative flex flex-col md:flex-row items-center justify-center md:mt-52 px-4 md:px-0"

  /* Fundo preto com opacidade */
  /* <div className="absolute inset-0 bg-black opacity-20 rounded-lg shadow-lg pointer-events-none mx-10 border border-double"></div> */
  
  /* Conteúdo com z-index para sobrepor o fundo */
  /* <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl items-center justify-center mb-20 text-white p-5">
    <img
      src={Photo}
      alt="foto"
      className="w-full max-w-xs md:max-w-md rounded-full mb-4 md:mr-20 border border-violet-400 shadow-lg shadow-violet-400"
    />
    <div className="w-full md:w-2/3 text-justify p-10">
      <h1 className="leading-9 mb-5 text-2xl sm:text-3xl md:text-4xl tracking-wide">Olá!</h1>
      <p className="text-xl leading-10 sm:text-2xl">
        Me chamo <span className="uppercase text-indigo-300 font-bold">Adriely Queiroz</span> e atualmente sou estagiária
        <span className="uppercase text-indigo-300 font-bold"> Desenvolvedora Front-end </span>
        na Secretaria do Verde e Meio Ambiente. Estudo Análise e Desenvolvimento de Sistemas.
        Prezo pelo estudo e qualidade para que consiga atender a expectativa do usuário e junto,
        meu crescimento profissional. Sou apaixonada em criar interfaces dinâmicas, interativas e
        responsivas, e estou sempre pronta para aprender e colocar em prática todo conhecimento adquirido.
      </p>
    </div>
  </div>
</section>



        <motion.div
             initial={{ y: -10 }}
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
             className="w-full mx-5">
        <section id="projects" className='border border-violet-400 rounded mt-10 mx-5 md:mt-52 p-5'>
          <h2 className='uppercase text-indigo-300 font-bold border-b-2 w-52 border-violet-400 text-4xl mb-10 pb-2'>Projetos</h2>
          <div className='flex flex-col md:flex-row items-center mb-20'>
            <img src={Projeto_samsung} alt="samsung" className='w-full md:w-1/2 rounded border-2 border-violet-400 mb-5 md:mb-0 md:mr-10' />
            <div className='w-full md:w-1/2 text-white'>
              <h1 className='text-2xl sm:text-3xl font-bold mb-10'>Clone da página Samsung - venda <span className='uppercase text-yellow-500'>galaxy z flip 5g</span></h1>
              <p className='text-lg leading-10 sm:text-xl md:leading-loose'>
                Projeto feito de forma simples para testar conhecimentos em HTML, CSS e JavaScript puro. O usuário consegue mudar a cor do aparelho
                ao clicar nos botões das cores referentes e a borda dos botões muda de acordo com o clique.
              </p>

              <div className='flex space-x-20 text-green-500 mt-10 text-3xl justify-center'>
                <FaRegEyeSlash className='hover:cursor-pointer hover:border border-green-500 rounded' onClick={() => window.open('https://adrielyqueiroz.github.io/SAMSUNG/')}/>
                <VscGithub className='hover:cursor-pointer hover:border border-green-500 rounded' onClick={() => window.open('https://github.com/AdrielyQueiroz/projeto_sms')}/>
              </div>
            </div>
          </div>
        </section>
        </motion.div>

        <section id="about" className='mt-10 md:mt-52 bg-violet-950 p-5 border border-violet-400 rounded mx-5 md:mx-10'>
          <h2 className='flex text-4xl font-bold mb-20 justify-center uppercase text-indigo-300'>Habilidades</h2>
          <div className='flex justify-center flex-wrap mb-20'>
            {[html, css, js, php, tailwind, react].map((img, idx) => (
              <div key={idx} className={`flex flex-col items-center m-2 ${img === php ? 'mt-8' : ''}`}>
                <img src={img} alt="habilidade" className='w-20 sm:w-36' />
              </div>
            ))}
          </div>

          <div className='flex flex-col md:flex-row justify-center text-xl mb-10 hover:cursor-grab text-white text-center'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className='flex flex-col md:flex-row space-x-0 md:space-x-9'
            >
              {['Capacidade de Organização', 'Criatividade', 'Dedicação', 'Esforço', 'Empatia', 'Pontual', 'Busca por Resultados'].map((skill, idx) => (
                <p key={idx} className='hover:text-violet-200 tracking-wider leading-8'>{skill}</p>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className='mt-10 md:mt-52 flex justify-center w-full'>
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full mx-5"
          >
            <h2 className='text-4xl font-bold text-indigo-200 mb-10 border-indigo-400 text-center uppercase'>Contato</h2>
            <div className='border border-violet-400 rounded mb-10'>
              <p className='p-10 text-2xl text-center text-white'>Vamos nos conectar?</p>
              <div className='flex justify-center space-x-10 text-5xl text-violet-100 mb-20'>
                <CiLinkedin className='hover:cursor-pointer hover:text-green-500' onClick={() => window.open('https://www.linkedin.com/in/adriely-queiroz-b5b2481b2/')}/>
                <VscGithub className='hover:cursor-pointer hover:text-green-500' onClick={() => window.open('https://github.com/AdrielyQueiroz')}/>
                <SiGmail className='hover:cursor-pointer hover:text-green-500' onClick={handleToggleEmail}/>
              </div>
              {showEmail && (
                <p className='text-center text-violet-300 text-xl mb-5'>Adrielysqueiroz.203@gmail.com</p>
              )}
            </div>
          </motion.div>
        </section> */
        
        /* footer */
        // <Footer />
      // </div>
      // </div>
    
//   );
// }


// export default App;











