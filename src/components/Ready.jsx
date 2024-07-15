import React, { useEffect, useState } from 'react'

function Ready() {
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
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='h-screen w-full bg-[#CDEA68]  relative'>
         
        <div className=" flex gap-10 absolute top-[40%] left-1/2   -translate-x-[50%] -translate-y-[85%]">
        <div className="h-[12vw] w-[12vw] bg-white rounded-full flex items-center justify-center">
                <div className="h-[7.5vw] w-[7.5vw] bg-zinc-900 rounded-full relative ">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2   -translate-x-[50%] -translate-y-[50%] ">
                        <div  className="h-[1.3vw] w-[1.3vw] bg-white rounded-full "></div>
                    </div>
                </div>
            </div>
            <div className="h-[12vw] w-[12vw] bg-white rounded-full flex items-center justify-center">
                <div className="h-[7.5vw] w-[7.5vw] bg-zinc-900 rounded-full relative ">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full absolute top-1/2 left-1/2   -translate-x-[50%] -translate-y-[50%] ">
                        <div  className="h-[1.3vw] w-[1.3vw] bg-white rounded-full "></div>
                    </div>
                </div>
            </div>
        </div>
        <div className=' font-["Avenir_Next_Condensed"] text-center py-10 text-[13vw] font-bold leading-[0.9] tracking-tighter uppercase text-zinc-900'>
            <h1>Ready</h1>
            <h1>to start</h1>
            <h1>the project?</h1>
        </div>
        <div>
        <button className="absolute left-[42%] mb-10 border-[1px] uppercase border-black rounded-full px-6 py-4 text-[1.2vw] font-[100] text-white bg-zinc-900 flex items-center gap-8">
            Start the project
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className='mt-24'>
        <button className="absolute left-[42%] mb-10 border-[1px] uppercase border-black rounded-full px-6 py-4 text-[1.2vw] font-[100] text-zinc-900  flex items-center gap-8">
            hello@ochi.design
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </button>
        </div>
    </div>
  )
}

export default Ready