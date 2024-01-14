import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className=" bg-[#232332] p-5  h-[12vh] font-extrabold pl-20 max-sm:px-8 flex items-center justify-between mx-auto sticky">

            <div className="z-10">
                <h1 className="text-white text-3xl">WEB<span className="text-[#50dfa8]">DEV</span></h1>
            </div>

            <div className={`text-xl bg-[#232332] text-white  flex flex-col gap-6 py-3 items-center absolute top-[55px] left-0 w-full lg:flex-row lg:static lg:justify-end lg:items-center lg:pr-20 ${isMenuOpen ? '' : 'max-lg:hidden '} `}>
                <a className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">Home</a>
                <a className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">About</a>
                <a className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">Projects</a>
                <a className="lg:pl-8 hover:scale-110 hover:duration-150 hover:cursor-default duration-150">Contact</a>
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