import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { PiExportFill } from "react-icons/pi";

const OrdersSearch = ({ filterByAlphabet, filterByPrice }) => {
  return (
    <div className="p-4 flex justify-between">
      <form action="" className="relative flex-grow mr-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search by Order ID or Name"
            className="input input-bordered pl-8 w-full max-w-xl outline-none"
          />
          <IoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2" />
        </div>
      </form>
      <div className="buttons flex gap-3 items-center">
        <div className="dropdown">
          <button className="flex items-center gap-3 input border border-green-500 text-sm font-semibold hover:bg-green-500 hover:text-white max-w-xs transition">
            <FaFilter className="text-green-400" />
            <p>Filter</p>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={filterByAlphabet}>By Alphabet</button>
            </li>
            <li>
              <button onClick={filterByPrice}>By Price</button>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="flex items-center gap-2 input border border-green-500 text-sm font-semibold text-slate-700 hover:bg-green-500 hover:text-white max-w-xs transition">
            <PiExportFill className="text-lg text-green-400" />
            <p>Export</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersSearch;
