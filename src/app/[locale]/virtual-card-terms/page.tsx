import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { GradientText } from "@/components/ui/GradientText";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: "Virtual Card Terms — AdsWall",
  };
}

export default async function VirtualCardTermsPage({
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
              <GradientText>Virtual Card Terms</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">Last Updated: 09.06.2026</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <p>These Virtual Card Terms (&quot;Card Terms&quot;) govern your access to and use of virtual payment cards made available through the Ads-Wall platform.</p>
              <p>These Card Terms form part of and are incorporated into the Ads-Wall Terms &amp; Conditions. By requesting, creating, activating, funding, managing or using any Virtual Card through Ads-Wall, you agree to these Card Terms.</p>
              <p>Ads-Wall is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH.</p>
              <p>Contact details:<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              <p>If you do not agree to these Card Terms, you must not request, create or use any Virtual Card.</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Relationship With Other Terms</h2>
                <p>These Card Terms should be read together with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ads-Wall Terms &amp; Conditions;</li>
                  <li>Payment &amp; Top-Up Policy;</li>
                  <li>Refund &amp; Cancellation Policy;</li>
                  <li>Acceptable Use Policy;</li>
                  <li>KYC, AML &amp; Sanctions Policy;</li>
                  <li>Privacy Policy;</li>
                  <li>Cookie Policy;</li>
                  <li>any applicable terms, rules, limits or requirements of our Authorised Partners.</li>
                </ul>
                <p>If there is any conflict between these Card Terms and the Terms &amp; Conditions, these Card Terms will apply to the use of Virtual Cards, unless the Terms &amp; Conditions expressly state otherwise.</p>
                <p>If there is any conflict between these Card Terms and mandatory rules of an Authorised Partner, card scheme, payment processor, regulator or applicable law, those mandatory rules will apply.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Important Information About Card Issuing</h2>
                <p>Ads-Wall is not a bank, credit institution, card issuer, electronic money institution or payment institution.</p>
                <p>Ads-Wall does not itself issue payment cards, hold customer funds as a bank deposit, provide regulated payment services, issue electronic money or operate a regulated payment account in its own capacity.</p>
                <p>Virtual Cards, card accounts, payment processing, transaction authorisation, settlement, safeguarding of funds, card scheme access, chargeback handling, fraud monitoring and any regulated financial services are provided by authorised third-party banking, card issuing, payment processing and compliance partners (&quot;Authorised Partners&quot;).</p>
                <p>By using any Virtual Card, you acknowledge and agree that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ads-Wall operates as a technology and service platform;</li>
                  <li>Virtual Cards are issued and processed through Authorised Partners;</li>
                  <li>your access to Cards may depend on partner approval, compliance checks, risk controls and card scheme rules;</li>
                  <li>Ads-Wall may be required to follow instructions or restrictions imposed by Authorised Partners, banks, payment processors, card schemes, regulators or law enforcement authorities;</li>
                  <li>Ads-Wall does not guarantee that any Card will be issued, remain active, be accepted by a merchant or be accepted by any advertising platform.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Business Use Only</h2>
                <p>Virtual Cards are made available for legitimate business use only.</p>
                <p>Cards may be used only by approved business users for permitted advertising and business-related online spending.</p>
                <p>You must not use Cards for personal, household or consumer purposes.</p>
                <p>By requesting or using a Card, you confirm that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>you are acting in the course of business;</li>
                  <li>you are authorised to use the Ads-Wall Account;</li>
                  <li>you are authorised to request and use Cards on behalf of the relevant business;</li>
                  <li>all Card activity will comply with these Card Terms and all applicable laws;</li>
                  <li>all Card activity will relate to legitimate business purposes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Card Availability</h2>
                <p>Cards may be available in selected currencies, including USD, EUR and GBP, subject to approval, technical availability, partner support, compliance checks, limits and risk controls.</p>
                <p>The availability of any Card feature may vary depending on:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your jurisdiction;</li>
                  <li>your business type;</li>
                  <li>your verification status;</li>
                  <li>your transaction history;</li>
                  <li>your risk profile;</li>
                  <li>your Account status;</li>
                  <li>the selected currency;</li>
                  <li>the intended merchant or advertising platform;</li>
                  <li>Authorised Partner requirements;</li>
                  <li>card scheme rules;</li>
                  <li>legal, regulatory or sanctions restrictions.</li>
                </ul>
                <p>We may refuse to issue a Card, delay Card creation, restrict Card features, reduce limits, suspend Cards or stop offering Cards at any time.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Creating and Managing Cards</h2>
                <p>Subject to approval and availability, the Platform may allow you to create, name, manage, freeze, unfreeze, close or assign Virtual Cards.</p>
                <p>You may be able to use Cards for specific purposes, campaigns, advertising accounts, merchants, users, teams or spending categories.</p>
                <p>You are responsible for ensuring that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>each Card is used only for its intended and permitted purpose;</li>
                  <li>Card details are kept secure;</li>
                  <li>Cards are not shared with unauthorised persons;</li>
                  <li>Cards are not sold, rented, leased, transferred or made available to third parties;</li>
                  <li>Card activity is monitored regularly;</li>
                  <li>Cards are closed or frozen when no longer required;</li>
                  <li>team members use Cards only within their authority.</li>
                </ul>
                <p>We may restrict the number of Cards you can create or use.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Permitted Card Use</h2>
                <p>Unless otherwise approved in writing by Ads-Wall, Virtual Cards may be used only for legitimate business advertising and online business expenses.</p>
                <p>Permitted use may include payments to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Ads;</li>
                  <li>Meta Ads;</li>
                  <li>Microsoft Ads;</li>
                  <li>other approved advertising platforms;</li>
                  <li>approved digital marketing tools;</li>
                  <li>approved business software or online services;</li>
                  <li>other permitted merchants approved by Ads-Wall or its Authorised Partners.</li>
                </ul>
                <p>Card acceptance is never guaranteed.</p>
                <p>Each merchant, advertising platform, bank, processor, card scheme and Authorised Partner may apply its own acceptance rules, verification rules, billing rules, risk controls and restrictions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Advertising Platform Use</h2>
                <p>Cards may be used for advertising spend only where your advertising activity is lawful, truthful, transparent and compliant with the relevant advertising platform&apos;s rules.</p>
                <p>You are solely responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>complying with Google Ads policies;</li>
                  <li>complying with Meta Ads policies;</li>
                  <li>complying with Microsoft Ads policies;</li>
                  <li>complying with the rules of any other advertising platform you use;</li>
                  <li>ensuring that your ad accounts are legitimate and authorised;</li>
                  <li>ensuring that your advertisements, landing pages, products, services, claims and targeting are lawful and compliant;</li>
                  <li>maintaining your advertising accounts in good standing;</li>
                  <li>paying all advertising charges properly incurred through your Cards.</li>
                </ul>
                <p>Ads-Wall does not guarantee:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>approval of any advertising account;</li>
                  <li>approval of any advertisement;</li>
                  <li>continuation of any advertising campaign;</li>
                  <li>acceptance of any Card by any advertising platform;</li>
                  <li>avoidance of advertising account review, restriction, suspension or termination;</li>
                  <li>recovery of any suspended ad account;</li>
                  <li>improved advertising performance;</li>
                  <li>any return on advertising spend.</li>
                </ul>
                <p>You must not use Cards to bypass, avoid or circumvent advertising platform rules, suspensions, bans, billing restrictions, identity checks, advertiser verification, account reviews or enforcement actions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Prohibited Card Use</h2>
                <p>You must not use, attempt to use or allow anyone else to use any Card for prohibited, unlawful, deceptive, harmful, restricted or high-risk activity.</p>
                <p>Prohibited Card use includes, without limitation:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>personal, household or consumer spending;</li>
                  <li>cash withdrawals or ATM use;</li>
                  <li>money transfers, peer-to-peer payments or remittance;</li>
                  <li>funding wallets, exchanges or stored value accounts without approval;</li>
                  <li>gambling, betting, casino, lottery or gaming activity without approval;</li>
                  <li>adult services, escort services or illegal sexual content;</li>
                  <li>illegal drugs, controlled substances or drug paraphernalia;</li>
                  <li>weapons, explosives or restricted military goods;</li>
                  <li>counterfeit goods or infringing products;</li>
                  <li>fake documents or identity services;</li>
                  <li>phishing, malware, spyware, hacking tools or unauthorised access services;</li>
                  <li>scams, fake offers or deceptive business practices;</li>
                  <li>high-risk investment, trading, crypto or get-rich-quick schemes;</li>
                  <li>unauthorised regulated financial services;</li>
                  <li>products or services that require a licence which you do not hold;</li>
                  <li>political advertising without required authorisation, disclosure or verification;</li>
                  <li>sanctions evasion or activity involving sanctioned persons, entities or jurisdictions;</li>
                  <li>advertising platform circumvention, including multiple account abuse or re-entry after suspension;</li>
                  <li>cloaking, misleading redirects, bridge pages or hidden landing pages;</li>
                  <li>chargeback abuse, refund abuse or payment fraud;</li>
                  <li>any use prohibited by Ads-Wall, an Authorised Partner, a card scheme, a payment processor, a bank, a merchant or applicable law.</li>
                </ul>
                <p>We may determine, in our sole discretion, whether Card activity is prohibited or high risk.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Card Funding and Balance</h2>
                <p>Cards are funded from your available Balance or from another funding arrangement made available through the Platform.</p>
                <p>A Card transaction may be declined if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your available Balance is insufficient;</li>
                  <li>the Card limit has been reached;</li>
                  <li>the Account is restricted;</li>
                  <li>the Card is frozen, blocked, expired or closed;</li>
                  <li>the transaction exceeds applicable limits;</li>
                  <li>the transaction is outside permitted merchant categories;</li>
                  <li>the transaction fails risk checks;</li>
                  <li>the transaction fails authentication;</li>
                  <li>the transaction is rejected by a merchant, advertising platform, issuer, processor, card scheme or Authorised Partner;</li>
                  <li>the transaction is prohibited under these Card Terms.</li>
                </ul>
                <p>Your displayed Balance may not always reflect pending transactions, authorisations, reversals, refunds, chargebacks, holds, fees, foreign exchange adjustments or delayed settlement.</p>
                <p>You must monitor your Balance and Card activity carefully.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Card Limits</h2>
                <p>Ads-Wall and/or its Authorised Partners may apply limits to Cards, Accounts, top-ups, transactions, merchants, currencies, spend categories, teams or users.</p>
                <p>Limits may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>per-transaction limits;</li>
                  <li>daily limits;</li>
                  <li>weekly limits;</li>
                  <li>monthly limits;</li>
                  <li>lifetime limits;</li>
                  <li>merchant limits;</li>
                  <li>advertising platform limits;</li>
                  <li>currency limits;</li>
                  <li>card creation limits;</li>
                  <li>account-level limits;</li>
                  <li>team member limits;</li>
                  <li>risk-based limits.</li>
                </ul>
                <p>Limits may be changed, reduced, increased, suspended or removed at any time.</p>
                <p>We are not responsible for any loss, declined advertising payment, campaign disruption or business impact caused by limits.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. Authorisations, Pending Transactions and Holds</h2>
                <p>When you use a Card, the merchant may request an authorisation for a transaction amount.</p>
                <p>The authorised amount may be held against your available Balance even before the transaction is finally settled.</p>
                <p>Some merchants may authorise an amount that is higher than the final charge. Some merchants may place temporary holds, recurring authorisations or delayed charges.</p>
                <p>Pending authorisations may reduce your available Balance until they are settled, reversed or released.</p>
                <p>Ads-Wall does not control the timing of merchant authorisations, reversals or settlement.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. Recurring Payments</h2>
                <p>Some merchants or advertising platforms may charge Cards on a recurring, automatic or delayed basis.</p>
                <p>You are responsible for monitoring all recurring payments linked to your Cards.</p>
                <p>Closing, freezing or replacing a Card may not automatically cancel your agreement with a merchant or advertising platform.</p>
                <p>You must cancel recurring billing directly with the merchant or advertising platform where required.</p>
                <p>Ads-Wall is not responsible for recurring charges that you authorised or failed to cancel.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. Card Authentication and 3D Secure</h2>
                <p>Some Card transactions may require authentication, including 3D Secure, one-time passwords, app approval, SMS confirmation, email confirmation, device verification or other authentication methods.</p>
                <p>Authentication requirements may be determined by Ads-Wall, an Authorised Partner, the card issuer, the merchant, the payment processor, the card scheme, applicable law or risk controls.</p>
                <p>A transaction may be declined if authentication is required and:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>authentication is not completed;</li>
                  <li>authentication fails;</li>
                  <li>the authentication method is unavailable;</li>
                  <li>the user is not authorised;</li>
                  <li>the transaction appears suspicious;</li>
                  <li>the merchant or issuer rejects the transaction.</li>
                </ul>
                <p>You must ensure that all authorised users are able to complete required authentication steps where applicable.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. Declined and Failed Transactions</h2>
                <p>A Card transaction may be declined or fail for many reasons, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>insufficient Balance;</li>
                  <li>card limit reached;</li>
                  <li>incorrect card details;</li>
                  <li>expired or closed Card;</li>
                  <li>frozen or blocked Card;</li>
                  <li>failed authentication;</li>
                  <li>merchant rejection;</li>
                  <li>advertising platform rejection;</li>
                  <li>unsupported merchant category;</li>
                  <li>unsupported currency;</li>
                  <li>suspected fraud;</li>
                  <li>compliance review;</li>
                  <li>sanctions screening;</li>
                  <li>issuer controls;</li>
                  <li>processor controls;</li>
                  <li>card scheme rules;</li>
                  <li>technical error;</li>
                  <li>network outage;</li>
                  <li>breach or suspected breach of these Card Terms.</li>
                </ul>
                <p>Ads-Wall is not responsible for losses, missed advertising opportunities, campaign interruptions, ad account restrictions, ad account suspensions, declined payments, increased ad costs, lost revenue or business disruption caused by declined or failed transactions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Card Freezing, Blocking and Closure</h2>
                <p>You may be able to freeze or close Cards through the Platform.</p>
                <p>Ads-Wall and/or its Authorised Partners may freeze, block, close, restrict, suspend or terminate any Card at any time if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>we suspect fraud or unauthorised use;</li>
                  <li>we suspect prohibited activity;</li>
                  <li>we identify suspicious transaction patterns;</li>
                  <li>there is a compliance, sanctions or AML concern;</li>
                  <li>you breach these Card Terms;</li>
                  <li>your Account is suspended or terminated;</li>
                  <li>your Balance is insufficient or negative;</li>
                  <li>a chargeback or payment dispute occurs;</li>
                  <li>required by law, regulation, court order, regulator or law enforcement authority;</li>
                  <li>required or recommended by an Authorised Partner, card scheme, bank or payment processor;</li>
                  <li>the Card is no longer supported;</li>
                  <li>continued Card use creates risk for Ads-Wall or its partners.</li>
                </ul>
                <p>We may not be able to provide advance notice before freezing, blocking or closing a Card.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. Card Expiry and Replacement</h2>
                <p>Cards may have an expiry date.</p>
                <p>A Card may stop working after its expiry date or if closed, blocked, replaced or withdrawn.</p>
                <p>Ads-Wall does not guarantee automatic card renewal or replacement.</p>
                <p>If a Card is replaced, you may need to update payment details with the relevant merchant or advertising platform.</p>
                <p>Ads-Wall is not responsible for failed recurring payments, campaign disruption or service interruption caused by Card expiry, replacement, closure or withdrawal.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Unauthorised or Suspicious Card Activity</h2>
                <p>You must notify Ads-Wall immediately if you suspect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>unauthorised Card use;</li>
                  <li>stolen Card details;</li>
                  <li>compromised Account access;</li>
                  <li>unauthorised team member activity;</li>
                  <li>suspicious transactions;</li>
                  <li>phishing or social engineering;</li>
                  <li>malware or device compromise;</li>
                  <li>any other security incident.</li>
                </ul>
                <p>You must take reasonable steps to prevent further misuse, including freezing affected Cards where available, changing passwords and removing unauthorised users.</p>
                <p>You may be liable for losses caused by your negligence, misuse, breach of these Card Terms, failure to secure your Account, sharing Card details with unauthorised persons or delayed reporting of suspicious activity.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Transaction Disputes</h2>
                <p>If you believe a Card transaction is incorrect, unauthorised or disputed, you must contact Ads-Wall as soon as possible at info@ads-wall.com.</p>
                <p>You must provide:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Account details;</li>
                  <li>Card identifier where available;</li>
                  <li>transaction date;</li>
                  <li>transaction amount;</li>
                  <li>merchant name;</li>
                  <li>reason for the dispute;</li>
                  <li>supporting evidence.</li>
                </ul>
                <p>Disputes may be handled by Ads-Wall, an Authorised Partner, the card issuer, the processor, the merchant, the card scheme or other relevant parties.</p>
                <p>Dispute outcomes are not guaranteed.</p>
                <p>Time limits may apply. If you report a disputed transaction late, it may not be possible to recover the funds.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. Chargebacks</h2>
                <p>Chargebacks are subject to card scheme rules, issuer rules, processor rules, evidence requirements, time limits and partner procedures.</p>
                <p>You must cooperate with any chargeback investigation and provide requested evidence promptly.</p>
                <p>We may deduct chargeback amounts, chargeback fees, investigation costs, negative balances, penalties and related costs from your Balance or require immediate payment.</p>
                <p>If you initiate false, abusive, excessive or bad-faith chargebacks, we may suspend or terminate your Account, block Cards and refuse future Services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Refunds From Merchants</h2>
                <p>If a merchant or advertising platform issues a refund to a Card, the refund will usually be returned to the relevant Card, Account or Balance after it is received and processed.</p>
                <p>Refund timing depends on the merchant, advertising platform, acquiring bank, card scheme, issuer, processor and Authorised Partner.</p>
                <p>Ads-Wall does not control merchant refund timing.</p>
                <p>Refunds may be delayed, reduced, reversed, rejected or held where there are compliance checks, chargeback reviews, negative balances, partner restrictions, sanctions concerns or suspected prohibited activity.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">21. Negative Balance</h2>
                <p>Your Account may become negative if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>a transaction settles for more than the available Balance;</li>
                  <li>a pending authorisation changes;</li>
                  <li>a chargeback occurs;</li>
                  <li>a refund is reversed;</li>
                  <li>fees are applied;</li>
                  <li>foreign exchange adjustments occur;</li>
                  <li>a top-up is reversed;</li>
                  <li>a payment is disputed;</li>
                  <li>a transaction is processed offline or delayed;</li>
                  <li>a merchant settlement is corrected.</li>
                </ul>
                <p>You must repay any negative Balance immediately.</p>
                <p>We may recover a negative Balance by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>deducting amounts from future top-ups;</li>
                  <li>deducting amounts from other Balances;</li>
                  <li>charging your payment method where permitted;</li>
                  <li>suspending Cards;</li>
                  <li>restricting Account access;</li>
                  <li>taking collection or legal action;</li>
                  <li>offsetting refunds or returned funds.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">22. Card Details and Security</h2>
                <p>You must keep all Card details secure, including card number, expiry date, CVV/CVC, billing details, authentication methods and any other credentials.</p>
                <p>You must not:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>publish Card details;</li>
                  <li>share Card details with unauthorised persons;</li>
                  <li>store Card details insecurely;</li>
                  <li>send Card details through unsecured channels;</li>
                  <li>allow third parties to use Cards without approval;</li>
                  <li>sell, rent, lease or transfer Card access;</li>
                  <li>use Cards through compromised devices or unsafe systems.</li>
                </ul>
                <p>You are responsible for ensuring that your employees, contractors, agencies and team members follow appropriate security practices.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">23. Team Member Card Use</h2>
                <p>If you allow team members to use Cards, you are responsible for their actions.</p>
                <p>You must ensure that each team member:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>is properly authorised;</li>
                  <li>uses Cards only for permitted business purposes;</li>
                  <li>complies with these Card Terms;</li>
                  <li>keeps Card details secure;</li>
                  <li>does not use Cards for personal or prohibited activity;</li>
                  <li>reports suspicious activity immediately.</li>
                </ul>
                <p>We may restrict, suspend or remove team member access at any time for security, compliance, risk or operational reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">24. Merchant Category and Platform Restrictions</h2>
                <p>Cards may be restricted by merchant category code, merchant name, country, currency, advertising platform, transaction type, risk profile or other criteria.</p>
                <p>Some merchants, services, platforms or categories may be blocked by default.</p>
                <p>A merchant may appear to be advertising-related but still be blocked if it creates compliance, fraud, sanctions, card scheme, processor or partner risk.</p>
                <p>We are not required to disclose all internal restrictions, risk rules or merchant blocks.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">25. Sanctions and Restricted Jurisdictions</h2>
                <p>Cards must not be used in connection with sanctioned persons, sanctioned entities, sanctioned jurisdictions, prohibited countries, restricted territories or illegal cross-border activity.</p>
                <p>You must not use Cards to directly or indirectly benefit any person, entity, country, business or activity subject to sanctions, asset freezes, embargoes, export controls or similar restrictions.</p>
                <p>We may block or reject transactions involving restricted jurisdictions, high-risk countries, suspicious routing, VPN abuse, sanctioned parties or prohibited activities.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">26. No Cash, Credit or Deposit Product</h2>
                <p>Cards are not cash, credit cards, bank deposits, savings products, lending products or investment products.</p>
                <p>Cards do not provide credit unless expressly stated in writing.</p>
                <p>No interest is payable on any Balance.</p>
                <p>Funds associated with Cards are not held by Ads-Wall as a bank deposit.</p>
                <p>Any safeguarding, holding, settlement or protection of funds is handled by Authorised Partners under their own regulated arrangements, applicable laws and partner terms.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">27. No Guarantee of Advertising Results</h2>
                <p>Cards are payment tools only.</p>
                <p>Ads-Wall does not provide advertising agency services, media buying services, ad account recovery services, campaign management services or advertising performance guarantees unless expressly agreed in a separate written agreement.</p>
                <p>Ads-Wall is not responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>failed campaigns;</li>
                  <li>rejected ads;</li>
                  <li>suspended advertising accounts;</li>
                  <li>increased CPM, CPC or CPA;</li>
                  <li>poor conversion rates;</li>
                  <li>low return on advertising spend;</li>
                  <li>merchant or platform billing issues;</li>
                  <li>ad policy violations;</li>
                  <li>loss of traffic, leads, sales or revenue.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">28. Fees and Third-Party Charges</h2>
                <p>Ads-Wall may display applicable fees on the Platform or in a separate Payment &amp; Top-Up Policy.</p>
                <p>Ads-Wall does not charge a service fee for standard Balance top-ups unless otherwise clearly stated.</p>
                <p>However, third-party fees may apply, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>card issuer fees;</li>
                  <li>processor fees;</li>
                  <li>bank fees;</li>
                  <li>card scheme fees;</li>
                  <li>foreign exchange fees;</li>
                  <li>cross-border fees;</li>
                  <li>chargeback fees;</li>
                  <li>refund fees;</li>
                  <li>declined transaction fees;</li>
                  <li>merchant fees;</li>
                  <li>advertising platform fees;</li>
                  <li>fees charged by your own bank or card issuer.</li>
                </ul>
                <p>Third-party fees are outside Ads-Wall&apos;s control and may be non-refundable.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">29. Foreign Exchange</h2>
                <p>If a Card transaction involves currency conversion, the exchange rate may be determined by the card scheme, issuer, processor, Authorised Partner, merchant, advertising platform or other relevant provider.</p>
                <p>Foreign exchange rates may change without notice.</p>
                <p>The final amount deducted from your Balance may differ from estimates, pending authorisations or amounts displayed by a merchant.</p>
                <p>Ads-Wall does not guarantee any exchange rate and is not responsible for FX costs or currency fluctuations.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">30. Records and Statements</h2>
                <p>The Platform may show Card transactions, authorisations, settlements, refunds, fees, limits and other Account information.</p>
                <p>You must review your transaction history regularly and notify Ads-Wall promptly of any suspected errors.</p>
                <p>Platform records may be updated after settlement, reversal, refund, chargeback or reconciliation.</p>
                <p>In the event of a discrepancy, records from the Authorised Partner, issuer, processor, card scheme or bank may be treated as authoritative.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">31. Card Data and Privacy</h2>
                <p>Card-related data may be processed by Ads-Wall and its Authorised Partners for the purposes of:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>issuing and managing Cards;</li>
                  <li>processing transactions;</li>
                  <li>authenticating transactions;</li>
                  <li>preventing fraud;</li>
                  <li>carrying out compliance checks;</li>
                  <li>handling disputes and chargebacks;</li>
                  <li>providing support;</li>
                  <li>maintaining records;</li>
                  <li>meeting legal and regulatory obligations;</li>
                  <li>enforcing these Card Terms.</li>
                </ul>
                <p>More information about personal data processing is set out in our Privacy Policy.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">32. Platform and Partner Changes</h2>
                <p>We may change, withdraw, replace, migrate or discontinue any Card programme, Authorised Partner, processor, currency, feature, limit, Card type or technical functionality at any time.</p>
                <p>Where reasonably possible, we may provide notice of material changes. However, immediate changes may be required for security, compliance, legal, regulatory, card scheme, partner or operational reasons.</p>
                <p>We are not liable for losses caused by changes to Card availability, partner arrangements, limits, features or restrictions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">33. Suspension or Termination of Card Services</h2>
                <p>We may suspend, restrict or terminate Card Services immediately if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>you breach these Card Terms;</li>
                  <li>you breach the Terms &amp; Conditions;</li>
                  <li>you use Cards for prohibited activity;</li>
                  <li>your Account fails verification;</li>
                  <li>your Account creates compliance, fraud, sanctions, chargeback or reputational risk;</li>
                  <li>your activity is rejected by an Authorised Partner;</li>
                  <li>your Cards are used for advertising platform circumvention;</li>
                  <li>you fail to repay a negative Balance;</li>
                  <li>your Account is inactive;</li>
                  <li>required by law, regulation, card scheme rules, court order, regulator, law enforcement authority or Authorised Partner instruction;</li>
                  <li>Ads-Wall decides to stop offering Card Services.</li>
                </ul>
                <p>Suspension or termination does not affect any outstanding obligations, liabilities, chargebacks, negative balances, investigations, fees or compliance requirements.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">34. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Ads-Wall is not liable for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>declined Card transactions;</li>
                  <li>failed advertising payments;</li>
                  <li>Advertising Platform suspensions;</li>
                  <li>merchant refusals;</li>
                  <li>card issuer decisions;</li>
                  <li>processor failures;</li>
                  <li>card scheme restrictions;</li>
                  <li>partner downtime;</li>
                  <li>compliance holds;</li>
                  <li>chargeback outcomes;</li>
                  <li>foreign exchange losses;</li>
                  <li>loss of profits, revenue, business, goodwill, data or advertising performance;</li>
                  <li>indirect, incidental, special, consequential or punitive damages.</li>
                </ul>
                <p>Nothing in these Card Terms limits or excludes liability where it cannot be limited or excluded under applicable law.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">35. Contact</h2>
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
