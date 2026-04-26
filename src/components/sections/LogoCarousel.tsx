"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";

const logos = [
  "Google Ads", "Meta Ads", "TikTok Ads", "Amazon Ads", "Bing Ads",
  "Snapchat Ads", "Pinterest Ads", "Twitter Ads",
];

export function LogoCarousel() {
  const t = useTranslations("logos");

  return (
    <section className="py-12 overflow-hidden bg-slate-50/50">
      <Container>
        <p className="text-center text-sm text-slate-400 uppercase tracking-widest mb-8">
          {t("title")}
        </p>
      </Container>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50/50 to-transparent z-10" />
        <div className="flex animate-ticker hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <span className="text-base font-semibold text-slate-300 whitespace-nowrap select-none transition-all duration-300 hover:text-slate-600 hover:grayscale-0 grayscale">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
