/** Vibrant accent palette — soft tinted backgrounds with saturated icon colors. */
export const ACCENTS = {
  rose: { fg: "#F43F5E", bg: "#FFF1F2" },
  pink: { fg: "#EC4899", bg: "#FDF2F8" },
  orange: { fg: "#FF5A1F", bg: "#F5F5F5" },
  purple: { fg: "#8B5CF6", bg: "#F5F3FF" },
  blue: { fg: "#3B82F6", bg: "#EFF6FF" },
  green: { fg: "#22C55E", bg: "#F0FDF4" },
} as const;

export type AccentKey = keyof typeof ACCENTS;

/** Warm Instagram-style gradient used for headline accents (orange → pink, minimal purple). */
export const HEADLINE_GRADIENT = "linear-gradient(90deg, #FF5A1F 0%, #FF7A45 100%)";
