// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/app/i18n/config";
import { StructuredData } from "@/app/components/seo/StructuredData";

const baseUrl = "https://www.abdullahasik.com";

const metaByLocale: Record<Locale, { title: string; description: string }> = {
  tr: {
    title: "Abdullah Aşık | Profesyonel Kişisel Antrenör",
    description:
      "Online ve yüz yüze kişisel antrenman. Sana özel plan, net takip, sürdürülebilir sonuç.",
  },
  en: {
    title: "Abdullah Aşık | Professional Personal Trainer",
    description:
      "Online and in-person personal training with personalized plans and sustainable results.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  const meta = metaByLocale[locale];

  return {
    title: meta.title,
    description: meta.description,

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "tr-TR": `${baseUrl}/tr`,
        "en-US": `${baseUrl}/en`,
      },
    },

    openGraph: {
      type: "website",
      url: `${baseUrl}/${locale}`,
      title: meta.title,
      description: meta.description,
      siteName: "Abdullah Aşık",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 884,
          height: 1350,
          alt: "Abdullah Aşık",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <>
      <StructuredData locale={locale} />
      {children}
    </>
  );
}
