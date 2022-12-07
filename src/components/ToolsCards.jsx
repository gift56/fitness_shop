import React from "react";
import Shoe from "../assets/whiteShoe.svg";
import GymTool from "../assets/dumbell.svg";
import Button from "./button/Button";
import { motion } from "framer-motion";

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
    <section className="bg-white dark:bg-slate-700 overflow-hidden">
      <div className="container lg:py-16 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-4 gap-7 w-full">
          {cardsData.map(({ img, title, details }, i) => (
            <motion.div
              initial={{ opacity: 0, x: `${i === 0 ? "-100px" : "100px"}` }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              whileHover={{ scale: 1.02 }}
              key={i}
              className="lg:w-[50%] w-full bg-[#FAFAFA] dark:bg-slate-600 shadow-large lg:h-[301px] rounded-xl flex flex-col-reverse lg:flex-row items-center justify-between gap-2 cursor-pointer p-4"
            >
              <div className="flex flex-col justify-between gap-4 lg:gap-0 items-start h-full overflow-hidden">
                <motion.h2
                  initial={{ opacity: 0, y: "-25px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, type: "tween" }}
                  className="text-black dark:text-white font-semibold sm:text-[29px] text-2xl leading-9"
                >
                  {title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: "-30px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, type: "tween" }}
                  className="sm:text-xl text-base font-light text-black dark:text-white w-full lg:w-[279px]"
                >
                  {details}
                </motion.p>
                <Button
                  time={2}
                  text="View More"
                  btnClass="min-w-[153px] bg-[#F9F871]"
                />
              </div>
              <div className="w-full h-full lg:w-fit lg:h-fit">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, type: "tween" }}
                  src={img}
                  alt={title}
                  className="w-full h-full hover:transform"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCards;
