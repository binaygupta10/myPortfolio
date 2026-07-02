import React from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.6, ease: "easeInOut" }}
    >
      <div className="preloader-inner">
        <motion.div
          className="preloader-mark"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          BG
        </motion.div>
        <div className="preloader-bar">
          <motion.div
            className="preloader-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Binay Kumar Gupta
        </motion.p>
      </div>
    </motion.div>
  );
}
