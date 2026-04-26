"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  className,
}: {
  value: string;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!ref.current) return;

    const numericStr = value.replace(/[^0-9.]/g, "");
    const numeric = parseFloat(numericStr);

    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const nonNumericSuffix = value.replace(/[0-9.]/g, "");
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: numeric,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          if (numeric % 1 === 0) {
            setDisplay(`${prefix}${Math.round(obj.val).toLocaleString()}${nonNumericSuffix}${suffix}`);
          } else {
            setDisplay(`${prefix}${obj.val.toFixed(2)}${nonNumericSuffix}${suffix}`);
          }
        },
      });
    }, ref.current);

    return () => ctx.revert();
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
