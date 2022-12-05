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
import { motion } from "framer-motion";

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
  const opacity = (id) => {
    if (id === 0 || id === 4) {
      return "-150px";
    } else if (id === 3 || id === 7) {
      return "120px";
    } else {
      return "0";
    }
  };

  return (
    <section className="bg-white dark:bg-slate-700 overflow-hidden" id="cart">
      <div className="container py-10">
        <div className="w-full flex flex-wrap gap-4 items-center justify-start">
          {cartCards.map(({ title, rate, img }, i) => (
            <motion.div
              initial={{ opacity: 0, x: opacity(i) }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "tween" }}
              whileHover={{ scale: 1.02 }}
              key={i}
              className="sm:w-[332px] w-full shadow-large bg-[#FAFAFA] dark:bg-slate-600 flex flex-col gap-4 items-center justify-center py-3 hover:cursor-pointer"
            >
              <div className="sm:w-fit sm:h-fit w-full h-full">
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  src={img}
                  alt={title}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col w-full gap-2 items-start justify-start">
                <motion.h2
                  initial={{ opacity: 0, x: "20px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, type: "tween" }}
                  className="font-medium text-xl leading-[25px] text-black dark:text-white"
                >
                  {title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, type: "tween" }}
                  className="font-medium text-xl text-black leading-[25px] dark:text-white"
                >
                  {rate}
                </motion.p>
                <div className="flex items-center justify-between w-full">
                  <Button
                    text="Add To Cart"
                    btnClass="min-w-[153px] bg-[#f9f87177] hover:bg-[#F9F871]"
                  />
                  <span className="h-[48px] flex items-center justify-center bg-[#F9F871] w-[46px] rounded-xl cursor-pointer">
                    <BsHeart className="w-[20px] h-[20px] hover:fill-[#FF7B7B] transition-all duration-200" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full relative mt-32">
          <motion.div
            initial={{ opacity: 0, x: "-100px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className="w-[45%] bg-[#E5E5E5] h-[2px]"
          ></motion.div>
          <Button
            time={3}
            text="View More"
            btnClass="bg-white border border-[#AAFAB2] min-w-[221px] hover:bg-[#AAFAB2] mx-3"
          />
          <motion.div
            initial={{ opacity: 0, x: "100px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tween" }}
            className="w-[45%] bg-[#E5E5E5] h-[2px]"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default CartCards;
