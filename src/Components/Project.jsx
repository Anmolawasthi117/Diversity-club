import { motion } from "framer-motion";
import React from "react";

const Project = () => {
  return (
    <div id="events" className="w-full py-20 bg-[#FCD5B4] ">
      <div className=" w-full px-20 border-b-[1px] border-black pb-20"> </div>
      <div className="text-7xl tracking-tight">Featured Events</div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
             whileHover={{
              scale: 1.05,
              rotateX: 10,
              rotateY: 5,
              perspective: 500,
            }}
            className="card relative rounded-xl overflow-hidden  w-1/2 h-[75vh] "
          >
         
      <motion.div className="card-front w-full h-full rounded-xl bg-slate-500">
        <img
          className="w-full h-full bg-cover"
          src="https://media.discordapp.net/attachments/1131918622802055233/1212792032393695334/photo1698827500.jpeg?ex=66059499&is=65f31f99&hm=b90953c323213a035065c7ab4e16ddbd3440409481f499a27f8c91397730c136&=&format=webp&width=524&height=393"
          alt=""
        />
      </motion.div>
      
   
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateX: 10,
              rotateY: 5,
              perspective: 500,
            }}
            className="card rounded-xl overflow-hidden  w-1/2 h-[75vh] "
          >
            <div className=" w-full h-full  rounded-xl bg-slate-500">
              <img
                className="w-full h-full bg-cover"
                src="https://media.discordapp.net/attachments/1131918622802055233/1212810271605915728/IMG_20240229_224148_357.jpg?ex=6605a595&is=65f33095&hm=ce2510ef095044afbdf4d7fd709c80b36627148fbf08db20e16733e26d23b0c7&=&format=webp&width=761&height=571"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
