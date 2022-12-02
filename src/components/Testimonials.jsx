import React from "react";

const Testimonials = () => {
  return (
    <section className="lg:bg-white bg-[#F3C5FF]" id="home">
      <div className="container lg:py-10 pt-8">
        <div className="w-full flex lg:flex-row flex-col gap-4 items-center justify-between lg:h-[383px] bg-[#F3C5FF] lg:px-4 relative">
          <div className="flex flex-col gap-3 justify-start items-start flex-1 lg:pl-10">
            <h1 className="font-normal text-black leading-[40px] text-[25px] md:text-[33px] text-left lg:max-w-[503px] w-full">
              <span className="font-semibold"></span>
            </h1>
            <Button text="View More" btnClass="min-w-[153px] bg-white" />
          </div>
          <div className="flex-1">
            <div className="lg:absolute top-[-100px] right-[3rem] md:h-[500px] z-10 select-none">
              <img
                src=""
                alt="heroImage"
                className="h-full object-cover lg:translate-y-[-1rem]"
              />
            </div>
            <div className="hidden lg:flex lg:absolute top-[145px] md:right-[370px] xl:right-[505px] w-[65px] h-[65px] z-[9]">
              <img src="" alt="/" className="w-full h-full object-contain" />
            </div>
            <div className="hidden lg:flex lg:absolute top-[40px] md:right-[290px] xl:right-[355px] w-[86px] h-[86px] z-[9]">
              <img src="" alt="/" className="w-full h-full object-contain" />
            </div>
            <div className="hidden lg:flex lg:absolute bottom-0 right-[330px] w-[125px] h-[125px] z-[9]">
              <img src="" alt="/" className="w-full h-full object-contain" />
            </div>
            <div className="hidden lg:flex lg:absolute top-5 right-3 w-[200px] h-[200px] z-[9]">
              <img src="" alt="/" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
