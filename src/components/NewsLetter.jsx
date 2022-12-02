import React from "react";

const NewsLetter = () => {
  return (
    <section className="lg:bg-white bg-[#F3C5FF]" id="login">
      <div className="container lg:py-10 pt-8">
        <div className="w-full flex lg:flex-row flex-col gap-4 items-center justify-between lg:h-[303px] bg-[#EED9C8] lg:px-4 relative">
          <div className="flex flex-col gap-3 justify-start items-start flex-1 lg:pl-10">
            <h1 className="font-normal text-black leading-[40px] text-[25px] md:text-[33px] text-left lg:max-w-[503px] w-full">
              Join Our News Letter
            </h1>
            <p className="text-[19px] leading-[23px] text-black font-normal max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit
              integer eget neque, ante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
