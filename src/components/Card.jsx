import { motion, useAnimation } from "framer-motion";
import React from "react";

function Card({ title, imageUrl, categories, alignment }) {
  const cardAnimation = useAnimation();

  const handlehover = () => {
    cardAnimation.start({ y: "0" });
  };

  const handlehoverend = () => {
    cardAnimation.start({ y: "100%" });
  };

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-[1vw] h-[1vw] rounded-full bg-black"></div>
        <h4 className="text-xl">{title}</h4>
      </div>
      <motion.div
        onHoverStart={handlehover}
        onHoverEnd={handlehoverend}
        className="relative h-[70vh] rounded-3xl"
      >
        <h1
          className={`absolute flex overflow-hidden text-[6vw] font-semibold tracking-tighter text-[#CDEA68] z-[9] top-1/2 -translate-y-1/2 ${
            alignment === "left"
              ? "left-full -translate-x-1/2"
              : "right-full translate-x-1/2"
          }`}
        >
          {title.split("").map((item, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={cardAnimation}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              className="inline-block"
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div className="card w-full h-full overflow-hidden rounded-3xl">
          <img
            className="object-cover h-full w-full"
            src={imageUrl}
            alt={title}
          />
        </div>
      </motion.div>
      <div className="flex mt-6 gap-4 font-medium">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-8 py-1 border-[1px] border-black rounded-full font-medium"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
