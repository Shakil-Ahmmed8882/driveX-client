import { motion } from "framer-motion";
import React from "react";

const AnimateUp = ({
  children,
  delay = 0,
  trigger = true,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  trigger?: boolean;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimateUp;
