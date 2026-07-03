import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
          <rect x="4" y="4" width="92" height="92" rx="22" fill="#0A0A0A" />
          <path d="M33 40 H67" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" />
          <path d="M50 40 V66" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" />
          <circle cx="65" cy="63" r="6" fill="#FF5A1F" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
