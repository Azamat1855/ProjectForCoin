import React from "react";

const OrderSteps = ({ order }) => {
  return (
    <div className="order-notes py-12 px-5 rounded-2xl shadow-md ">
      <p className="font-semibold text-lg pb-5">Order Notes</p>
      <div className="notes-steps">
        <ul className="steps steps-vertical gap-4">
          <li className="step">
            <div className="text-start">
              <p className="font-semibold">Order Delivered</p>
              <p>Sun, 01 Aug 2021, 05:30 PM</p>
            </div>
          </li>
          <li className="step step-primary">
            <div className="text-start">
              <p className="font-semibold">On Order</p>
              <p>Sun, 01 Aug 2021, 04:15 PM</p>
            </div>
          </li>
          <li className="step step-primary">
            <div className="text-start">
              <p className="font-semibold">Payment Success</p>
              <p>Sun, 01 Aug 2021, 03:46 PM</p>
            </div>
          </li>
          <li className="step step-primary">
            <div className="text-start">
              <p className="font-semibold">Order Created</p>
              <p>Sun, 01 Aug 2021, 03:45 PM</p>
            </div>
          </li>
          <li className="step step-primary">
            <div className="text-start">
              <p className="font-semibold">Delivering</p>
              <p>Sun, 01 Aug 2021, 03:45 PM</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSteps;
