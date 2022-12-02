import React from "react";

const Wear = ({ id, title, details, btn, data }) => {
  return (
    <div
      id={id}
      className="w-full flex flex-col lg:flex-row items-start justify-between gap-6"
    ></div>
  );
};

export default Wear;
