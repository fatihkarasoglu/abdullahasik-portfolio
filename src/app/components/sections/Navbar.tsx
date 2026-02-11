"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Locale } from "@/app/i18n/config";
import type { LocaleDict } from "@/app/i18n/types";

export function Navbar({ locale, dict }: { locale: Locale; dict: LocaleDict }) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const [open, setOpen] = useState(false);

  const otherLocale = useMemo(() => (locale === "tr" ? "en" : "tr"), [locale]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goLocale = () => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const parts = pathname.split("/");
    parts[1] = otherLocale;
    const nextPath = parts.join("/") + hash;
    router.push(nextPath);
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--background))]/80 backdrop-blur">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 font-extrabold tracking-tight cursor-pointer"
            title="Abdullah Aşık"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]">
              <Image
                src={
                  currentTheme === "dark"
                    ? "/white-logo.png"
                    : "/black-logo.png"
                }
                alt="Abdullah Aşık Logo"
                fill
                sizes="40px"
                className="object-contain p-1"
                priority
              />
            </div>
            <span
              className="
    hidden sm:block
    font-brand
    text-[15px] md:text-[16px]
    font-bold
    leading-none
    tracking-[-0.02em]
    text-[rgb(var(--foreground))]
  "
            >
              Abdullah Aşık
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => scrollTo("about")}
              className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] cursor-pointer"
            >
              {dict.nav.about}
            </button>
            <button
              onClick={() => scrollTo("plans")}
              className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] cursor-pointer"
            >
              {dict.nav.services}
            </button>
            <button
              onClick={() => scrollTo("stories")}
              className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] cursor-pointer"
            >
              {dict.nav.stories}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] cursor-pointer"
            >
              {dict.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] hover:bg-[rgb(var(--muted))] cursor-pointer"
            >
              {currentTheme === "dark" ? (
                <FaSun size={18} />
              ) : (
                <FaMoon size={18} />
              )}
            </button>

            <button
              type="button"
              onClick={goLocale}
              className="inline-flex h-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] px-3 text-sm font-bold hover:bg-[rgb(var(--muted))] cursor-pointer"
              aria-label="Toggle language"
            >
              {dict.nav.lang}
            </button>

            <div className="hidden md:block">
              <Button
                onClick={() => scrollTo("contact")}
                className="cursor-pointer"
              >
                {dict.nav.cta}
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] hover:bg-[rgb(var(--muted))] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3 md:hidden">
            <div className="grid gap-2">
              <Button
                variant="ghost"
                onClick={() => scrollTo("about")}
                className="justify-start"
              >
                {dict.nav.about}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollTo("plans")}
                className="justify-start"
              >
                {dict.nav.services}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollTo("stories")}
                className="justify-start"
              >
                {dict.nav.stories}
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollTo("contact")}
                className="justify-start"
              >
                {dict.nav.contact}
              </Button>

              <Button onClick={() => scrollTo("contact")} className="w-full">
                {dict.nav.cta}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
