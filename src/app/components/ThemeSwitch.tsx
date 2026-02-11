"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      type="button"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-xl border px-3 py-2 hover:opacity-90"
    >
      {current === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
