import React from "react";
import HeroImg from "../assets/heroImg.svg";
import balls1 from "../assets/circle1.svg";
import balls2 from "../assets/circle2.svg";
import balls3 from "../assets/circle3.svg";
import balls4 from "../assets/circle4.svg";
import Button from "./button/Button";

const Hero = () => {
  return (
    <section className="bg-white ">
      <div className="container py-10">
        <div className="w-full flex items-center justify-between h-[383px] bg-[#F3C5FF] px-4 relative">
          <div className="flex flex-col gap-3 justify-start items-start flex-1  pl-10">
            <h1 className="font-normal text-black leading-[40px] text-[33px] text-left max-w-[503px]">
              Exercise more and more with{" "}
              <span className="font-semibold">MyShop. Number #1</span> trusted
              fitness tool website
            </h1>
            <Button text="View More" btnClass="min-w-[153px] bg-white" />
          </div>
          <div className="flex-1">
            <div className="absolute top-[-100px] right-[65px] h-[500px] z-10">
              <img
                src={HeroImg}
                alt="heroImage"
                className="h-full object-cover translate-y-[-1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
