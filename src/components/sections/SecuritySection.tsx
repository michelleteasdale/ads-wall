"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { HexGrid, GridPattern } from "@/components/ui/VectorShapes";
import { HiShieldCheck, HiFingerPrint, HiLockClosed } from "react-icons/hi2";
import { HiTrophy } from "react-icons/hi2";

const badgeIcons = {
  pci: HiShieldCheck,
  "3ds": HiFingerPrint,
  encryption: HiLockClosed,
  soc2: HiTrophy,
};

const badgeKeys = ["pci", "3ds", "encryption", "soc2"] as const;

export function SecuritySection() {
  const t = useTranslations("security");

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={0.2} className="absolute top-0 right-0">
          <GridPattern className="w-64 h-64 opacity-20" />
        </ParallaxElement>
        <ParallaxElement speed={-0.15} className="absolute bottom-0 left-[10%]">
          <HexGrid className="w-48 h-40 opacity-15" />
        </ParallaxElement>
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4">{t("sectionTag")}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-4 tracking-[-0.025em]">
              {t("title")}
            </h2>
            <p className="text-text-secondary mt-4">{t("subtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {badgeKeys.map((key) => {
              const Icon = badgeIcons[key];
              return (
                <Card key={key} className="text-center bg-white">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 mb-4">
                    <Icon className="h-7 w-7 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{t(`badges.${key}.title`)}</h3>
                  <p className="text-sm text-text-secondary">
                    {t(`badges.${key}.description`)}
                  </p>
                </Card>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
