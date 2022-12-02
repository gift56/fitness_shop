import React from "react";
import Button from "./button/Button";
import testimonial1 from "../assets/user.svg";
import circle1 from "../assets/userCircle1.svg";
import circle2 from "../assets/userCircle2.svg";
import circle3 from "../assets/userCircle3.svg";

const Testimonials = () => {
  return (
    <section className="lg:bg-white bg-[#FF7B7B]" id="testimonial">
      <div className="container lg:py-10 pt-8">
        <div className="w-full flex lg:flex-row flex-col gap-4 items-center justify-between lg:h-[362px] bg-[#FF7B7B] lg:px-4 relative">
          <div className="flex flex-col gap-3 justify-start items-start flex-1 lg:pl-10">
            <h1 className="font-normal text-black leading-[40px] text-[25px] md:text-[33px] text-left lg:max-w-[503px] w-full">
              <span className="font-semibold">Reebok Les Mills </span>
              Bodypump PerfCottnTank Mer's Performance Sleeveless Top
            </h1>
            <Button text="View More" btnClass="min-w-[153px] bg-white" />
          </div>
          <div className="flex-1">
            <div className="lg:absolute top-[-60px] right-[3rem] md:h-[421px] z-10 select-none">
              <img
                src={testimonial1}
                alt="heroImage"
                className="h-full object-cover"
              />
            </div>
            <div className="hidden lg:flex lg:absolute top-[145px] md:right-[370px] xl:right-[575px] w-[60px] h-[60px] z-[9]">
              <img
                src={circle2}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute top-[40px] md:right-[290px] xl:right-[355px] w-[86px] h-[86px] z-[9]">
              <img
                src={circle3}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex lg:absolute bottom-2 right-[490px] w-[57px] h-[57px] z-[9]">
              <img
                src={circle1}
                alt="/"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
