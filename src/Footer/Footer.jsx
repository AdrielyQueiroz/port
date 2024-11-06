import React from 'react'
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
    
  return (
    <div className='mt-20'>
    <footer className='bg-violet-950 text-white border border-violet-500'>
        <p className='text-center text-sm p-5'>@2024 Desenvolvido por Adriely Queiroz</p>
        <p className='text-center text-sm'>Todos os direitos reservados.</p>

        {/* telas menores */}
        <div className='flex justify-center mb-5 md:hidden mt-5'>
            <FaArrowUp className='cursor-pointer hover:text-green-300 rounded-full p-1 text-3xl animate-bounce' onClick={() => scrollToSection('home')} />
        </div>

        {/* telas maiores */}
        <div className='hidden md:flex justify-end mb-5 mr-80'>
            <FaArrowUp className='cursor-pointer hover:text-green-300 rounded-full p-1 text-3xl animate-bounce' onClick={() => scrollToSection('home')} />
        </div>
    </footer>
</div>

  )
}

export default Footer