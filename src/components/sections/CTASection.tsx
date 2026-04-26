"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { HiArrowRight } from "react-icons/hi2";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-violet to-primary-700" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating card shapes with parallax */}
      <ParallaxElement speed={0.2} className="absolute top-10 left-10 w-32 h-20 rounded-xl border border-white/10 rotate-12 opacity-20" />
      <ParallaxElement speed={-0.15} className="absolute bottom-10 right-20 w-40 h-24 rounded-xl border border-white/10 -rotate-6 opacity-15" />
      <ParallaxElement speed={0.3} className="absolute top-1/2 right-10 w-24 h-16 rounded-lg border border-white/10 rotate-[20deg] opacity-10" />
      <ParallaxElement speed={-0.25} className="absolute top-1/3 left-[20%] w-28 h-18 rounded-xl border border-white/10 -rotate-12 opacity-10" />

      <Container className="relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              {t("subtitle")}
            </p>
            <MagneticButton className="inline-block">
              <button className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold rounded-xl px-10 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                {t("button")}
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
