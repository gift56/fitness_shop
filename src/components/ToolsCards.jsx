import React from "react";
import Shoe from "../assets/whiteShoe.svg";
import GymTool from "../assets/dumbell.svg";

const ToolsCards = () => {
  const cardsData = [
    {
      img: Shoe,
      title: "Mens Training Shoe",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget.",
    },
    {
      img: GymTool,
      title: "5kg Dumbell Pair",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue orci, pretium nibh eget.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="container pb-[4rem]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          {cardsData.map(({ img, title, details }, i) => (
            <div
              key={i}
              className="w-[50%] bg-[#FAFAFA] shadow-md min-h-[301px]"
            >
              <div></div>
              <div>
                <img src={img} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCards;
