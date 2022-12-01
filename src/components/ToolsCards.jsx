import React from "react";
import Shoe from "../assets/whiteShoe.svg";
import GymTool from "../assets/dumbell.svg";
import Button from "./button/Button";

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
              className="w-[50%] bg-[#FAFAFA] shadow-large h-[301px] rounded-xl flex items-center justify-between gap-2"
            >
              <div className="flex flex-col justify-between items-start h-full">
                <h2 className="text-black font-semibold text-[29px] leading-9">
                  {title}
                </h2>
                <p className="text-xl font-light text-black w-full lg:w-[279px]">
                  {details}
                </p>
                <Button
                  text="View More"
                  btnClass="min-w-[153px] bg-[#F9F871]"
                />
              </div>
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
