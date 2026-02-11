"use client";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold " +
    "transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/40";

  const styles =
    variant === "primary"
      ? "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] hover:brightness-105"
      : variant === "secondary"
        ? "bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] border border-[rgb(var(--border))] hover:brightness-105"
        : "bg-transparent text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]";

  return <button className={[base, styles, className].join(" ")} {...props} />;
}
