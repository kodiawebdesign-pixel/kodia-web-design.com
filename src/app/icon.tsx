import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top right, rgba(125,211,252,0.22), transparent 24%), radial-gradient(circle at bottom left, rgba(99,102,241,0.18), transparent 26%), linear-gradient(135deg, rgba(14,165,233,1) 0%, rgba(79,70,229,1) 55%, rgba(217,70,239,1) 100%)",
          color: "#ffffff",
          fontSize: 220,
          fontWeight: 800,
          fontFamily: "Arial",
        }}
      >
        K
      </div>
    ),
    {
      ...size,
    }
  );
}