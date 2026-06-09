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
              <p>These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the Ads-Wall website, platform, dashboard, virtual card management tools, balance top-up functionality, support services, API and any related services made available through https://www.ads-wall.com/ and any related subdomains or applications (together, the &quot;Platform&quot;).</p>
              <p>The Platform is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH (&quot;Ads-Wall&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).</p>
              <p>You can contact us at:</p>
              <p>Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              <p>By creating an account, accessing the Platform, topping up a balance, requesting or using virtual cards, inviting team members, connecting via API or otherwise using the Services, you confirm that you have read, understood and agreed to these Terms.</p>
              <p>If you do not agree to these Terms, you must not access or use the Platform.</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Important Information About Our Role</h2>
                <p>Ads-Wall provides a business platform that enables approved users to access, manage and use virtual payment cards for legitimate advertising and business-related online spending.</p>
                <p>Ads-Wall is not a bank, credit institution, card issuer, electronic money institution or payment institution. Ads-Wall does not itself issue payment cards, hold customer funds as a bank deposit, provide regulated payment services, issue electronic money or operate a payment account in its own capacity.</p>
                <p>Virtual cards, payment processing, card issuing, safeguarding of funds, transaction authorisation, settlement, chargeback handling, fraud monitoring and any regulated financial services are provided by authorised third-party banking, card issuing, payment processing and compliance partners (the &quot;Authorised Partners&quot;).</p>
                <p>Your use of certain Services may be subject to additional terms, rules, limits, compliance requirements and decisions of the relevant Authorised Partners, card schemes, acquiring banks, payment processors, advertising platforms and other third-party providers.</p>
                <p>By using the Platform, you acknowledge and agree that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ads-Wall operates as a technology and service platform;</li>
                  <li>regulated financial services are provided by Authorised Partners;</li>
                  <li>Ads-Wall may act as a technical service provider, programme participant, introducer, distributor, platform operator or service facilitator, depending on the relevant arrangement;</li>
                  <li>Ads-Wall does not guarantee the approval, availability, continuation or uninterrupted operation of any card, transaction, payment method, advertising account or advertising platform;</li>
                  <li>Ads-Wall may be required to follow instructions, restrictions, decisions or compliance requirements imposed by its Authorised Partners, payment processors, banks, card schemes, regulators, law enforcement authorities or advertising platforms.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Business Use Only</h2>
                <p>The Platform is intended for business use only.</p>
                <p>By using the Platform, you confirm that you are acting in the course of a business, trade, profession or commercial activity and not as a consumer.</p>
                <p>You must not use the Platform for personal, household or consumer purposes. We may refuse, suspend or terminate access if we believe that the Platform is being used for personal or consumer purposes.</p>
                <p>If you create an account on behalf of a company, agency, partnership or other legal entity, you confirm that you have full authority to bind that entity to these Terms.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Eligibility</h2>
                <p>To use the Platform, you must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>be at least 18 years old;</li>
                  <li>have legal capacity to enter into binding agreements;</li>
                  <li>use the Platform only for lawful business purposes;</li>
                  <li>provide accurate, complete and up-to-date information;</li>
                  <li>pass any onboarding, verification, KYB, KYC, AML, sanctions, fraud prevention or compliance checks required by Ads-Wall or its Authorised Partners;</li>
                  <li>not be located in, incorporated in, resident in, controlled from or operating from a restricted, prohibited or sanctioned jurisdiction;</li>
                  <li>not be subject to sanctions, asset freezes, export controls or similar restrictions;</li>
                  <li>not use the Platform for prohibited, illegal, deceptive, fraudulent or high-risk activities.</li>
                </ul>
                <p>We may reject any application or refuse access to the Platform at our sole discretion, including where we or our Authorised Partners cannot complete required compliance checks.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Definitions</h2>
                <p>In these Terms:</p>
                <p>&quot;Account&quot; means your Ads-Wall user or business account.</p>
                <p>&quot;Advertising Platforms&quot; means Google Ads, Meta Ads, Microsoft Ads and any other digital advertising, media buying, social media, search advertising, display advertising, affiliate advertising, traffic acquisition or marketing platform.</p>
                <p>&quot;Authorised Partner&quot; means a regulated or authorised third-party bank, card issuer, payment institution, electronic money institution, acquiring bank, payment processor, compliance provider, fraud prevention provider or other provider involved in the provision of the Services.</p>
                <p>&quot;Balance&quot; means the available amount shown in your Account or card dashboard that may be used, subject to these Terms and applicable partner terms, for permitted card transactions or advertising-related spend.</p>
                <p>&quot;Cards&quot; or &quot;Virtual Cards&quot; means virtual payment cards made available through the Platform via Authorised Partners.</p>
                <p>&quot;Fees&quot; means any fees, charges, deductions, costs or expenses applicable to the Services.</p>
                <p>&quot;Services&quot; means the Platform, Account, Balance, Virtual Cards, dashboard, top-up functionality, reporting tools, API, team management tools, support and related services provided or facilitated by Ads-Wall.</p>
                <p>&quot;User&quot;, &quot;you&quot; or &quot;your&quot; means the person or business entity accessing or using the Platform.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Account Registration</h2>
                <p>To use the Services, you must create an Account and provide the information requested by Ads-Wall or its Authorised Partners.</p>
                <p>You agree that all information you provide must be true, accurate, current and complete.</p>
                <p>We may require you to provide additional information or documents at any time, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>company registration documents;</li>
                  <li>proof of business address;</li>
                  <li>proof of identity and address for directors, shareholders, beneficial owners, authorised users or representatives;</li>
                  <li>ownership and control information;</li>
                  <li>source of funds and source of wealth information;</li>
                  <li>bank card ownership evidence;</li>
                  <li>details of your advertising activity, websites, products, services, customers, traffic sources and advertising accounts;</li>
                  <li>invoices, contracts, screenshots, ad account information or other evidence of legitimate business activity;</li>
                  <li>any other information requested by Ads-Wall or its Authorised Partners for compliance, risk, fraud prevention or operational purposes.</li>
                </ul>
                <p>Failure to provide requested information may result in refusal, suspension, restriction or termination of the Services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Verification, KYB, KYC, AML and Sanctions Checks</h2>
                <p>You acknowledge that Ads-Wall and/or its Authorised Partners may perform verification, KYB, KYC, AML, sanctions, fraud prevention, risk monitoring and transaction monitoring checks before approving your Account, before issuing Cards, before processing top-ups, before releasing funds, after transactions occur or at any other time.</p>
                <p>We may use third-party providers to carry out such checks.</p>
                <p>You agree to cooperate fully with all verification and compliance requests. You must not provide false, misleading, incomplete or outdated information.</p>
                <p>We may refuse, delay, suspend, freeze, restrict, reverse or cancel any Account, Card, Balance, transaction, top-up, withdrawal or refund where required or considered appropriate for compliance, fraud prevention, sanctions, regulatory, legal, card scheme, partner or risk management reasons.</p>
                <p>We are not liable for any loss, delay, campaign disruption, declined advertising payment, suspended ad account or business interruption resulting from compliance checks, risk controls, partner decisions or legal obligations.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. The Services</h2>
                <p>Subject to approval, availability and applicable limits, the Services may allow you to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>access an Ads-Wall business dashboard;</li>
                  <li>top up your Balance using supported payment methods;</li>
                  <li>request, create, manage, freeze or close Virtual Cards;</li>
                  <li>use Virtual Cards for permitted advertising and business-related online spending;</li>
                  <li>assign cards to specific campaigns, accounts, users, teams or spending purposes;</li>
                  <li>view card transactions and spending history;</li>
                  <li>set card controls, where available;</li>
                  <li>invite authorised team members;</li>
                  <li>access support;</li>
                  <li>use API functionality, where enabled.</li>
                </ul>
                <p>The exact features available to you may depend on your jurisdiction, verification status, risk profile, partner approval, technical availability, currency, limits and other factors.</p>
                <p>We may modify, suspend, restrict or discontinue any feature at any time.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Virtual Cards</h2>
                <p>Virtual Cards are provided through Authorised Partners and may be subject to additional issuer, card scheme, processor and partner terms.</p>
                <p>Cards may be available in selected currencies, including USD, EUR and GBP, subject to availability.</p>
                <p>Cards are intended for legitimate business advertising and online spending only. Unless expressly approved by Ads-Wall, Cards must not be used for cash withdrawals, peer-to-peer transfers, money remittance, personal spending, gambling, prohibited goods or services, illegal activity, circumvention of advertising platform rules or any activity restricted by these Terms.</p>
                <p>Cards may be declined, blocked, limited, suspended or terminated for reasons including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>insufficient Balance;</li>
                  <li>incorrect card details;</li>
                  <li>failed 3D Secure or authentication;</li>
                  <li>advertising platform rejection;</li>
                  <li>card scheme or issuer controls;</li>
                  <li>merchant category restrictions;</li>
                  <li>fraud or risk alerts;</li>
                  <li>suspicious activity;</li>
                  <li>compliance review;</li>
                  <li>chargeback risk;</li>
                  <li>violation of these Terms;</li>
                  <li>restrictions imposed by an Authorised Partner or card scheme.</li>
                </ul>
                <p>Ads-Wall does not guarantee that any Card will be accepted by Google Ads, Meta Ads, Microsoft Ads or any other merchant or advertising platform.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Balance and Top-Ups</h2>
                <p>You may top up your Balance using supported payment methods shown on the Platform.</p>
                <p>Unless otherwise stated on the Platform, supported top-up methods are Visa and MasterCard payment cards.</p>
                <p>Top-ups may be available in USD, EUR and GBP, subject to availability, supported card types, issuer approval, payment processor acceptance, verification status, risk checks and applicable limits.</p>
                <p>We may refuse, delay, reverse or cancel any top-up where:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the payment is declined;</li>
                  <li>the payment card does not belong to you or your business;</li>
                  <li>the payment appears suspicious or high risk;</li>
                  <li>the payment is made using a third-party card without approval;</li>
                  <li>the transaction fails authentication;</li>
                  <li>the top-up triggers compliance, fraud, sanctions or chargeback concerns;</li>
                  <li>the Authorised Partner, processor, bank or card scheme requires or recommends refusal;</li>
                  <li>we reasonably believe the top-up violates these Terms.</li>
                </ul>
                <p>You must not use stolen, unauthorised, compromised, third-party, prepaid, anonymous or fraudulently obtained cards to top up your Balance.</p>
                <p>We may require evidence that the top-up card belongs to you, your business or an authorised company representative.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Fees</h2>
                <p>Ads-Wall does not charge a service fee for standard Balance top-ups unless otherwise clearly stated on the Platform.</p>
                <p>However, third-party fees may still apply, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>bank fees;</li>
                  <li>card issuer fees;</li>
                  <li>acquiring or processing fees;</li>
                  <li>card scheme fees;</li>
                  <li>foreign exchange fees;</li>
                  <li>cross-border fees;</li>
                  <li>chargeback fees;</li>
                  <li>refund processing fees;</li>
                  <li>failed payment fees;</li>
                  <li>fees charged by Advertising Platforms or merchants;</li>
                  <li>fees charged by your own bank or card issuer;</li>
                  <li>fees imposed by Authorised Partners.</li>
                </ul>
                <p>Ads-Wall is not responsible for fees charged by third parties.</p>
                <p>Where applicable, Fees may be deducted from your Balance, charged separately or applied at transaction level.</p>
                <p>We may change our Fees by updating the Platform or notifying you in advance where required.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. Foreign Exchange and Currency</h2>
                <p>The Platform may support USD, EUR and GBP.</p>
                <p>If you top up, hold, spend, refund or settle funds in different currencies, foreign exchange rates, conversion fees, card scheme rates, issuer fees or partner rates may apply.</p>
                <p>Exchange rates may change without notice and may differ from rates shown by banks, card schemes, public sources or Advertising Platforms.</p>
                <p>Ads-Wall does not guarantee any particular exchange rate.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. Advertising Platforms</h2>
                <p>Ads-Wall is an independent service provider and is not affiliated with, endorsed by, sponsored by or officially connected with Google, Meta, Microsoft or any other Advertising Platform unless expressly stated.</p>
                <p>Your use of any Advertising Platform is subject to that platform&apos;s own terms, advertising policies, billing rules, account verification requirements, prohibited content rules, suspension policies and enforcement decisions.</p>
                <p>You are solely responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>complying with all Advertising Platform rules;</li>
                  <li>maintaining your advertising accounts in good standing;</li>
                  <li>ensuring your advertisements, landing pages, products, services, claims, targeting and billing practices are lawful and compliant;</li>
                  <li>ensuring you do not use Cards to bypass platform rules, suspensions, bans, reviews or billing restrictions.</li>
                </ul>
                <p>Ads-Wall does not guarantee:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>approval of any ad account;</li>
                  <li>approval of any advertisement;</li>
                  <li>continuation of any ad campaign;</li>
                  <li>prevention of ad account suspension;</li>
                  <li>improved advertising performance;</li>
                  <li>acceptance of any Card by an Advertising Platform;</li>
                  <li>restoration of any suspended or restricted advertising account.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. Prohibited Use</h2>
                <p>You must not use the Platform, Account, Balance, Cards or Services for any unlawful, harmful, fraudulent, deceptive, abusive, restricted or prohibited activity.</p>
                <p>Prohibited activities include, without limitation:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>fraud, scams, phishing, identity theft or deceptive business practices;</li>
                  <li>money laundering, terrorist financing, sanctions evasion or illegal financial activity;</li>
                  <li>use by or for sanctioned persons, entities or jurisdictions;</li>
                  <li>use of stolen, unauthorised or third-party payment cards;</li>
                  <li>chargeback abuse or refund abuse;</li>
                  <li>creating or funding fake, misleading or unauthorised advertising accounts;</li>
                  <li>bypassing or attempting to bypass Advertising Platform policies, suspensions, bans, reviews, identity checks or billing restrictions;</li>
                  <li>multiple account abuse or re-entry after an Advertising Platform suspension;</li>
                  <li>cloaking, misleading redirects, bridge pages, fake landing pages or hidden destination pages;</li>
                  <li>malware, spyware, ransomware, hacking tools or unauthorised access services;</li>
                  <li>counterfeit goods, fake documents or infringing products;</li>
                  <li>illegal drugs, controlled substances or drug paraphernalia;</li>
                  <li>weapons, explosives or restricted military goods;</li>
                  <li>unlicensed gambling, betting, lottery or casino activity;</li>
                  <li>adult services, escort services or illegal sexual content;</li>
                  <li>high-risk crypto, investment, trading or get-rich-quick schemes;</li>
                  <li>misleading financial products or unauthorised regulated services;</li>
                  <li>political advertising where required verification, disclosure or legal conditions are not met;</li>
                  <li>hate, harassment, violence, exploitation or illegal content;</li>
                  <li>products or services prohibited by card schemes, Authorised Partners, payment processors or Advertising Platforms;</li>
                  <li>any activity that may damage Ads-Wall, its partners, payment processors, card schemes, banks, Advertising Platforms or other users.</li>
                </ul>
                <p>We may determine, in our sole discretion, whether activity is prohibited or high risk.</p>
                <p>Additional prohibited use rules may be set out in our Acceptable Use Policy, Card Terms, Payment Policy or partner terms.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. Account Security</h2>
                <p>You are responsible for maintaining the confidentiality and security of your login details, passwords, devices, API keys, authentication methods and Account access.</p>
                <p>You must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>keep your credentials secure;</li>
                  <li>enable any recommended security features where available;</li>
                  <li>ensure that only authorised persons access your Account;</li>
                  <li>immediately notify us of suspected unauthorised access, fraud, compromise or misuse;</li>
                  <li>regularly review transactions and card activity;</li>
                  <li>remove access for team members who no longer require it.</li>
                </ul>
                <p>You are responsible for all activity carried out through your Account, including activity by team members, employees, contractors, agents or anyone who gains access through your credentials, except where caused solely by Ads-Wall&apos;s proven gross negligence or wilful misconduct.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Team Members and Authorised Users</h2>
                <p>You may be able to invite team members or authorised users to access your Account.</p>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>selecting appropriate access rights;</li>
                  <li>monitoring team member activity;</li>
                  <li>ensuring team members comply with these Terms;</li>
                  <li>removing team members when access is no longer required;</li>
                  <li>all actions taken by team members under your Account.</li>
                </ul>
                <p>We may suspend or remove any team member access where required for security, risk, compliance or operational reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. API Access</h2>
                <p>Where API access is made available, you must use it only in accordance with our documentation, technical limits, security requirements and applicable laws.</p>
                <p>You must not:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>overload, disrupt or damage the Platform;</li>
                  <li>scrape, reverse engineer or misuse the API;</li>
                  <li>share API keys with unauthorised parties;</li>
                  <li>use the API for unlawful or prohibited activities;</li>
                  <li>bypass access controls, rate limits or security features.</li>
                </ul>
                <p>We may suspend or revoke API access at any time for security, compliance, abuse prevention, maintenance or operational reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Transaction Monitoring, Holds and Restrictions</h2>
                <p>You acknowledge that transactions, top-ups, Cards, Accounts and Balances may be monitored by Ads-Wall and/or its Authorised Partners.</p>
                <p>We may place a hold, reserve, restriction, suspension or freeze on any Account, Card, Balance, top-up, transaction or refund where we consider it necessary or appropriate due to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>compliance review;</li>
                  <li>fraud risk;</li>
                  <li>chargeback risk;</li>
                  <li>suspicious activity;</li>
                  <li>sanctions concerns;</li>
                  <li>law enforcement request;</li>
                  <li>regulatory obligation;</li>
                  <li>partner instruction;</li>
                  <li>card scheme rules;</li>
                  <li>breach or suspected breach of these Terms;</li>
                  <li>abnormal transaction patterns;</li>
                  <li>Advertising Platform abuse;</li>
                  <li>negative balance or potential liability.</li>
                </ul>
                <p>We are not liable for losses resulting from holds, freezes, delays or restrictions applied for compliance, risk, legal, regulatory, partner or security reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Declined, Failed or Reversed Transactions</h2>
                <p>Transactions may be declined, failed, reversed, cancelled or delayed for reasons outside Ads-Wall&apos;s control.</p>
                <p>These reasons may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>merchant rejection;</li>
                  <li>Advertising Platform rejection;</li>
                  <li>issuer or processor controls;</li>
                  <li>card scheme rules;</li>
                  <li>insufficient Balance;</li>
                  <li>incorrect card data;</li>
                  <li>authentication failure;</li>
                  <li>MCC or merchant restrictions;</li>
                  <li>fraud screening;</li>
                  <li>technical errors;</li>
                  <li>network outages;</li>
                  <li>compliance checks;</li>
                  <li>limits or risk settings.</li>
                </ul>
                <p>Ads-Wall is not responsible for losses, campaign interruptions, advertising downtime, missed opportunities, account suspensions or business impact caused by declined, failed, reversed or delayed transactions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. Refunds and Unused Balance</h2>
                <p>Refunds and unused Balance withdrawals are subject to these Terms, our Refund Policy, partner rules, compliance checks, chargeback risk review, transaction monitoring, payment method restrictions and applicable laws.</p>
                <p>Ads-Wall may require completion of verification checks before processing any refund or Balance return.</p>
                <p>We may refuse, delay or reduce a refund where:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>verification is incomplete;</li>
                  <li>suspicious activity is identified;</li>
                  <li>there is an open chargeback or dispute;</li>
                  <li>there is a negative Balance or outstanding liability;</li>
                  <li>funds are subject to a hold, freeze or investigation;</li>
                  <li>the refund would breach partner rules, law, regulation or card scheme requirements;</li>
                  <li>the original top-up method cannot receive the refund;</li>
                  <li>the Account has been used for prohibited activity.</li>
                </ul>
                <p>Fees already incurred, third-party fees, chargeback fees, FX costs, processing fees, card scheme fees and other non-recoverable costs may be non-refundable.</p>
                <p>Specific refund conditions may be set out in our Refund &amp; Cancellation Policy.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Chargebacks and Payment Disputes</h2>
                <p>If you initiate a chargeback, payment reversal, dispute or retrieval request without first contacting Ads-Wall and without valid grounds, we may suspend or terminate your Account, freeze Cards, restrict Balance access, recover costs and provide transaction evidence to the relevant bank, processor or card scheme.</p>
                <p>You are responsible for any losses, costs, fees, negative balances, penalties, chargeback fees, investigation costs or partner charges caused by chargebacks, failed payments, fraudulent top-ups, disputed payments or unauthorised use of your payment methods.</p>
                <p>We may deduct such amounts from your Balance or require immediate payment.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">21. Taxes</h2>
                <p>You are solely responsible for determining, reporting and paying any taxes, duties, levies or charges applicable to your use of the Services, advertising spend, business activity, top-ups, refunds, foreign exchange, fees or transactions.</p>
                <p>Ads-Wall does not provide tax advice.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">22. Intellectual Property</h2>
                <p>All rights, title and interest in the Platform, website, software, dashboard, API, branding, design, text, graphics, logos, trademarks, service marks, documentation and technology belong to Ads-Wall or its licensors.</p>
                <p>You are granted a limited, revocable, non-exclusive, non-transferable right to use the Platform for your internal business purposes in accordance with these Terms.</p>
                <p>You must not copy, modify, distribute, sell, lease, reverse engineer, decompile, scrape, frame, mirror or exploit any part of the Platform without our prior written consent.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">23. User Content and Business Information</h2>
                <p>You may provide business information, documents, advertising materials, websites, URLs, company details, user details, transaction information, support messages or other content to Ads-Wall.</p>
                <p>You confirm that you have the right to provide such information and that it is accurate, lawful and not misleading.</p>
                <p>You grant Ads-Wall the right to use, process, store, disclose and share such information as necessary to provide the Services, operate the Platform, perform compliance checks, prevent fraud, comply with law, communicate with Authorised Partners and enforce these Terms.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">24. Privacy</h2>
                <p>We process personal data in accordance with our Privacy Policy.</p>
                <p>By using the Platform, you acknowledge that personal data may be processed by Ads-Wall, Authorised Partners, compliance providers, payment processors, card issuers, banks, fraud prevention providers, hosting providers, analytics providers and other service providers as necessary for the Services.</p>
                <p>You must ensure that any personal data you provide to us is provided lawfully and with all required notices, permissions and authority.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">25. Availability and Changes to the Platform</h2>
                <p>We aim to provide a reliable Platform, but we do not guarantee uninterrupted, error-free or continuous availability.</p>
                <p>The Platform may be unavailable due to maintenance, updates, outages, security incidents, third-party failures, partner downtime, payment network issues, card scheme issues, Advertising Platform issues or events outside our control.</p>
                <p>We may update, modify, restrict, replace or discontinue any part of the Services at any time.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">26. Third-Party Services and Partners</h2>
                <p>The Services may depend on third-party providers, including Authorised Partners, banks, card issuers, payment processors, fraud prevention providers, compliance providers, hosting providers, software vendors and Advertising Platforms.</p>
                <p>Ads-Wall is not responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>third-party downtime;</li>
                  <li>third-party fees;</li>
                  <li>third-party decisions;</li>
                  <li>declined transactions;</li>
                  <li>Advertising Platform suspensions;</li>
                  <li>issuer or bank restrictions;</li>
                  <li>processor failures;</li>
                  <li>changes in card scheme rules;</li>
                  <li>changes in partner requirements;</li>
                  <li>third-party terms, policies or enforcement actions.</li>
                </ul>
                <p>You agree to comply with any applicable third-party terms.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">27. Suspension and Termination</h2>
                <p>We may suspend, restrict or terminate your Account, Cards, Balance access, API access or any Services immediately, with or without notice, if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>you breach these Terms;</li>
                  <li>you provide false, misleading or incomplete information;</li>
                  <li>you fail verification or compliance checks;</li>
                  <li>you engage in prohibited activity;</li>
                  <li>you create legal, regulatory, fraud, chargeback, sanctions or reputational risk;</li>
                  <li>your activity is rejected or restricted by an Authorised Partner;</li>
                  <li>your activity may harm Ads-Wall, its partners, card schemes, banks, Advertising Platforms or other users;</li>
                  <li>required by law, regulation, court order, regulator, law enforcement, card scheme or partner instruction;</li>
                  <li>your Account is inactive for an extended period;</li>
                  <li>we decide to discontinue the Services.</li>
                </ul>
                <p>Termination does not affect any rights, obligations, liabilities, fees, investigations, holds, chargebacks, negative balances or compliance obligations that arose before termination.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">28. Closing Your Account</h2>
                <p>You may request to close your Account by contacting us at info@ads-wall.com.</p>
                <p>Before closure, you must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>stop using all Cards;</li>
                  <li>settle all outstanding obligations;</li>
                  <li>resolve any negative Balance;</li>
                  <li>complete any required verification;</li>
                  <li>cooperate with any chargeback, fraud or compliance review.</li>
                </ul>
                <p>Account closure and Balance return may be delayed if there are pending transactions, chargebacks, investigations, compliance reviews, partner restrictions or unresolved liabilities.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">29. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Ads-Wall is not liable for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>loss of profits;</li>
                  <li>loss of revenue;</li>
                  <li>loss of business;</li>
                  <li>loss of goodwill;</li>
                  <li>loss of data;</li>
                  <li>loss of advertising performance;</li>
                  <li>loss caused by ad account suspension;</li>
                  <li>declined, delayed or failed transactions;</li>
                  <li>third-party fees;</li>
                  <li>partner, bank, issuer, processor or Advertising Platform decisions;</li>
                  <li>indirect, incidental, special, consequential or punitive damages;</li>
                  <li>losses caused by your breach of these Terms or misuse of the Services.</li>
                </ul>
                <p>Nothing in these Terms limits or excludes liability where it cannot be limited or excluded under applicable law, including liability for fraud or fraudulent misrepresentation, death or personal injury caused by negligence, or any other liability that cannot lawfully be excluded.</p>
                <p>Subject to the above, Ads-Wall&apos;s total aggregate liability to you for all claims arising out of or in connection with the Services shall not exceed the total amount of fees actually paid by you directly to Ads-Wall for the Services during the three months before the event giving rise to the claim.</p>
                <p>For the avoidance of doubt, third-party fees, advertising spend, Balance amounts, top-ups and amounts processed by Authorised Partners are not fees paid to Ads-Wall unless expressly stated otherwise.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">30. Indemnity</h2>
                <p>You agree to indemnify and hold harmless Ads-Wall, its directors, officers, employees, contractors, affiliates, service providers and Authorised Partners from and against any claims, losses, liabilities, damages, penalties, fines, costs and expenses, including reasonable legal fees, arising from or related to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your breach of these Terms;</li>
                  <li>your misuse of the Services;</li>
                  <li>your advertising activity;</li>
                  <li>your breach of Advertising Platform rules;</li>
                  <li>your prohibited activity;</li>
                  <li>your violation of law or regulation;</li>
                  <li>your chargebacks, disputes, fraud or failed payments;</li>
                  <li>your team members or authorised users;</li>
                  <li>information or documents you provide;</li>
                  <li>your infringement of third-party rights.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">31. No Financial, Legal, Tax or Advertising Advice</h2>
                <p>Ads-Wall does not provide financial, legal, tax, regulatory, advertising, marketing or compliance advice.</p>
                <p>Any information provided through the Platform is for general operational purposes only.</p>
                <p>You are responsible for obtaining your own professional advice where required.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">32. Complaints and Support</h2>
                <p>If you have a complaint or need support, you should contact us at:</p>
                <p>Email: info@ads-wall.com</p>
                <p>Please include your Account details, a description of the issue, relevant transaction details and any supporting evidence.</p>
                <p>We will review complaints in a reasonable manner and may refer certain issues to Authorised Partners where they relate to card issuing, payment processing, compliance checks, transaction authorisation, chargebacks, refunds or regulated financial services.</p>
                <p>Some complaints may be subject to the procedures and timeframes of Authorised Partners, card schemes, banks or payment processors.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">33. Notices</h2>
                <p>We may send notices to you by email, through the Platform, through your Account dashboard or by other reasonable means.</p>
                <p>You must keep your contact details up to date.</p>
                <p>Notices sent by email will be deemed received when sent, unless we receive a delivery failure notice.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">34. Changes to These Terms</h2>
                <p>We may update these Terms from time to time.</p>
                <p>Where changes are material, we may notify you by email, through the Platform or by other reasonable means.</p>
                <p>The updated Terms will apply from the date stated in the updated version.</p>
                <p>If you continue using the Platform after the updated Terms take effect, you will be deemed to have accepted them.</p>
                <p>If you do not agree to the updated Terms, you must stop using the Platform and request Account closure.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">35. Assignment</h2>
                <p>You may not assign, transfer or subcontract your rights or obligations under these Terms without our prior written consent.</p>
                <p>We may assign, transfer or subcontract our rights and obligations under these Terms to an affiliate, successor, purchaser, service provider, Authorised Partner or other third party as part of a restructuring, sale, merger, business transfer, partner arrangement or operational change.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">36. Severability</h2>
                <p>If any provision of these Terms is found to be invalid, unlawful or unenforceable, the remaining provisions will continue in full force and effect.</p>
                <p>The invalid, unlawful or unenforceable provision will be interpreted or replaced in a way that most closely reflects the original commercial intention, to the extent permitted by law.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">37. No Waiver</h2>
                <p>If we do not enforce any provision of these Terms, this does not mean that we waive our right to enforce it later.</p>
                <p>Any waiver must be made in writing.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">38. Entire Agreement</h2>
                <p>These Terms, together with any additional policies, partner terms, Card Terms, Payment Policy, Refund Policy, Acceptable Use Policy, Privacy Policy, Cookie Policy and any other documents incorporated by reference, form the entire agreement between you and Ads-Wall regarding the Services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">39. Governing Law and Jurisdiction</h2>
                <p>These Terms are governed by the laws of England and Wales.</p>
                <p>The courts of England and Wales shall have exclusive jurisdiction over any dispute arising out of or in connection with these Terms, the Platform or the Services, except where applicable law requires otherwise.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">40. Contact Details</h2>
                <p>Ads-Wall is operated by:</p>
                <p>TIWALLET LTD<br />Company number: 17179279<br />Registered office: Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
