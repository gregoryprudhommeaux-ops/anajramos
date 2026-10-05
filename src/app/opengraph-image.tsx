import { ImageResponse } from "next/og";

export const alt = "AR — Ana Ramos";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#0F1E36",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 340,
              height: 340,
              borderRadius: 170,
              background: "#0F1E36",
              border: "10px solid #C5A880",
              color: "#C5A880",
              fontSize: 148,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            AR
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "#C5A880",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 8,
            }}
          >
            ANA RAMOS
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              color: "#8FA3C1",
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            anajramos.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
