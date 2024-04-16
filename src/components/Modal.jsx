import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
