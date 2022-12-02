import React from "react";
import {
  BsChat,
  BsFillArrowUpCircleFill,
  BsFillPhoneFill,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  const footerRows = [
    {
      title: "Contact Us",
      links: [
        {
          icon: <BsFillPhoneFill />,
          detail: "(808)-555-121",
        },
        {
          icon: <BsChat />,
          detail: "dummyemail@xyz.com",
        },
        {
          icon: <BsFillArrowUpCircleFill />,
          detail: "Fake Address",
        },
      ],
    },
    {
      title: "About Us",
      links: [
        {
          detail: "FAQ",
        },
        {
          detail: "Support",
        },
        {
          detail: "Privacy & Policy",
        },
      ],
    },
  ];

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
          <div className="flex flex-col sm:flex-row gap-8 items-start justify-between lg:justify-end flex-1">
            {footerRows.map(({ title, links }, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-start text-left gap-4"
              >
                <h2 className="font-medium lg:text-2xl text-xl text-black">
                  {title}
                </h2>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  {links.map(({ icon, detail }, i) => (
                    <div
                      key={i}
                      className={`${icon ? "flex items-center gap-4" : ""}`}
                    >
                      <span>{icon}</span>
                      <h3>{detail}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
