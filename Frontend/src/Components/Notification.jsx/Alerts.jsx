import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Alerts = ({ message, bgColor = "#4CAF50", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 300); // Wait for exit animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: bgColor,
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "4px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            zIndex: 9999,
            maxWidth: "300px",
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alerts;
