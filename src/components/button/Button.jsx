import React from "react";

const Button = ({ text, btnClass }) => {
  return (
    <button className={`h-[48px] flex items-center justify-center outline-none border-none ${btnClass}`}>
      {text}
    </button>
  );
};

export default Button;
