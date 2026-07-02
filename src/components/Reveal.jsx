import React from "react";
import { motion } from "framer-motion";

const SNAP = new URLSearchParams(window.location.search).has("snap");

export default function Reveal({ children, delay = 0, y = 30, className = "" }) {
  if (SNAP) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
