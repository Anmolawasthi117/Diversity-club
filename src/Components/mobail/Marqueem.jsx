import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-10 rounded-3xl bg-[#333333] text-[#FDF7EE]" // Reduced padding for phone
    >
      <div className="text border-t-2 border-b-2 border-[#FDF7EE] flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[20vw] leading-none uppercase -mb-[2vw] pt-4 pr-4 font-semibold" // Adjusted font size and padding
        >
          we are club diversity
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className="text-[20vw] leading-none uppercase -mb-[2vw] pt-4 pr-4 pb-4 font-semibold" // Adjusted font size and padding
        >
          we are club diversity
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
