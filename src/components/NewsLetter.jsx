import React from "react";
import { motion } from "framer-motion";
import Button from "./button/Button";
import { useState } from "react";

const NewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState("");
  return (
    <section className="bg-white dark:bg-slate-700 overflow-hidden" id="login">
      <div className="container py-10">
        <div className="w-full flex lg:flex-row flex-col gap-4 items-center justify-center lg:h-[303px] bg-[#EED9C8] lg:px-4 relative p-5">
          <div className="flex flex-col gap-3 justify-start items-start flex-1 lg:pl-10 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: "-30px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "tween" }}
              className="font-normal text-black leading-[40px] text-[25px] md:text-[33px] text-left lg:max-w-[503px] w-full"
            >
              Join Our News Letter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: "-30px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, type: "tween" }}
              className="text-[19px] leading-[23px] text-black font-normal max-w-sm"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit
              integer eget neque, ante.
            </motion.p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNewsLetter("");
            }}
            className="flex flex-col lg:flex-row gap-3 justify-start items-center flex-1"
          >
            <motion.input
              initial={{ opacity: 0, x: "-50px" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, type: "tween" }}
              type="text"
              name="newsletter"
              value={newsLetter}
              onChange={(e) => setNewsLetter(e.target.value)}
              id="newsletter"
              className="h-[55px] outline-none border-none lg:w-[60%] w-full bg-white dark:bg-slate-700 dark:text-white pl-4 text-xl"
            />
            <Button
              time={3}
              text="Subscribe"
              btnClass="bg-[#FFBC96] dark:bg-slate-500 dark:text-white min-w-[156px] h-[55px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
