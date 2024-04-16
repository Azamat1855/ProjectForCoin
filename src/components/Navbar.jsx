import React from "react";
import Settings from "../pages/Settings";

const Navbar = () => {
  return (
    <div>
      <nav className="container py-[18px] border-b-[#D5D5D5] border-b ">
        <div className="flex justify-between max-w-[95%] mx-auto">
        <div className="flex gap-[22px] items-center justify-center">
          <img src="public/carbon_logo-flickr.png" alt="" />
          <img src="public/Admin Logo.png" alt="" />
        </div>
        
        <div className="flex items-center gap-[33px]">
        <Settings />
          <img src="public/notifications.png" alt="" />
          <div className="flex items-center gap-[15px]">
            <p>Femi John</p>
            <img src="public/Photo_7.png" alt="" />
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
