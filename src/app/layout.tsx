import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter, Manrope, Space_Grotesk, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abdullahasik.com"),
  title: {
    default: "Abdullah Aşık | Adana Personal Trainer & Online Fitness Koçu",
    template: "%s | Abdullah Aşık",
  },
  description:
    "Adana MACFit'te yüz yüze personal training veya dünyanın her yerine profesyonel online fitness koçluğu. Sürdürülebilir sonuçlar için hemen başla.",
  verification: {
    google: "6cX3ARsZBfKRZL4gjX3gjLYK4CaQXkjAKR02euUO58s",
  },
  alternates: {
    canonical: "/",
    languages: {
      tr: "/tr",
      en: "/en",
    },
  },
  openGraph: {
    title: "Abdullah Aşık | Profesyonel Fitness Koçu",
    description:
      "Hedeflerine bilimle ulaş. Sana özel antrenman ve beslenme stratejileri.",
    url: "https://www.abdullahasik.com",
    siteName: "Abdullah Aşık Fitness",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="tr">
      <body
        className={`
    ${inter.variable}
    ${manrope.variable}
    ${spaceGrotesk.variable}
    ${dmSans.variable}
    antialiased
  `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
