import React from 'react'
import Button from '../btn/Button'
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import react from '../images/react.png'
import vscode from '../images/vscode.png'
import tailwind from '../images/tailwind.png'

const SectionHome = () => {
  return (
<div className="flex flex-col md:flex-row items-center justify-center mt-56 md:text-center">
  <div className="flex flex-col items-center mx-auto md:mr-72">
    <p className="font-PTSerif text-indigo-200 font-semibold text-3xl md:text-5xl text-center">
      Bem-vindo!
    </p>
    <Button />

    <div className="flex text-yellow-600 space-x-10 justify-center mt-7 text-4xl p-2 rounded-xl">
      <VscGithub
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => window.open('https://github.com/AdrielyQueiroz')}
      />
      <CiLinkedin
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => window.open('https://www.linkedin.com/in/adriely-queiroz-b5b2481b2/')}
      />
    </div>
  </div>
  
  <div className='hidden md:flex flex-col items-center mr-96 transform transition-transform duration-300 hover:scale-105 animate-pulse'>
    <img src={react} alt="React" className='w-44 bg-white rounded-full p-3 opacity-50 border-4 border-violet-400' />
    <img src={vscode} alt="VSCode" className='w-44 bg-white rounded-full p-3 origin-bottom-right transform rotate-45 shadow-white' />
    <img src={tailwind} alt="Tailwind" className='w-44 bg-white rounded-full p-3 opacity-50 origin-bottom-right translate-y-[-60px] border-4 border-violet-400' />
  </div>
</div>
 )
}

export default SectionHome 