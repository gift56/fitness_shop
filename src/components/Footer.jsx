import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
