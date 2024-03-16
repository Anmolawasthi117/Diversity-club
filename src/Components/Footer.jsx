import React from 'react';
import { motion } from 'framer-motion';
import { SiInstagram, SiLinkedin ,SiWhatsapp} from 'react-icons/si'; // Or any other social icons you want

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Slightly stagger the animation of child elements
    }
  }
}

const socialIconVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Footer = () => {
  return (
    <footer className="bg-[#333333] p-4 text-[#FDF7EE] py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Diversity Club */}
        <motion.div 
          className="flex items-center space-x-4 mb-4 md:mb-0" // Add media query for desktop layout
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
        >
          <h2 className="font-semibold text-lg">Diversity Club</h2>
          <motion.a href="https://instagram.com/diversity_ggits?igshid=MmU2YjMzNjRlOQ==" target="_blank" variants={socialIconVariants}>
            <SiInstagram size={30} />
          </motion.a>
          <motion.a href="https://whatsapp.com/channel/0029VaJYmEOJpe8aaEhfTG44" target="_blank" variants={socialIconVariants}>
            <SiWhatsapp size={30} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/company/clubdiversity/" target="_blank" variants={socialIconVariants}>
            <SiLinkedin size={30} />
          </motion.a>
        </motion.div>

        {/* Anmol Awasthi */}
        <motion.div
          className="flex items-center space-x-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
        >
          <div className="space-y-2">
            <p>Created by: Anmol Awasthi</p>
            <p className="text-sm">Freelance Web Developer</p>
          </div>
          <button className="bg-[#EB9E77] hover:bg-[#EB9E77] px-4 py-2 rounded-md transition-colors"><a href="mailto:anmolawasthi117@gmail.com">Create with Me</a></button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
