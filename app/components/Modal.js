import React from "react";

const Modal = ({ isOpen, onClose, children, heading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-[500px]">
        <div className="flex flex-row justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{heading}</h3>
          <button
            onClick={onClose}
            className="text-red-500 text-[30px] hover:text-red-700"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
