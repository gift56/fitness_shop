import React from "react";
import img1 from "../assets/cardImg.svg";
import img2 from "../assets/card2Img.svg";
import img3 from "../assets/card3Img.svg";
import img4 from "../assets/card4Img.svg";
import img5 from "../assets/card5Img.svg";
import img6 from "../assets/card6Img.svg";
import img7 from "../assets/card7Img.svg";
import img8 from "../assets/card8Img.svg";
import { BsHeart } from "react-icons/bs";
import Button from "./button/Button";

const CartCards = () => {
  const cartCards = [
    {
      img: img1,
      title: "Speed Rope-Blue",
      rate: "Rs. 800",
    },
    {
      img: img2,
      title: "Speed Rope-Blue",
      rate: "Rs. 300",
    },
    {
      img: img3,
      title: "Speed Rope-Blue",
      rate: "Rs. 1500",
    },
    {
      img: img4,
      title: "Speed Rope-Blue",
      rate: "Rs. 600",
    },
    {
      img: img5,
      title: "Speed Rope-Blue",
      rate: "Rs. 1300",
    },
    {
      img: img6,
      title: "Speed Rope-Blue",
      rate: "Rs. 1300",
    },
    {
      img: img7,
      title: "Speed Rope-Blue",
      rate: "Rs. 2000",
    },
    {
      img: img8,
      title: "Speed Rope-Blue",
      rate: "Rs. 600",
    },
  ];
  return (
    <section className="bg-white">
      <div className="container py-10">
        <div className="w-full flex flex-wrap gap-4 items-center justify-start">
          {cartCards.map(({ title, rate, img }, i) => (
            <div
              key={i}
              className="sm:w-[332px] w-full shadow-large bg-[#FAFAFA] flex flex-col gap-4 items-center justify-center py-3"
            >
              <div className="sm:w-fit sm:h-fit w-full h-full">
                <img src={img} alt={title} className="w-full h-full" />
              </div>
              <div className="flex flex-col w-full gap-2 items-start justify-start">
                <h2 className="font-medium text-xl leading-[25px] text-black">
                  {title}
                </h2>
                <p className="font-medium text-xl text-black leading-[25px]">
                  {rate}
                </p>
                <div className="flex items-center justify-between w-full">
                  <Button
                    text="Add To Cart"
                    btnClass="min-w-[153px] bg-[#f9f87177]"
                  />
                  <span className="h-[48px] flex items-center justify-center bg-[#F9F871] w-[46px] rounded-xl cursor-pointer">
                    <BsHeart className="w-[20px] h-[20px]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartCards;
