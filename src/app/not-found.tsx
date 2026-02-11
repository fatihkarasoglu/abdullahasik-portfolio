import Link from "next/link";
import { headers } from "next/headers";
import { Container } from "@/app/components/ui/Container";
import Track404Client from "./components/Track404Client";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NotFound() {
  const h = await headers();
  const locale = h.get("x-locale") === "en" ? "en" : "tr";

  const t =
    locale === "tr"
      ? {
          kicker: "404",
          title: "Sayfa bulunamadı",
          desc: "Aradığın sayfa taşınmış olabilir ya da link hatalı olabilir.",
          home: "Ana sayfaya dön",
          contact: "İletişime geç",
        }
      : {
          kicker: "404",
          title: "Page not found",
          desc: "The page you are looking for may have been moved or the link is incorrect.",
          home: "Back to home",
          contact: "Contact",
        };

  return (
    <main className="bg-[rgb(var(--background))]">
      <Container className="py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 sm:p-12 text-center">
            <p className="text-xs font-bold tracking-widest text-[rgb(var(--primary))]">
              {t.kicker}
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
              {t.title}
            </h1>

            <p className="mt-4 text-[rgb(var(--muted-foreground))]">{t.desc}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href={`/${locale}`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[rgb(var(--primary))] px-6 text-sm font-bold text-[rgb(var(--primary-foreground))] hover:opacity-95"
              >
                {t.home}
              </Link>

              <Link
                href={`/${locale}#contact`}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[rgb(var(--border))] px-6 text-sm font-bold hover:bg-[rgb(var(--muted))]"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Track404Client locale={locale} />
    </main>
  );
}
