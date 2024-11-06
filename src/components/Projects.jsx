import React from 'react'
import Projeto_samsung from '../images/projeto_samsung.png';

import { motion } from 'framer-motion';
import { VscGithub } from "react-icons/vsc";
import { FaRegEyeSlash } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
        <motion.div
             initial={{ y: -10 }}
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
             className="w-auto m-7">
              
        <section id="projects" className='border border-violet-400 rounded mt-10 md:mt-52 p-10 
         transform transition-transform duration-300 hover:scale-105 hover:opacity-90 transition-opacity'>
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
                <FaRegEyeSlash className='hover:cursor-pointer transform motion-safe:hover:scale-110' onClick={() => window.open('https://adrielyqueiroz.github.io/samsung/')}/>
                <VscGithub className='hover:cursor-pointer transform motion-safe:hover:scale-110' onClick={() => window.open('https://github.com/AdrielyQueiroz/projeto_sms')}/>
              </div>
            </div>
          </div>
        </section>
        </motion.div>
    </div>
  )
}

export default Projects