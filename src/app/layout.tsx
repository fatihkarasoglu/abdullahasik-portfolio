import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.senin-domainin.com"), // domainini buraya yaz
  title: "Abdullah Aşık | Profesyonel Antrenör",
  description:
    "Online ve yüz yüze antrenman programları ile hedeflerine ulaş. Şimdi Abdullah Aşık ile tanış!",
  openGraph: {
    title: "Abdullah Aşık | Personal Trainer",
    description:
      "Kişisel antrenman, online koçluk ve beslenme planlamasıyla sağlıklı yaşamın anahtarı.",
    url: "https://www.senin-domainin.com",
    siteName: "Abdullah Aşık",
    images: [
      {
        url: "/black-logo.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Aşık - Personal Trainer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Aşık | Personal Trainer",
    description:
      "Profesyonel antrenman ve motivasyon desteği. Formunu şimdi kazan!",
    images: ["/black-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/favicon.ico" sizes="any" />
        <link
          rel="preload"
          as="image"
          type="image/png"
          href="/black-logo.png"
          sizes="48x48"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
