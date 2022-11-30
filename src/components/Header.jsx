import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-[#FAFAFA] z-10 h-[50px]">
      <div className="container">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-primary">My Store</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
