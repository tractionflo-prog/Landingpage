import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "TractionFlo — Never lose a buyer in your Instagram DMs again";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFonts() {
  const [interBold, interSemi] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Inter-Bold.woff")),
    readFile(join(process.cwd(), "public/fonts/Inter-SemiBold.woff")),
  ]);
  return { interBold, interSemi };
}

export default async function OgImage() {
  const { interBold, interSemi } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #f7f8f4 0%, #ffffff 45%, #f0fae0 100%)",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            position: "relative",
          }}
        >
          {/* Left: copy */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "58%",
              padding: "56px 0 48px 64px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  background: "#bef227",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#111",
                }}
              >
                TF
              </div>
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#111",
                  letterSpacing: "-0.02em",
                }}
              >
                TractionFlo
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 36,
                fontSize: 52,
                fontWeight: 700,
                color: "#111",
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
              }}
            >
              <span>Never lose a</span>
              <span
                style={{
                  background: "linear-gradient(180deg, transparent 55%, rgba(190,242,39,0.85) 55%)",
                }}
              >
                buyer in your DMs again.
              </span>
            </div>

            <div
              style={{
                marginTop: 22,
                fontSize: 22,
                fontWeight: 600,
                color: "#555",
                lineHeight: 1.45,
                maxWidth: 520,
              }}
            >
              Your followers are already asking to buy. See who&apos;s ready, what to say, and close before they go cold.
            </div>

            <div style={{ display: "flex", marginTop: 28, gap: 10 }}>
              {["Spot buyers", "Suggested reply", "Close faster"].map((label) => (
                <div
                  key={label}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.08)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 16,
                fontWeight: 600,
                color: "#6fa800",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#bef227",
                }}
              />
              100 founder spots — limited availability
            </div>
          </div>

          {/* Right: product mock */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42%",
              paddingRight: 48,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 380,
                background: "#fff",
                borderRadius: 20,
                border: "1px solid rgba(0,0,0,0.07)",
                padding: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "#bef227",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#111",
                    }}
                  >
                    TF
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>
                    People to message today
                  </span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#8ab800" }}>4 warm</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 20,
                  padding: 14,
                  borderRadius: 14,
                  background: "#fafafa",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "#f9a8d4",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 5 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>@sarah.k</span>
                    <span
                      style={{
                        padding: "3px 9px",
                        borderRadius: 999,
                        background: "#f4fce0",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#4d7c0f",
                      }}
                    >
                      High intent
                    </span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>
                    “How much is your coaching?”
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 12,
                  padding: 14,
                  borderRadius: 14,
                  background: "#f4fce0",
                  border: "1px solid rgba(190,242,39,0.35)",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 1,
                    color: "#4d7c0f",
                    marginBottom: 6,
                  }}
                >
                  SUGGESTED REPLY
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#222" }}>
                  Hey Sarah! Yes — spots are open. Want the link?
                </span>
              </div>

              <div style={{ display: "flex", marginTop: 16, gap: 12 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: "#fafafa",
                    border: "1px solid rgba(0,0,0,0.06)",
                    gap: 2,
                  }}
                >
                  <span style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>Warm today</span>
                  <span style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>12</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: "#fafafa",
                    border: "1px solid rgba(0,0,0,0.06)",
                    gap: 2,
                  }}
                >
                  <span style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>Message now</span>
                  <span style={{ fontSize: 22, fontWeight: 700, color: "#8ab800" }}>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 6,
            background: "linear-gradient(90deg, #bef227 0%, #d4ff4d 50%, #bef227 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
        { name: "Inter", data: interSemi, weight: 600, style: "normal" },
      ],
    }
  );
}
