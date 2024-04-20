import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";

const OrderDelivery = () => {
  return (
    <div className="informations-boy">
      <p className="py-5 font-semibold text-xl">Delivery Boy</p>
      <div className="flex justify-center gap-12 pb-4">
        <div className="deliveryboy flex items-center gap-3">
          <div
            className="radial-progress text-primary"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            <div className="w-12 h-12 shadow-lg rounded-full flex justify-center items-center">
              <FaRegUser className="text-[#FF6C4E] text-2xl" />
            </div>
          </div>
          <div className="deliveryboy-text">
            <p className="text-[17px] font-semibold text-[#061737]">
              David Morel
            </p>
            <p className="text-xs font-semibold text-[#898EBC]">
              4.9 based on 100 ratings
            </p>
          </div>
        </div>
        <div className="deliveryboy flex items-center gap-3">
          <div
            className="radial-progress text-primary"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            <div className="w-12 h-12 shadow-lg rounded-full flex justify-center items-center">
              <FiPhone className="text-[#FF6C4E] text-2xl" />
            </div>
          </div>
          <div className="deliveryboy-text">
            <p className="text-[17px] font-semibold text-[#061737]">Phone</p>
            <p className="text-xs font-semibold text-[#898EBC]">
              +15 4602 8587
            </p>
          </div>
        </div>
        <div className="deliveryboy flex items-center gap-3">
          <div
            className="radial-progress text-primary"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            <div className="w-12 h-12 shadow-lg rounded-full flex justify-center items-center">
              <TbTruckDelivery className="text-[#FF6C4E] text-3xl" />
            </div>
          </div>
          <div className="deliveryboy-text">
            <p className="text-[17px] font-semibold text-[#061737]">
              Delivery Time
            </p>
            <p className="text-xs font-semibold text-[#898EBC]">05:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDelivery;
