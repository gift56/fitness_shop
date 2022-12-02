import React from "react";
import Button from "./button/Button";

const NewsLetter = () => {
  return (
    <section className="bg-white" id="login">
      <div className="container py-10">
        <div className="w-full flex lg:flex-row flex-col gap-4 items-center justify-center lg:h-[303px] bg-[#EED9C8] lg:px-4 relative p-5">
          <div className="flex flex-col gap-3 justify-start items-start flex-1 lg:pl-10">
            <h1 className="font-normal text-black leading-[40px] text-[25px] md:text-[33px] text-left lg:max-w-[503px] w-full">
              Join Our News Letter
            </h1>
            <p className="text-[19px] leading-[23px] text-black font-normal max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sit
              integer eget neque, ante.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col lg:flex-row gap-3 justify-start items-center flex-1"
          >
            <input
              type="text"
              name="newsletter"
              id="newsletter"
              className="h-[55px] outline-none border-none lg:w-[440px] w-full pl-4 text-xl"
            />
            <Button
              text="Subscribe"
              btnClass="bg-[#FFBC96] min-w-[156px] h-[55px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
