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
  const t = await getTranslations({ locale, namespace: "privacy" });
  return {
    title: `${t("title")} — AdsWall`,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });

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
                <p>This Privacy Policy describes how {COMPANY.name} (&quot;AdsWall&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your personal information when you use our platform at ads-wall.com.</p>
                <p>{COMPANY.name} is registered in England and Wales (Company number {COMPANY.number}), with registered address at {COMPANY.address}.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Information We Collect</h2>
                <p>We collect information you provide when creating an account, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full name (first and last name)</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Date of birth</li>
                  <li>Residential address (street, city, country, postal code)</li>
                  <li>Payment information for funding your account</li>
                </ul>
                <p>We also automatically collect technical data such as IP address, browser type, device information, and usage analytics.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide and maintain our services</li>
                  <li>Verify your identity (KYC/AML compliance)</li>
                  <li>Process transactions and manage your virtual cards</li>
                  <li>Communicate important updates about your account</li>
                  <li>Detect and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Data Sharing</h2>
                <p>We do not sell your personal data. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payment processors and card network partners (Visa, Mastercard)</li>
                  <li>Identity verification service providers</li>
                  <li>Law enforcement when required by law</li>
                  <li>Professional advisors (legal, accounting)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Data Security</h2>
                <p>We implement industry-standard security measures including AES-256 encryption, secure data centers, and regular security audits. We are PCI DSS Level 1 compliant.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Your Rights</h2>
                <p>Under applicable data protection laws (including UK GDPR), you have the right to access, correct, delete, or port your personal data. You may also object to certain processing activities.</p>
                <p>To exercise your rights, contact us at {COMPANY.email}.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Data Retention</h2>
                <p>We retain your personal data for as long as your account is active or as needed to provide services. We may retain certain data longer to comply with legal obligations (e.g., AML record-keeping requirements).</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Contact</h2>
                <p>For privacy-related inquiries, contact us at:</p>
                <p>{COMPANY.name}<br />{COMPANY.address}<br />Email: {COMPANY.email}<br />Phone: {COMPANY.phone}</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
