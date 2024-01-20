import { IoIosArrowDropup } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';

export function ScrollTop() {
  

  return (
    <ScrollLink to="#home" spy={true} smooth={true} offset={-70} duration={500} href="#intro" aria-label="Scroll to top" className="relative flex group">
      <IoIosArrowDropup size={28} />
      <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max">
        Scroll to top
      </span>
    </ScrollLink>
  );
}
