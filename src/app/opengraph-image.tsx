import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "TractionFlo — Turn Social Media Engagement Into Paying Customers";
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
          background: "#ffffff",
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
                  background: "#0a0a0a",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
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
                fontSize: 48,
                fontWeight: 700,
                color: "#111",
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
              }}
            >
              <span>Turn Social Media Engagement</span>
              <span>Into </span>
              <span
                style={{
                  background: "linear-gradient(180deg, transparent 55%, rgba(201,184,240,0.6) 55%)",
                }}
              >
                Paying Customers
              </span>
            </div>

            <div
              style={{
                marginTop: 22,
                fontSize: 21,
                fontWeight: 600,
                color: "#555",
                lineHeight: 1.45,
                maxWidth: 540,
              }}
            >
              Capture opportunities from comments, DMs and story replies — then convert them into revenue.
            </div>

            <div style={{ display: "flex", marginTop: 28, gap: 10 }}>
              {["90 Days Free", "Founder Pricing", "No Credit Card"].map((label) => (
                <div
                  key={label}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    background: "#fafafa",
                    border: "1px solid rgba(0,0,0,0.08)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

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
                borderRadius: 22,
                border: "1px solid rgba(0,0,0,0.08)",
                padding: 24,
                boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, color: "#6d4aa8" }}>
                REVENUE FLOW
              </span>
              {[
                { label: "Comment", value: "47" },
                { label: "Conversation", value: "31" },
                { label: "Qualified", value: "12" },
                { label: "Customer", value: "4" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: i === 0 ? 16 : 10,
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: i === 3 ? "#f2effb" : "#fafafa",
                    border: i === 3 ? "1px solid rgba(201,184,240,0.6)" : "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{row.label}</span>
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: i === 3 ? "#6d4aa8" : "#111",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 6,
            background:
              "linear-gradient(90deg, #c9b8f0 0%, #a6d3ea 25%, #f4c496 50%, #f3bcd6 75%, #a9d3ba 100%)",
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
