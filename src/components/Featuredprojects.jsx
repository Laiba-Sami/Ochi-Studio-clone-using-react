import React from "react";
import Card from "./Card"; // Adjust the import path as needed

function Featuredprojects() {
  const cardData = [
    [
      {
        title: "FYDE",
        imageUrl: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
        categories: ["Audit", "Sales Deck", "Copyright"],
        alignment: "left"
      },
      {
        title: "VISE",
        imageUrl: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
        categories: ["Audit", "Sales Deck", "Copyright"],
        alignment: "right"
      }
    ],
    [
      {
        title: "TRAWA",
        imageUrl: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
        categories: ["Design", "Development", "Testing"],
        alignment: "left"
      },
      {
        title: "PREMIUM BLEND",
        imageUrl: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
        categories: ["Research", "Prototype", "Launch"],
        alignment: "right"
      },
    ]
    // Add more pairs of card data objects here
  ];

  return (
    <div className='w-full font-["Neue_Montreal"] relative'>
      <div className="border-b-[1px] border-gray-400">
        <h1 className="pt-20 pb-10 px-10 text-[3.8vw] font-[590]">
          Featured projects
        </h1>
      </div>
      <div className="cards w-screen">
        {cardData.map((pair, index) => (
          <div className="flex w-full px-10 py-20 gap-10" key={index}>
            <Card
              title={pair[0].title}
              imageUrl={pair[0].imageUrl}
              categories={pair[0].categories}
              alignment={pair[0].alignment}
            />
            <Card
              title={pair[1].title}
              imageUrl={pair[1].imageUrl}
              categories={pair[1].categories}
              alignment={pair[1].alignment}
            />
          </div>
        ))}
      </div>
      <button className="absolute left-[42%] mb-10 border-[1px] uppercase border-black rounded-full px-5 py-3 text-[0.9vw] font-[100] text-white bg-zinc-900 flex items-center gap-8">
            view all case studies
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
    </div>
  );
}

export default Featuredprojects;
