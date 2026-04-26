"use client";

import { cn } from "@/lib/utils/cn";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        placeholder=" "
        className={cn(
          "peer w-full rounded-xl border border-slate-200 bg-white px-4 pt-6 pb-2 text-sm text-text-primary outline-none transition-all",
          "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
          "placeholder-shown:pt-4 placeholder-shown:pb-4",
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs text-text-tertiary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary-500"
      >
        {label}
      </label>
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, className, id, ...props }: TextareaProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder=" "
        className={cn(
          "peer w-full rounded-xl border border-slate-200 bg-white px-4 pt-6 pb-2 text-sm text-text-primary outline-none transition-all resize-none",
          "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
          className
        )}
        rows={5}
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs text-text-tertiary transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary-500"
      >
        {label}
      </label>
    </div>
  );
}
