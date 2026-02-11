import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter, Manrope, Space_Grotesk, DM_Sans } from "next/font/google";

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
  title: {
    default: "Abdullah Aşık | Professional Personal Trainer",
    template: "%s | Abdullah Aşık",
  },
  description:
    "Online and in-person personal training. Sustainable results with a plan built for you.",
  metadataBase: new URL("https://www.abdullahasik.com"),
  verification: {
    google: "6cX3ARsZBfKRZL4gjX3gjLYK4CaQXkjAKR02euUO58s",
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
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          anonymize_ip: true,
          page_path: window.location.pathname,
        });
      `}
            </Script>
          </>
        ) : null}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
