import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/app/i18n/config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? (raw as Locale) : "tr";

  const title = locale === "tr" ? "Abdullah Aşık" : "Abdullah Aşık";
  const subtitle =
    locale === "tr"
      ? "Profesyonel Kişisel Antrenör"
      : "Professional Personal Trainer";
  const note =
    locale === "tr"
      ? "Kişiye özel plan • Net takip • Sürdürülebilir sonuç"
      : "Personalized plan • Clear tracking • Sustainable results";

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "64px",
        background:
          "linear-gradient(135deg, #0b0f1a 0%, #111827 55%, #0b0f1a 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "999px",
          background: "rgba(59,130,246,0.18)",
          filter: "blur(48px)",
          top: "-140px",
          right: "-140px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "999px",
          background: "rgba(16,185,129,0.12)",
          filter: "blur(56px)",
          bottom: "-160px",
          left: "-160px",
        }}
      />

      <div style={{ fontSize: 22, letterSpacing: 2, opacity: 0.85 }}>
        {subtitle.toUpperCase()}
      </div>

      <div
        style={{
          marginTop: 14,
          fontSize: 76,
          fontWeight: 800,
          lineHeight: 1.05,
        }}
      >
        {title}
      </div>

      <div style={{ marginTop: 18, fontSize: 28, opacity: 0.9, maxWidth: 900 }}>
        {note}
      </div>

      <div
        style={{
          marginTop: 34,
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 22,
          opacity: 0.9,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "rgba(59,130,246,0.9)",
          }}
        />
        abdullahasik.com
      </div>
    </div>,
    size,
  );
}
