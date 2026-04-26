"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { WaveLine } from "@/components/ui/VectorShapes";
import { FaGoogle, FaMeta, FaTiktok, FaAmazon, FaMicrosoft, FaSnapchat, FaPinterest, FaShopify } from "react-icons/fa6";

const platforms = [
  { key: "google", icon: FaGoogle, color: "text-blue-500" },
  { key: "meta", icon: FaMeta, color: "text-blue-600" },
  { key: "tiktok", icon: FaTiktok, color: "text-slate-800" },
  { key: "amazon", icon: FaAmazon, color: "text-amber-500" },
  { key: "microsoft", icon: FaMicrosoft, color: "text-cyan-600" },
  { key: "snapchat", icon: FaSnapchat, color: "text-yellow-400" },
  { key: "pinterest", icon: FaPinterest, color: "text-red-600" },
  { key: "shopify", icon: FaShopify, color: "text-green-600" },
];

export function IntegrationsSection() {
  const t = useTranslations("integrations");

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={-0.1} className="absolute top-0 left-0 right-0">
          <WaveLine className="w-full h-16 opacity-30" />
        </ParallaxElement>
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4">{t("sectionTag")}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-4 tracking-[-0.025em]">
              {t("title")}
            </h2>
            <p className="text-text-secondary mt-4 text-lg max-w-xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.08}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {platforms.map(({ key, icon: Icon, color }) => (
              <Card key={key} className="text-center py-8 group">
                <Icon className={`h-10 w-10 mx-auto mb-3 ${color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <p className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                  {t(`platforms.${key}`)}
                </p>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-center text-text-tertiary mt-10 text-sm">
            {t("more")}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
