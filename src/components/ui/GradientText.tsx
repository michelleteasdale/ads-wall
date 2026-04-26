import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

export function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary-500 via-accent-violet to-accent-cyan bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
