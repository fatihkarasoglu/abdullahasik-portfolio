"use client";

import type { Locale } from "@/app/i18n/config";
import type { LocaleDict } from "@/app/i18n/types";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer({ locale, dict }: { locale: Locale; dict: LocaleDict }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--background))]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href={`/${locale}`}
              className="group inline-flex flex-col items-start gap-3 cursor-pointer"
              title="Abdullah Aşık"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]">
                <Image
                  src={
                    currentTheme === "dark"
                      ? "/white-logo.png"
                      : "/black-logo.png"
                  }
                  alt="Abdullah Aşık Logo"
                  fill
                  sizes="500px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="text-lg font-brand font-bold tracking-tight">
                  Abdullah Aşık
                </div>
                <p className="mt-1 max-w-sm text-sm text-[rgb(var(--muted-foreground))]">
                  {dict.footer.tagline}
                </p>
              </div>
            </Link>
          </div>

          <div className="grid gap-3 text-sm">
            <div className="text-xs font-bold tracking-widest text-[rgb(var(--muted-foreground))]">
              {dict.footer.quickLinks}
            </div>

            <button
              className="text-left hover:underline"
              onClick={() => scrollTo("about")}
              type="button"
            >
              {dict.nav.about}
            </button>
            <button
              className="text-left hover:underline"
              onClick={() => scrollTo("plans")}
              type="button"
            >
              {dict.nav.services}
            </button>
            <button
              className="text-left hover:underline"
              onClick={() => scrollTo("stories")}
              type="button"
            >
              {dict.nav.stories}
            </button>
            <button
              className="text-left hover:underline"
              onClick={() => scrollTo("contact")}
              type="button"
            >
              {dict.nav.contact}
            </button>
          </div>

          <div className="grid gap-3 text-sm">
            <div className="text-xs font-bold tracking-widest text-[rgb(var(--muted-foreground))]">
              {dict.footer.socials}
            </div>

            <a
              className="hover:underline"
              href="https://www.instagram.com/pt.abdullahasik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="hover:underline"
              href="https://www.tiktok.com/@pt.abdullahasik"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>

            <div className="pt-3">
              <Button onClick={() => scrollTo("contact")}>
                {dict.nav.cta}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[rgb(var(--border))] pt-6 text-xs text-[rgb(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span>{dict.footer.copyright}</span>
            <span className="opacity-40">•</span>
            <Link
              href={`/${locale}/privacy`}
              className="font-semibold text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] hover:underline cursor-pointer"
            >
              {dict.footer.privacy}
            </Link>
          </div>

          <a
            href="https://www.linkedin.com/in/fatihkarasoglu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] hover:underline cursor-pointer"
          >
            {locale === "tr"
              ? "Fatih Karaşoğlu tarafından oluşturuldu"
              : "Created by Fatih Karaşoğlu"}
          </a>
        </div>
      </Container>
    </footer>
  );
}
