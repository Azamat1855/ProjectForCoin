import React from "react";
import { IoMdBook } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Category = () => {
  return (
    <div className="p-8 ">
      {/* Order number and status */}
      <div className="order flex justify-between pb-7">
        <div className="order-number">
          <p className=" font-medium text-xl text-[#111111]">Order ID #63627</p>
          <p className="font-normal text-lg">
            <span className="text-[#4E60FF]">Order</span> / Order Details
          </p>
        </div>
        <div className="order-status py-4 px-6 rounded-lg bg-[#F9FAFE] shadow-md flex gap-4 items-center">
          <IoMdBook className="text-[#6C63FF] text-lg" />
          <p className="font-normal text-sm">ON DELIVERY</p>
        </div>
      </div>
      {/*  */}

      {/* Main */}
      <div className="order-details flex gap-9">
        {/* Left Side */}
        <div className="details-left flex justify-center flex-col gap-9">
          {/* Left First Section */}
          <div className="relative ">
            <div className="left-customer px-24 pt-6 pb-[245px] flex flex-col justify-center items-center rounded-2xl shadow-md gap-3">
              <img
                className="mask mask-squircle w-[115px] h-[115px]"
                src="https://robohash.org/Mavis.png?set=set4"
                alt=""
              />
              <p className="font-medium text-xl">Asilbek Karimov</p>
              <p className="bg-[#F9FAFE] py-1 px-4 text-center shadow-sm rounded-lg font-normal text-[#7A7A7A]">
                Customer
              </p>
            </div>
            <div className="left-notes py-6 px-5 bg-[#404A56] rounded-3xl text-white absolute bottom-0">
              <p className="font-normal text-lg">Order Notes</p>
              <p className="max-w-[300px] text-sm font-normal pt-3 pb-20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur laudantium, obcaecati temporibus.
              </p>
            </div>
            <div className="notes-address py-2 px-4 w-full rounded-3xl bg-[#4E60FF] flex text-white items-center gap-5 absolute bottom-0  ">
              <div className="address-icon bg-[#FFFFFF] rounded-full mask mask-squircle w-[69px] h-[69px] flex items-center justify-center">
                <TbTruckDelivery className="text-[#FF6C4E] text-[40px]" />
              </div>
              <div className="address-text font-normal">
                <p>6th Avinew #26</p>
                <p>London</p>
              </div>
            </div>
          </div>
          {/* /Left First section */}

          {/* Order Steps */}
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
          {/* /Order Steps */}
        </div>
        {/* /Left */}

        {/* Right Section */}
        <div className="details-rigth">
          {/* Order Table */}
          <div className="orders-table">
            <div className="overflow-x-auto shadow-md py-5 px-8 rounded-xl">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th className="text-base font-normal text-[#000000]">
                      Items
                    </th>
                    <th></th>
                    <th className="text-center text-base font-normal text-[#000000]">
                      Qty
                    </th>
                    <th className="text-center text-base font-normal text-[#000000]">
                      Price
                    </th>
                    <th className="text-center text-base font-normal text-[#000000]">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask w-[70px] h-[70px] rounded-xl">
                            <img
                              src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-[#2F80ED] font-normal text-xs">
                            Main Course
                          </div>
                          <div className="text-base font-normal py-1">
                            Cooked meat and veggies kebab
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="rating rating-xs">
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                checked
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                            </div>
                            <div className="">
                              <p className="text-[#A7A7A7] text-xs font-normal">
                                (56 reviews)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td className="text-center font-normal">2x</td>
                    <td>
                      <button className="text-center font-normal">
                        $10.30
                      </button>
                    </td>
                    <td className="text-center font-normal">$15.50</td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask w-[70px] h-[70px] rounded-xl">
                            <img
                              src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-[#2F80ED] font-normal text-xs">
                            Main Course
                          </div>
                          <div className="text-base font-normal py-1">
                            Cooked meat and veggies kebab
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="rating rating-xs">
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                checked
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                            </div>
                            <div className="">
                              <p className="text-[#A7A7A7] text-xs font-normal">
                                (56 reviews)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td className="text-center font-normal">2x</td>
                    <td>
                      <button className="text-center font-normal">
                        $10.30
                      </button>
                    </td>
                    <td className="text-center font-normal">$15.50</td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask w-[70px] h-[70px] rounded-xl">
                            <img
                              src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-[#2F80ED] font-normal text-xs">
                            Main Course
                          </div>
                          <div className="text-base font-normal py-1">
                            Cooked meat and veggies kebab
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="rating rating-xs">
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                                checked
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                              <input
                                type="radio"
                                name="rating-5"
                                className="mask mask-star-2 bg-orange-400"
                              />
                            </div>
                            <div className="">
                              <p className="text-[#A7A7A7] text-xs font-normal">
                                (56 reviews)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td className="text-center font-normal">2x</td>
                    <td>
                      <button className="text-center font-normal">
                        $10.30
                      </button>
                    </td>
                    <td className="text-center font-normal">$15.50</td>
                  </tr>
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th className="text-base font-normal text-[#000000]">
                      Items
                    </th>
                    <th></th>
                    <th className="text-center text-base font-normal text-[#000000]">
                      Qty
                    </th>
                    <th className="text-center text-base font-normal text-[#000000]">
                      Price
                    </th>
                    <th className="text-center text-base font-normal text-[#000000]">
                      Total Price
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          {/* /Order Table */}

          {/* Right 2nd Section */}
          <div className="orders-informations py-5 px-8 shadow-md rounded-xl">
            {/* Map */}
            <div className="iinformations-map relative">
              <img src="src/assets/Delivery tracking.jpg" alt="" />
              <img
                className="absolute top-0 left-24"
                src="src/assets/tracking.png"
                alt=""
              />
            </div>
            {/* /Map */}

            {/* Delivery Details */}
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
                    <p className="text-[17px] font-semibold text-[#061737]">
                      Phone
                    </p>
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
                    <p className="text-xs font-semibold text-[#898EBC]">
                      05:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Delivery Details */}
          </div>
          {/* /Rigth 2nd Section */}
        </div>
        {/* /Right Section */}
      </div>
      {/* /Main */}
    </div>
  );
};

export default Category;
