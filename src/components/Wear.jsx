import React from "react";

const Wear = ({ id, title, details, btn, data }) => {
  return (
    <div
      id={id}
      className="w-full flex flex-col lg:flex-row items-start justify-between gap-6"
    >
        <div className="flex flex-col gap-6 items-start justify-start"></div>
    </div>
  );
};

export default Wear;
