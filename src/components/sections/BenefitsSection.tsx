"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { HiBolt, HiGlobeAlt, HiCpuChip, HiArrowTrendingUp } from "react-icons/hi2";
import { HiCreditCard, HiCurrencyDollar } from "react-icons/hi2";
import { FaChartLine, FaGlobe, FaCogs, FaRocket } from "react-icons/fa";

const benefits = [
  { key: "speed", icon: HiBolt, gradient: "from-amber-400 to-orange-500", accentColor: "text-amber-500" },
  { key: "global", icon: HiGlobeAlt, gradient: "from-cyan-400 to-blue-500", accentColor: "text-cyan-500" },
  { key: "automation", icon: HiCpuChip, gradient: "from-violet-400 to-purple-600", accentColor: "text-violet-500" },
  { key: "growth", icon: HiArrowTrendingUp, gradient: "from-emerald-400 to-green-600", accentColor: "text-emerald-500" },
];

function SpeedIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="80" y="60" width="240" height="150" rx="16" fill="url(#speed-card)" opacity="0.9" />
      <rect x="100" y="85" width="44" height="34" rx="4" fill="#E8C84A" opacity="0.8" />
      <line x1="100" y1="100" x2="144" y2="100" stroke="#B8933A" strokeWidth="0.8" opacity="0.5" />
      <line x1="100" y1="107" x2="144" y2="107" stroke="#B8933A" strokeWidth="0.8" opacity="0.5" />
      <line x1="122" y1="85" x2="122" y2="119" stroke="#B8933A" strokeWidth="0.8" opacity="0.5" />
      <text x="100" y="155" fill="white" fontSize="14" fontFamily="monospace" letterSpacing="3" opacity="0.9">4562 •••• •••• 7834</text>
      <text x="100" y="190" fill="white" fontSize="10" opacity="0.5">MEDIA BUYER PRO</text>
      {/* Speed lines */}
      <line x1="50" y1="90" x2="75" y2="90" stroke="#F59E0B" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
      <line x1="40" y1="120" x2="75" y2="120" stroke="#F59E0B" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
      <line x1="55" y1="150" x2="75" y2="150" stroke="#F59E0B" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <circle cx="340" cy="80" r="25" fill="#F59E0B" opacity="0.15" />
      <text x="330" y="86" fill="#F59E0B" fontSize="16" fontWeight="bold" opacity="0.7">⚡</text>
      <defs>
        <linearGradient id="speed-card" x1="80" y1="60" x2="320" y2="210">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GlobalIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="200" cy="150" r="90" stroke="#06B6D4" strokeWidth="1" opacity="0.2" />
      <circle cx="200" cy="150" r="65" stroke="#06B6D4" strokeWidth="0.8" opacity="0.15" />
      <circle cx="200" cy="150" r="40" stroke="#06B6D4" strokeWidth="0.6" opacity="0.1" />
      <ellipse cx="200" cy="150" rx="90" ry="35" stroke="#2563EB" strokeWidth="0.8" opacity="0.2" />
      <ellipse cx="200" cy="150" rx="35" ry="90" stroke="#2563EB" strokeWidth="0.8" opacity="0.2" />
      {/* Connection dots */}
      {[
        [140, 100], [260, 100], [120, 180], [280, 180], [200, 60], [200, 240],
        [160, 140], [240, 160], [170, 200], [230, 100],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="#06B6D4" opacity={0.3 + (i % 3) * 0.15} />
          <circle cx={x} cy={y} r="8" stroke="#06B6D4" strokeWidth="0.5" opacity="0.15" />
        </g>
      ))}
      {/* Lines between some dots */}
      <line x1="140" y1="100" x2="200" y2="60" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
      <line x1="260" y1="100" x2="200" y2="60" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
      <line x1="120" y1="180" x2="200" y2="240" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
      <line x1="280" y1="180" x2="200" y2="240" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
      <line x1="160" y1="140" x2="240" y2="160" stroke="#2563EB" strokeWidth="0.5" opacity="0.12" />
    </svg>
  );
}

function AutomationIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Central gear */}
      <circle cx="200" cy="150" r="45" stroke="#7C3AED" strokeWidth="2" opacity="0.25" strokeDasharray="8 4" />
      <circle cx="200" cy="150" r="25" stroke="#7C3AED" strokeWidth="1.5" opacity="0.3" />
      <circle cx="200" cy="150" r="6" fill="#7C3AED" opacity="0.3" />
      {/* Orbiting cards */}
      <rect x="90" y="80" width="60" height="38" rx="6" stroke="#7C3AED" strokeWidth="1" opacity="0.25" fill="#7C3AED" fillOpacity="0.05" />
      <rect x="250" y="80" width="60" height="38" rx="6" stroke="#7C3AED" strokeWidth="1" opacity="0.25" fill="#7C3AED" fillOpacity="0.05" />
      <rect x="90" y="180" width="60" height="38" rx="6" stroke="#7C3AED" strokeWidth="1" opacity="0.25" fill="#7C3AED" fillOpacity="0.05" />
      <rect x="250" y="180" width="60" height="38" rx="6" stroke="#7C3AED" strokeWidth="1" opacity="0.25" fill="#7C3AED" fillOpacity="0.05" />
      {/* Connection lines */}
      <line x1="150" y1="99" x2="175" y2="135" stroke="#7C3AED" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
      <line x1="250" y1="99" x2="225" y2="135" stroke="#7C3AED" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
      <line x1="150" y1="199" x2="175" y2="165" stroke="#7C3AED" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
      <line x1="250" y1="199" x2="225" y2="165" stroke="#7C3AED" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
      {/* Arrows on lines */}
      <polygon points="172,137 178,133 175,140" fill="#7C3AED" opacity="0.3" />
      <polygon points="228,137 222,133 225,140" fill="#7C3AED" opacity="0.3" />
    </svg>
  );
}

function GrowthIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Chart bars */}
      {[
        { x: 80, h: 60 }, { x: 120, h: 90 }, { x: 160, h: 75 },
        { x: 200, h: 120 }, { x: 240, h: 110 }, { x: 280, h: 160 }, { x: 320, h: 180 },
      ].map(({ x, h }, i) => (
        <rect key={i} x={x} y={240 - h} width="28" height={h} rx="4" fill="url(#growth-bar)" opacity={0.15 + i * 0.05} />
      ))}
      {/* Trend line */}
      <path d="M94 200 L134 170 L174 185 L214 140 L254 148 L294 100 L334 70" stroke="#10B981" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* Trend arrow */}
      <polygon points="334,70 324,68 328,78" fill="#10B981" opacity="0.6" />
      {/* Dots on line */}
      {[[94, 200], [134, 170], [174, 185], [214, 140], [254, 148], [294, 100], [334, 70]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#10B981" opacity="0.5" />
      ))}
      <defs>
        <linearGradient id="growth-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const illustrations = [SpeedIllustration, GlobalIllustration, AutomationIllustration, GrowthIllustration];

export function BenefitsSection() {
  const t = useTranslations("benefits");

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={0.1} className="absolute top-[20%] right-0 w-[300px] h-[300px] rounded-full bg-primary-50 blur-[100px] opacity-40" />
        <ParallaxElement speed={-0.15} className="absolute bottom-[10%] left-0 w-[250px] h-[250px] rounded-full bg-violet-50 blur-[80px] opacity-30" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Badge className="mb-4">{t("sectionTag")}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-4 tracking-[-0.025em]">
              {t("title")}
            </h2>
            <p className="text-text-secondary mt-4 text-lg max-w-xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const Illustration = illustrations[idx];
            const isReversed = idx % 2 !== 0;
            return (
              <ScrollReveal key={benefit.key} direction={isReversed ? "right" : "left"}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                      {t(`items.${benefit.key}.title`)}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed mb-6">
                      {t(`items.${benefit.key}.description`)}
                    </p>
                    <ul className="space-y-3">
                      {(t.raw(`items.${benefit.key}.points`) as string[]).map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${benefit.gradient} shrink-0`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-card relative overflow-hidden">
                      <Illustration />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
