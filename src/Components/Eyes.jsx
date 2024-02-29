import React, {  useEffect, useState } from "react";
    

const Eyes = () => {
    const [rotate,setrotate] = useState(0);
    

        useEffect(()=>{
            window.addEventListener("mousemove",(e)=>{
                let mouseX = e.clientX;
                let mouseY = e.clientY;

                let delX = mouseX-window.innerWidth/2;
                let delY = mouseY-window.innerHeight/2;

                var angle = Math.atan2(delY,delX)*(180/Math.PI)
                setrotate(angle-180);
            })

        })

  return (
    <div className="eyes w-full bg-red-300 h-screen overflow-hidden ">
      <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://i.pinimg.com/564x/d2/f1/ea/d2f1ea50a33eade221eae05c430a59eb.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
            <div className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white ">
              <div className=" relative w-2/3 h-2/3 rounded-full bg-black">
                <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                  <div className="w-10 h-10 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
            <div className=" flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-black">
            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className=" line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                  <div className="w-10 h-10 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
