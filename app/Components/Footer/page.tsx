"use client"
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <div className="overflow-hidden pb-10 text-white" id="#contact">
      <div className="p-10 bg-footer rounded-besar ">

        <div className="text-center flex items-center justify-center pb-1">
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


        <div className="text-center ">
          <p className='py-1'>Email : rishabhptl2003@gmail.com</p>
          <span className="">Created by</span> <span className='text-gray-300'>Rishabh Patel</span>
        </div>

      </div>
      <div className="flex justify-center pt-5">
        <ScrollLink to="#home" spy={true} smooth={true} offset={-70} duration={500} href="#intro" aria-label="Scroll to top" className="relative flex group">
          <IoIosArrowDropup size={28} />
          <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max">
            Scroll to top
          </span>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Footer;