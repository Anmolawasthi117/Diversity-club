/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";

const Landingpage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      id="home"
      className="w-full h-full bg-[#FCD5B4]  pt-20 text-black px-4 py-8" // Adjust padding for comfort
    >
      {/* Hero Section - Stacked Text with Animation */}
      <div className="hero mb-16">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center leading-tight mb-4"
        >
          See the world differently
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="image rounded-lg shadow-md overflow-hidden mx-auto w-32" // Centered image with smaller size
        >
          <img
            className="object-cover h-full w-full"
            src="https://i.pinimg.com/236x/85/53/5e/85535e2d471e0f036ae4492327581c3e.jpg"
            alt="Landing Page Hero Image"
          />
        </motion.div>
      </div>

      {/* Benefits Section - Clear and Concise Text */}
      <div className="benefits flex flex-col items-center text-center gap-4">
        <p className="text-lg font-light">
          Connecting students with diverse career paths.
        </p>
        <p className="text-lg font-light">From the first year to placed.</p>
        <p className="text-lg font-bold">One club, endless possibilities.</p>
      </div>
    </div>
  );
};

export default Landingpage;
