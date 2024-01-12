"use client"
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="">

        {/* Navbar */}
        <nav className=" bg-[#141c27] p-5 h-[8.5vh] font-extrabold pl-20 flex items-center justify-between mx-auto ">

          <div className="z-10">
            <h1 className="text-white text-2xl">WEB<span className="text-[#eade76]">DEV</span></h1>
          </div>

          <div className={`text-l bg-[#141c27] text-white  flex flex-col gap-6 py-3 items-center absolute top-[64px] left-0 w-full lg:flex-row lg:static lg:justify-end lg:items-center lg:pr-20 ${isMenuOpen ? '' : 'max-lg:hidden '} `}>
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

        {/* Homepage */}

        <div className="p-12 bg-black h-[91.5vh]">

          <div className="p-12">

            <h1 className="text-5xl p-2 text-white font-semibold ">HI, I'M <span className="text-[#f8cb20] ">RISHABH!</span></h1>
            <h1 className=" text-5xl p-2 text-[#3ba07c] font-semibold">
              Hello World
            </h1>
            <p className="text-white p-2 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, obcaecati enim? Est molestias alias mollitia quod aut facilis modi consequatur, quis nisi dolorum, consequuntur itaque non quas </p>
            <div className="flex pt-2">

              <div className="pr-3">
                <button className='bg-[#3ba07c]   rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white '>
                  Hire Me
                </button>
              </div>
              <button className='bg-primary border-primary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#3ba07c] hover:border-[#3ba07c] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#3ba07c] active:border-[#3ba07c]'>
                Download CV
              </button>
            </div>
          </div>
          <div className="">

          </div>
        </div>

      </div>

    </>
  )
}
// absolute flex-col md:flex-row min-h-[60vh] left-0 top-[9%]  w-full
