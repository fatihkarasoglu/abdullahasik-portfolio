"use client";

import { useEffect } from "react";
import { track404 } from "@/app/lib/analytics";

export default function Track404Client({ locale }: { locale: string }) {
  useEffect(() => {
    track404(window.location.pathname, locale);
  }, [locale]);

  return null;
}
