import Script from "next/script";
import type { Locale } from "@/app/i18n/config";

type Props = { locale: Locale };

export function StructuredData({ locale }: Props) {
  const isTR = locale === "tr";

  const location = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "MACFit Optimum AVM Adana",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "Adana",
      streetAddress: "Optimum AVM, MACFit",
    },
    areaServed: {
      "@type": "City",
      name: "Adana",
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Aşık",
    jobTitle: isTR
      ? "Profesyonel Kişisel Antrenör"
      : "Professional Personal Trainer",
    url: `https://www.abdullahasik.com/${locale}`,
    image: "https://www.abdullahasik.com/og-image.png",
    sameAs: [
      "https://www.instagram.com/pt.abdullahasik",
      "https://www.tiktok.com/@pt.abdullahasik",
    ],
    workLocation: {
      "@type": "Place",
      name: "MACFit Optimum AVM Adana",
      address: {
        "@type": "PostalAddress",
        addressCountry: "TR",
        addressLocality: "Adana",
        streetAddress: "Optimum AVM, MACFit",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Adana",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+905527787737",
      availableLanguage: ["Turkish", "English"],
    },
  };

  return (
    <>
      <Script
        id="structured-data-location"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(location) }}
      />
      <Script
        id="structured-data-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
