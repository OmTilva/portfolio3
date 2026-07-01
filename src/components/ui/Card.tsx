import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  featured?: boolean;
  className?: string;
};

export function Card({ children, featured = false, className = "" }: CardProps) {
  return (
    <div
      className={`group rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
        featured
          ? "border-accent/25 bg-surface shadow-[0_0_0_1px_var(--accent-dim)]"
          : "border-hairline bg-surface hover:border-accent/25"
      } ${className}`}
    >
      {children}
    </div>
  );
}
