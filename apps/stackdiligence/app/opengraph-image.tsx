import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#1E2328",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 12,
              backgroundColor: "#4B6357",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "#F6F5F2",
            }}
          >
            SD
          </div>
          <span style={{ fontSize: 44, fontWeight: 700, color: "#F6F5F2", lineHeight: 1 }}>
            STACKDILIGENCE
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 56, maxWidth: 900 }}>
          <span style={{ fontSize: 36, color: "#F6F5F2", lineHeight: 1.3 }}>
            Know what you&apos;re actually buying
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
