import React, { useContext, useEffect, useState } from "react";
import NumberContext from "../context/ViewDetailsContext";
import { OrderId, OrderName, OrderSteps, OrderTable, OrderMap, OrderDelivery } from "../components";

const OrderDetails = ({ match }) => {
  const [order, setOrder] = useState(null);
  const { number } = useContext(NumberContext);

  useEffect(() => {
    const orderId = number;
    if (orderId) {
      fetch(`http://localhost:3007/orders/${orderId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched order data:", data);
          if (data && data.orderId) {
            setOrder(data);
          } else {
            throw new Error("Invalid data received from server");
          }
        })
        .catch((error) => {
          console.error("Error fetching order details:", error);
          setOrder(null);
        });
    }
  }, [number]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 ">
      <OrderId order={order} />
      <div className="order-details flex gap-9">
        <div className="details-left flex justify-center flex-col gap-1">
          <OrderName order={order} />
          <OrderSteps order={order} />
        </div>
        <div className="details-rigth">
          <OrderTable order={order} />
          <div className="orders-informations py-5 px-8 shadow-md rounded-xl">
            <OrderMap />
            <OrderDelivery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
