"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import type { Locale } from "@/app/i18n/config";
import { Badge } from "../ui/Badge";
import { plans } from "@/app/lib/site";
import type { LocaleDict } from "@/app/i18n/types";

export function Plans({ locale, dict }: { locale: Locale; dict: LocaleDict }) {
  return (
    <section id="plans" className="bg-[rgb(var(--background))]">
      <Container className="py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {dict.plans.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[rgb(var(--muted-foreground))]">
            {dict.plans.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const isPopular = Boolean(p.popular);
            return (
              <Card
                key={p.id}
                className={[
                  "relative p-6 transition",
                  isPopular
                    ? "border-[rgb(var(--primary))] shadow-lg"
                    : "hover:-translate-y-0.5 hover:shadow-md",
                ].join(" ")}
              >
                {isPopular && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-2 rounded-[26px] bg-[rgb(var(--primary))]/15 blur-2xl"
                  />
                )}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{p.title[locale]}</h3>
                    {isPopular && (
                      <Badge className="border-[rgb(var(--primary))] bg-[rgb(var(--primary))]/15 text-[rgb(var(--foreground))]">
                        {dict.plans.popular}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-4 flex items-end gap-2">
                    <div className="text-4xl font-extrabold tracking-tight">
                      {p.price}
                    </div>
                    {p.period?.[locale] && (
                      <div className="pb-1 text-sm text-[rgb(var(--muted-foreground))]">
                        /{p.period[locale]}
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                    {p.desc[locale]}
                  </p>

                  <ul className="mt-5 grid gap-2 text-sm">
                    {p.bullets[locale].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[rgb(var(--primary))]/20 text-[rgb(var(--foreground))]">
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {p.footnote?.[locale] && (
                    <p className="mt-4 text-xs text-[rgb(var(--muted-foreground))]">
                      {p.footnote[locale]}
                    </p>
                  )}

                  <Button
                    className="mt-6 w-full"
                    variant={isPopular ? "primary" : "secondary"}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {dict.plans.select}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
