import React from "react";
import logo from "./assets/logo.png"
import coinImg from "./assets/image.png"
const Navbar = ({availableBalance}) => {
  return (
    <div className="max-w-[83%] mx-auto">
      <div className="navbar shadow-sm justify-between">
        <div>
          <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-2">
         <p>{availableBalance} coin</p>
         <img className="h-[20px] w-[20px]" src={coinImg} alt="coin" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
