import { motion } from "framer-motion";
import React from "react";

const Landingpage = () => {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.4" id="home"className="w-full h-screen bg-[#FCD5B4] text-black pt-1">
      <div className="textstructuren mt-40 px-20 text-base  ">
        {["See the", "world", "differently"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div initial={{width : 0}} animate={{width : "9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration : 2.5}} className="mr-[1vw] w-[6vw] rounded-md h-[5vw] -top-[.5vw] relative pt-10;"> <img className="object-cover h-full w-full" src="https://i.pinimg.com/236x/85/53/5e/85535e2d471e0f036ae4492327581c3e.jpg" alt="" /></motion.div>
                )} 
                <h1 className="pt-[2vw]-mb-[1vw] flex items-center uppercase text-[6vw] leading-[.75]">{item}</h1>
              </div>
            </div>
          );
        })}
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between "></div>

        <div className="flex justify-between items-center  py-2">
          {" "}
          <p className="text-md font-light tracking-tight capitalize leading-none">
          Connecting students with diverse career paths
          </p>
          <p className="text-md font-light tracking-tight leading-none">
            From the first year to placed
          </p>
          <div className="start">
            <div className="text-md font-light tracking-tight leading-none">
            One club, endless possibilities. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
