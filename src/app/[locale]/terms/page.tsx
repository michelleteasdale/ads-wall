import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";
import { COMPANY } from "@/lib/utils/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  return {
    title: `${t("title")} — AdsWall`,
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "terms" });

  return (
    <div className="pt-24">
      <section className="py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">
              <GradientText>{t("title")}</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">{t("lastUpdated")}</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Introduction</h2>
                <p>These Terms and Conditions govern your use of the AdsWall platform (ads-wall.com), operated by {COMPANY.name}, registered in England and Wales (Company number {COMPANY.number}), with registered address at {COMPANY.address}.</p>
                <p>By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our platform.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Services</h2>
                <p>AdsWall provides virtual card issuing services for businesses and individuals engaged in digital advertising. Our services include virtual Visa and Mastercard issuance, balance funding, team management, and API access.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Account Registration</h2>
                <p>To use our services, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                <p>You must be at least 18 years old to create an account. We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Funding & Payments</h2>
                <p>You may fund your AdsWall balance using supported payment methods. All deposits are subject to our published fee schedule. Funds are made available upon successful verification of payment.</p>
                <p>We reserve the right to modify our fee structure with reasonable notice to users.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Virtual Cards</h2>
                <p>Virtual cards issued through AdsWall are for legitimate business purposes only. You agree not to use the cards for any fraudulent, illegal, or prohibited activities. We may suspend or terminate cards that violate our policies.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Prohibited Activities</h2>
                <p>You may not use AdsWall services for money laundering, terrorist financing, fraud, or any activity that violates applicable laws. We comply with all relevant AML/KYC regulations and may request additional verification at any time.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Limitation of Liability</h2>
                <p>AdsWall and {COMPANY.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount of fees paid by you in the preceding 12 months.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Contact</h2>
                <p>For questions about these Terms, contact us at:</p>
                <p>{COMPANY.name}<br />{COMPANY.address}<br />Email: {COMPANY.email}<br />Phone: {COMPANY.phone}</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
