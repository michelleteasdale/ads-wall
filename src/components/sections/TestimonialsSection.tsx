"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { FloatingRings } from "@/components/ui/VectorShapes";
import { FaStar } from "react-icons/fa";

const avatarIds = [11, 12, 25, 32, 44, 51];

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
  }>;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Parallax decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={0.2} className="absolute top-10 right-[10%]">
          <FloatingRings className="w-36 h-36 opacity-20" />
        </ParallaxElement>
        <ParallaxElement speed={-0.15} className="absolute bottom-20 left-[5%]">
          <FloatingRings className="w-28 h-28 opacity-15" />
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

        <ScrollReveal stagger={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card flex flex-col transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="text-5xl font-bold text-primary-100 leading-none mb-2 select-none">
                  &ldquo;
                </div>
                <p className="text-base text-slate-700 leading-relaxed italic flex-1 -mt-3">
                  {item.content}
                </p>
                <div className="flex items-center gap-1 mt-4 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={`https://i.pravatar.cc/96?img=${avatarIds[index % avatarIds.length]}`}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{item.name}</p>
                    <p className="text-xs text-text-tertiary">{item.role}, {item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
