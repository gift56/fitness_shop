import React, { useState } from "react";
import { BiUser, BiCart } from "react-icons/bi";
import { Link } from "react-scroll";
import { BsGrid, BsDoorClosed } from "react-icons/bs";

const Header = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const scrollLinks = [
    {
      href: "home",
      text: "Home",
    },
    {
      href: "men",
      text: "Men",
    },
    {
      href: "women",
      text: "Women",
    },
    {
      href: "sale",
      text: "Sale",
    },
  ];

  const cartIcons = [
    {
      icon: <BiUser className="w-[20px] h-[20px]" />,
      text: "Login",
    },
    {
      icon: <BiCart className="w-[20px] h-[20px]" />,
      text: "Cart",
    },
  ];

  return (
    <header className="sticky top-0 bg-[#FAFAFA] z-10">
      <div className="container">
        <div className="flex justify-between items-center w-full py-4 relative">
          <h2 className="text-black font-semibold lg:text-2xl text-xl cursor-pointer">
            <Link to="home" spy={true} smooth={true}>
              My <span className="text-primary">Store.</span>
            </Link>
          </h2>
          <nav className="hidden lg:flex items-center gap-6">
            {scrollLinks.map(({ href, text }, i) => (
              <Link
                to={href}
                spy={true}
                smooth={true}
                key={i}
                className="text-black font-normal text-[18px] cursor-pointer relative pb-1 before:content-[''] before:absolute before:w-[0%] before:bottom-0 before:h-[3px] before:rounded-[18px] before:bg-[#ffdf7b] hover:text-[#FF7B7B] hover:before:w-[100%] before:transition-all before:duration-300"
              >
                {text}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5 items-center">
            {cartIcons.map(({ icon, text }, i) => (
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-[#FF7B7B] transition-all"
                key={i}
              >
                <span className="hidden lg:flex text-black font-normal text-[18px] hover:text-[#FF7B7B] transition-all">
                  {text}
                </span>
                {icon}
              </div>
            ))}
          </div>
          <div className="lg:hidden">
            {mobileScreen ? (
              <BsDoorClosed
                className="w-[18px] h-[18px]"
                onClick={() => setMobileScreen((prev) => !prev)}
              />
            ) : (
              <BsGrid
                className="w-[18px] h-[18px]"
                onClick={() => setMobileScreen((prev) => !prev)}
              />
            )}
          </div>
          <nav
            className={`lg:hidden items-start gap-6 flex flex-col absolute top-[-100vh] bg-[#FAFAFA] w-full px-3 py-4 z-0 transition-all duration-300 ${
              mobileScreen ? "!top-[47px] !z-0" : ""
            }`}
          >
            {scrollLinks.map(({ href, text }, i) => (
              <Link
                to={href}
                spy={true}
                smooth={true}
                key={i}
                onClick={() => setMobileScreen((prev) => !prev)}
                className="text-black font-normal text-[18px] cursor-pointer relative pb-1 before:content-[''] before:absolute before:w-[0%] before:bottom-0 before:h-[3px] before:rounded-[18px] before:bg-[#ffdf7b] hover:text-[#FF7B7B] hover:before:w-[100%] before:transition-all before:duration-300"
              >
                {text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
