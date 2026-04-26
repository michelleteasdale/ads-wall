"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Direction = "up" | "down" | "left" | "right" | "scale";

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
  stagger = 0,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const from: gsap.TweenVars = { opacity: 0, duration, delay };
    if (direction === "up") from.y = 40;
    if (direction === "down") from.y = -40;
    if (direction === "left") from.x = -40;
    if (direction === "right") from.x = 40;
    if (direction === "scale") { from.scale = 0.9; }

    const targets = stagger
      ? ref.current.children
      : ref.current;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        ...from,
        stagger: stagger || 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });
    }, ref.current);

    return () => ctx.revert();
  }, [direction, delay, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
