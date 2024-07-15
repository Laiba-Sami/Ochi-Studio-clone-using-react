import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-24 bg-[#004D43]  overflow-hidden rounded-tl-2xl  rounded-tr-2xl ">
      <div  className="text uppercase border-t-[1px] border-b-[1px] border-gray-400 text-white font-['Avenir_Next_Condensed'] flex whitespace-nowrap text-[23vw] font-semibold tracking-tighter leading-none -mb-[5vw]">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat:Infinity }}
          className="pr-16"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat:Infinity}}
          className="pr-16"
        >
          we are ochi
        </motion.h1>
        
      </div>
    </div>
  );
}

export default Marquee;
