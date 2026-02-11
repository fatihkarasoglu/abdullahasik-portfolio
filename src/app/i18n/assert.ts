import type { LocaleDict } from "./types";

export function assertDict(dict: LocaleDict) {
  const required = [
    dict.hero?.headlineA,
    dict.plans?.title,
    dict.stories?.title,
    dict.contact?.form?.title,
  ];
  if (required.some((v) => typeof v !== "string")) {
    throw new Error(
      "Dictionary is missing required keys. Check messages/*.json",
    );
  }
}
