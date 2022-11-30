import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="sticky top-0 bg-[#FAFAFA] z-10">
      <div className="container">
        <div className="flex justify-between items-center w-full py-4">
          <h2 className="text-black font-semibold  text-2xl">
            <Link to="home" spy={true} smooth={true}>
              My <span>Store</span>
            </Link>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
