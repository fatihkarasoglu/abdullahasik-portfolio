"use client";

import { useState } from "react";
import type { Locale } from "@/app/i18n/config";
import type { LocaleDict } from "@/app/i18n/types";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";

export function FAQ({ locale, dict }: { locale: Locale; dict: LocaleDict }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[rgb(var(--background))]">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-extrabold tracking-tight">
            {dict.faq.titleA}{" "}
            <span className="text-[rgb(var(--primary))]">
              {dict.faq.titleB}
            </span>
          </h2>

          <p className="mt-3 text-center text-[rgb(var(--muted-foreground))]">
            {dict.faq.subtitle}
          </p>

          <div className="mt-10 grid gap-4">
            {dict.faq.items.map((item, i) => {
              const isOpen = open === i;

              return (
                <Card
                  key={item.q}
                  className={[
                    "p-5 transition-all",
                    isOpen
                      ? "bg-[rgb(var(--muted))]"
                      : "hover:bg-[rgb(var(--muted))]/60",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-semibold">{item.q}</h3>
                    <span
                      className={[
                        "text-xl transition-transform",
                        isOpen ? "rotate-45" : "",
                      ].join(" ")}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                      {item.a}
                    </p>
                  )}
                </Card>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-[rgb(var(--muted-foreground))]">
            {dict.faq.ctaText}{" "}
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-semibold text-[rgb(var(--primary))] hover:underline cursor-pointer"
            >
              {dict.faq.ctaLink}
            </button>
          </p>
        </div>
      </Container>
    </section>
  );
}
