import React from "react";
import Settings from "../pages/Settings";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="py-[18px] border-b-[#D5D5D5] border-b w-full">
        <div className="flex justify-between mx-auto container">
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
