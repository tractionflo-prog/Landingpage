"use client";

import { MotionConfig } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
