import React from "react";
import img1 from "../assets/cardImg.svg";
import img2 from "../assets/card2Img.svg";
import img3 from "../assets/card3Img.svg";
import img4 from "../assets/card4Img.svg";
import img5 from "../assets/card5Img.svg";
import img6 from "../assets/card6Img.svg";
import img7 from "../assets/card7Img.svg";
import img8 from "../assets/card8Img.svg";

const CartCards = () => {
  const cartCards = [
    {
      img: img1,
      title: "Speed Rope-Blue",
      rate: "Rs. 800",
    },
  ];
  return (
    <section className="bg-white">
      <div className="container py-10">
        <div className="w-full flex flex-wrap gap-4 items-center justify-start"></div>
      </div>
    </section>
  );
};

export default CartCards;
