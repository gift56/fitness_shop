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
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full"></div>
      </div>
    </section>
  );
};

export default ToolsCards;
