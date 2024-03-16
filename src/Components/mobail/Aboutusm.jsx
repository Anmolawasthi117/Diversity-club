import React from "react";

function Aboutusm() {
  return (
    <div id="about" className="flex flex-col p-4 bg-[#EB9E77] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-2xl leading-6 tracking-tight mb-4">
        Our Diversity Club welcomes students from all backgrounds and fields of study. We believe that collaboration across disciplines sparks creativity and innovation. Our club hosts a variety of activities that foster teamwork among students, ranging from cultural celebrations to interdisciplinary projects designed to tackle real-world challenges. Join us and discover the power of diverse perspectives!
      </h1>
      <div className="flex flex-col gap-4 border-t-[1px] border-[#CDEA68]">
        <div className="text-center">
          <h1 className="text-3xl mb-4">our approach :</h1>
          <button className="px-6 py-4 bg-zinc-800 rounded-full text-white items-center justify-center">
            Read more
            <div className="w-2 h-2 bg-slate-100 rounded-full"></div>
          </button>
        </div>
        <div className="h-48 rounded-3xl overflow-hidden">
          <video autoPlay muted className="object-cover h-full w-full" src="https://media.discordapp.net/attachments/1131918622802055233/1212774250562326548/Reelvideo-63069.mp4?ex=66058409&is=65f30f09&hm=2bda9d24d17cb68bfb5bddbd36ca22b72c86dd43be403fcff41ef649415abc77&"></video>
        </div>
      </div>
    </div>
  );
}

export default Aboutusm;
