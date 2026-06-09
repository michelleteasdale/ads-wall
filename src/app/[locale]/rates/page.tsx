import { setRequestLocale } from "next-intl/server";
import { RatesPreview } from "@/components/sections/RatesPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return {
    title: `${messages.rates.title} — AdsWall`,
    description: messages.rates.subtitle,
  };
}

export default async function RatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-24">
      <RatesPreview />
      <FAQSection />
      <CTASection />
    </div>
  );
}
