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
          src="https://media.discordapp.net/attachments/1131918622802055233/1212792032393695334/photo1698827500.jpeg?ex=65f31f99&is=65e0aa99&hm=cbb51233da8d2d489844ea9ac88f02b45bbf25e7602e55c62656ae43bc0f7175&=&format=webp&width=524&height=393"
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
                src="https://media.discordapp.net/attachments/1131918622802055233/1212810271605915728/IMG_20240229_224148_357.jpg?ex=65f33095&is=65e0bb95&hm=8c2000e73be7f9421f874b9d1a36f40c7ad7c2ac8b59b5a7cda45f969329f833&=&format=webp&width=761&height=571"
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
