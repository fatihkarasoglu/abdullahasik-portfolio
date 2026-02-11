"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/app/i18n/config";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { EMAIL_TEXT, PHONE_TEXT, WHATSAPP_URL } from "@/app/lib/site";
import { LocaleDict } from "@/app/i18n/types";
import { FaPhone } from "react-icons/fa6";

type GoalOption = { value: string; label: string };

function GoalSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: GoalOption[];
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const selectedLabel = useMemo(() => {
    return (
      options.find((o) => o.value === value)?.label ?? options[0]?.label ?? ""
    );
  }, [options, value]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <div className="text-sm font-semibold text-[rgb(var(--foreground))]">
        {label}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-2 inline-flex h-12 w-full items-center justify-between rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 text-left text-sm text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{selectedLabel}</span>
        <span className="ml-3 text-[rgb(var(--muted-foreground))]">▾</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-xl"
        >
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={[
                  "w-full px-4 py-3 text-left text-sm",
                  "text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]",
                  active ? "bg-[rgb(var(--muted))]" : "",
                ].join(" ")}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Contact({
  locale,
  dict,
}: {
  locale: Locale;
  dict: LocaleDict;
}) {
  const [goal, setGoal] = useState("loss");
  const [rating, setRating] = useState<number>(0);

  const goalOptions: GoalOption[] = [
    { value: "lose", label: locale === "tr" ? "Kilo vermek" : "Lose weight" },
    { value: "gain", label: locale === "tr" ? "Kas kazanmak" : "Build muscle" },
    { value: "perf", label: locale === "tr" ? "Performans" : "Performance" },
    {
      value: "mob",
      label: locale === "tr" ? "Mobilite / Sağlık" : "Mobility / Health",
    },
  ];

  const startedAt = useRef<number>(Date.now());

  return (
    <section id="contact" className="bg-[rgb(var(--background))]">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-bold tracking-widest text-[rgb(var(--primary))]">
              {dict.contact.kicker}
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
              <span className="block">{dict.contact.titleA}</span>
              <span className="block text-[rgb(var(--primary))]">
                {dict.contact.titleB}
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-[rgb(var(--muted-foreground))]">
              {dict.contact.subtitle}
            </p>

            <div className="mt-8 grid gap-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--primary))]/35 bg-[rgb(var(--card))] px-4 py-3 shadow-sm hover:shadow-md hover:bg-[rgb(var(--muted))] transition"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgb(var(--primary))]/15">
                  <FaPhone />
                </span>
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {dict.contact.info.whatsappCta}
                  </span>
                  <span className="text-[rgb(var(--muted-foreground))]">
                    {PHONE_TEXT}
                  </span>
                </div>
              </a>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3">
                  <div className="text-xs font-semibold text-[rgb(var(--muted-foreground))]">
                    {dict.contact.info.emailLabel}
                  </div>
                  <div className="mt-1 font-semibold">{EMAIL_TEXT}</div>
                </div>
                <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3">
                  <div className="text-xs font-semibold text-[rgb(var(--muted-foreground))]">
                    {dict.contact.info.phoneLabel}
                  </div>
                  <div className="mt-1 font-semibold">{PHONE_TEXT}</div>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-sm">
                <iframe
                  title="MACFit Adana Optimum"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[260px] w-full border-0"
                  src="https://www.google.com/maps?q=MACFit%20Adana%20Optimum&output=embed"
                />
              </div>
            </div>
          </div>

          <Card className="p-6 shadow-lg">
            <h3 className="text-lg font-bold">{dict.contact.form.title}</h3>

            <form
              className="mt-5 grid gap-4"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const fd = new FormData(form);

                const company = String(fd.get("company") ?? "").trim();
                const elapsedMs = Date.now() - startedAt.current;

                try {
                  const verifyRes = await fetch("/api/contact/verify", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ company, elapsedMs }),
                  });

                  if (!verifyRes.ok) {
                    throw new Error("verify_failed");
                  }

                  const verifyData = (await verifyRes
                    .json()
                    .catch(() => null)) as { ok: boolean } | null;

                  if (!verifyData?.ok) {
                    alert(
                      locale === "tr"
                        ? "Lütfen birkaç saniye bekleyip tekrar deneyin."
                        : "Please wait a few seconds and try again.",
                    );
                    return;
                  }
                } catch (err) {
                  console.error(err);
                  alert(
                    locale === "tr"
                      ? "Çok sık deneme yapıldı. Lütfen biraz sonra tekrar deneyin."
                      : "Too many attempts. Please try again later.",
                  );
                  return;
                }

                const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
                const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
                const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

                if (!serviceId || !templateId || !publicKey) {
                  alert(
                    locale === "tr"
                      ? "Email yapılandırması eksik. (.env.local / Vercel env kontrol et)"
                      : "Email config missing. Check .env.local / Vercel env.",
                  );
                  return;
                }

                try {
                  await emailjs.sendForm(serviceId, templateId, form, {
                    publicKey,
                  });

                  form.reset();
                  setRating(0);
                  setGoal("lose");
                  startedAt.current = Date.now();

                  alert(
                    locale === "tr"
                      ? "Mesajın gönderildi ✅"
                      : "Message sent ✅",
                  );
                } catch (err) {
                  console.error(err);
                  alert(
                    locale === "tr"
                      ? "Mesaj gönderilemedi. WhatsApp ile yazabilirsin."
                      : "Failed to send. You can message via WhatsApp.",
                  );
                }
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="font-semibold">
                    {dict.contact.form.firstName}
                  </span>
                  <input
                    className="h-11 rounded-xl border border-[rgb(var(--border))] bg-transparent px-3 outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]/40"
                    placeholder={dict.contact.form.firstName}
                    name="from_name"
                  />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="font-semibold">
                    {dict.contact.form.email}
                  </span>
                  <input
                    className="h-11 rounded-xl border border-[rgb(var(--border))] bg-transparent px-3 outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]/40"
                    placeholder={dict.contact.form.email}
                    name="reply_to"
                    type="email"
                  />
                </label>
              </div>

              <GoalSelect
                label={locale === "tr" ? "Birincil Hedef" : "Primary Goal"}
                value={goal}
                onChange={setGoal}
                options={goalOptions}
              />

              <label className="grid gap-2 text-sm">
                <span className="font-semibold">
                  {locale === "tr" ? "Mesaj" : "Message"}
                </span>
                <textarea
                  className="min-h-28 rounded-xl border border-[rgb(var(--border))] bg-transparent px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]/40"
                  placeholder={dict.contact.form.message}
                  name="message"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="font-semibold">
                  {locale === "tr"
                    ? "Deneyimini kaç yıldızla değerlendirirsin?"
                    : "How would you rate your experience?"}
                </span>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={[
                        "text-2xl transition cursor-pointer",
                        rating >= star
                          ? "text-[rgb(var(--primary))]"
                          : "text-[rgb(var(--muted-foreground))]/40",
                        "hover:scale-110",
                      ].join(" ")}
                      aria-label={`${star} star`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </label>
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <input type="hidden" name="rating" value={rating} />

              <Button type="submit" className="h-11 w-full">
                {dict.contact.form.send}
              </Button>

              <p className="text-xs text-[rgb(var(--muted-foreground))]">
                {locale === "tr"
                  ? "Not: İstersen WhatsApp üzerinden de direkt yazabilirsin."
                  : "Note: You can also message directly via WhatsApp."}
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
