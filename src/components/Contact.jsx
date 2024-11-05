import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";


function Contact() {
    const [showEmail, setShowEmail] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleEmail = () => {
    setShowEmail((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
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
        </section>
    </div>
  )
}

export default Contact