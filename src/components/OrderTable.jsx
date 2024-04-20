import React from "react";

const OrderTable = ({ order }) => {
  return (
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
              <th className="text-base font-normal text-[#000000]">Items</th>
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
                <button className="text-center font-normal">$10.30</button>
              </td>
              <td className="text-center font-normal">${order.totalPrice}</td>
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
              <th className="text-base font-normal text-[#000000]">Items</th>
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
  );
};

export default OrderTable;
