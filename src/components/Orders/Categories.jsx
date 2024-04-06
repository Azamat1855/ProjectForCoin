import React from "react";

const Categories = ({ setSelectedCategory }) => {
  return (
    <div>
      <div className="join grid grid-cols-4 p-2">
        <button className="join-item btn btn-outline text-base " onClick={() => setSelectedCategory("All")}>All orders</button>
        <button className="join-item btn btn-outline text-base " onClick={() => setSelectedCategory("Delivered")}>Delivered</button>
        <button className="join-item btn btn-outline text-base " onClick={() => setSelectedCategory("Delivering")}>Delivering</button>
        <button className="join-item btn btn-outline text-base " onClick={() => setSelectedCategory("Cancelled")}>Cancelled</button>
      </div>
    </div>
  );
};

export default Categories;
