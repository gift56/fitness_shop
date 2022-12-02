import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const footerRows = [{}];
  
  return (
    <footer className="bg-[#F3C5FF]">
      <div className="container md:py-16 py-12">
        <div className="flex w-full flex-wrap justify-between items-start gap-4">
          <div className="flex flex-col gap-8 items-start justify-start flex-1">
            <h2 className="text-black font-semibold lg:text-[40px] text-2xl cursor-pointer">
              <Link to="home" spy={true} smooth={true}>
                My <span className="text-primary">Store.</span>
              </Link>
            </h2>
            <p className="text-[#504A41] lg:text-lg text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              malesuada dapibus ut pulvinar neque arcu, commodo. Pharetra nisi
              egestas nisi fermentum. Sollicitudin egestas senectus pellentesque
              enim mauris vel odio commodo. Pellentesque orci vestibulum sed in
              molestie consequat.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 items-start justify-start flex-1"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
