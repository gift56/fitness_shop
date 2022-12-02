import React from "react";
import men1 from "../assets/men1.svg";
import men2 from "../assets/men2.svg";
import men3 from "../assets/men3.svg";
import Button from "./button/Button";
import Wear from "./Wear";

const Wears = () => {
  const mensImages = [
    {
      img: men1,
      name: "Shorts",
      price: "Rs. 1300",
    },
    {
      img: men2,
      name: "Shorts",
      price: "Rs. 1300",
    },
    {
      img: men3,
      name: "Shorts",
      price: "Rs. 1300",
    },
  ];
  return (
    <section className="bg-white">
      <div className="container py-5">
        <div className="flex flex-col items-start justify-start w-full gap-10">
          <Wear
            id="men"
            title="Men"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna sed sed pharetra dictum id mi at blandit."
            btn={
              <Button
                text="Shop Now"
                btnClass="min-w-[228px] h-[60px] bg-[#C4C4C4] border border-black"
              />
            }
            data={mensImages}
          />
          <Wear
            id="men"
            title="Men"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna sed sed pharetra dictum id mi at blandit."
            btn={
              <Button
                text="Shop Now"
                btnClass="min-w-[228px] h-[60px] bg-[#C4C4C4] border border-black"
              />
            }
            data={mensImages}
          />
        </div>
      </div>
    </section>
  );
};

export default Wears;
