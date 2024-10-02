import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import homeIcon from '../assets/icon-logo-white.png'
import closeIcon from "../assets/menu-close.png"
import burguerIcon from "../assets/menu-icon.png"
import wpIcon from "../assets/wp-icon.png"
import igIcon from "../assets/ig-icon.png"
import emailIcon from "../assets/email-icon.png"

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className='flex justify-between items-center px-4 h-16 lg:px-8 lg:pt-5'>
        <button
          onClick={() => handleNavigation('/home')}
          className="bg-[#252525] rounded-full py-2 px-4 lg:px-8 lg:cursor-pointer lg:hover:bg-black"
        >
          <img src={homeIcon} alt="Home" className="h-5 w-auto" />
        </button>

        <button
          onClick={toggleMenu}
          className= {`z-20 bg-transparent rounded-full border-solid border-2 w-16 h-9 flex items-center justify-center lg:hidden ${isMenuOpen ? 'border-white' : 'border-[#252525]'}`}
        >
          <img 
              src={isMenuOpen ? closeIcon : burguerIcon}
              alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              className={`h-6 w-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'p-1' : ''}` }
          />
        </button>

        <div className='hidden lg:block lg:w-[550px] lg:border-2 lg:border-solid lg:border-[#252525] lg:rounded-full lg:font-custom lg:text'>
          <ul className='lg:flex lg:flex-row lg:justify-around lg:items-center'>
            <li 
              onClick={() => handleNavigation('/home')}
              className={`${isActive('/home') ? 'bg-[#252525] text-white py-[4px] rounded-3xl w-[100px] text-center ml-[-22px] lg:border-2 lg:border-solid lg:border-[#252525]' : ''} `}>
                HOME
            </li>
            <li 
              onClick={() => handleNavigation('/photos')}
              className={`${isActive('/photos') ? 'bg-[#252525] text-white py-[4px] rounded-3xl px-5 text-center lg:border-2 lg:border-solid lg:border-[#252525]' : ''}`} >
                PHOTOS
            </li>
            <li 
              onClick={() => handleNavigation('/direction')}
              className={`${isActive('/direction') ? 'bg-[#252525] text-white py-[4px] rounded-3xl px-5 text-center lg:border-2 lg:border-solid lg:border-[#252525]' : ''}`}>
                DIRECTION
            </li>
            <li 
              onClick={() => handleNavigation('/about')}
              className={`${isActive('/about-me') ? 'bg-[#252525] text-white py-[4px] rounded-3xl px-5 text-center lg:border-2 lg:border-solid lg:border-[#252525]' : ''}`}>
                ABOUT ME
            </li>
            <li 
              onClick={() => handleNavigation('/merch')}
              className={`${isActive('/merch') ? 'bg-[#252525] text-white py-[4px] rounded-3xl px-5 text-center lg:border-2 lg:border-solid lg:border-[#252525] mr-[-23px]' : ''}`}>
                MERCH
            </li>
          </ul>
        </div>

      </div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-[#252525] text-white transition-transform transform lg:hidden ${
          isMenuOpen ? 'translate-x-0 transition-transform transform' : 'translate-x-full transition-transform transform'
        } z-10`}
      >
        <ul className="flex flex-col items-start pt-20 p-8 space-y-6 text-xl font-custom">
          <li className="cursor-pointer relative group" onClick={() => handleNavigation('/photos')}>
            PHOTOS
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group" onClick={() => handleNavigation('/direction')}>
            DIRECTION
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group" onClick={() => handleNavigation('/about')}>
            ABOUT ME
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group" onClick={() => handleNavigation('/merch')}>
            MERCH
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <div className="absolute bottom-6 left-6 flex space-x-4 text-2xl">
        <a href="https://wa.me/17864918037" target="_blank" rel="noopener noreferrer">
            <img src={wpIcon} alt="WhatsApp Icon" className='w-9 h-9'/>
        </a>
        <a href="mailto:chocolatttear@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email Icon" className='w-9 h-9' />
        </a>
        <a href="https://www.instagram.com/chocolatttear/" target="_blank" rel="noopener noreferrer">
            <img src={igIcon} alt="Instagram Icon" className='w-9 h-9' />
        </a>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#252525] opacity-50 z-5"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
