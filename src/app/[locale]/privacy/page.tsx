import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  await getTranslations({ locale });
  return {
    title: "Privacy Policy — AdsWall",
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-24">
      <section className="py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">
              <GradientText>Privacy Policy</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">Last Updated: 09.06.2026</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <p>This Privacy Policy explains how Ads-Wall collects, uses, stores, shares and protects personal data when you visit our website, create an account, use our platform, top up a balance, request or use virtual cards, contact support, interact with our services or otherwise communicate with us.</p>
              <p>Ads-Wall is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH (&quot;Ads-Wall&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).</p>
              <p>You can contact us at:</p>
              <p>Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Important Information About Ads-Wall</h2>
                <p>Ads-Wall provides a business platform that enables approved users to access, manage and use virtual payment cards for legitimate advertising and business-related online spending.</p>
                <p>Ads-Wall is not a bank, credit institution, card issuer, electronic money institution or payment institution. Ads-Wall does not itself issue payment cards, hold customer funds as a bank deposit, provide regulated payment services, issue electronic money or operate a payment account in its own capacity.</p>
                <p>Virtual cards, payment processing, card issuing, safeguarding of funds, transaction authorisation, settlement, chargeback handling, fraud monitoring and any regulated financial services are provided by authorised third-party banking, card issuing, payment processing and compliance partners (the &quot;Authorised Partners&quot;).</p>
                <p>Your use of certain services may be subject to additional terms, rules, limits, compliance requirements and decisions of the relevant Authorised Partners, card schemes, acquiring banks, payment processors, advertising platforms and other third-party providers.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Who This Privacy Policy Applies To</h2>
                <p>This Privacy Policy applies to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>visitors to our website;</li>
                  <li>persons who submit an account application or enquiry;</li>
                  <li>registered users and account holders;</li>
                  <li>company representatives, directors, shareholders, beneficial owners and authorised signatories associated with a business account;</li>
                  <li>team members and authorised users invited to access an account;</li>
                  <li>persons who contact us by email, phone, live chat, social media or any other communication channel;</li>
                  <li>persons whose personal data is provided to us as part of onboarding, verification, KYB, KYC, AML, sanctions or compliance checks;</li>
                  <li>persons whose personal data is processed in connection with transactions, top-ups, refunds, chargebacks, disputes or compliance reviews;</li>
                  <li>any other individual whose personal data we receive or process in connection with our platform and services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Our Role as Controller or Processor</h2>
                <p>In most cases, Ads-Wall (TIWALLET LTD) acts as the data controller for personal data collected through the platform, website, account registration, support communications and related services.</p>
                <p>Where we process personal data on behalf of an Authorised Partner, card issuer, payment processor, compliance provider or other third party, we may act as a data processor or joint controller, depending on the arrangement.</p>
                <p>Where our Authorised Partners collect or process personal data directly in connection with card issuing, payment processing, compliance checks, transaction monitoring or regulated financial services, they may act as independent data controllers or joint controllers for that processing.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Personal Data We Collect</h2>
                <p>We may collect and process the following categories of personal data, depending on your relationship with us, the services you use and the requirements of our Authorised Partners:</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.1 Account and Contact Data</h3>
                <p>Full name, email address, phone number, job title, company name, company role, business address, country of residence, preferred language and communication preferences.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.2 Business Verification Data</h3>
                <p>Company registration number, registered office address, trading address, date of incorporation, jurisdiction of incorporation, business type, industry, website URLs, business description, ownership and control structure, UBO (ultimate beneficial owner) details, shareholder details, director details, authorised signatory details and any other business information required for KYB, compliance or partner onboarding.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.3 Identity Verification Data</h3>
                <p>Full legal name, date of birth, nationality, country of residence, government-issued identity document type and number (passport, national ID card, driving licence), document images, selfie or liveness check images, proof of address documents, PEP (politically exposed person) status, sanctions screening results and any other identity information required for KYC, AML, sanctions or compliance checks.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.4 Payment and Top-Up Data</h3>
                <p>Payment method type, card brand, last four digits of the payment card, card token or reference, billing address, payment amount, payment currency, payment date and time, payment status, payment processor reference, 3D Secure authentication result and any other payment information required to process top-ups, refunds or chargebacks.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.5 Virtual Card and Transaction Data</h3>
                <p>Card identifiers, card status, card currency, card limits, card creation date, card expiry, assigned campaign or account labels, transaction amount, transaction currency, transaction date and time, merchant name, merchant category code (MCC), transaction status, authorisation result, decline reason, chargeback status and any other transaction data related to the use of virtual cards.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.6 Compliance, AML, Sanctions and Fraud Data</h3>
                <p>KYC verification results, KYB verification results, AML screening results, sanctions screening results, PEP screening results, adverse media screening results, fraud risk scores, fraud alerts, compliance review notes, investigation records, suspicious activity reports and any other compliance-related data required by law, regulation or our Authorised Partners.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.7 Advertising Activity Data</h3>
                <p>Advertising platform names, advertising account identifiers, campaign names, campaign URLs, landing page URLs, product or service descriptions, advertising screenshots, ad account status, advertising spend data and any other advertising-related information you provide or that we collect in connection with compliance, risk review or onboarding.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.8 Technical, Device and Usage Data</h3>
                <p>IP address, device type, device identifier, operating system, browser type and version, screen resolution, referring URL, pages visited, time spent on pages, click data, scroll data, session duration, access times, login history, feature usage, API usage, error logs and any other technical data collected through cookies, pixels, scripts, SDKs or similar technologies.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.9 Communications Data</h3>
                <p>Emails, support tickets, live chat messages, phone call records, social media messages, feedback, survey responses and any other communications between you and Ads-Wall.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">4.10 Marketing Data</h3>
                <p>Marketing preferences, newsletter subscription status, email open and click data, marketing campaign responses, referral source and any other data related to marketing communications.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. How We Collect Personal Data</h2>
                <p>We collect personal data from the following sources:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>directly from you, when you create an account, submit an application, complete a form, contact support, provide documents, use the platform or communicate with us;</li>
                  <li>from your company, employer or authorised representative, where they provide your details as part of a business account application, team invitation or compliance process;</li>
                  <li>from our Authorised Partners, card issuers, payment processors, compliance providers and fraud prevention providers;</li>
                  <li>from third-party identity verification, KYC, KYB, AML, sanctions screening and fraud prevention providers;</li>
                  <li>from publicly available sources, including company registries, sanctions lists, PEP databases, adverse media databases, court records and other public records;</li>
                  <li>from advertising platforms, where relevant to compliance or risk review;</li>
                  <li>from cookies, pixels, analytics tools and similar technologies on our website and platform;</li>
                  <li>from your browser, device and network when you access the platform;</li>
                  <li>from other users, where they provide your information as part of a referral, team invitation or complaint.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. How We Use Personal Data</h2>
                <p>We use personal data for the following purposes:</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.1 To Provide the Platform</h3>
                <p>To create and manage your account, provide access to the dashboard, process top-ups, issue and manage virtual cards, process transactions, display transaction history, provide reporting, enable team management, provide API access and deliver the services you have requested.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.2 To Verify Users and Businesses</h3>
                <p>To perform identity verification, KYC, KYB, AML screening, sanctions screening, PEP screening, adverse media screening, fraud checks, document verification, liveness checks, address verification, ownership verification and any other verification required by law, regulation or our Authorised Partners.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.3 To Process Payments, Top-Ups and Card Transactions</h3>
                <p>To process balance top-ups, authorise card transactions, manage card controls, handle refunds, process chargebacks, reconcile transactions, manage settlement and facilitate payment processing through our Authorised Partners.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.4 To Comply With Legal and Compliance Obligations</h3>
                <p>To comply with applicable laws, regulations, court orders, legal processes, regulatory requirements, reporting obligations, record-keeping requirements, tax obligations and requests from regulators, law enforcement authorities, courts, ombudsmen or other competent authorities.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.5 To Prevent Fraud and Protect Security</h3>
                <p>To detect, prevent, investigate and respond to fraud, money laundering, terrorist financing, sanctions violations, unauthorised access, security incidents, data breaches, abuse, misuse and other harmful or illegal activity.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.6 To Review Advertising and Prohibited Use Risk</h3>
                <p>To review advertising activity, landing pages, products, services, websites, traffic sources and business models for compliance with our terms, acceptable use policy, Authorised Partner requirements and applicable advertising platform rules.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.7 To Communicate With You</h3>
                <p>To send you service-related communications, account notifications, transaction alerts, security alerts, compliance requests, support responses, policy updates and other operational messages.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.8 To Improve and Develop the Platform</h3>
                <p>To analyse usage patterns, identify technical issues, improve performance, develop new features, conduct research, generate aggregated or anonymised analytics and improve the overall user experience.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">6.9 To Send Marketing Communications</h3>
                <p>To send you marketing emails, newsletters, product updates, promotional offers and other marketing communications, where you have consented or where we have a legitimate interest and you have not opted out.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Lawful Bases for Processing</h2>
                <p>We process personal data on the following lawful bases under applicable data protection law:</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">7.1 Contract</h3>
                <p>Processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract, including providing the platform, managing your account, processing transactions and delivering the services.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">7.2 Legal Obligation</h3>
                <p>Processing is necessary to comply with a legal obligation to which we are subject, including AML requirements, sanctions obligations, KYC and KYB requirements, tax reporting, regulatory reporting, record-keeping and responding to lawful requests from authorities.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">7.3 Legitimate Interests</h3>
                <p>Processing is necessary for our legitimate interests or the legitimate interests of a third party, provided those interests are not overridden by your rights and freedoms. Our legitimate interests include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>operating, improving and securing the platform;</li>
                  <li>preventing fraud, abuse and misuse;</li>
                  <li>managing business risk and protecting our rights;</li>
                  <li>enforcing our terms and policies;</li>
                  <li>communicating with users about the services;</li>
                  <li>conducting analytics and research;</li>
                  <li>marketing our services to existing or prospective business users;</li>
                  <li>complying with Authorised Partner, card scheme and payment processor requirements;</li>
                  <li>exercising or defending legal claims.</li>
                </ul>

                <h3 className="text-base font-semibold text-text-primary mt-4">7.4 Consent</h3>
                <p>Where we rely on your consent, you have the right to withdraw consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal. We may rely on consent for marketing communications, cookies and similar technologies and any other processing where consent is required.</p>

                <h3 className="text-base font-semibold text-text-primary mt-4">7.5 Vital Interests</h3>
                <p>In rare circumstances, we may process personal data where it is necessary to protect the vital interests of you or another person.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Special Category Data and Criminal Offence Data</h2>
                <p>We do not generally seek to collect special category data (such as data revealing racial or ethnic origin, political opinions, religious beliefs, health data, biometric data or sexual orientation).</p>
                <p>However, in the course of identity verification, compliance screening, fraud prevention or regulatory processes, we may receive or process data that falls within special categories or relates to criminal offences or allegations, such as sanctions screening results, PEP status, adverse media results, fraud investigation records or law enforcement requests.</p>
                <p>Where we process such data, we do so only where permitted or required by applicable law, including for reasons of substantial public interest, for the establishment, exercise or defence of legal claims, or to comply with legal and regulatory obligations.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Automated Decision-Making and Risk Scoring</h2>
                <p>We and our Authorised Partners may use automated processes, algorithms, risk scoring, machine learning and rules-based systems to support decision-making in areas including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>identity verification and document checks;</li>
                  <li>fraud detection and prevention;</li>
                  <li>AML and sanctions screening;</li>
                  <li>transaction monitoring and risk alerts;</li>
                  <li>account approval and onboarding decisions;</li>
                  <li>card issuing and limit decisions;</li>
                  <li>advertising activity risk assessment;</li>
                  <li>chargeback risk scoring;</li>
                  <li>account restriction or suspension decisions.</li>
                </ul>
                <p>Where automated decision-making has a significant legal or similar effect on you, you may have the right to request human review, express your point of view and contest the decision, subject to applicable law and regulatory requirements.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Who We Share Personal Data With</h2>
                <p>We may share personal data with the following categories of recipients:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Authorised Partners, including card issuers, payment processors, acquiring banks, settlement providers and electronic money institutions;</li>
                  <li>identity verification, KYC, KYB, AML, sanctions screening and fraud prevention providers;</li>
                  <li>compliance, legal and regulatory advisers;</li>
                  <li>card schemes (such as Visa and Mastercard);</li>
                  <li>hosting, infrastructure, cloud storage and IT service providers;</li>
                  <li>analytics, monitoring and performance providers;</li>
                  <li>email, communication and customer support providers;</li>
                  <li>marketing and advertising technology providers (where consent is given or a legitimate interest applies);</li>
                  <li>auditors, accountants and financial advisers;</li>
                  <li>regulators, law enforcement authorities, courts, ombudsmen and other competent authorities, where required by law or regulation;</li>
                  <li>any party involved in a merger, acquisition, restructuring, sale or transfer of business assets;</li>
                  <li>any other third party where necessary to provide the services, comply with law or protect our rights.</li>
                </ul>
                <p>We require third parties to process personal data only in accordance with our instructions, applicable law and appropriate security measures.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. International Transfers</h2>
                <p>Personal data may be transferred to, stored in or accessed from countries outside the United Kingdom and the European Economic Area (EEA), including countries where our Authorised Partners, service providers, hosting providers, compliance providers or other third parties are located.</p>
                <p>Where personal data is transferred internationally, we ensure that appropriate safeguards are in place, which may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>transfers to countries that have been recognised as providing an adequate level of data protection;</li>
                  <li>standard contractual clauses approved by the UK Information Commissioner&apos;s Office (ICO) or the European Commission;</li>
                  <li>binding corporate rules;</li>
                  <li>other lawful transfer mechanisms recognised under applicable data protection law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. How Long We Keep Personal Data</h2>
                <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, comply with legal, regulatory and contractual obligations, resolve disputes, enforce our terms and protect our rights.</p>
                <p>Retention periods may vary depending on:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the type of data;</li>
                  <li>the purpose of processing;</li>
                  <li>applicable legal and regulatory retention requirements (including AML record-keeping obligations, which may require retention for at least five years after the end of the business relationship);</li>
                  <li>Authorised Partner and card scheme retention requirements;</li>
                  <li>ongoing investigations, disputes, chargebacks or legal proceedings;</li>
                  <li>our legitimate business interests.</li>
                </ul>
                <p>When personal data is no longer required, we will securely delete, anonymise or destroy it in accordance with our data retention policies.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. Security</h2>
                <p>We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, destruction, alteration, disclosure or misuse.</p>
                <p>These measures may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>encryption of data in transit and at rest;</li>
                  <li>access controls and authentication;</li>
                  <li>regular security assessments and testing;</li>
                  <li>employee training and awareness;</li>
                  <li>incident response and breach notification procedures;</li>
                  <li>secure hosting and infrastructure;</li>
                  <li>monitoring and logging.</li>
                </ul>
                <p>While we take reasonable steps to protect personal data, no method of transmission or storage is completely secure. We cannot guarantee the absolute security of personal data.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. Cookies and Similar Technologies</h2>
                <p>We use cookies and similar technologies on our website and platform. For full details, please see our Cookie Policy.</p>
                <p>You can manage your cookie preferences through your browser settings or through any cookie consent mechanism provided on our website.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Marketing Communications</h2>
                <p>We may send you marketing communications about our services, features, offers and updates where you have consented or where we have a legitimate interest in doing so.</p>
                <p>You can opt out of marketing communications at any time by clicking the unsubscribe link in any marketing email, contacting us at info@ads-wall.com or updating your preferences in your account settings.</p>
                <p>Opting out of marketing communications does not affect service-related communications that are necessary for the operation of your account.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. Your Rights</h2>
                <p>Under applicable data protection law, you may have the following rights in relation to your personal data:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the right to access your personal data;</li>
                  <li>the right to rectification of inaccurate or incomplete personal data;</li>
                  <li>the right to erasure of personal data in certain circumstances;</li>
                  <li>the right to restriction of processing in certain circumstances;</li>
                  <li>the right to data portability in certain circumstances;</li>
                  <li>the right to object to processing based on legitimate interests or direct marketing;</li>
                  <li>the right to withdraw consent at any time, where processing is based on consent;</li>
                  <li>the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal or similarly significant effects, subject to applicable exceptions;</li>
                  <li>the right to lodge a complaint with a supervisory authority.</li>
                </ul>
                <p>To exercise your rights, please contact us at info@ads-wall.com. We may need to verify your identity before processing your request. We will respond within the timeframes required by applicable law.</p>
                <p>Some rights may be limited where we have a legal obligation to retain data, where data is necessary for compliance purposes or where an exemption applies.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Complaints</h2>
                <p>If you are not satisfied with how we handle your personal data or respond to your request, you have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO).</p>
                <p>Information Commissioner&apos;s Office<br />Website: https://ico.org.uk<br />Phone: 0303 123 1113</p>
                <p>We encourage you to contact us first so that we can try to resolve your concern.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Third-Party Links and Services</h2>
                <p>Our website and platform may contain links to third-party websites, services or applications. We are not responsible for the privacy practices, content or security of third-party websites or services.</p>
                <p>We encourage you to read the privacy policies of any third-party websites or services you visit.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. Children</h2>
                <p>Our platform and services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children.</p>
                <p>If we become aware that we have collected personal data from a child, we will take steps to delete it as soon as practicable.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, regulatory guidance, Authorised Partner requirements or operational needs.</p>
                <p>Where changes are material, we may notify you by email, through the platform or by other reasonable means.</p>
                <p>The updated Privacy Policy will apply from the date stated in the updated version. We encourage you to review this Privacy Policy periodically.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">21. Contact</h2>
                <p>If you have any questions, concerns or requests regarding this Privacy Policy or the processing of your personal data, please contact us at:</p>
                <p>TIWALLET LTD<br />Company number: 17179279<br />Registered office: Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
