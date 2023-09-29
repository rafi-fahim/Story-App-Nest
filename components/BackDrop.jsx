import { motion } from "framer-motion";
import React from "react";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
        className="fixed flex items-center justify-center w-full h-full top-0 left-0 bg-transparent-slate"
        animate={{ scale: 1, opacity:1 }}
        transition={{duration: 0.8}}
        onClick={() => onClick()}
        >
          {children}
    </motion.div>
  );
};

export default Backdrop;
