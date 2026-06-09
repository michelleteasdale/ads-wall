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
  return {
    title: "KYC, AML & Sanctions Policy — AdsWall",
  };
}

export default async function KycAmlPolicyPage({
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
              <GradientText>KYC, AML &amp; Sanctions Policy</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">Last Updated: 09.06.2026</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <p>This KYC, AML &amp; Sanctions Policy (&quot;Policy&quot;) explains how Ads-Wall may conduct customer verification, business verification, anti-money laundering checks, counter-terrorist financing checks, sanctions screening, fraud prevention reviews, source of funds reviews and ongoing compliance monitoring.</p>
              <p>This Policy forms part of and is incorporated into the Ads-Wall Terms &amp; Conditions, Virtual Card Terms, Payment &amp; Top-Up Policy, Refund &amp; Cancellation Policy and Acceptable Use Policy.</p>
              <p>Ads-Wall is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH.</p>
              <p>Contact details:<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              <p>By applying for an Account, using the Platform, topping up a Balance, requesting Virtual Cards, using Cards, inviting team members, requesting a refund or otherwise using the Services, you agree to this Policy.</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Purpose of This Policy</h2>
                <p>Ads-Wall provides a business platform that enables approved users to access and manage virtual payment cards for legitimate advertising and business-related online spending.</p>
                <p>Because the Platform involves business onboarding, top-ups, Balance management, Virtual Cards, advertising spend, payment processing and third-party financial infrastructure, Ads-Wall applies compliance controls designed to help prevent:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>money laundering;</li>
                  <li>terrorist financing;</li>
                  <li>sanctions evasion;</li>
                  <li>fraud;</li>
                  <li>payment abuse;</li>
                  <li>identity misuse;</li>
                  <li>transaction laundering;</li>
                  <li>advertising platform abuse;</li>
                  <li>illegal or prohibited activity;</li>
                  <li>misuse of Ads-Wall, Authorised Partners, banks, card issuers, payment processors and card schemes.</li>
                </ul>
                <p>This Policy is intended to explain the types of checks and controls that may apply. It does not describe all internal systems, rules, thresholds, risk models or monitoring methods.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Important Information About Our Role</h2>
                <p>Ads-Wall is not a bank, credit institution, card issuer, electronic money institution or payment institution.</p>
                <p>Ads-Wall does not itself issue payment cards, provide regulated payment services, issue electronic money, hold customer funds as a bank deposit or operate a regulated payment account in its own capacity.</p>
                <p>Virtual Cards, payment processing, transaction authorisation, settlement, safeguarding of funds, fraud monitoring, chargeback handling and any regulated financial services are provided by authorised third-party banking, card issuing, payment processing and compliance partners (&quot;Authorised Partners&quot;).</p>
                <p>KYC, KYB, AML, sanctions, fraud prevention and transaction monitoring checks may be conducted by Ads-Wall, Authorised Partners, banks, payment processors, card issuers, card schemes, compliance providers, identity verification providers, fraud prevention providers or other approved third-party service providers.</p>
                <p>By using Ads-Wall, you acknowledge and agree that Ads-Wall may be required to follow instructions, restrictions, refusals, holds, freezes, reporting obligations or compliance decisions imposed by Authorised Partners, regulators, law enforcement authorities, banks, payment processors or card schemes.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Business Use Only</h2>
                <p>Ads-Wall is intended for business use only.</p>
                <p>You must not use Ads-Wall for personal, household or consumer purposes.</p>
                <p>You may use Ads-Wall only for lawful business activity that has been approved by Ads-Wall and, where applicable, by its Authorised Partners.</p>
                <p>By applying for or using an Account, you confirm that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>you are acting in the course of business;</li>
                  <li>all information you provide is true, accurate, complete and up to date;</li>
                  <li>you have authority to act for the business;</li>
                  <li>you will cooperate with all compliance checks;</li>
                  <li>you will not use Ads-Wall for illegal, fraudulent, sanctioned, deceptive, high-risk or prohibited activity.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Customer Due Diligence</h2>
                <p>Ads-Wall and/or its Authorised Partners may carry out customer due diligence before approving your Account, before issuing Cards, before processing top-ups, before processing refunds, during Account use or after transactions occur.</p>
                <p>Customer due diligence may include verifying:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your legal name;</li>
                  <li>your date of birth;</li>
                  <li>your residential address;</li>
                  <li>your nationality;</li>
                  <li>your identity document;</li>
                  <li>your contact details;</li>
                  <li>your role within the business;</li>
                  <li>your authority to act for the business;</li>
                  <li>whether you are a director, shareholder, beneficial owner, authorised representative or team member;</li>
                  <li>whether you are subject to sanctions, restrictions, adverse media or other risk indicators.</li>
                </ul>
                <p>We may require identity documents, address documents, selfies, liveness checks, biometric verification, video verification or other verification steps where permitted by law.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Business Verification</h2>
                <p>Ads-Wall and/or its Authorised Partners may verify your business before approving or continuing to provide Services.</p>
                <p>Business verification may include checking:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>company name;</li>
                  <li>company registration number;</li>
                  <li>registered office;</li>
                  <li>trading address;</li>
                  <li>tax identification number;</li>
                  <li>VAT number, where applicable;</li>
                  <li>business website;</li>
                  <li>business email;</li>
                  <li>business phone number;</li>
                  <li>business activity;</li>
                  <li>industry;</li>
                  <li>products and services;</li>
                  <li>operating countries;</li>
                  <li>target markets;</li>
                  <li>advertising platforms used;</li>
                  <li>advertising accounts;</li>
                  <li>business licences or regulatory permissions;</li>
                  <li>ownership and control structure;</li>
                  <li>directors, shareholders and beneficial owners;</li>
                  <li>source of funds and source of wealth.</li>
                </ul>
                <p>We may request company documents, certificates of incorporation, shareholder registers, organisational charts, bank statements, contracts, invoices, advertising account screenshots, website URLs, campaign details or other supporting documents.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Beneficial Ownership and Control</h2>
                <p>Ads-Wall and/or its Authorised Partners may require information about all persons who ultimately own or control your business.</p>
                <p>This may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>shareholders;</li>
                  <li>beneficial owners;</li>
                  <li>directors;</li>
                  <li>senior managers;</li>
                  <li>authorised representatives;</li>
                  <li>persons with voting rights;</li>
                  <li>persons with control over the Account;</li>
                  <li>persons on whose behalf transactions are conducted;</li>
                  <li>persons who benefit from advertising activity funded through Ads-Wall.</li>
                </ul>
                <p>You must provide accurate and complete ownership and control information.</p>
                <p>You must not use nominee structures, shell companies, front companies, undisclosed clients or other arrangements to hide the true owner, controller, advertiser, source of funds or beneficiary of the Account.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Source of Funds and Source of Wealth</h2>
                <p>Ads-Wall and/or its Authorised Partners may request information and documents to understand the origin of funds used with Ads-Wall.</p>
                <p>Source of funds and source of wealth checks may include reviewing:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>bank card ownership;</li>
                  <li>business bank statements;</li>
                  <li>payment history;</li>
                  <li>invoices;</li>
                  <li>contracts;</li>
                  <li>sales records;</li>
                  <li>advertising revenue;</li>
                  <li>affiliate revenue;</li>
                  <li>investment records;</li>
                  <li>business accounts;</li>
                  <li>tax records;</li>
                  <li>funding agreements;</li>
                  <li>ownership of payment methods;</li>
                  <li>explanations of unusual top-ups or spending patterns.</li>
                </ul>
                <p>You must not top up using stolen funds, unauthorised cards, third-party cards without approval, proceeds of crime, funds linked to sanctions, funds linked to fraud or funds from prohibited activities.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Sanctions Screening</h2>
                <p>Ads-Wall and/or its Authorised Partners may screen users, businesses, beneficial owners, directors, authorised representatives, payment methods, counterparties, merchants, jurisdictions, transactions and other relevant parties against sanctions lists and restricted party lists.</p>
                <p>Sanctions screening may include checks against UK, UN, EU, US and other applicable sanctions lists, depending on the nature of the activity, jurisdictions involved and partner requirements.</p>
                <p>You must not use Ads-Wall directly or indirectly in connection with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>sanctioned persons;</li>
                  <li>sanctioned entities;</li>
                  <li>sanctioned jurisdictions;</li>
                  <li>embargoed territories;</li>
                  <li>asset-frozen persons;</li>
                  <li>blocked persons;</li>
                  <li>companies owned or controlled by sanctioned persons;</li>
                  <li>transactions intended to evade sanctions;</li>
                  <li>goods, services, advertising activity or payments prohibited by sanctions laws.</li>
                </ul>
                <p>Ads-Wall may block, freeze, reject, reverse, report or terminate any Account, Card, Balance, top-up, refund or transaction where sanctions risk is identified.</p>
                <p>We may not be able to provide notice or disclose the reason for action where prohibited by law, partner rules or regulatory requirements.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Politically Exposed Persons</h2>
                <p>Ads-Wall and/or its Authorised Partners may screen users, beneficial owners, directors, authorised representatives and connected persons to identify politically exposed persons, family members and close associates.</p>
                <p>If a person connected to your Account is identified as a politically exposed person, family member or close associate, Ads-Wall may request additional information and apply enhanced due diligence.</p>
                <p>Enhanced due diligence may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>additional identity verification;</li>
                  <li>source of funds review;</li>
                  <li>source of wealth review;</li>
                  <li>senior approval by an Authorised Partner or compliance provider;</li>
                  <li>transaction monitoring;</li>
                  <li>restrictions or limits;</li>
                  <li>refusal or termination of Services.</li>
                </ul>
                <p>Being a politically exposed person does not automatically mean that you cannot use Ads-Wall, but additional checks may apply.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Enhanced Due Diligence</h2>
                <p>Ads-Wall and/or its Authorised Partners may apply enhanced due diligence where a customer, business, transaction, jurisdiction, product, service, advertising activity or payment pattern is considered higher risk.</p>
                <p>Enhanced due diligence may apply where:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your business operates in a high-risk industry;</li>
                  <li>your business targets high-risk jurisdictions;</li>
                  <li>your ownership structure is complex;</li>
                  <li>beneficial ownership is unclear;</li>
                  <li>your activity involves high advertising spend;</li>
                  <li>your activity involves affiliate marketing, lead generation, financial offers, crypto, gambling, supplements, healthcare, adult content, political advertising or other restricted categories;</li>
                  <li>your top-ups or transactions are unusual;</li>
                  <li>chargeback risk is high;</li>
                  <li>fraud indicators are present;</li>
                  <li>sanctions risk is present;</li>
                  <li>adverse media is identified;</li>
                  <li>requested documents are incomplete or inconsistent;</li>
                  <li>an Authorised Partner requires enhanced review.</li>
                </ul>
                <p>Enhanced due diligence may involve additional documents, manual review, interviews, limits, holds, restrictions or refusal of Services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. Ongoing Monitoring</h2>
                <p>Ads-Wall and/or its Authorised Partners may monitor Account activity on an ongoing basis.</p>
                <p>Ongoing monitoring may include reviewing:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>top-ups;</li>
                  <li>Balance movements;</li>
                  <li>Virtual Card transactions;</li>
                  <li>refund requests;</li>
                  <li>chargebacks;</li>
                  <li>payment disputes;</li>
                  <li>failed payments;</li>
                  <li>advertising platform payments;</li>
                  <li>merchant categories;</li>
                  <li>transaction amounts;</li>
                  <li>transaction frequency;</li>
                  <li>currency use;</li>
                  <li>country and IP data;</li>
                  <li>login behaviour;</li>
                  <li>device signals;</li>
                  <li>team member activity;</li>
                  <li>API usage;</li>
                  <li>websites and landing pages;</li>
                  <li>advertising activity;</li>
                  <li>business model changes;</li>
                  <li>publicly available information;</li>
                  <li>adverse media and risk indicators.</li>
                </ul>
                <p>We may request updated information at any time.</p>
                <p>You must notify Ads-Wall promptly if your business activity, ownership, control, directors, beneficial owners, address, website, advertising activity, target countries, payment methods or risk profile changes.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. Advertising Activity Review</h2>
                <p>Because Ads-Wall may be used for advertising spend, Ads-Wall may review your advertising activity for compliance, fraud, sanctions, AML, reputational and platform abuse risk.</p>
                <p>Ads-Wall may request or review:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>advertising account screenshots;</li>
                  <li>advertising platform names;</li>
                  <li>campaign screenshots;</li>
                  <li>landing page URLs;</li>
                  <li>websites;</li>
                  <li>product or service descriptions;</li>
                  <li>traffic sources;</li>
                  <li>affiliate network details;</li>
                  <li>client information for agencies;</li>
                  <li>licences or regulatory approvals;</li>
                  <li>refund and cancellation terms;</li>
                  <li>privacy notices;</li>
                  <li>customer complaints;</li>
                  <li>evidence of lawful advertising activity.</li>
                </ul>
                <p>Ads-Wall may refuse or restrict activity that appears to involve advertising platform circumvention, multiple account abuse, cloaking, scams, misleading claims, prohibited products, fake identities, unauthorised financial promotions or other high-risk activity.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. Restricted and Prohibited Jurisdictions</h2>
                <p>Ads-Wall may refuse or restrict access from certain countries, territories or jurisdictions.</p>
                <p>Restrictions may be based on:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>sanctions laws;</li>
                  <li>AML risk;</li>
                  <li>fraud risk;</li>
                  <li>card scheme rules;</li>
                  <li>Authorised Partner requirements;</li>
                  <li>payment processor restrictions;</li>
                  <li>regulator expectations;</li>
                  <li>advertising platform restrictions;</li>
                  <li>operational limitations;</li>
                  <li>internal risk assessment.</li>
                </ul>
                <p>Ads-Wall may restrict access by country of incorporation, residence, operation, beneficial ownership, IP address, payment method, advertising target country, merchant location or transaction flow.</p>
                <p>Ads-Wall is not required to publish all restricted jurisdictions or explain all risk-based restrictions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. Prohibited Activity</h2>
                <p>You must not use Ads-Wall for any activity connected to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>money laundering;</li>
                  <li>terrorist financing;</li>
                  <li>sanctions evasion;</li>
                  <li>fraud;</li>
                  <li>identity theft;</li>
                  <li>stolen funds;</li>
                  <li>stolen payment cards;</li>
                  <li>unauthorised payment methods;</li>
                  <li>transaction laundering;</li>
                  <li>chargeback abuse;</li>
                  <li>refund abuse;</li>
                  <li>tax evasion;</li>
                  <li>bribery or corruption;</li>
                  <li>cybercrime;</li>
                  <li>scams;</li>
                  <li>phishing;</li>
                  <li>malware;</li>
                  <li>illegal gambling;</li>
                  <li>unauthorised financial services;</li>
                  <li>counterfeit goods;</li>
                  <li>illegal drugs;</li>
                  <li>weapons;</li>
                  <li>human exploitation;</li>
                  <li>illegal adult services;</li>
                  <li>fake documents;</li>
                  <li>deceptive advertising;</li>
                  <li>advertising platform circumvention;</li>
                  <li>any product, service or activity prohibited by Ads-Wall, an Authorised Partner, a bank, a payment processor, a card scheme, an advertising platform or applicable law.</li>
                </ul>
                <p>Ads-Wall may treat attempted prohibited activity the same as completed prohibited activity.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Payment Method Checks</h2>
                <p>Ads-Wall and/or its Authorised Partners may verify payment methods used for top-ups.</p>
                <p>We may request evidence that a payment card belongs to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>you;</li>
                  <li>your business;</li>
                  <li>an authorised company director;</li>
                  <li>an authorised company representative;</li>
                  <li>another approved person or entity expressly accepted by Ads-Wall and its Authorised Partners.</li>
                </ul>
                <p>You must not use third-party cards without approval.</p>
                <p>You must not use payment methods that are stolen, unauthorised, compromised, anonymous, linked to sanctions, linked to fraud or linked to prohibited activity.</p>
                <p>If we suspect payment method misuse, we may reject the top-up, freeze the Balance, block Cards, request documents, reverse payments, suspend the Account or terminate the Services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. Document Requests</h2>
                <p>Ads-Wall may request documents at onboarding, during Account use, before or after top-ups, before refunds, after chargebacks, during compliance reviews or at any other time.</p>
                <p>Requested documents may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>proof of identity;</li>
                  <li>proof of residential address;</li>
                  <li>company registration documents;</li>
                  <li>proof of business address;</li>
                  <li>shareholder information;</li>
                  <li>beneficial ownership information;</li>
                  <li>director information;</li>
                  <li>organisational charts;</li>
                  <li>bank card ownership evidence;</li>
                  <li>business bank statements;</li>
                  <li>invoices;</li>
                  <li>contracts;</li>
                  <li>source of funds evidence;</li>
                  <li>source of wealth evidence;</li>
                  <li>advertising account screenshots;</li>
                  <li>campaign screenshots;</li>
                  <li>website and landing page URLs;</li>
                  <li>licences or regulatory permissions;</li>
                  <li>tax or accounting records;</li>
                  <li>explanations of transaction activity;</li>
                  <li>any other information required for compliance, risk, fraud prevention, sanctions, AML or partner review.</li>
                </ul>
                <p>Documents must be genuine, complete, accurate, current and unaltered.</p>
                <p>Providing false, forged, altered, misleading or incomplete documents may result in immediate Account termination and reporting to relevant parties.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Failure to Provide Information</h2>
                <p>If you fail to provide requested information or documents, or if the information provided is incomplete, inconsistent, false, outdated or unverifiable, Ads-Wall may:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>reject your application;</li>
                  <li>delay onboarding;</li>
                  <li>refuse top-ups;</li>
                  <li>freeze Balance;</li>
                  <li>block Virtual Cards;</li>
                  <li>reduce limits;</li>
                  <li>delay refunds;</li>
                  <li>restrict Account features;</li>
                  <li>suspend the Account;</li>
                  <li>terminate the Account;</li>
                  <li>report activity to Authorised Partners, banks, processors, card schemes, regulators or law enforcement where appropriate.</li>
                </ul>
                <p>Ads-Wall is not liable for losses caused by your failure to provide required information or documents.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Holds, Freezes and Restrictions</h2>
                <p>Ads-Wall and/or its Authorised Partners may hold, freeze, restrict, delay or block access to any Account, Balance, Card, top-up, refund or transaction where compliance, AML, sanctions, fraud or risk concerns arise.</p>
                <p>This may happen where:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>required checks are incomplete;</li>
                  <li>documents are missing;</li>
                  <li>documents are suspicious;</li>
                  <li>ownership is unclear;</li>
                  <li>source of funds is unclear;</li>
                  <li>sanctions risk is identified;</li>
                  <li>fraud indicators are present;</li>
                  <li>transaction activity is unusual;</li>
                  <li>chargeback risk is high;</li>
                  <li>prohibited activity is suspected;</li>
                  <li>advertising activity appears deceptive or abusive;</li>
                  <li>an Authorised Partner requires restriction;</li>
                  <li>a bank, card issuer, processor, card scheme, regulator or law enforcement authority requires or recommends action.</li>
                </ul>
                <p>Ads-Wall may not be able to disclose the reason for a hold, freeze or restriction.</p>
                <p>Ads-Wall is not liable for losses caused by holds, freezes or restrictions applied for compliance, fraud prevention, sanctions, AML, legal, regulatory, partner, card scheme or security reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. Suspicious Activity</h2>
                <p>You must notify Ads-Wall immediately if you become aware of suspicious activity connected to your Account, Cards, Balance, payment methods, advertising activity, users, clients, transactions or business.</p>
                <p>Suspicious activity may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>unauthorised Account access;</li>
                  <li>stolen Card details;</li>
                  <li>stolen or compromised payment cards;</li>
                  <li>unknown top-ups;</li>
                  <li>unknown transactions;</li>
                  <li>unusual refund requests;</li>
                  <li>attempted chargeback abuse;</li>
                  <li>requests to hide beneficial ownership;</li>
                  <li>requests to use third-party cards;</li>
                  <li>requests to fund banned advertising accounts;</li>
                  <li>use of fake documents;</li>
                  <li>use of shell companies to hide activity;</li>
                  <li>sanctions exposure;</li>
                  <li>law enforcement or regulator contact;</li>
                  <li>advertising platform enforcement action related to prohibited activity.</li>
                </ul>
                <p>Reports should be sent to:<br />Email: info@ads-wall.com</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Reporting and Disclosure</h2>
                <p>Ads-Wall may disclose information to Authorised Partners, banks, payment processors, card issuers, card schemes, compliance providers, fraud prevention providers, regulators, law enforcement authorities, courts, government agencies, advertising platforms or other relevant parties where necessary or appropriate for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>KYC, KYB, AML and sanctions checks;</li>
                  <li>fraud prevention;</li>
                  <li>transaction monitoring;</li>
                  <li>chargeback handling;</li>
                  <li>dispute resolution;</li>
                  <li>legal compliance;</li>
                  <li>regulatory compliance;</li>
                  <li>risk management;</li>
                  <li>enforcement of Ads-Wall policies;</li>
                  <li>protection of Ads-Wall, users, partners and the public.</li>
                </ul>
                <p>Ads-Wall may also report suspicious or prohibited activity where required or permitted by law or partner rules.</p>
                <p>We may be legally restricted from informing you about certain reports, investigations, requests, holds or disclosures.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">21. Adverse Media and Public Information</h2>
                <p>Ads-Wall and/or its Authorised Partners may review adverse media, public records, company registries, regulatory notices, sanctions publications, court records, insolvency records, advertising platform information, website content, social media, online reviews, complaints, fraud databases and other publicly or commercially available sources.</p>
                <p>Adverse media or public risk indicators may lead to enhanced due diligence, restrictions, refusal or termination of Services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">22. Data Processing</h2>
                <p>Ads-Wall may process personal data and business data for KYC, KYB, AML, sanctions, fraud prevention, risk monitoring, compliance, reporting and legal purposes.</p>
                <p>This may include sharing data with Authorised Partners and other third-party service providers.</p>
                <p>More information about how Ads-Wall processes personal data is set out in the Privacy Policy.</p>
                <p>You must ensure that any personal data you provide to Ads-Wall is provided lawfully and with all required notices, permissions and authority.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">23. Record Keeping</h2>
                <p>Ads-Wall may retain records related to onboarding, verification, transactions, payments, Cards, compliance checks, sanctions screening, fraud reviews, support communications, disputes, chargebacks and Account activity.</p>
                <p>Records may be retained for as long as necessary to comply with legal, regulatory, tax, accounting, fraud prevention, dispute handling, audit, partner and business record requirements.</p>
                <p>Account closure does not automatically require immediate deletion of compliance records.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">24. Account Refusal, Suspension or Termination</h2>
                <p>Ads-Wall may refuse, suspend, restrict or terminate your Account if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>you fail verification;</li>
                  <li>you fail to provide requested documents;</li>
                  <li>your documents are false, altered, expired, inconsistent or unverifiable;</li>
                  <li>your business activity is prohibited or high risk;</li>
                  <li>sanctions risk is identified;</li>
                  <li>AML or fraud concerns arise;</li>
                  <li>source of funds cannot be verified;</li>
                  <li>beneficial ownership cannot be verified;</li>
                  <li>you use unauthorised payment methods;</li>
                  <li>you use Ads-Wall for prohibited advertising activity;</li>
                  <li>an Authorised Partner refuses or withdraws approval;</li>
                  <li>a bank, payment processor, card issuer, card scheme, regulator or law enforcement authority requires or recommends action;</li>
                  <li>continued access creates legal, regulatory, fraud, sanctions, financial or reputational risk.</li>
                </ul>
                <p>Ads-Wall may take action without prior notice where necessary for compliance, sanctions, fraud prevention, security, legal, regulatory, partner or operational reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">25. Refunds and Balance Returns</h2>
                <p>Refunds and returns of unused Balance are subject to compliance review.</p>
                <p>Before processing any refund or Balance return, Ads-Wall and/or its Authorised Partners may require:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>identity verification;</li>
                  <li>business verification;</li>
                  <li>payment method verification;</li>
                  <li>source of funds review;</li>
                  <li>source of wealth review;</li>
                  <li>sanctions screening;</li>
                  <li>fraud review;</li>
                  <li>chargeback review;</li>
                  <li>transaction monitoring;</li>
                  <li>confirmation of original payment source.</li>
                </ul>
                <p>Ads-Wall may refuse, delay, reduce or restrict refunds where compliance checks are incomplete, suspicious activity is identified, funds are subject to investigation, chargeback risk exists, a negative Balance exists or partner/legal restrictions apply.</p>
                <p>Funds may normally be returned only to the original payment method or another approved method after required checks are completed.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">26. No Tipping-Off</h2>
                <p>In some circumstances, Ads-Wall may be legally restricted from disclosing information about investigations, reports, suspicious activity reviews, sanctions matches, law enforcement requests, regulatory requests, partner instructions, holds or freezes.</p>
                <p>Where applicable, Ads-Wall may be unable to explain the specific reason for refusing, delaying, freezing, blocking or terminating Services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">27. User Responsibilities</h2>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>providing accurate and current information;</li>
                  <li>cooperating with all checks;</li>
                  <li>updating Ads-Wall when information changes;</li>
                  <li>ensuring your business is lawful;</li>
                  <li>ensuring your advertising activity is lawful;</li>
                  <li>ensuring your payment methods are authorised;</li>
                  <li>ensuring your funds are legitimate;</li>
                  <li>ensuring your users and team members comply with this Policy;</li>
                  <li>ensuring your clients comply with this Policy where you act as an agency;</li>
                  <li>avoiding prohibited, fraudulent, sanctioned or deceptive activity;</li>
                  <li>notifying Ads-Wall of suspicious activity.</li>
                </ul>
                <p>You are responsible for any losses, fees, chargebacks, fines, penalties, partner costs, claims, damages or legal costs arising from your breach of this Policy.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">28. Agencies and Client Activity</h2>
                <p>If you are an agency, media buyer or service provider using Ads-Wall on behalf of clients, you remain responsible for client-related activity.</p>
                <p>Ads-Wall may request information about your clients, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>client identity;</li>
                  <li>client business activity;</li>
                  <li>client websites;</li>
                  <li>client advertising accounts;</li>
                  <li>client products and services;</li>
                  <li>client licences or approvals;</li>
                  <li>client ownership and control;</li>
                  <li>client source of funds;</li>
                  <li>client target jurisdictions;</li>
                  <li>client compliance with advertising platform rules.</li>
                </ul>
                <p>You must not use Ads-Wall to hide the identity of a client, beneficial owner, advertiser, source of funds or prohibited business.</p>
                <p>Ads-Wall may refuse or terminate agency activity where the underlying client or campaign is prohibited, high risk or undisclosed.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">29. Changes to This Policy</h2>
                <p>Ads-Wall may update this Policy from time to time.</p>
                <p>Where changes are material, Ads-Wall may notify you by email, through the Platform or by other reasonable means.</p>
                <p>The updated Policy will apply from the date stated in the updated version.</p>
                <p>If you continue using the Platform after the updated Policy takes effect, you will be deemed to have accepted it.</p>
                <p>If you do not agree to the updated Policy, you must stop using Ads-Wall and may request Account closure.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">30. Contact</h2>
                <p>If you have questions about this KYC, AML &amp; Sanctions Policy, contact:</p>
                <p>TIWALLET LTD<br />Company number: 17179279<br />Registered office: Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
