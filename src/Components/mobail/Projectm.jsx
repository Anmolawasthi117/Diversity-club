import React from "react";
import { motion } from "framer-motion";

const Projectm = () => {
  return (
    <div id="events" className="w-full px-4 py-16 bg-[#FCD5B4]">
      {/* Featured Events Title */}
      <div className="text-3xl font-bold tracking-tight text-center mb-8">
        Featured Events
      </div>

      {/* Swipeable Event Cards */}
      <motion.div className="cards flex flex-col gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }} // Simple hover scale animation
          className="card rounded-lg overflow-hidden relative h-80"
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://media.discordapp.net/attachments/1131918622802055233/1212792032393695334/photo1698827500.jpeg?ex=66059499&is=65f31f99&hm=b90953c323213a035065c7ab4e16ddbd3440409481f499a27f8c91397730c136&=&format=webp&width=524&height=393"
            alt="Event 1"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }} // Simple hover scale animation
          className="card rounded-lg overflow-hidden relative h-80"
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://media.discordapp.net/attachments/1131918622802055233/1212810271605915728/IMG_20240229_224148_357.jpg?ex=6605a595&is=65f33095&hm=ce2510ef095044afbdf4d7fd709c80b36627148fbf08db20e16733e26d23b0c7&=&format=webp&width=761&height=571"
            alt="Event 5"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projectm;
