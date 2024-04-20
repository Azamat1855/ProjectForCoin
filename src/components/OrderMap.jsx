import React from "react";
import DeliveryTrackingImage from "../assets/Delivery tracking.jpg";
import TrackingImage from "../assets/tracking.png";

const OrderMap = () => {
  return (
    <div className="iinformations-map relative">
      <img src={DeliveryTrackingImage} alt="" />
      <img className="absolute top-0 left-24" src={TrackingImage} alt="" />
    </div>
  );
};

export default OrderMap;
