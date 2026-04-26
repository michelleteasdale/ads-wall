"use client";

import { cn } from "@/lib/utils/cn";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary-500 to-accent-violet text-white shadow-button hover:shadow-lg hover:scale-[1.02]",
  secondary:
    "bg-white text-primary-600 border border-slate-200 hover:bg-slate-50 shadow-card",
  outline:
    "bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-50",
  ghost:
    "bg-transparent text-slate-600 hover:text-primary-500 hover:bg-slate-50",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base font-semibold",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
