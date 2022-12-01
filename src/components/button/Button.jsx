import React from "react";

const Button = ({ text, btnClass }) => {
  return (
    <button
      className={`h-[48px] flex items-center justify-center outline-none rounded-xl cursor-pointer text-black font-medium text-xl hover:opacity-[0.8] transition-all duration-300 ${btnClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
