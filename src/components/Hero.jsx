import React from "react";
import HeroImg from "../assets/heroImg.svg";
import balls1 from "../assets/circle1.svg";
import balls2 from "../assets/circle2.svg";
import balls3 from "../assets/circle3.svg";
import balls4 from "../assets/circle4.svg";
import Button from "./button/Button";

const Hero = () => {
  return (
    <section className="lg:bg-white bg-[#F3C5FF]">
      <div className="container lg:py-10 pt-8">
        <div className="w-full flex lg:flex-row flex-col gap-4 items-center justify-between lg:h-[383px] bg-[#F3C5FF] lg:px-4 relative">
          <div className="flex flex-col gap-3 justify-start items-start flex-1 lg:pl-10">
            <h1 className="font-normal text-black leading-[40px] text-[25px] md:text-[33px] text-left lg:max-w-[503px] w-full">
              Exercise more and more with
              <span className="font-semibold"> MyShop. Number #1</span> trusted
              fitness tool website
            </h1>
            <Button text="View More" btnClass="min-w-[153px] bg-white" />
          </div>
          <div className="flex-1 relative">
            <div className="lg:absolute lg:top-[-100px] lg:right-[65px] md:h-[500px] z-10 w-full relative">
              <img
                src={HeroImg}
                alt="heroImage"
                className="h-full object-cover lg:translate-y-[-1rem]"
              />
            </div>
            <div className="hidden lg:flex lg:absolute top-[145px] right-[505px] w-[65px] h-[65px] z-[9]">
              <img
                src={balls1}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute top-[40px] right-[355px] w-[86px] h-[86px] z-[9]">
              <img
                src={balls2}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute bottom-0 right-[330px] w-[125px] h-[125px] z-[9]">
              <img
                src={balls3}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-5 right-3 w-[200px] h-[200px] z-[9]">
              <img
                src={balls4}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
