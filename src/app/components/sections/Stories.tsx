"use client";

import { useMemo, useState } from "react";
import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import type { LocaleDict } from "@/app/i18n/types";
import type { Locale } from "@/app/i18n/config";
import { stories } from "@/app/lib/site";

const INITIAL_COUNT = 3;

export function Stories({
  locale,
  dict,
}: {
  locale: Locale;
  dict: LocaleDict;
}) {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const visibleStories = useMemo(() => {
    return showAll ? stories : stories.slice(0, INITIAL_COUNT);
  }, [showAll]);

  const toggleCard = (id: number) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="stories" className="bg-[rgb(var(--background))]">
      <Container className="py-16 sm:py-20">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {dict.stories.title}
            </h2>
            <p className="mt-2 max-w-2xl text-[rgb(var(--muted-foreground))]">
              {dict.stories.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="shrink-0 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2 text-sm font-semibold hover:bg-[rgb(var(--muted))]"
          >
            {showAll
              ? (dict.stories.less ?? "Daha az göster")
              : (dict.stories.more ?? "Tümünü gör")}
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {visibleStories.map((s) => {
            const isExpanded = Boolean(expanded[s.id]);
            const quote = s.quote[locale];

            const canExpand = quote.length > 180;

            return (
              <Card key={s.id} className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-1 text-[rgb(var(--primary))]">
                  {"★★★★★"
                    .slice(0, s.stars)
                    .split("")
                    .map((ch, i) => (
                      <span key={i}>{ch}</span>
                    ))}
                </div>

                <p
                  className={[
                    "mt-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]",
                    isExpanded ? "" : "line-clamp-6",
                  ].join(" ")}
                >
                  “{quote}”
                </p>

                {canExpand && (
                  <button
                    type="button"
                    onClick={() => toggleCard(s.id)}
                    className="mt-3 w-fit text-sm font-semibold text-[rgb(var(--primary))] hover:underline"
                  >
                    {isExpanded
                      ? (dict.stories.readLess ?? "Daha az")
                      : (dict.stories.readMore ?? "Devamını oku")}
                  </button>
                )}

                <div className="mt-auto pt-6 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[rgb(var(--muted))] border border-[rgb(var(--border))]"></div>
                  <div>
                    <div className="text-sm font-bold">{s.name}</div>
                    <div className="text-xs text-[rgb(var(--muted-foreground))]">
                      {s.tagline?.[locale] ?? ""}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
