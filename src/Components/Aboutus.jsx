import React from "react";
import {
  reel
} from "../Components/assets/reel.mp4";
function Aboutus() {
  return (
    <div id="about"  className="w-full p-20 bg-[#EB9E77] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className=" text-[3vw] leading-[3.5vw] tracking-tight">
      Our Diversity Club welcomes students from all backgrounds and fields of study. We believe that collaboration across disciplines sparks creativity and innovation. Our club hosts a variety of activities that foster teamwork among students,  ranging from cultural celebrations to interdisciplinary projects designed to tackle real-world challenges.  Join us and discover the power of diverse perspectives!
      </h1>
      <div className="w-full  flex gap-10 border-t-[1px] pt-10 mt-20 border-[#CDEA68]">
        <div className=" w-1/2">
          <h1 className=" text-7xl ">our approach :</h1>
          <button className=" mt-6  pt-5 flex gap-10 items-center px-10 py-6 bg-zinc-800 rounded-full text-white">Read more
          <div className="w-2 h-2 bg-slate-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]  rounded-3xl">
        <video autoPlay muted className="object-cover h-full w-full" src={
          reel
        }></video>

        </div>
      </div>
    </div>
  );
}

export default Aboutus;
