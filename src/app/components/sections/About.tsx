"use client";

import Image from "next/image";
import type { Locale } from "@/app/i18n/config";
import type { LocaleDict } from "@/app/i18n/types";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";

export function About({ locale, dict }: { locale: Locale; dict: LocaleDict }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[rgb(var(--background))]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-[-160px] h-[420px] w-[420px] rounded-full bg-[rgb(var(--muted))] blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-[-160px] h-[420px] w-[420px] rounded-full bg-[rgb(var(--primary))]/10 blur-3xl opacity-80"
      />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-widest text-[rgb(var(--primary))]">
              {dict.about.kicker}
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="block">{dict.about.titleA}</span>
              <span className="block text-[rgb(var(--primary))]">
                {dict.about.titleB}
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-[rgb(var(--muted-foreground))]">
              {dict.about.subtitle}
            </p>

            <p className="mt-5 max-w-xl whitespace-pre-line text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
              {dict.about.body}
            </p>

            <h3 className="mt-10 text-lg font-extrabold tracking-tight">
              {dict.about.techniquesTitle}
            </h3>

            <ul className="mt-4 grid gap-3 text-sm">
              {dict.about.techniques.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[rgb(var(--primary))]/15">
                    ✓
                  </span>
                  <span className="text-[rgb(var(--foreground))]">{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-extrabold tracking-tight">
              {dict.about.educationTitle}
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {dict.about.education.map((e) => (
                <Card key={`${e.label}-${e.value}`} className="p-4">
                  <div className="text-xl font-extrabold tracking-tight">
                    {e.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-[rgb(var(--muted-foreground))]">
                    {e.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[34px] bg-[rgb(var(--primary))]/10 blur-2xl opacity-80"
            />
            <div className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-lg">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgb(var(--primary))]/10 via-transparent to-transparent"
              />
              <Image
                src="/about-1.png"
                alt="Trainer portrait"
                width={1200}
                height={900}
                draggable={false}
                className="h-auto w-full object-cover saturate-[1.05] contrast-[1.02]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
