import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const OrderName = ({ order }) => {
  return (
    <div className="relative ">
      <div className="left-customer px-24 pt-6 pb-[245px] flex flex-col justify-center items-center rounded-2xl shadow-md gap-3">
        <img
          className="mask mask-squircle w-[115px] h-[115px]"
          src={order.image}
          alt=""
        />
        <p className="font-medium text-xl">
          {order.firstName} {order.lastName}
        </p>
        <p className="bg-[#F9FAFE] py-1 px-4 text-center shadow-sm rounded-lg font-normal text-[#7A7A7A]">
          Customer
        </p>
      </div>
      <div className="left-notes py-6 px-5 bg-[#404A56] rounded-3xl text-white absolute bottom-0">
        <p className="font-normal text-lg">Order Notes</p>
        <p className="max-w-[300px] text-sm font-normal pt-3 pb-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          laudantium, obcaecati temporibus.
        </p>
      </div>
      <div className="notes-address py-2 px-4 w-full rounded-2xl bg-[#4E60FF] flex text-white items-center gap-5 absolute bottom-0  ">
        <div className="address-icon bg-[#FFFFFF] rounded-full mask mask-squircle w-[69px] h-[69px] flex items-center justify-center">
          <TbTruckDelivery className="text-[#FF6C4E] text-[40px]"/>
        </div>
        <div className="address-text font-normal">
          <p>6th Avinew #26</p>
          <p>London</p>
        </div>
      </div>
    </div>
  );
};

export default OrderName;
