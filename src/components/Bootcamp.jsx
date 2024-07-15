import React from "react";

function Bootcamp() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen flex px-10 py-40 gap-8 font-['Neue_Montreal'] ">
      <div className="relative h-[30vw] w-1/2 bg-[#004D43] rounded-2xl">
        <img
          className="w-[10vw] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <div className="px-2 py-1 border-[1px] border-[#CDEA68] rounded-full w-fit text-[#CDEA68] absolute top-[85%] left-[5%]">
          &copy; 2019-2022
        </div>
      </div>
      <div className="relative h-[30vw] w-[25%] bg-[#212121] rounded-2xl">
        <img
          className="w-[10vw] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          alt=""
        />
        <div className="px-2 py-1 border-[1px] border-white rounded-full w-fit text-white absolute top-[85%] left-[5%] uppercase">
          Rating 5.0 on CLUTCH
        </div>
      </div>
      <div className="relative h-[30vw] w-[25%] bg-[#212121] rounded-2xl">
        <img
          className="w-[10vw] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          alt=""
        />
        <div className="px-2 py-1 border-[1px] border-white text-white rounded-full w-fit  absolute top-[85%] left-[5%] uppercase">
            busineess bootcamp alumni
        </div>
      </div>
    </div>
  );
}

export default Bootcamp;
