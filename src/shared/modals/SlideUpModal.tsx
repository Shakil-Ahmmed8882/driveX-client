import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const SlideUpModal: React.FC<ModalProps> = ({ isVisible, onClose, children, className }) => {
  return (
    <div
      className={`${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}
      onClick={onClose} // Close modal when clicking outside the content
    >
      <div
        className={`${
          isVisible ? "translate-y-0" : "translate-y-32"
        } transition-all duration-300 bg-[#1d1d1d] text-white p-8 py-20 rounded-lg w-80 text-center ${className}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUpModal;
