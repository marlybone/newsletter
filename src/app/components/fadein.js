"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
    className
      ref={ref}
      style={{
        scale: isInView ? 1 : 0.7,
        opacity: isInView ? 1 : 0,
        y: isInView ? 25 : 250,
        transition:
          "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      {children}
    </motion.div>
  );
};
