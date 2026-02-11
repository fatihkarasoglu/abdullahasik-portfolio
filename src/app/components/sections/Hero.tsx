"use client";

import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import type { LocaleDict } from "@/app/i18n/types";

export function Hero({ dict }: { dict: LocaleDict }) {
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--background))]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-[rgb(var(--primary))]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-120px] h-[380px] w-[380px] rounded-full bg-[rgb(var(--muted))] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(127,127,127,0.22) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <Container className="relative py-14 sm:py-18 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-[rgb(var(--muted-foreground))]">
              {dict.hero.role}
            </p>
            <p className="mt-2 text-base font-semibold text-[rgb(var(--muted-foreground))]">
              {dict.hero.name}
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">{dict.hero.headlineA}</span>
              <span className="block text-[rgb(var(--primary))]">
                {dict.hero.headlineB}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
              {dict.hero.sub}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto"
              >
                {dict.hero.primary}
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document
                    .getElementById("plans")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto"
              >
                {dict.hero.secondary}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[34px] bg-[rgb(var(--primary))]/10 blur-2xl opacity-80" />
            <div className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-lg">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgb(var(--primary))]/10 via-transparent to-transparent"
              />
              <Image
                src="/hero-1.png"
                alt="Personal training session"
                width={1200}
                height={900}
                className="h-auto w-full object-cover saturate-[1.05] contrast-[1.02]"
                draggable={false}
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
