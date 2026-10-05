import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0F1E36",
          color: "white",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", color: "#C5A880", fontSize: 28, letterSpacing: 6 }}>
          ANA RAMOS
        </div>
        <div style={{ display: "flex", fontSize: 64, marginTop: 24, lineHeight: 1.15, maxWidth: 900 }}>
          Executive Search & Talent Development
        </div>
        <div style={{ display: "flex", color: "#8FA3C1", fontSize: 28, marginTop: 28 }}>
          anajramos.com
        </div>
      </div>
    ),
    { ...size },
  );
}
