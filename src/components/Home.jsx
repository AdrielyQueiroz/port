import React, { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import SectionHome from '../banner/SectionHome';

const Home = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleEmail = () => {
    setShowEmail(prev => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Fecha o menu após clicar em um item
  };

  return (
    <div>
    <section id="home" className="h-auto flex flex-col mb-80">
      <nav className="absolute top-0 left-0 right-0 p-5 mx-10">
        {/* Botão de menu para telas pequenas */}
        <div className="sm:hidden flex justify-between items-center">
          <button 
            onClick={toggleMenu} 
            className="text-indigo-300 text-2xl" 
            aria-expanded={menuOpen}
            aria-controls="nav-list"
          >
            <FaAlignJustify />
          </button>
        </div>
  
        {/* Lista de navegação */}
        <ul
          id="nav-list"
          className={`flex-col sm:flex sm:flex-row justify-start sm:justify-center items-center space-y-0 sm:space-y-0 sm:space-x-10
          text-indigo-300 sm:text-sm text-xs md:text-xl font-semibold tracking-wide ${menuOpen ? 'flex absolute left-0 top-14' : 'hidden'}`}
          aria-hidden={!menuOpen}
        >
          <li className="hover:text-indigo-400">
            <button className="focus:ring-2 focus:ring-indigo-400 rounded p-3" onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li className="hover:text-indigo-400">
            <button className="focus:ring-2 focus:ring-indigo-400 rounded p-3" onClick={() => scrollToSection('about')}>Sobre</button>
          </li>
          <li className="hover:text-indigo-400">
            <button className="focus:ring-2 focus:ring-indigo-400 rounded p-3" onClick={() => scrollToSection('projects')}>Projetos</button>
          </li>
          <li className="hover:text-indigo-400">
            <button className="focus:ring-2 focus:ring-indigo-400 rounded p-3" onClick={() => scrollToSection('skills')}>Habilidades</button>
          </li>
          <li className="hover:text-indigo-400">
            <button className="focus:ring-2 focus:ring-indigo-400 rounded p-3" onClick={() => scrollToSection('contact')}>Contato</button>
          </li>
        </ul>
      </nav>
      <SectionHome />
    </section>
  </div>
  
  );
}

export default Home;