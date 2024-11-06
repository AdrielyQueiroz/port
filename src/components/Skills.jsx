import React from 'react'
import { ImHtmlFive2 } from "react-icons/im";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {
  return (
    <div className='m-5'>
    <section id="skills" className='mt-10 md:mt-52 mx-0 md:mx-10 bg-violet-950 p-5 border border-violet-400 shadow-violet-400 rounded'>
        <h2 className='text-center text-4xl font-bold my-10 uppercase text-indigo-300'>Hard Skills</h2>
        <div className='flex flex-wrap justify-center mb-20 p-10 text-white'>

            {/* Primeiro item */}
            <div className='flex flex-col items-center mb-10 w-full md:w-1/4'>
                <ImHtmlFive2 className='text-9xl transition duration-500 ease-in-out hover:text-orange-400 transform hover:-translate-y-1 hover:scale-110' />
                <h1 className='uppercase font-semibold mt-10 text-xl'>HTML5</h1>
                <p className='leading-8 mt-5 max-w-sm text-lg'>Linguagem de marcação para construção de páginas. O primeiro contato foi durante um curso profissionalizante logo após aprender sobre sistemas operacionais.</p>
            </div>

            {/* Segundo item */}
            <div className='flex flex-col items-center mb-10 w-full md:w-1/4'>
                <FaCss3Alt className='text-9xl transition duration-500 ease-in-out hover:text-blue-400 transform hover:-translate-y-1 hover:scale-110' />
                <h1 className='uppercase font-semibold mt-10 text-xl'>CSS</h1>
                <p className='leading-8 mt-5 max-w-sm text-lg'>Linguagem de estilização na construção de páginas. O primeiro contato foi na decisão de me tornar desenvolvedora.</p>
            </div>

            {/* Terceiro item */}
            <div className='flex flex-col items-center mb-10 w-full md:w-1/4'>
                <FaJsSquare className='text-9xl transition duration-500 ease-in-out hover:text-yellow-300 transform hover:-translate-y-1 hover:scale-110' />
                <h1 className='uppercase font-semibold mt-10 text-xl'>JavaScript</h1>
                <p className='leading-8 mt-5 max-w-sm text-lg'>Linguagem de programação que permite a criação de interatividade em páginas web. Um passo importante na minha jornada de desenvolvedora.</p>
            </div>

            {/* Quarto item */}
            <div className='flex flex-col items-center mb-10 w-full md:w-1/4'>
                <RiTailwindCssFill className='text-9xl transition duration-500 ease-in-out hover:text-blue-400 transform hover:-translate-y-1 hover:scale-110' />
                <h1 className='uppercase font-semibold mt-10 text-xl'>Tailwind CSS</h1>
                <p className='leading-8 mt-5 max-w-sm text-lg'>Framework CSS que permite a construção de interfaces responsivas de forma rápida e eficiente.</p>
            </div>

            {/* Quinto item */}
            <div className='flex flex-col items-center mb-10 w-full md:w-1/4'>
                <RiReactjsFill className='text-9xl transition duration-500 ease-in-out hover:text-blue-400 transform hover:-translate-y-1 hover:scale-110' />
                <h1 className='uppercase font-semibold mt-10 text-xl'>React</h1>
                <p className='leading-8 mt-5 max-w-sm text-lg'>Biblioteca JavaScript para construir interfaces de usuário. Meu primeiro contato foi em um projeto pessoal que desenvolvi.</p>
            </div>
        </div>
    </section>
</div>
  )
}

export default Skills