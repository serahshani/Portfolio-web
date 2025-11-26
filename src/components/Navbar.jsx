import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect for controlling the background opacity based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`${styles.paddingX} 
        w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300
        ${scrolled ? "bg-primary/80 backdrop-blur-sm shadow-lg" : "bg-transparent"}
      `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        
        {/* Logo and Name */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />

          <p className="text-white text-[20px] font-extrabold tracking-wide cursor-pointer flex items-center">
            {/* Increased font size for modern impact */}
            Serah Shani
            <span className="sm:inline hidden text-secondary text-[16px] font-medium ml-2">
              | Web Developer
            </span>
          </p>
        </Link>
        
        {/* Desktop Navigation Links */}
        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${active === Link.title
                ? "text-white font-semibold" // Make active link bolder
                : "text-gray-300 hover:text-white"
                }  text-[17px] tracking-wider transition-colors duration-200 cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown Menu (Frosted/Modern Look) */}
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-primary/95 backdrop-blur-md absolute top-16 right-0 mx-4 my-2 min-w-[170px] z-10 rounded-xl shadow-2xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-5 w-full'>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`w-full text-right ${active === Link.title
                    ? "text-white font-bold"
                    : "text-gray-400"
                    }  font-poppins font-medium cursor-pointer text-[17px] hover:text-white transition-colors duration-200`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;