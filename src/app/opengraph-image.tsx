import { ImageResponse } from "next/og";

export const alt = "Aditya Purohit — AI Engineer & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050507",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#67e8f9", fontSize: 26, letterSpacing: 5 }}>
          AI ENGINEER · BUILDER · SYSTEMS
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          Aditya Purohit
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 34, color: "#a1a1aa", maxWidth: 900, lineHeight: 1.35 }}>
          Autonomous agents · AI developer tools · multimodal retrieval · intelligent automation
        </div>
        <div style={{ display: "flex", marginTop: 54, fontSize: 24, color: "#71717a" }}>
          adityapurohit01 · GitHub
        </div>
      </div>
    ),
    size
  );
}
