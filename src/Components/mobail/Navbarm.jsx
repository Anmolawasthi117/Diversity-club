import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { TiThMenu } from "react-icons/ti";
const Navbarm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={`fixed top-0 text-base w-full z-10 backdrop-blur-sm bg-white/30 py-4 transition duration-300 ease-in-out ${
        isOpen ? 'bg-white shadow-md' : ''
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side: Join Us */}
        <motion.button
        href="#home"
          className=" hover:text-[#EB9E77] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
        >
           <a href="#home"><div >club diversity</div></a>
        </motion.button>

        {/* Hamburger Menu Button */}
        <motion.button
          className={`md:hidden hover:text-[#EB9E77] text-black focus:outline-none focus:shadow-outline px-4 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
          
            
          >
            <TiThMenu />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16v12H4zM4 12h16v12H4z"
            />
          </svg>
        </motion.button>

        {/* Center: About Us, Events, Our Team (Dropdown Menu) */}
        <ul
          className={`md:flex items-center space-x-6 absolute right-0 top-full mt-16 bg-white rounded-lg shadow-md px-4 py-2 transition duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <motion.a
              href="#about" // Link to About Us page
              className="hover:text-[#EB9E77]"
            >
              About Us
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#events" // Link to Events page
              className="hover:text-[#EB9E77]"
            >
              Events
            </motion.a>
          </li>
          <li>
            <motion.div className="hover:text-[#EB9E77]">Our Team</motion.div>
          </li>
        </ul>

        {/* Right side: Home (Hidden on Mobile) */}
        <motion.button
          className="md:block hidden hover:text-[#EB9E77] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
        >
          <a href="https://forms.gle/Mqi9LqMGSSmreAFt5">Join Us</a>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbarm;
