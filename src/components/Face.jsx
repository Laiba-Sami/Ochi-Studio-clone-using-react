import React, { useEffect, useState } from "react";

function Face() {
    // setstate
    const [rotate, setrotate] = useState(0);
    // useeffect used when whole page is loaded to get mouse current location
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            // calculate the position of mouse
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // calclating the difference of mouse position from center
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            // converting the distance to angle in radian into the degree
            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setrotate(angle-180);
        })
    }
    )
  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll  data-scroll-speed="-.5" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className=" flex gap-10 absolute top-1/2 left-1/2   -translate-x-[50%] -translate-y-[85%]">
        <div className="h-[14vw] w-[14vw] bg-white rounded-full flex items-center justify-center">
                <div className="h-[8.5vw] w-[8.5vw] bg-zinc-900 rounded-full relative ">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2   -translate-x-[50%] -translate-y-[50%] ">
                        <div  className="h-[1.3vw] w-[1.3vw] bg-white rounded-full "></div>
                    </div>
                </div>
            </div>
            <div className="h-[14vw] w-[14vw] bg-white rounded-full flex items-center justify-center">
                <div className="h-[8.5vw] w-[8.5vw] bg-zinc-900 rounded-full relative ">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2   -translate-x-[50%] -translate-y-[50%] ">
                        <div  className="h-[1.3vw] w-[1.3vw] bg-white rounded-full "></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Face;
