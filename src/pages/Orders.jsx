import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrdersCategories, OrdersSearch } from "../components";
import NumberContext from "../context/ViewDetailsContext";

const Orders = () => {
  const { number, setNumber } = useContext(NumberContext);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Corrected setter function name
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3007/orders")
      .then((data) => data.json())
      .then((res) => {
        console.log("users: ", res);
        setUsers(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getStatus = (status) => {
    switch (status) {
      case "Delivered":
        return "border-green-500 text-green-500";
      case "Cancelled":
        return "border-red-500 text-red-500";
      case "Delivering":
        return "border-yellow-500 text-yellow-500";
      default:
        return "";
    }
  };

  const filteredUsers =
    selectedCategory === "All"
      ? users
      : users.filter((user) => user.orderStatus === selectedCategory);

  return (
    <div>
      {users && users.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <h2 className="text-3xl font-semibold p-6">
            Orders{" "}
            <span className="text-xl text-slate-500">{users.length}</span>
          </h2>
          {/* <OrdersCategories setSelectedCategory={setSelectedCategory} /> */}
          <OrdersCategories setSelectedCategory={setSelectedCategory} />{" "}
          {/* Assuming this is the correct component */}
          <OrdersSearch />
          <table className="table overflow-y-auto">
            <thead>
              <tr className="text-[15px] text-center font-bold text-slate-300">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Order ID</th>
                <th>Customer</th>
                <th className="text-center">Total Price</th>
                <th>Status</th>
                <th>Purchase Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((item, id) => (
                <tr key={id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td className="text-[17px] font-semibold">#{item.orderId}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-11 h-11">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-slate-400">
                          {item.firstName}
                        </div>
                        <div className="text-sm opacity-70">
                          {item.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center text-xl font-semibold">
                    <sup>$</sup>
                    <small>{item.totalPrice}</small>
                  </td>
                  <td>
                    <p
                      className={`border-2 p-1 font-semibold ${getStatus(
                        item.orderStatus
                      )}`}
                    >
                      {item.orderStatus}
                    </p>
                  </td>
                  <td className="text-center text-black">{item.orderdate}</td>
                  <td className="text-center">
                    <Link to={`/orders/${item.id}`}>
                      <p
                        className="text-slate-400"
                        onClick={() => setNumber(item.id)}
                      >
                        View Details
                      </p>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="text-[15px] text-center font-bold text-slate-300">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Order ID</th>
                <th>Customer</th>
                <th className="text-center">Total Price</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </div>
  );
};

export default Orders;
