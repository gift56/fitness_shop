import React, { useEffect, useState } from "react";
import { BiUser, BiCart } from "react-icons/bi";
import { Link } from "react-scroll";
import { BsGrid, BsDoorClosed } from "react-icons/bs";
import { HiMoon, HiOutlineSun } from "react-icons/hi";

const Header = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [mount, setMount] = useState(false);
  const [theme, setTheme] = useState(null);
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
      to: "login",
      icon: <BiUser className="w-[20px] h-[20px]" />,
      text: "Login",
    },
    {
      to: "cart",
      icon: <BiCart className="w-[20px] h-[20px]" />,
      text: "Cart",
    },
  ];
  useEffect(() => {
    
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setMount(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderThemeChangerIcon = () => {
    if (!mount) return null;

    if (theme === "dark") {
      return (
        <button
          type="button"
          className="bg-gray-200 dark:bg-gray-600 p-2 rounded-md hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600"
          onClick={handleThemeSwitch}
        >
          <HiOutlineSun fontSize={17} />
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="bg-gray-200 p-2 rounded-md hover:ring-2 hover:ring-gray-300"
          onClick={handleThemeSwitch}
        >
          <HiMoon fontSize={16} />
        </button>
      );
    }
  };

  return (
    <header className="sticky top-0 bg-[#FAFAFA] z-[9999999]">
      <div className="container">
        <div className="flex justify-between items-center w-full py-4 relative">
          <h2 className="text-black font-semibold font-['Montserrat'] lg:text-2xl text-xl cursor-pointer">
            <Link to="home" spy={true} smooth={true}>
              Gym <span className="text-primary">Store.</span>
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
            {renderThemeChangerIcon()}
            {cartIcons.map(({ icon, text, to }, i) => (
              <Link
                to={to}
                spy={true}
                smooth={true}
                className="flex items-center gap-2 cursor-pointer hover:text-[#FF7B7B] transition-all"
                key={i}
              >
                <span className="hidden lg:flex text-black font-normal text-[18px] hover:text-[#FF7B7B] transition-all">
                  {text}
                </span>
                {icon}
              </Link>
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
              mobileScreen ? "!top-[47px] !z-[999999]" : ""
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
