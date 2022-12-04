import React from "react";
import Button from "./button/Button";
import testimonial1 from "../assets/user.svg";
import circle1 from "../assets/userCircle1.svg";
import circle2 from "../assets/userCircle2.svg";
import circle3 from "../assets/userCircle3.svg";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section
      className="lg:bg-white dark:lg:bg-slate-700 bg-[#FF7B7B] overflow-hidden"
      id="testimonial"
    >
      <div className="container lg:py-10 pt-8">
        <div className="w-full flex lg:flex-row flex-col gap-4 items-center justify-between lg:h-[362px] bg-[#FF7B7B] lg:px-4 relative">
          <div className="flex flex-col gap-3 justify-start items-start flex-1 lg:pl-10">
            <motion.h1
              initial={{ opacity: 0, x: "-80px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: "tween" }}
              className="font-normal text-black  leading-[40px] text-[25px] md:text-[33px] text-left lg:max-w-[503px] w-full"
            >
              <span className="font-semibold">Reebok Les Mills </span>
              Bodypump PerfCottnTank Mer's Performance Sleeveless Top
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
              className="lg:absolute top-[-55px] right-[3rem] md:h-[418px] z-10 select-none"
            >
              <img
                src={testimonial1}
                alt="heroImage"
                className="h-full object-cover"
              />
            </motion.div>
            <div className="hidden lg:flex lg:absolute top-[145px] md:right-[370px] xl:right-[575px] w-[60px] h-[60px] z-[9]">
              <motion.img
                initial={{ opacity: 0, x: "100px" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: "tween" }}
                src={circle2}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute top-[38px] md:right-[290px] xl:right-[400px] w-[86px] h-[86px] z-[9]">
              <motion.img
                initial={{ opacity: 0, y: "100px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, type: "tween" }}
                src={circle3}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute bottom-2 right-[490px] w-[57px] h-[57px] z-[9]">
              <motion.img
                initial={{ opacity: 0, y: "30px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, type: "tween" }}
                src={circle1}
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

export default Testimonials;
