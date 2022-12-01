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
      <div className="container lg:py-16 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-4 gap-7 w-full">
          {cardsData.map(({ img, title, details }, i) => (
            <div
              key={i}
              className="lg:w-[50%] w-full bg-[#FAFAFA] shadow-large lg:h-[301px] rounded-xl flex flex-col-reverse lg:flex-row items-center justify-between gap-2"
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
              <div className="w-full h-full lg:w-fit lg:h-fit">
                <img src={img} alt={title} className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCards;
