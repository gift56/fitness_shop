import React from "react";
import { Link } from "react-scroll";

const Header = () => {
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
  return (
    <header className="sticky top-0 bg-[#FAFAFA] z-10">
      <div className="container">
        <div className="flex justify-between items-center w-full py-4">
          <h2 className="text-black font-semibold lg:text-2xl text-xl">
            <Link to="home" spy={true} smooth={true}>
              My <span className="text-primary">Store.</span>
            </Link>
          </h2>
          <nav className="flex items-center gap-3">
            {scrollLinks.map(({ href, text }, i) => (
              <Link to={href} spy={true} smooth={true} key={i}>
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
