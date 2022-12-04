import React from "react";
import { motion } from "framer-motion";

const Wear = ({
  id,
  title,
  details,
  btn,
  data,
  dataClasses,
  className,
  detail,
}) => {
  return (
    <div
      id={id}
      className={`w-full flex flex-col lg:flex-row items-start justify-between gap-6 ${className}`}
    >
      <div className="flex flex-col gap-6 items-start justify-start flex-1">
        <motion.h1
          initial={{ opacity: 0, x: "-60px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "tween" }}
          className="text-black dark:text-white font-bold text-[56px] leading-[72px]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: "60px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "tween" }}
          className="text-[19px] leading-[23px] text-black font-normal max-w-sm"
        >
          {details}
        </motion.p>
        {btn}
      </div>
      <div
        className={`flex flex-col lg:flex-row gap-6 items-start justify-start flex-1 w-full ${dataClasses}`}
      >
        {data.map(({ img, name, price }, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3, type: "tween" }}
            key={i}
            className={`flex justify-start lg:min-w-[30%] w-full items-center flex-col gap-5 bg-[#E1DADA] pb-7 ${dataClasses}`}
          >
            <div className="lg:w-fit lg:h-fit w-full h-full">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, type: "tween" }}
                src={img}
                alt={name}
                className="w-full h-full max-w-full"
              />
            </div>
            {detail === false ? (
              <div className="flex flex-col items-start justify-start w-full gap-3 overflow-hidden">
                <motion.h3
                  initial={{ opacity: 0, x: "-30px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, type: "tween" }}
                  className="text-black text-lg lg:text-xl font-medium"
                >
                  {name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: "-30px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, type: "tween" }}
                  className="text-black text-lg lg:text-xl font-medium"
                >
                  {price}
                </motion.p>
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wear;
