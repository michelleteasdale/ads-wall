"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { GridPattern } from "@/components/ui/VectorShapes";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"] as const;

export function FAQSection() {
  const t = useTranslations("faq");

  const items = faqKeys.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={0.1} className="absolute top-0 right-0">
          <GridPattern className="w-60 h-60 opacity-15" />
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

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion items={items} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
