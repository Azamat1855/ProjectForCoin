import React, { useState } from "react";

const Notification = ({ message }) => {
  return <div className="notification">{message}</div>;
};

const Navbar = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const addNotification = (message) => {
    const newNotification = { id: Date.now(), message: message };
    setNotifications([...notifications, newNotification]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div>
      <nav className="container py-4 border-b border-gray-300">
        <div className="flex justify-between max-w-[95%] mx-auto">
          <div className="flex items-center">
            <img src="public/carbon_logo-flickr.png" alt="" />
            <img src="public/Admin Logo.png" alt="" />
          </div>
          <div className="flex items-center gap-8">
            <img
              src="public/notifications.png"
              alt=""
              onClick={toggleNotifications}
              className="cursor-pointer"
            />
            <div className="flex items-center gap-2">
              <p>Femi John</p>
              <img src="public/Photo_7.png" alt="" className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      </nav>
      {showNotifications && (
        <div className="absolute top-16 right-4 w-[500px] bg-white border border-gray-300 rounded shadow">
          <div className="p-10">
            {notifications.map((notification) => (
              <Notification
                key={notification.id}
                message={notification.message}
              />
            ))}
          </div>
          <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-b hover:bg-blue-600" onClick={clearNotifications}>
            Clear Notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
