import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: "success" | "error";
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type,
}) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`bg-white rounded-lg p-6 shadow-lg max-w-sm w-full ${
              type === "success" ? "border-green-500" : "border-red-500"
            } border-t-4`}
          >
            <h2
              className={`text-lg font-semibold ${
                type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {title}
            </h2>
            <p className="mt-4">{message}</p>
            <div className="mt-6 text-right">
              <Button className="primaryGradient text-white" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SuccessModal;
