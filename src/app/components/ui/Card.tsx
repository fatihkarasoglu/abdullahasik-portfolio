export function Card({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]",
        "shadow-[var(--shadow)]",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
