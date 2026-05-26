export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" },
  hover: {
    y: -4,
    boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  },
};
