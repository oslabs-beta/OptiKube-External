import React, { useState } from "react";
import { FaGithub, FaCheck } from 'react-icons/fa';
import { BsCopy } from "react-icons/bs";
import Setup  from './Setup.jsx'

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`helm install optikube \\
    --repo https://github.com/Optikube/optikube-helm-chart/ \\
    --namespace optikube --create-namespace`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);  // Reset the state back to initial after 2 seconds
  };
  return (
      <div className="relative text-center w-full h-full p-0 animate-fade-in-up">
        <div className="flex flex-col text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-8xl font-medium mb-4">Optimizing Kubernetes</h1>
          <p className="text-xl mb-8">Enhance your cluster experience with OptiKube</p>
          <Setup/>
          <div className="flex justify-center items-center">
            <button onClick={copyToClipboard} className="bg-primary-color text-white border-2 border-primary-color py-3 px-10 text-lg font-light rounded transition-colors duration-300 mx-2 hover:bg-black hover:text-primary-color flex items-center justify-center">
            {isCopied ? (
              <>
                <FaCheck className="mr-1.5 h-5 w-5 animate-pulse" />
                Copy
              </>
            ) : (
              <>
                <BsCopy className="mr-1.5 h-5 w-5" />
                Copy
              </>
            )}
            </button>
            <button onClick={() => window.open('https://github.com/', '_blank')} className="bg-transparent text-primary-color border-2 border-primary-color py-3 px-10 text-lg font-light rounded transition-colors duration-300 mx-2 hover:bg-primary-color hover:text-white flex items-center justify-center">
              <FaGithub className="mr-1.5 h-5 w-5"/>
              GitHub
            </button>
          </div>
        </div>
      </div>
  )
}


export default Hero;