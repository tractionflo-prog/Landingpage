"use client";

import { motion } from "framer-motion";

type HandwrittenNoteProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
};

export function HandwrittenNote({
  children,
  className = "",
  rotate = -2,
}: HandwrittenNoteProps) {
  return (
    <motion.span
      className={`font-handwritten text-xl text-lime-dark md:text-2xl ${className}`}
      style={{ color: "#7ab800" }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <span style={{ display: "inline-block", transform: `rotate(${rotate}deg)` }}>
        {children}
      </span>
    </motion.span>
  );
}
