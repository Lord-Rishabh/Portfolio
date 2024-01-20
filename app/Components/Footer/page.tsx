import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ScrollTop } from './ScrollTop';
const Footer = () => {
  return (
    <footer className="p-10 text-white" id="#contact">
      <div className="p-10 bg-footer rounded-besar ">

        <div className="py-2"></div>

        {/* Github and LinkedIn Icon */}
        <div className="text-center flex items-center justify-center ">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white pr-4"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
        <div className="py-1"></div>

        <div className="text-center ">
          <p className='py-1'>Email : rishabhptl2003@gmail.com</p>
          <span className="">Created by</span> <span className='text-gray-300'>Rishabh Patel</span>
        </div>
      
      </div>
      <div className="flex justify-center pt-5">
        <ScrollTop />
      </div>
    </footer>
  )
}

export default Footer