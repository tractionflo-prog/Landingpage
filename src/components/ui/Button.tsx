"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  href = "#founding-access",
  size = "default",
  className = "",
  onClick,
}: ButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-base md:text-lg"
      : "px-6 py-3 text-sm md:text-base";

  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );

  const baseClasses = `group inline-flex items-center justify-center gap-2 rounded-full bg-lime font-semibold text-black transition-colors hover:bg-lime-dark ${sizeClasses} ${className}`;

  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.a>
  );
}
