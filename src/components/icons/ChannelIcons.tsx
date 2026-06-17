type IconProps = { size?: number };

export function InstagramGlyph({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="#fff" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.4" fill="#fff" />
    </svg>
  );
}

export function TikTokGlyph({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 3v9.3a3.2 3.2 0 1 1-2.6-3.14V11a1.4 1.4 0 1 0 1 1.34V3h1.6a4.4 4.4 0 0 0 4 3.2V8a6 6 0 0 1-4-1.5Z"
        fill="#fff"
      />
    </svg>
  );
}

export function YouTubeGlyph({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M10 9l5 3-5 3V9z" fill="#FF0000" />
      <rect x="3" y="6" width="18" height="12" rx="3.5" stroke="#fff" strokeWidth="2" />
      <path d="M10.5 9.2l4 2.8-4 2.8V9.2z" fill="#fff" />
    </svg>
  );
}

export function FacebookGlyph({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.3c0-.8.3-1.4 1.5-1.4h1.3V5.4c-.6-.1-1.4-.2-2.3-.2-2.3 0-3.8 1.4-3.8 3.9v2.1H7.6V14h2.3v7h3.6Z"
        fill="#fff"
      />
    </svg>
  );
}

export function WhatsAppGlyph({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 16.2c-1.4 0-2.7-.4-3.9-1l-.3-.2-2.7.7.7-2.6-.2-.3A7.2 7.2 0 1 1 12 19.2Zm4-5.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1a5.9 5.9 0 0 1-2.9-2.6c-.2-.4.2-.4.5-1 .1-.2 0-.4 0-.5l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.8-.6 2.9a9.6 9.6 0 0 0 4.6 4.6c1.6.7 2.3.6 3.1.5.5-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1l-.5-.2Z"
        fill="#fff"
      />
    </svg>
  );
}

export const CHANNEL_ICONS = {
  Instagram: { Glyph: InstagramGlyph, bg: "linear-gradient(135deg, #feda75, #d62976 45%, #962fbf 75%, #4f5bd5)" },
  TikTok: { Glyph: TikTokGlyph, bg: "#010101" },
  YouTube: { Glyph: YouTubeGlyph, bg: "#FF0000" },
  Facebook: { Glyph: FacebookGlyph, bg: "#1877F2" },
  WhatsApp: { Glyph: WhatsAppGlyph, bg: "#25D366" },
} as const;
