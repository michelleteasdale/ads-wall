"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { HiEye, HiLightBulb, HiShieldCheck, HiHeart, HiCheck } from "react-icons/hi2";

const valueIcons = {
  transparency: HiEye,
  innovation: HiLightBulb,
  security: HiShieldCheck,
  support: HiHeart,
};

const valueKeys = ["transparency", "innovation", "security", "support"] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  const whyUsItems = t.raw("whyUs.items") as string[];

  return (
    <div className="pt-24">
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-[-0.03em]">
                <GradientText>{t("title")}</GradientText>
              </h1>
              <p className="text-lg text-text-secondary">{t("subtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <ScrollReveal direction="left">
              <Card hover={false} className="h-full">
                <Badge className="mb-4">{t("mission.title")}</Badge>
                <p className="text-text-secondary leading-relaxed mt-4">
                  {t("mission.description")}
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Card hover={false} className="h-full">
                <Badge className="mb-4">{t("story.title")}</Badge>
                <p className="text-text-secondary leading-relaxed mt-4">
                  {t("story.description")}
                </p>
              </Card>
            </ScrollReveal>
          </div>

          {/* Team section */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-24">
              <h2 className="text-3xl font-bold text-text-primary mb-4">{t("team.title")}</h2>
              <p className="text-text-secondary leading-relaxed text-lg">{t("team.description")}</p>
            </div>
          </ScrollReveal>

          {/* Why Us section */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-24">
              <h2 className="text-3xl font-bold text-text-primary text-center mb-8">{t("whyUs.title")}</h2>
              <div className="space-y-4">
                {whyUsItems.map((item: string) => (
                  <div key={item} className="flex items-start gap-3">
                    <HiCheck className="h-5 w-5 shrink-0 text-accent-emerald mt-0.5" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary">{t("values.title")}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueKeys.map((key) => {
                const Icon = valueIcons[key];
                return (
                  <Card key={key} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 mb-4">
                      <Icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {t(`values.${key}.title`)}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {t(`values.${key}.description`)}
                    </p>
                  </Card>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </section>
      <CTASection />
    </div>
  );
}
