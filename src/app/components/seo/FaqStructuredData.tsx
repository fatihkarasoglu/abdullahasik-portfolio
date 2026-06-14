import type { LocaleDict } from "@/app/i18n/types";

type Props = {
  dict: LocaleDict;
};

export function FaqStructuredData({ dict }: Props) {
  const items = dict.faq.items;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      id="structured-data-faq"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
