import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/app/i18n/config";
import type { LocaleDict } from "../i18n/types";
import { Navbar } from "../components/sections/Navbar";
import { Hero } from "../components/sections/Hero";
import { Plans } from "../components/sections/Plans";
import { Contact } from "../components/sections/Contact";
import { Stories } from "../components/sections/Stories";
import { About } from "../components/sections/About";
import { Footer } from "../components/sections/Footer";
import { FAQ } from "../components/sections/FAQ";
import { FaqStructuredData } from "../components/seo/FaqStructuredData";

async function getDict(locale: Locale): Promise<LocaleDict> {
  return (await import(`../i18n/messages/${locale}.json`))
    .default as LocaleDict;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  const dict = await getDict(locale);

  return (
    <main>
      <FaqStructuredData dict={dict} />
      <Navbar locale={locale} dict={dict} />
      <Hero dict={dict} />
      <Plans locale={locale} dict={dict} />
      <About dict={dict} />
      <Stories locale={locale} dict={dict} />
      <Contact locale={locale} dict={dict} />
      <FAQ dict={dict} />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
