import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitch({ theme }: { theme: string }) {
  return (
    <span>{theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}</span>
  );
}
