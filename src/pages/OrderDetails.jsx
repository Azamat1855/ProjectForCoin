import React, { useEffect, useState } from 'react';

const OrderDetails = ({ match }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (match && match.params && match.params.orderId) {
      const orderId = match.params.orderId;
      console.log("Order ID:", orderId);
      fetch(`http://localhost:3007/orders/${orderId}`)
        .then((response) => {
          console.log("Response status:", response.status);
          return response.json();
        })
        .then((data) => {
          console.log("Fetched order data:", data);
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error fetching order details:", error);
        });
    }
  }, [match]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.orderId}</p>
      <p>Customer: {order.firstName} {order.lastName}</p>
      <p>Total Price: ${order.totalPrice}</p>
    </div>
  );
};

export default OrderDetails;
