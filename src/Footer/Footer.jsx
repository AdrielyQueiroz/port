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
        {/* <h1 className='text-3xl font-semibold p-10'>Adriely Queiroz</h1> */}
        <p className='text-center text-sm p-5'>@2024 Desenvolvido por Adriely Queiroz</p>
        <p className='text-center text-sm'>Todos os direitos reservados.</p>
        
        <div className='flex justify-center mb-5 mr-'>
        <FaArrowUp className='ml-96 cursor-pointer hover:text-green-300 rounded-full p-1 text-3xl animate-bounce' onClick={() => scrollToSection('home')}/>
        </div>
        </footer>
    </div>
    
  )
}

export default Footer
