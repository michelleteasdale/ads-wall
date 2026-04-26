"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { CrossPattern } from "@/components/ui/VectorShapes";
import { HiUserPlus, HiWallet, HiRocketLaunch } from "react-icons/hi2";

const steps = [
  { key: "register", icon: HiUserPlus, number: "01" },
  { key: "fund", icon: HiWallet, number: "02" },
  { key: "spend", icon: HiRocketLaunch, number: "03" },
] as const;

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={0.15} className="absolute top-10 left-[5%]">
          <CrossPattern className="w-40 h-40 opacity-20" />
        </ParallaxElement>
        <ParallaxElement speed={-0.1} className="absolute bottom-10 right-[8%]">
          <CrossPattern className="w-32 h-32 opacity-15" />
        </ParallaxElement>
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4">{t("sectionTag")}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-4 tracking-[-0.025em]">
              {t("title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] border-t-2 border-dashed border-primary-200" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.key} delay={idx * 0.2}>
                <div className="relative text-center">
                  <div className="text-7xl font-bold text-primary-50 absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none">
                    {step.number}
                  </div>
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-violet text-white mb-6 shadow-lg shadow-primary-500/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="text-base text-text-secondary max-w-xs mx-auto">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
