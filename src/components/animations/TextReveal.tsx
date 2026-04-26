"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";

export function TextReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay,
        ease: "power3.out",
      });
    }, ref.current);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
