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
      className={`
        ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500 fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center `}
      onClick={onClose}
    >
      <div
        className={`
          z-50
          ${
          isVisible ? "translate-y-0" : "translate-y-32"
        } transition-all duration-300 bg-[#fff] z-[50]  p-8 py-10 rounded-lg w-80 text-center ${className}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUpModal;
