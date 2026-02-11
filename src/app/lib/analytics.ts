export function track404(path: string, locale: string) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", "404_page_view", {
    page_path: path,
    locale,
  });
}
