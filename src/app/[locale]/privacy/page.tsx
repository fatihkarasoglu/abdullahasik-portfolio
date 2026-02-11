import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/app/components/ui/Container";
import { isLocale, type Locale } from "@/app/i18n/config";

const siteUrl = "https://www.abdullahasik.com";

const meta = {
  tr: {
    title: "Gizlilik Politikası",
    description:
      "Abdullah Aşık web sitesi gizlilik politikası. Kişisel verilerin işlenmesi, saklama süresi ve haklarınız hakkında bilgi.",
  },
  en: {
    title: "Privacy Policy",
    description:
      "Privacy policy for Abdullah Aşık website. Learn how we process data, retention, and your rights.",
  },
} satisfies Record<Locale, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return {
    metadataBase: new URL(siteUrl),
    title: meta[locale].title,
    description: meta[locale].description,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        "tr-TR": "/tr/privacy",
        "en-US": "/en/privacy",
      },
    },
    openGraph: {
      type: "article",
      url: `/${locale}/privacy`,
      title: meta[locale].title,
      description: meta[locale].description,
      siteName: "Abdullah Aşık",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Abdullah Aşık",
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

export const dynamic = "force-static";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
        {children}
      </div>
    </section>
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  const lastUpdated = "2026-02-01";

  const t = {
    tr: {
      title: "Gizlilik Politikası",
      updated: "Son güncelleme",
      intro:
        "Bu sayfa, web sitemizi ziyaret ettiğinizde hangi verilerin hangi amaçlarla işlendiğini ve haklarınızı açıklar.",
      sections: {
        data: "Toplanan veriler",
        purposes: "İşleme amaçları",
        retention: "Saklama süresi",
        sharing: "Paylaşım",
        cookies: "Çerezler",
        rights: "Haklarınız",
        contact: "İletişim",
      },
      bulletsData: [
        "İletişim formu üzerinden: ad, e-posta, mesaj içeriği (varsa telefon).",
        "Teknik/analitik: tarayıcı türü, sayfa görüntüleme gibi kullanım verileri (zorunluysa).",
      ],
      purposesText:
        "İletişim taleplerinizi yanıtlamak, hizmet kalitesini geliştirmek ve güvenlik amaçlarıyla.",
      retentionText:
        "İletişim kayıtları makul süre boyunca saklanır; yasal yükümlülük olması halinde daha uzun saklanabilir.",
      sharingText:
        "Kişisel verileriniz üçüncü taraflara satılmaz. Yalnızca hizmetin sağlanması için zorunlu servis sağlayıcılarla (örn. e-posta altyapısı) sınırlı olarak paylaşılabilir.",
      cookiesText:
        "Sitemiz temel işlevler ve performans için çerez kullanabilir. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.",
      rightsText:
        "Verilerinize erişme, düzeltme, silme ve işleme itiraz etme gibi haklara sahipsiniz.",
      contactText:
        "Gizlilikle ilgili talepleriniz için bize e-posta ile ulaşabilirsiniz:",
      backHome: "Ana sayfaya dön",
    },
    en: {
      title: "Privacy Policy",
      updated: "Last updated",
      intro:
        "This page explains what data we process when you use our website and what rights you have.",
      sections: {
        data: "Data we collect",
        purposes: "Why we process it",
        retention: "Retention",
        sharing: "Sharing",
        cookies: "Cookies",
        rights: "Your rights",
        contact: "Contact",
      },
      bulletsData: [
        "Via contact form: name, email, message content (phone if provided).",
        "Technical/analytics: browser type, page views (only if necessary).",
      ],
      purposesText:
        "To respond to inquiries, improve service quality, and for security purposes.",
      retentionText:
        "Contact records are stored for a reasonable period; longer if required by law.",
      sharingText:
        "We do not sell your personal data. We may share limited data with service providers only to operate the service (e.g., email delivery).",
      cookiesText:
        "We may use cookies for essential functionality and performance. You can manage cookies in your browser settings.",
      rightsText:
        "You may request access, correction, deletion, or object to processing as applicable.",
      contactText: "For privacy-related requests, contact us via email:",
      backHome: "Back to home",
    },
  }[locale];

  return (
    <main className="bg-[rgb(var(--background))]">
      <Container className="py-14 sm:py-18 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-widest text-[rgb(var(--primary))]">
            {t.updated}: {lastUpdated}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t.title}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
            {t.intro}
          </p>

          <Section title={t.sections.data}>
            <ul className="list-disc pl-5 space-y-2">
              {t.bulletsData.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Section>

          <Section title={t.sections.purposes}>
            <p>{t.purposesText}</p>
          </Section>

          <Section title={t.sections.retention}>
            <p>{t.retentionText}</p>
          </Section>

          <Section title={t.sections.sharing}>
            <p>{t.sharingText}</p>
          </Section>

          <Section title={t.sections.cookies}>
            <p>{t.cookiesText}</p>
          </Section>

          <Section title={t.sections.rights}>
            <p>{t.rightsText}</p>
          </Section>

          <Section title={t.sections.contact}>
            <p>
              {t.contactText}{" "}
              <span className="font-semibold">abdullahasik71@gmail.com</span>
            </p>
          </Section>

          <div className="mt-12">
            <Link
              href={`/${locale}`}
              className="text-sm font-semibold text-[rgb(var(--primary))] hover:underline"
            >
              ← {t.backHome}
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
