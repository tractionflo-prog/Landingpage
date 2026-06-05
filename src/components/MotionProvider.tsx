"use client";

import { useEffect, useState } from "react";
import { MotionConfig, MotionGlobalConfig } from "framer-motion";

const MOBILE_QUERY = "(max-width: 767px)";

// Set before the first render on the client so framer-motion skips every
// animation from frame one on phones (prevents animation-driven flicker).
if (typeof window !== "undefined") {
  MotionGlobalConfig.skipAnimations = window.matchMedia(MOBILE_QUERY).matches;
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const apply = () => {
      MotionGlobalConfig.skipAnimations = mq.matches;
      setIsMobile(mq.matches);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
