import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full h-screen bg-white pt-1">
      <div className="mainheading mt-40 px-14 text-zinc-900">
        {["WE CREATE", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker  overflow-hidden">
              <div className="maskerin w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] ,duration:1}}
                    className="w-[9vw] h-[5.9vw] rounded-lg mr-3 relative top-[0.1vw] object-cover"
                  >
                    <img
                      src="https://superclan.co/wp-content/uploads/2022/09/content-image01.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                )}
                <h1 className='font-["Avenir_Next_Condensed"] uppercase text-[8vw] font-[650] leading-[0.85] tracking-tight'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mainfoot border-t-[1px] border-gray-400 mt-48 flex justify-between items-center px-14">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <h3 className="font-['Neue_Montreal'] pt-4 font-[550] text-base">
            {item}
          </h3>
        ))}
        <div className="flex items-center mt-3">
          <div className="px-5 py-[3px] border-[1px] border-black rounded-full uppercase  font-['Neue_Montreal']font-[550] ">
            Start the Project
          </div>
          <div className="px-1 py-1 border-[1px] border-black rounded-full ml-2">
            <GoArrowUpRight size={"23px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
