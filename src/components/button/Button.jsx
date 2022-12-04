import { motion } from "framer-motion";
import React from "react";

const Button = ({ text, btnClass, time }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: time }}
      className={`h-[48px] flex items-center justify-center outline-none rounded-xl cursor-pointer text-black font-medium text-xl hover:opacity-[0.8] transition-all duration-300 ${btnClass}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
