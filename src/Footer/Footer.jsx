import React from 'react'
// import bg from '../images/bg.jpg'
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

        {/* Ícone visível apenas em telas menores */}
        <div className='flex justify-center my-5 md:hidden'>
            <FaArrowUp className='cursor-pointer hover:text-green-300 rounded-full p-1 text-3xl animate-bounce' onClick={() => scrollToSection('home')} />
        </div>

        {/* Ícone visível apenas em telas maiores */}
        <div className='hidden md:flex justify-end mr-56 mb-5'>
            <FaArrowUp className='cursor-pointer hover:text-green-300 rounded-full p-1 text-3xl animate-bounce' onClick={() => scrollToSection('home')} />
        </div>
    </footer>
</div>


    
  )
}

export default Footer