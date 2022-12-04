import React from "react";
import HeroImg from "../assets/heroImg.svg";
import balls1 from "../assets/circle1.svg";
import balls2 from "../assets/circle2.svg";
import balls3 from "../assets/circle3.svg";
import balls4 from "../assets/circle4.svg";
import Button from "./button/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="lg:bg-white dark:lg:bg-slate-600 bg-[#F3C5FF] overflow-hidden"
      id="home"
    >
      <div className="container lg:py-10 pt-8">
        <div className="w-full flex lg:flex-row flex-col gap-4 items-center justify-between lg:h-[383px] bg-[#F3C5FF] lg:px-4 relative">
          <div className="flex flex-col gap-3 justify-start items-start flex-1 lg:pl-10 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, x: "-80px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: "tween" }}
              className="font-normal text-black dark:text-orange-700 leading-[40px] text-[25px] md:text-[33px] text-left lg:max-w-[503px] w-full"
            >
              Exercise more and more with
              <span className="font-semibold"> MyShop. Number #1</span> trusted
              fitness tool website
            </motion.h1>
            <Button
              time={3}
              text="View More"
              btnClass="min-w-[153px] bg-white dark:bg-slate-600 dark:text-white"
            />
          </div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: "-50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="lg:absolute top-[-100px] right-[3rem] md:h-[500px] z-10 select-none"
            >
              <img
                src={HeroImg}
                alt="heroImage"
                className="h-full object-cover lg:translate-y-[-1rem]"
              />
            </motion.div>
            <div className="hidden lg:flex lg:absolute top-[145px] md:right-[370px] xl:right-[505px] w-[65px] h-[65px] z-[9]">
              <motion.img
                initial={{ opacity: 0, x: "100px" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: "tween" }}
                src={balls1}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute top-[40px] md:right-[290px] xl:right-[355px] w-[86px] h-[86px] z-[9]">
              <motion.img
                initial={{ opacity: 0, y: "100px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, type: "tween" }}
                src={balls2}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute bottom-0 right-[330px] w-[125px] h-[125px] z-[9]">
              <motion.img
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, type: "tween" }}
                src={balls3}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute top-5 right-3 w-[200px] h-[200px] z-[9]">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4, type: "tween" }}
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
