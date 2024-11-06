import React from 'react';
import { BsDownload } from "react-icons/bs";

const Button = () => {
  return (
    <div>
      <a 
        href="../cv/curriculo.pdf" 
        download="Curriculo.pdf"
        className="flex items-center justify-center space-x-10 w-full mt-10 px-4 py-2 border border-violet-300 text-violet-300 uppercase rounded hover:bg-indigo-950 transition ease-in duration-700 animate-bounce"
      >
        Baixar CV
        <BsDownload className="ml-5" />
      </a>
    </div>
  );
}

export default Button;