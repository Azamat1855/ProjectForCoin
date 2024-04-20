import React from "react";
import { IoMdBook } from "react-icons/io";
import { Link } from "react-router-dom";

const OrderId = ({ order }) => {
  return (
    <div className="order flex justify-between pb-7">
      <div className="order-number">
        <p className=" font-medium text-xl text-[#111111]">
          Order ID #{order.orderId}
        </p>
        <p className="font-normal text-lg">
          <Link to="/orders">
            <span className="text-[#4E60FF]">Order</span>
          </Link>
          / Order Details
        </p>
      </div>
      <div className="order-status py-4 px-6 rounded-lg bg-[#F9FAFE] shadow-md flex gap-4 items-center">
        <IoMdBook className="text-[#6C63FF] text-lg" />
        <p className="font-semibold text-base">{order.orderStatus}</p>
      </div>
    </div>
  );
};

export default OrderId;