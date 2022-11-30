import React from "react";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container py-8">
        <div className="w-full flex items-center justify-between h-[364px] bg-[#F3C5FF] px-4">
          <div className="flex flex-col gap-3 justify-start items-start flex-1">
            <h1>
              Exercise more and more with <span>MyShop. Number #1</span> trusted
              fitness tool website
            </h1>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
