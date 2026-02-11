import type { Locale } from "./config";
import type { LocaleDict } from "./types";

export async function getDict(locale: Locale): Promise<LocaleDict> {
  return (await import(`./messages/${locale}.json`)).default as LocaleDict;
}
