import React from "react";

function About() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full bg-[#CDEA68]  rounded-[1vw] min-h-[100vh] text-black font-['Neue_Montreal'] overflow-hidden">
      <h1 className="w-[83%] text-[3.5vw] leading-none px-12 py-12 text-zinc-900 font-[550]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="border-t-[1px] border-b-[1px] border-gray-400 px-12 py-12 font-[500] flex justify-between pb-32">
        <div className="w-[40%]">What you can expect:</div>
        <div className="flex w-[25%] flex-col">
          <div className="mb-5">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </div>
          <div>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people. We believe the mix of
            strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </div>
        </div>
        <div className="flex flex-col w-[17%] mt-[7%] ">
          S:
          {["Instagram", "Behance", "Facebook", "LinkedIn"].map(
            (item, index) => (
              <a key={index} className={`underline  ${index === 0 && "mt-4"}`}>
                {item}
              </a>
            )
          )}
        </div>
      </div>
      <div className="flex justify-between px-10 py-8 pb-16">
        <div className="flex flex-col items-start">
          <h1 className="text-[4vw] font-[550]">Our approach:</h1>
          <button className="border-[1px] uppercase border-black rounded-full px-7 py-3 text-[1.3vw] font-[100] text-white bg-zinc-900 flex items-center gap-8">
            Read more
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-[52%] h-[58vh] bg-red-500 rounded-2xl">
          <img
            className="h-full w-full object-cover rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
