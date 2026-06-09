"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { FloatingRings, HexGrid, CrossPattern } from "@/components/ui/VectorShapes";
import { CreditCardVisual } from "@/components/ui/CreditCardVisual";
import { Link } from "@/i18n/navigation";
import { HiArrowRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Gradient mesh blobs with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxElement speed={-0.3} className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary-100 blur-[120px] opacity-60" />
        <ParallaxElement speed={-0.2} className="absolute -top-16 right-0 w-[500px] h-[500px] rounded-full bg-violet-100 blur-[100px] opacity-50" />
        <ParallaxElement speed={-0.4} className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-100 blur-[80px] opacity-40" />
      </div>

      {/* Vector shape decorations with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxElement speed={0.2} className="absolute top-24 right-[15%]">
          <FloatingRings className="w-48 h-48 opacity-40" />
        </ParallaxElement>
        <ParallaxElement speed={-0.15} className="absolute bottom-32 left-[5%]">
          <HexGrid className="w-40 h-40 opacity-30" />
        </ParallaxElement>
        <ParallaxElement speed={0.3} className="absolute top-[60%] right-[5%]">
          <CrossPattern className="w-32 h-32 opacity-25" />
        </ParallaxElement>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div className="max-w-xl">
            <TextReveal delay={0.1}>
              <Badge className="mb-6">
                {t("badge")}
              </Badge>
            </TextReveal>

            <TextReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.06] tracking-[-0.03em]">
                <span className="text-text-primary">{t("titleLine1")}</span>
                <br />
                <GradientText>{t("titleLine2")}</GradientText>
              </h1>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
                {t("subtitle")}
              </p>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/register">
                  <Button size="lg" className="group">
                    {t("cta")}
                    <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/rates">
                  <Button variant="outline" size="lg">
                    {t("ctaSecondary")}
                  </Button>
                </Link>
              </div>
            </TextReveal>

            <TextReveal delay={0.5}>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[11, 12, 25, 32, 44].map((id) => (
                    <img
                      key={id}
                      src={`https://i.pravatar.cc/64?img=${id}`}
                      alt=""
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-text-primary">{t("socialProof")}</div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="h-3.5 w-3.5 text-amber-400" />
                    ))}
                    <span className="text-xs text-text-secondary ml-1">{t("rating")}</span>
                  </div>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Right — card illustration */}
          <TextReveal delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <CreditCardVisual className="w-full max-w-[460px]" />
            </div>
          </TextReveal>
        </div>
      </Container>
    </section>
  );
}
