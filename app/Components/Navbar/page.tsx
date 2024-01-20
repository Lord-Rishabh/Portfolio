"use client";
import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className=" bg-[#232332] p-5  h-[12vh] font-extrabold pl-20 max-sm:px-8 flex items-center justify-between mx-auto sticky" id="#home">

            <div className="z-10" >
                <h1 className="text-white text-3xl">WEB<span className="text-[#50dfa8]">DEV</span></h1>
            </div>

            <div className={`text-xl bg-[#232332] text-white  flex flex-col gap-6 py-3 items-center absolute top-[55px] left-0 w-full lg:flex-row lg:static lg:justify-end lg:items-center lg:pr-20 ${isMenuOpen ? '' : 'max-lg:hidden '} `}>
                <ScrollLink to="#home" spy={true} smooth={true} offset={-70} duration={500} className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">Home</ScrollLink>
                <ScrollLink to="#about" spy={true} smooth={true} offset={-70} duration={500} className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">About</ScrollLink>
                <ScrollLink to="#projects" spy={true} smooth={true} offset={-70} duration={500} className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">Projects</ScrollLink>
                <ScrollLink to="#technology" spy={true} smooth={true} offset={-70} duration={500} className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">Technology</ScrollLink>
                <ScrollLink to="#contact" spy={true} smooth={true} offset={-70} duration={500} className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">Contact Me</ScrollLink>
            </div>

            <div className="text-white lg:hidden">
                <button onClick={toggleMenu}>
                    <FaBars size={27} />
                </button>
            </div>

        </nav>
    )
}

export default Navbar