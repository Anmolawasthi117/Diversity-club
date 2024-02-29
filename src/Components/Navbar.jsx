import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <motion.nav
      className="fixed top-0 text-base w-full z-10 backdrop-blur-sm bg-white/30 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side: Join Us */}
        <motion.button
          className=" hover:text-[#EB9E77] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
          
        >
          <Link to = "/">club diversity</Link>
        </motion.button>

        {/* Center: About Us, Events, Our Team */}
        <ul className="flex items-center space-x-6">
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
            <motion.div
               // Link to Our Team page
              className="hover:text-[#EB9E77]"
              
            >
             Our team
            </motion.div>
          </li>
        </ul>

        {/* Right side: Home */}
        <motion.button
          className=" hover:text-[#EB9E77] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          
        >
          <a href="https://forms.gle/Mqi9LqMGSSmreAFt5">Join us</a>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
