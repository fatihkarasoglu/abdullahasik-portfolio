import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["tr", "en"] as const;
const DEFAULT_LOCALE = "tr";

function isPublicFile(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js|map|txt)$/)
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (isPublicFile(pathname)) {
    return NextResponse.next();
  }

  const locale = LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );

  if (locale) {
    const res = NextResponse.next();
    res.headers.set("x-locale", locale);
    return res;
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;

  const res = NextResponse.redirect(url);
  res.headers.set("x-locale", DEFAULT_LOCALE);
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
