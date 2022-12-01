import React from "react";

const Button = ({ text, btnClass }) => {
  return (
    <button className={`h-[48px] flex items-center justify-center ${btnClass}`}>
      {text}
    </button>
  );
};

export default Button;
