import React from "react";
import HeroImg from "../assets/heroImg.svg";
import balls1 from "../assets/circle1.svg";
import balls2 from "../assets/circle2.svg";
import balls3 from "../assets/circle3.svg";
import balls4 from "../assets/circle4.svg";
import Button from "./button/Button";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container py-8">
        <div className="w-full flex items-center justify-between h-[364px] bg-[#F3C5FF] px-4">
          <div className="flex flex-col gap-3 justify-start items-start flex-1">
            <h1>
              Exercise more and more with <span>MyShop. Number #1</span> trusted
              fitness tool website
            </h1>
            <Button text="View More" btnClass="min-w-[153px] bg-white" />
          </div>
          <div className="flex-1 relative"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
