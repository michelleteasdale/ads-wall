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
    title: "Acceptable Use Policy — AdsWall",
  };
}

export default async function AcceptableUsePage({
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
              <GradientText>Acceptable Use Policy</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">Last Updated: 09.06.2026</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <p>This Acceptable Use Policy (&quot;Policy&quot;) sets out the rules that apply when you access or use the Ads-Wall platform, website, dashboard, Balance, Virtual Cards, payment features, API, support services and any related services provided or facilitated by Ads-Wall.</p>
              <p>This Policy forms part of and is incorporated into the Ads-Wall Terms &amp; Conditions, Virtual Card Terms, Payment &amp; Top-Up Policy and Refund &amp; Cancellation Policy.</p>
              <p>Ads-Wall is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH.</p>
              <p>Contact details: Email: info@ads-wall.com Phone: +44 7455 726203</p>
              <p>By using Ads-Wall, you agree to comply with this Policy. If you do not agree to this Policy, you must not use the Platform.</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Purpose of This Policy</h2>
                <p>Ads-Wall provides a business platform that enables approved users to access and manage virtual payment cards for legitimate advertising and business-related online spending.</p>
                <p>Because Ads-Wall may be used to fund advertising activity on platforms such as Google Ads, Meta Ads, Microsoft Ads and other digital advertising platforms, we require all users to follow strict rules designed to prevent fraud, scams, advertising abuse, payment abuse, sanctions violations, unlawful activity and reputational harm.</p>
                <p>This Policy is intended to protect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ads-Wall;</li>
                  <li>Ads-Wall users;</li>
                  <li>Authorised Partners;</li>
                  <li>banks, card issuers and payment processors;</li>
                  <li>card schemes;</li>
                  <li>advertising platforms;</li>
                  <li>merchants;</li>
                  <li>consumers and the public;</li>
                  <li>the integrity of digital advertising and payment systems.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Relationship With Other Terms</h2>
                <p>This Policy should be read together with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ads-Wall Terms &amp; Conditions;</li>
                  <li>Virtual Card Terms;</li>
                  <li>Payment &amp; Top-Up Policy;</li>
                  <li>Refund &amp; Cancellation Policy;</li>
                  <li>KYC, AML &amp; Sanctions Policy;</li>
                  <li>Privacy Policy;</li>
                  <li>Cookie Policy;</li>
                  <li>any applicable terms of our Authorised Partners;</li>
                  <li>any applicable rules of advertising platforms, card schemes, payment processors, banks and regulators.</li>
                </ul>
                <p>If there is a conflict between this Policy and mandatory requirements imposed by law, regulation, an Authorised Partner, card scheme, payment processor, bank or advertising platform, those mandatory requirements will apply.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Business Use Only</h2>
                <p>Ads-Wall is intended for business use only.</p>
                <p>You must not use Ads-Wall for personal, household or consumer purposes.</p>
                <p>You may use Ads-Wall only for lawful business activities that have been approved by Ads-Wall and, where applicable, by our Authorised Partners.</p>
                <p>You are responsible for ensuring that your business, products, services, advertisements, landing pages, payment activity, users, customers, jurisdictions and transaction activity comply with this Policy and all applicable laws.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. General Acceptable Use Standard</h2>
                <p>You must use Ads-Wall in a lawful, honest, transparent and responsible manner.</p>
                <p>You must not use Ads-Wall in any way that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>is illegal, fraudulent, deceptive or harmful;</li>
                  <li>violates advertising platform policies;</li>
                  <li>violates card scheme rules;</li>
                  <li>violates payment processor or bank requirements;</li>
                  <li>creates excessive chargeback, fraud, AML, sanctions or reputational risk;</li>
                  <li>harms consumers or misleads users;</li>
                  <li>hides, disguises or misrepresents the true nature of your business;</li>
                  <li>attempts to bypass controls, reviews, verification, suspensions or enforcement actions;</li>
                  <li>exposes Ads-Wall or its Authorised Partners to legal, regulatory, financial or reputational risk.</li>
                </ul>
                <p>We may determine, in our sole discretion, whether your activity is unacceptable, prohibited, restricted or high risk.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Compliance With Advertising Platform Policies</h2>
                <p>If you use Ads-Wall in connection with any advertising platform, you must comply with all applicable rules of that platform, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Ads policies;</li>
                  <li>Meta Ads policies;</li>
                  <li>Microsoft Advertising policies;</li>
                  <li>TikTok Ads policies;</li>
                  <li>X / Twitter Ads policies;</li>
                  <li>Snapchat Ads policies;</li>
                  <li>LinkedIn Ads policies;</li>
                  <li>Pinterest Ads policies;</li>
                  <li>affiliate network policies;</li>
                  <li>any other digital advertising or media buying platform policies.</li>
                </ul>
                <p>You are solely responsible for ensuring that your advertisements, ad accounts, landing pages, websites, products, services, claims, targeting, creatives, tracking, billing information and advertiser verification status comply with the rules of each advertising platform you use.</p>
                <p>Ads-Wall does not guarantee that any advertising platform will approve your account, accept your Card, approve your campaign, continue serving your ads or maintain your access.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Advertising Platform Circumvention Is Prohibited</h2>
                <p>You must not use Ads-Wall to bypass, avoid, evade or circumvent the rules, reviews, verification processes, billing restrictions, suspensions, bans or enforcement actions of any advertising platform.</p>
                <p>Prohibited circumvention includes, without limitation:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>creating new ad accounts after suspension to continue prohibited activity;</li>
                  <li>using multiple ad accounts to evade policy enforcement;</li>
                  <li>using Cards to fund ad accounts that have been created to bypass bans;</li>
                  <li>using Cards to hide the true advertiser, beneficial owner, business or payment source;</li>
                  <li>using false, misleading or incomplete advertiser verification information;</li>
                  <li>using fake business identities, fake documents or nominee structures;</li>
                  <li>using cloaking or different landing pages for reviewers and users;</li>
                  <li>using redirects to hide the real destination;</li>
                  <li>manipulating domains, subdomains, creatives or ad components to avoid detection;</li>
                  <li>using bridge pages, fake advertorials or misleading pre-landers;</li>
                  <li>changing content after ad approval to promote prohibited products or services;</li>
                  <li>using Cards to fund ad accounts that are operated on behalf of banned, suspended or restricted advertisers;</li>
                  <li>assisting another person or business to evade advertising platform enforcement.</li>
                </ul>
                <p>Ads-Wall may suspend or terminate your Account if we believe that you are using the Platform to circumvent advertising platform rules.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Fraud, Scams and Deceptive Practices</h2>
                <p>You must not use Ads-Wall for fraud, scams, deceptive business practices or misleading offers.</p>
                <p>Prohibited activity includes, without limitation:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>fake stores;</li>
                  <li>fake goods or services;</li>
                  <li>non-delivery schemes;</li>
                  <li>fake investment opportunities;</li>
                  <li>fake job offers;</li>
                  <li>fake grant, loan or government benefit offers;</li>
                  <li>fake celebrity endorsements;</li>
                  <li>fake testimonials or fabricated reviews;</li>
                  <li>fake scarcity, urgency or discount claims;</li>
                  <li>phishing;</li>
                  <li>impersonation;</li>
                  <li>social engineering;</li>
                  <li>identity theft;</li>
                  <li>refund scams;</li>
                  <li>subscription traps;</li>
                  <li>hidden recurring billing;</li>
                  <li>misleading free trial offers;</li>
                  <li>fake customer support services;</li>
                  <li>tech support scams;</li>
                  <li>romance scams;</li>
                  <li>crypto scams;</li>
                  <li>financial recovery scams;</li>
                  <li>lead generation for deceptive or unlawful offers;</li>
                  <li>any activity designed to mislead users into paying money, providing personal data or taking action under false pretences.</li>
                </ul>
                <p>You must clearly and accurately disclose who you are, what you offer, the price, material conditions, risks, cancellation terms, refund terms and any recurring billing terms.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Illegal Activity</h2>
                <p>You must not use Ads-Wall for any activity that is illegal in any jurisdiction connected to your business, advertising, customers, merchants, payment activity or transaction flow.</p>
                <p>Illegal activity includes, without limitation:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>money laundering;</li>
                  <li>terrorist financing;</li>
                  <li>sanctions evasion;</li>
                  <li>bribery or corruption;</li>
                  <li>tax evasion;</li>
                  <li>trafficking;</li>
                  <li>exploitation;</li>
                  <li>fraud;</li>
                  <li>cybercrime;</li>
                  <li>sale of illegal goods or services;</li>
                  <li>unauthorised regulated services;</li>
                  <li>illegal gambling;</li>
                  <li>illegal financial services;</li>
                  <li>illegal healthcare or pharmaceutical activity;</li>
                  <li>illegal political advertising;</li>
                  <li>intellectual property infringement;</li>
                  <li>unlawful data collection or misuse;</li>
                  <li>any activity prohibited by applicable law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Sanctions and Restricted Jurisdictions</h2>
                <p>You must not use Ads-Wall directly or indirectly in connection with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>sanctioned persons;</li>
                  <li>sanctioned entities;</li>
                  <li>sanctioned jurisdictions;</li>
                  <li>embargoed territories;</li>
                  <li>blocked persons;</li>
                  <li>asset-frozen persons;</li>
                  <li>politically exposed persons where prohibited or not approved;</li>
                  <li>companies owned or controlled by sanctioned persons;</li>
                  <li>transactions intended to evade sanctions;</li>
                  <li>goods, services or payments prohibited by sanctions laws.</li>
                </ul>
                <p>You must not use Ads-Wall to advertise to, receive funds from, pay, support, benefit or transact with any person, entity, country or territory that is restricted by applicable sanctions, export control or financial crime laws.</p>
                <p>Ads-Wall may block, freeze, restrict, report or terminate any Account, Balance, Card or transaction connected to sanctions risk.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Payment Abuse and Card Misuse</h2>
                <p>You must not misuse Ads-Wall payment features, Balance, top-ups or Virtual Cards.</p>
                <p>Prohibited payment activity includes, without limitation:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>using stolen cards;</li>
                  <li>using unauthorised cards;</li>
                  <li>using third-party cards without approval;</li>
                  <li>using compromised payment credentials;</li>
                  <li>using cards obtained by fraud;</li>
                  <li>using anonymous prepaid cards where not approved;</li>
                  <li>using Cards for personal spending;</li>
                  <li>using Cards for cash withdrawals;</li>
                  <li>using Cards for peer-to-peer transfers;</li>
                  <li>using Cards for money remittance;</li>
                  <li>using Cards to fund wallets, exchanges or stored value accounts without approval;</li>
                  <li>using Cards to hide the true source of funds;</li>
                  <li>excessive failed payment attempts;</li>
                  <li>chargeback abuse;</li>
                  <li>refund abuse;</li>
                  <li>artificial transaction activity;</li>
                  <li>transaction laundering;</li>
                  <li>payment splitting to avoid limits;</li>
                  <li>using multiple Accounts to bypass limits;</li>
                  <li>selling, renting, leasing or transferring Cards or Account access.</li>
                </ul>
                <p>Ads-Wall may require proof that any top-up card belongs to you, your business or an authorised company representative.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. Prohibited Products and Services</h2>
                <p>You must not use Ads-Wall to advertise, promote, sell, facilitate, fund or support any prohibited products or services.</p>
                <p>Prohibited products and services include, without limitation:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>counterfeit goods;</li>
                  <li>fake branded products;</li>
                  <li>stolen goods;</li>
                  <li>illegal drugs;</li>
                  <li>controlled substances;</li>
                  <li>drug paraphernalia;</li>
                  <li>weapons;</li>
                  <li>firearms;</li>
                  <li>ammunition;</li>
                  <li>explosives;</li>
                  <li>restricted military goods;</li>
                  <li>illegal surveillance tools;</li>
                  <li>hacking tools;</li>
                  <li>malware;</li>
                  <li>ransomware;</li>
                  <li>phishing kits;</li>
                  <li>fake documents;</li>
                  <li>fake IDs;</li>
                  <li>fake diplomas;</li>
                  <li>fake certificates;</li>
                  <li>fake medical documents;</li>
                  <li>unauthorised financial services;</li>
                  <li>unauthorised investment products;</li>
                  <li>illegal gambling;</li>
                  <li>unlicensed betting;</li>
                  <li>unlicensed lotteries;</li>
                  <li>illegal adult services;</li>
                  <li>escort services;</li>
                  <li>human exploitation;</li>
                  <li>illegal healthcare products;</li>
                  <li>prescription medicines without required authorisation;</li>
                  <li>unsafe supplements;</li>
                  <li>miracle cures;</li>
                  <li>products making false health claims;</li>
                  <li>products or services that promote hate, violence, exploitation or abuse;</li>
                  <li>any other product or service prohibited by law, advertising platforms, card schemes, payment processors, banks or Authorised Partners.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. Restricted High-Risk Activities</h2>
                <p>Some business categories may be restricted and require prior written approval from Ads-Wall.</p>
                <p>Restricted high-risk activities may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>financial products or services;</li>
                  <li>cryptocurrency-related products or services;</li>
                  <li>investment education;</li>
                  <li>trading platforms;</li>
                  <li>credit, loan or debt services;</li>
                  <li>insurance;</li>
                  <li>gambling or betting;</li>
                  <li>gaming with prizes;</li>
                  <li>alcohol;</li>
                  <li>tobacco or nicotine-related products;</li>
                  <li>healthcare products or services;</li>
                  <li>supplements;</li>
                  <li>weight loss products;</li>
                  <li>dating or matchmaking services;</li>
                  <li>subscription businesses;</li>
                  <li>lead generation;</li>
                  <li>affiliate marketing;</li>
                  <li>adult content;</li>
                  <li>political advertising;</li>
                  <li>issue-based advertising;</li>
                  <li>fundraising;</li>
                  <li>legal services;</li>
                  <li>debt collection;</li>
                  <li>high-risk e-commerce;</li>
                  <li>travel services;</li>
                  <li>ticketing;</li>
                  <li>marketplaces;</li>
                  <li>other categories considered high-risk by Ads-Wall or its Authorised Partners.</li>
                </ul>
                <p>Approval is not guaranteed.</p>
                <p>Even if Ads-Wall approves a restricted category, you remain responsible for complying with all applicable laws, licences, advertising platform policies, card scheme rules and partner requirements.</p>
                <p>Ads-Wall may withdraw approval at any time.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. Financial, Investment and Crypto Advertising</h2>
                <p>You must not use Ads-Wall to advertise or promote financial, investment, crypto, lending, trading or similar products unless you have obtained all required licences, registrations, approvals and platform certifications.</p>
                <p>Prohibited or restricted activity includes, without limitation:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>fake investment opportunities;</li>
                  <li>guaranteed profit claims;</li>
                  <li>unrealistic earnings claims;</li>
                  <li>high-pressure investment offers;</li>
                  <li>unauthorised financial promotions;</li>
                  <li>unauthorised lending;</li>
                  <li>unauthorised credit repair;</li>
                  <li>debt relief scams;</li>
                  <li>binary options;</li>
                  <li>high-risk trading schemes;</li>
                  <li>crypto scams;</li>
                  <li>unregistered token sales;</li>
                  <li>misleading trading education;</li>
                  <li>fake brokerages;</li>
                  <li>recovery room scams;</li>
                  <li>celebrity endorsement scams;</li>
                  <li>financial lead generation that violates applicable law or platform rules.</li>
                </ul>
                <p>You must not use Ads-Wall to promote any regulated financial product or service unless you are legally authorised to do so in every target jurisdiction and comply with all required disclosures.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. Gambling, Betting and Games of Chance</h2>
                <p>You must not use Ads-Wall for gambling, betting, casino, lottery, games of chance or similar activity unless expressly approved in writing by Ads-Wall and fully licensed in all relevant jurisdictions.</p>
                <p>Restricted or prohibited activity includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>online casinos;</li>
                  <li>sports betting;</li>
                  <li>lotteries;</li>
                  <li>raffles;</li>
                  <li>prize draws requiring payment;</li>
                  <li>fantasy sports with monetary prizes;</li>
                  <li>gambling affiliate marketing;</li>
                  <li>gambling lead generation;</li>
                  <li>unlicensed betting operators;</li>
                  <li>promotion to prohibited jurisdictions;</li>
                  <li>targeting minors or vulnerable persons.</li>
                </ul>
                <p>Ads-Wall may refuse or terminate any gambling-related activity even where the activity is legal in some jurisdictions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Healthcare, Medicines and Supplements</h2>
                <p>You must not use Ads-Wall to promote healthcare, medical, pharmaceutical, supplement or wellness products in a misleading, unsafe or unlawful way.</p>
                <p>Prohibited or restricted activity includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>prescription medicines without proper authorisation;</li>
                  <li>illegal online pharmacies;</li>
                  <li>fake medical products;</li>
                  <li>unapproved medical devices;</li>
                  <li>miracle cures;</li>
                  <li>false disease-treatment claims;</li>
                  <li>unsafe supplements;</li>
                  <li>misleading before-and-after claims;</li>
                  <li>unrealistic weight loss claims;</li>
                  <li>products targeting vulnerable persons;</li>
                  <li>misuse of medical professional imagery or credentials;</li>
                  <li>health-related lead generation that violates applicable law or platform rules.</li>
                </ul>
                <p>You must hold all required licences, approvals and certifications before advertising regulated healthcare products or services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. Adult, Sexual and Exploitative Content</h2>
                <p>You must not use Ads-Wall for illegal sexual content, exploitation, escort services, sex trafficking, non-consensual content, sexual services or adult services prohibited by applicable law, advertising platforms, card schemes or Authorised Partners.</p>
                <p>Adult-related content may be restricted or prohibited even where legal in a particular jurisdiction.</p>
                <p>Ads-Wall may refuse or terminate adult-related activity at its sole discretion.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Political, Election and Social Issue Advertising</h2>
                <p>Political, election-related and social issue advertising is restricted.</p>
                <p>You must not use Ads-Wall for political or issue-based advertising unless:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the activity is lawful in every target jurisdiction;</li>
                  <li>you have completed all required advertiser verification;</li>
                  <li>you provide all required disclosures;</li>
                  <li>you comply with election silence periods and campaign finance rules;</li>
                  <li>you comply with advertising platform policies;</li>
                  <li>Ads-Wall has approved the activity where required.</li>
                </ul>
                <p>Ads-Wall may prohibit political or issue-based advertising even where it is lawful.</p>
                <p>You must not use Ads-Wall for misinformation, voter suppression, fake political endorsements, foreign interference, illegal campaign activity or undisclosed political influence operations.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Misleading Claims and Landing Pages</h2>
                <p>You must not use Ads-Wall to fund ads or campaigns that contain misleading, deceptive, incomplete or unclear claims.</p>
                <p>Your advertisements and landing pages must accurately represent:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your business identity;</li>
                  <li>the product or service offered;</li>
                  <li>pricing;</li>
                  <li>fees;</li>
                  <li>subscription terms;</li>
                  <li>refund terms;</li>
                  <li>cancellation terms;</li>
                  <li>risks;</li>
                  <li>eligibility conditions;</li>
                  <li>delivery terms;</li>
                  <li>contact details;</li>
                  <li>licensing status where applicable;</li>
                  <li>material limitations or conditions.</li>
                </ul>
                <p>You must not hide material information, use fake urgency, use fake endorsements, impersonate another business, falsely claim affiliation with a brand or platform, or create landing pages that mislead users.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. Cloaking, Redirects and Evasive Content</h2>
                <p>You must not use cloaking, evasive content or misleading redirects.</p>
                <p>Prohibited activity includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>showing different content to advertising platform reviewers than to normal users;</li>
                  <li>using IP, device, location or user-agent detection to hide prohibited content;</li>
                  <li>redirecting reviewers to compliant pages and users to non-compliant pages;</li>
                  <li>changing landing page content after ad approval to prohibited content;</li>
                  <li>using rotating domains to avoid enforcement;</li>
                  <li>using mirror sites to evade suspensions;</li>
                  <li>manipulating URLs, domains, subdomains, tracking links or creatives to avoid detection;</li>
                  <li>using bridge pages to hide the final destination;</li>
                  <li>hiding pricing, subscription terms, ownership or risk disclosures.</li>
                </ul>
                <p>Ads-Wall treats cloaking and evasive advertising as serious violations.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Intellectual Property and Brand Abuse</h2>
                <p>You must not use Ads-Wall to promote or facilitate infringement of intellectual property rights.</p>
                <p>Prohibited activity includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>counterfeit goods;</li>
                  <li>unauthorised use of trademarks;</li>
                  <li>fake branded products;</li>
                  <li>misleading use of logos;</li>
                  <li>impersonation of brands;</li>
                  <li>unauthorised resale where prohibited;</li>
                  <li>copyright infringement;</li>
                  <li>piracy;</li>
                  <li>sale of leaked content;</li>
                  <li>fake software licences;</li>
                  <li>fake certificates;</li>
                  <li>brand phishing;</li>
                  <li>misleading claims of partnership or authorisation.</li>
                </ul>
                <p>You are responsible for ensuring that your ads, landing pages, products and services do not infringe third-party rights.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">21. Data, Privacy and Tracking</h2>
                <p>You must not use Ads-Wall in connection with unlawful data collection, misuse of personal data or privacy-invasive advertising.</p>
                <p>Prohibited activity includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>collecting personal data without a lawful basis;</li>
                  <li>failing to provide required privacy notices;</li>
                  <li>collecting sensitive data without proper consent or legal authority;</li>
                  <li>selling personal data unlawfully;</li>
                  <li>using tracking pixels unlawfully;</li>
                  <li>using cookies without required consent;</li>
                  <li>misleading users about data collection;</li>
                  <li>collecting payment data insecurely;</li>
                  <li>phishing for login credentials;</li>
                  <li>harvesting emails, phone numbers or personal data;</li>
                  <li>using data obtained from breaches, scraping or unlawful sources;</li>
                  <li>targeting users in a way prohibited by law or advertising platform rules.</li>
                </ul>
                <p>You are responsible for complying with all applicable data protection, privacy, ePrivacy, cookie, marketing and advertising laws.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">22. Minors and Vulnerable Users</h2>
                <p>You must not use Ads-Wall to target, exploit or mislead minors or vulnerable users.</p>
                <p>Prohibited activity includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>advertising age-restricted products to minors;</li>
                  <li>using manipulative claims targeting vulnerable persons;</li>
                  <li>promoting unsafe products to minors;</li>
                  <li>collecting data from minors unlawfully;</li>
                  <li>targeting minors with prohibited financial, gambling, adult, health or high-risk products;</li>
                  <li>exploiting illness, financial distress, addiction, grief, insecurity or lack of experience.</li>
                </ul>
                <p>Ads-Wall may treat any activity involving minors or vulnerable users as high risk.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">23. Malware, Cyber Abuse and Technical Misuse</h2>
                <p>You must not use Ads-Wall for cyber abuse, malware, unauthorised access or technical misuse.</p>
                <p>Prohibited activity includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>malware distribution;</li>
                  <li>ransomware;</li>
                  <li>spyware;</li>
                  <li>credential theft;</li>
                  <li>phishing;</li>
                  <li>botnets;</li>
                  <li>DDoS services;</li>
                  <li>hacking tools;</li>
                  <li>stolen accounts;</li>
                  <li>account takeover services;</li>
                  <li>exploit kits;</li>
                  <li>fake software updates;</li>
                  <li>malicious browser extensions;</li>
                  <li>unauthorised scraping;</li>
                  <li>evasion of security controls;</li>
                  <li>traffic manipulation;</li>
                  <li>bot traffic;</li>
                  <li>click fraud;</li>
                  <li>ad fraud;</li>
                  <li>fake installs or fake engagement.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">24. Traffic Manipulation and Ad Fraud</h2>
                <p>You must not use Ads-Wall to support ad fraud, traffic manipulation or artificial engagement.</p>
                <p>Prohibited activity includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>fake clicks;</li>
                  <li>bot traffic;</li>
                  <li>fake impressions;</li>
                  <li>fake conversions;</li>
                  <li>click farms;</li>
                  <li>incentivised clicks where prohibited;</li>
                  <li>misleading traffic sources;</li>
                  <li>pixel stuffing;</li>
                  <li>domain spoofing;</li>
                  <li>ad stacking;</li>
                  <li>fake app installs;</li>
                  <li>fake leads;</li>
                  <li>cookie stuffing;</li>
                  <li>attribution fraud;</li>
                  <li>affiliate fraud;</li>
                  <li>artificially inflating analytics, rankings or traffic metrics;</li>
                  <li>using deceptive methods to make advertising campaigns, websites or businesses appear more legitimate than they are.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">25. Resale, Sub-Licensing and Third-Party Use</h2>
                <p>You must not resell, rent, lease, sublicense, share or otherwise provide Ads-Wall Accounts, Cards, Balance, API access or Services to third parties without Ads-Wall&apos;s prior written approval.</p>
                <p>You must not use Ads-Wall as a payment infrastructure provider for undisclosed clients, third-party advertisers, banned advertisers, shell companies, nominees or unknown beneficial owners.</p>
                <p>If you are an agency or manage advertising spend for clients, you must ensure that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your clients are lawful and legitimate;</li>
                  <li>you have authority to act for them;</li>
                  <li>you disclose client activity when requested;</li>
                  <li>client activity complies with this Policy;</li>
                  <li>you do not use Ads-Wall to hide the true advertiser or beneficiary.</li>
                </ul>
                <p>Ads-Wall may require information about your clients, campaigns, websites, traffic sources and beneficial owners.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">26. Account Integrity</h2>
                <p>You must provide accurate, complete and up-to-date information to Ads-Wall.</p>
                <p>You must not:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>create fake Accounts;</li>
                  <li>create duplicate Accounts to bypass limits;</li>
                  <li>use false company information;</li>
                  <li>use false beneficial owner information;</li>
                  <li>use nominee directors or shareholders to hide control;</li>
                  <li>submit fake documents;</li>
                  <li>submit altered documents;</li>
                  <li>use virtual office information in a misleading way;</li>
                  <li>hide the true business model;</li>
                  <li>hide the true advertiser;</li>
                  <li>hide the true source of funds;</li>
                  <li>hide the true destination of advertising traffic.</li>
                </ul>
                <p>We may suspend or terminate any Account where information is false, misleading, incomplete or unverifiable.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">27. Monitoring and Review</h2>
                <p>Ads-Wall and/or its Authorised Partners may monitor Account activity, top-ups, Balance movements, Card transactions, merchants, advertising platforms, websites, landing pages, business activity, traffic patterns and user behaviour for compliance, risk, fraud prevention, sanctions, AML, operational and security purposes.</p>
                <p>We may review:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your business model;</li>
                  <li>websites and landing pages;</li>
                  <li>ad accounts;</li>
                  <li>advertising creatives;</li>
                  <li>merchants and platforms paid with Cards;</li>
                  <li>transaction history;</li>
                  <li>top-up sources;</li>
                  <li>refund and chargeback activity;</li>
                  <li>team member activity;</li>
                  <li>API usage;</li>
                  <li>device and access patterns;</li>
                  <li>publicly available information;</li>
                  <li>third-party risk signals.</li>
                </ul>
                <p>We are not required to disclose our monitoring methods, risk rules, thresholds or detection systems.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">28. Information Requests</h2>
                <p>Ads-Wall may request information or documents at any time to confirm compliance with this Policy.</p>
                <p>Requested information may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>company registration documents;</li>
                  <li>proof of identity;</li>
                  <li>proof of address;</li>
                  <li>ownership and control information;</li>
                  <li>source of funds;</li>
                  <li>source of wealth;</li>
                  <li>payment card ownership evidence;</li>
                  <li>advertising account screenshots;</li>
                  <li>campaign screenshots;</li>
                  <li>landing page URLs;</li>
                  <li>product or service descriptions;</li>
                  <li>licences or regulatory approvals;</li>
                  <li>contracts or invoices;</li>
                  <li>client information for agencies;</li>
                  <li>refund or chargeback explanations;</li>
                  <li>any other information reasonably required for compliance or risk review.</li>
                </ul>
                <p>Failure to provide requested information may result in Account suspension, Card blocking, Balance holds, refund delays or termination.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">29. Reporting Violations</h2>
                <p>If you become aware of any actual or suspected violation of this Policy, you must notify Ads-Wall immediately at: Email: info@ads-wall.com</p>
                <p>You must also notify Ads-Wall immediately if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your ad account is suspended;</li>
                  <li>your business becomes subject to regulatory investigation;</li>
                  <li>your payment method is compromised;</li>
                  <li>your Account is accessed without authorisation;</li>
                  <li>your Card details are leaked;</li>
                  <li>your campaigns are used for prohibited activity;</li>
                  <li>your client activity creates compliance risk;</li>
                  <li>you receive legal, regulatory or enforcement notices related to activity funded through Ads-Wall.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">30. Enforcement Actions</h2>
                <p>If Ads-Wall believes that you have violated this Policy, or that your activity creates legal, regulatory, payment, fraud, sanctions, advertising platform, card scheme, partner or reputational risk, Ads-Wall may take enforcement action.</p>
                <p>Enforcement actions may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>warning you;</li>
                  <li>requesting information;</li>
                  <li>requiring remediation;</li>
                  <li>rejecting a top-up;</li>
                  <li>delaying a top-up;</li>
                  <li>freezing Balance;</li>
                  <li>blocking Cards;</li>
                  <li>reducing limits;</li>
                  <li>restricting Account features;</li>
                  <li>suspending your Account;</li>
                  <li>terminating your Account;</li>
                  <li>refusing refunds;</li>
                  <li>delaying refunds;</li>
                  <li>reversing transactions where possible;</li>
                  <li>reporting activity to Authorised Partners;</li>
                  <li>reporting activity to banks, processors or card schemes;</li>
                  <li>reporting activity to advertising platforms;</li>
                  <li>reporting activity to regulators or law enforcement;</li>
                  <li>taking legal action;</li>
                  <li>recovering losses, fees, chargebacks, fines, penalties and costs.</li>
                </ul>
                <p>Ads-Wall may take enforcement action without prior notice where necessary for security, compliance, fraud prevention, sanctions, legal, regulatory, card scheme, partner or operational reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">31. Holds and Fund Restrictions</h2>
                <p>Ads-Wall and/or its Authorised Partners may hold, freeze, restrict, delay or block access to Balance, refunds or Cards where activity is suspected to violate this Policy.</p>
                <p>Funds may be held while Ads-Wall or its Authorised Partners investigate:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>fraud;</li>
                  <li>chargebacks;</li>
                  <li>unauthorised payments;</li>
                  <li>sanctions risk;</li>
                  <li>AML concerns;</li>
                  <li>suspicious transactions;</li>
                  <li>prohibited advertising activity;</li>
                  <li>illegal products or services;</li>
                  <li>platform circumvention;</li>
                  <li>false information;</li>
                  <li>negative Balance;</li>
                  <li>partner or regulator requests.</li>
                </ul>
                <p>Ads-Wall is not liable for losses caused by holds or restrictions applied for compliance, fraud prevention, risk, partner, legal or regulatory reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">32. No Obligation to Support High-Risk Activity</h2>
                <p>Ads-Wall may refuse to support any business, category, merchant, advertising platform, campaign, jurisdiction, product, service or transaction type at its sole discretion.</p>
                <p>Ads-Wall may refuse activity even if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>it is legal in a particular jurisdiction;</li>
                  <li>it is accepted by another provider;</li>
                  <li>it was previously approved by Ads-Wall;</li>
                  <li>it was previously accepted by an advertising platform;</li>
                  <li>it does not appear on a public prohibited list.</li>
                </ul>
                <p>Risk decisions may be based on internal policies, Authorised Partner requirements, card scheme rules, payment processor rules, regulatory expectations, fraud trends, chargeback risk or reputational concerns.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">33. Appeals</h2>
                <p>If your Account, Card, Balance, top-up or refund is restricted because of a suspected Policy violation, you may contact Ads-Wall at: Email: info@ads-wall.com</p>
                <p>You should provide:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Account details;</li>
                  <li>explanation of the activity;</li>
                  <li>supporting documents;</li>
                  <li>relevant advertising account information;</li>
                  <li>relevant landing page URLs;</li>
                  <li>proof of licences or approvals where applicable;</li>
                  <li>evidence showing that the activity complies with this Policy.</li>
                </ul>
                <p>Ads-Wall may review the information but is not required to reinstate access.</p>
                <p>Some decisions may be final where required by law, regulation, card scheme rules, Authorised Partner requirements, payment processor rules, bank requirements, sanctions rules or law enforcement instructions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">34. User Responsibility</h2>
                <p>You are responsible for all activity conducted through your Account, Cards, Balance, API keys, team members, employees, contractors, agents, clients and authorised users.</p>
                <p>You are responsible for ensuring that your business, clients, advertising activity, websites, products, services, traffic sources, payment methods and users comply with this Policy.</p>
                <p>You are responsible for any losses, fees, chargebacks, penalties, claims, damages, fines, investigations, partner costs or legal costs arising from your violation of this Policy.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">35. Changes to This Policy</h2>
                <p>Ads-Wall may update this Policy from time to time.</p>
                <p>Where changes are material, Ads-Wall may notify you by email, through the Platform or by other reasonable means.</p>
                <p>The updated Policy will apply from the date stated in the updated version.</p>
                <p>If you continue using the Platform after the updated Policy takes effect, you will be deemed to have accepted it.</p>
                <p>If you do not agree to the updated Policy, you must stop using Ads-Wall and may request Account closure.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">36. Contact</h2>
                <p>If you have questions about this Acceptable Use Policy, contact:</p>
                <p>TIWALLET LTD<br />Company number: 17179279<br />Registered office: Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
