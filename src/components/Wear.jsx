import React from "react";

const Wear = ({ id, title, details, btn, data }) => {
  return (
    <div
      id={id}
      className="w-full flex flex-col lg:flex-row items-start justify-between gap-6"
    >
      <div className="flex flex-col gap-6 items-start justify-start flex-1">
        <h1 className="text-black font-bold text-[56px] leading-[72px]">
          {title}
        </h1>
        <p className="text-[19px] leading-[23px] text-black font-normal max-w-sm">
          {details}
        </p>
        {btn}
      </div>
      <div className="flex gap-6 items-start justify-start flex-1"></div>
    </div>
  );
};

export default Wear;
