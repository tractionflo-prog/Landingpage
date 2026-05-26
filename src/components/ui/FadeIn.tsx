"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  variants?: Variants;
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
  variants = fadeUp,
}: FadeInProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
