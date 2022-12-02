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
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-start flex-1 w-full">
        {data.map(({ img, name, price }, i) => (
          <div
            key={i}
            className="flex justify-start lg:min-w-[30%] w-full items-center flex-col gap-5 bg-[#E1DADA] pb-7"
          >
            <div className="lg:w-fit lg:h-fit w-full h-full">
              <img src={img} alt={name} className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3">
              <h3 className="text-black text-lg lg:text-xl font-medium">
                {name}
              </h3>
              <p className="text-black text-lg lg:text-xl font-medium">
                {price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wear;
