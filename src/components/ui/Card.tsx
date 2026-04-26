import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-100 bg-white p-8 shadow-card",
        hover && "transition-all duration-300 hover:border-primary-200 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
