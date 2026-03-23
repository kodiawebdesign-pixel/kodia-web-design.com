import { ImageResponse } from "next/og";
import { brand } from "@/data/brand";

export const alt = `${brand.name} Open Graph Image`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top right, rgba(56,189,248,0.18), transparent 24%), radial-gradient(circle at left, rgba(99,102,241,0.16), transparent 26%), radial-gradient(circle at bottom left, rgba(217,70,239,0.12), transparent 24%), linear-gradient(180deg, #050505 0%, #0b1018 100%)",
          color: "#ffffff",
          padding: "56px 64px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              {brand.name}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "8px",
                fontSize: 18,
                color: "#94a3b8",
              }}
            >
              Premium Digital Presence
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "12px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 18,
              color: "#dbeafe",
            }}
          >
            Web Design Studio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "880px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Websites that elevate
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "10px",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#8bd5ff",
            }}
          >
            your brand presence
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "24px",
              fontSize: 24,
              lineHeight: 1.6,
              color: "#cbd5e1",
              maxWidth: "900px",
            }}
          >
            Company websites, landing pages, and online stores with a modern,
            premium, high-trust visual direction.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "12px 18px",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg, rgba(14,165,233,0.22), rgba(99,102,241,0.22))",
                border: "1px solid rgba(125,211,252,0.16)",
                fontSize: 18,
                color: "#e0f2fe",
              }}
            >
              Premium UI
            </div>

            <div
              style={{
                display: "flex",
                padding: "12px 18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                fontSize: 18,
                color: "#e2e8f0",
              }}
            >
              Modern Web Design
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#94a3b8",
            }}
          >
            kodia-web-design.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}