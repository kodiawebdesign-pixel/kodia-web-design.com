import { ImageResponse } from "next/og";
import { brand } from "@/data/brand";

export const alt = `${brand.name} | ${brand.tagline}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  const logoUrl = new URL("/images/logo.png", brand.url).toString();
  const cleanUrl = brand.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 10% 14%, rgba(1,144,233,0.22), transparent 26%), radial-gradient(circle at 32% 10%, rgba(28,106,221,0.22), transparent 26%), radial-gradient(circle at 55% 12%, rgba(94,85,244,0.22), transparent 24%), radial-gradient(circle at 82% 18%, rgba(217,32,146,0.18), transparent 22%), radial-gradient(circle at 88% 82%, rgba(246,82,34,0.18), transparent 22%), linear-gradient(135deg, #07070b 0%, #0d1020 55%, #15111d 100%)",
          color: "#ffffff",
          padding: "38px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "30px",
            padding: "42px",
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(8, 10, 20, 0.56)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "640px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#e7eefc",
                }}
              >
                Kodia Web Design
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "28px",
                  fontSize: "70px",
                  lineHeight: 1.05,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#ffffff",
                }}
              >
                Modern websites that make your brand look premium
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "22px",
                  fontSize: "26px",
                  lineHeight: 1.45,
                  color: "#d8e1f2",
                  maxWidth: "590px",
                }}
              >
                Websites, landing pages, and online stores with a fast,
                trustworthy, high-converting visual identity.
              </div>
            </div>

            <div
              style={{
                width: "392px",
                minWidth: "392px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "28px 24px",
                borderRadius: "28px",
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",
                boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
              }}
            >
              <img
                src={logoUrl}
                alt={brand.name}
                width="340"
                height="107"
                style={{
                  objectFit: "contain",
                }}
              />

              <div
                style={{
                  display: "flex",
                  marginTop: "18px",
                  fontSize: "16px",
                  color: "#cbd6eb",
                  letterSpacing: "0.04em",
                }}
              >
                BRAND IDENTITY • WEB DESIGN
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(55,185,255,0.22)",
                  background:
                    "linear-gradient(90deg, rgba(1,144,233,0.18), rgba(28,106,221,0.18))",
                  fontSize: "18px",
                  color: "#eaf6ff",
                }}
              >
                Premium UI
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.05)",
                  fontSize: "18px",
                  color: "#f8d5ea",
                }}
              >
                Landing Pages
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.05)",
                  fontSize: "18px",
                  color: "#ffd9c9",
                }}
              >
                Online Stores
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "20px",
                color: "#e7edf8",
                fontWeight: 700,
              }}
            >
              {cleanUrl}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}