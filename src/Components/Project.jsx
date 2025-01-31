import { motion } from "framer-motion";
import React from "react";
import {img} from "./assets/event.jpg";
import {img2}  from "./assets/team.jpg";
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
          src={img}
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
                src={img2}
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
