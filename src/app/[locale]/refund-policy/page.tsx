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
    title: "Refund & Cancellation Policy — AdsWall",
  };
}

export default async function RefundPolicyPage({
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
              <GradientText>Refund &amp; Cancellation Policy</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">Last Updated: 09.06.2026</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <p>This Refund &amp; Cancellation Policy (&quot;Policy&quot;) explains how refunds, unused Balance returns, cancellations, Account closure requests, failed top-ups, Card transaction refunds, chargebacks and related matters are handled on the Ads-Wall platform.</p>
              <p>This Policy forms part of and is incorporated into the Ads-Wall Terms &amp; Conditions, Virtual Card Terms and Payment &amp; Top-Up Policy.</p>
              <p>Ads-Wall is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH.</p>
              <p>Contact details: Email: info@ads-wall.com Phone: +44 7455 726203</p>
              <p>By creating an Account, topping up your Balance, using Virtual Cards, requesting a refund, closing your Account or otherwise using the Ads-Wall Services, you agree to this Policy.</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Business Use Only</h2>
                <p>Ads-Wall is intended for business use only.</p>
                <p>The Services are provided to business users, companies, agencies, advertisers, media buyers and other commercial users acting in the course of business.</p>
                <p>The Platform is not intended for personal, household or consumer use.</p>
                <p>Because Ads-Wall is a business service, consumer cancellation rights, cooling-off periods or consumer distance-selling refund rights do not apply unless mandatory law states otherwise.</p>
                <p>Nothing in this Policy affects any rights that cannot be excluded or limited under applicable law.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Important Information About Our Role</h2>
                <p>Ads-Wall is not a bank, credit institution, card issuer, electronic money institution or payment institution.</p>
                <p>Ads-Wall does not itself issue payment cards, provide regulated payment services, issue electronic money, hold customer funds as a bank deposit or operate a regulated payment account in its own capacity.</p>
                <p>Virtual Cards, payment processing, transaction authorisation, settlement, safeguarding of funds, refunds, chargebacks, fraud monitoring and any regulated financial services are provided by authorised third-party banking, card issuing, payment processing and compliance partners (&quot;Authorised Partners&quot;).</p>
                <p>Refunds, Balance returns, transaction reversals and chargeback outcomes may depend on the rules, approval, processing times and compliance requirements of Authorised Partners, banks, payment processors, card schemes, merchants, advertising platforms and regulators.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. General Refund Principle</h2>
                <p>Ads-Wall may allow a return of unused Balance where permitted by this Policy, applicable law, Authorised Partner rules, payment processor rules, card scheme rules and compliance requirements.</p>
                <p>However, refunds are not automatic.</p>
                <p>Refunds may be refused, delayed, reduced, restricted or placed on hold where there are:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>pending transactions;</li>
                  <li>open Card authorisations;</li>
                  <li>unsettled advertising charges;</li>
                  <li>chargebacks or disputes;</li>
                  <li>negative Balance;</li>
                  <li>unpaid fees or third-party costs;</li>
                  <li>compliance, AML, KYB, KYC, fraud or sanctions concerns;</li>
                  <li>suspected prohibited activity;</li>
                  <li>Account security concerns;</li>
                  <li>partner, processor, bank, card scheme, regulator or law enforcement restrictions.</li>
                </ul>
                <p>Ads-Wall may require additional verification before processing any refund or Balance return.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Refunds of Unused Balance</h2>
                <p>You may request a return of unused Balance by contacting Ads-Wall at: Email: info@ads-wall.com</p>
                <p>Your request should include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your Account email;</li>
                  <li>business name;</li>
                  <li>requested refund amount;</li>
                  <li>reason for the refund request;</li>
                  <li>preferred refund method, where applicable;</li>
                  <li>any supporting information requested by Ads-Wall.</li>
                </ul>
                <p>Unused Balance may be returned only after Ads-Wall and/or its Authorised Partners complete all required checks.</p>
                <p>Where possible, refunds will normally be returned to the original payment method used for the top-up.</p>
                <p>If the original payment method cannot receive the refund, Ads-Wall may require additional verification and may offer an alternative refund method, subject to availability and approval.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Non-Refundable Amounts</h2>
                <p>The following amounts are non-refundable unless Ads-Wall decides otherwise or mandatory law requires otherwise:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>amounts already spent using Virtual Cards;</li>
                  <li>amounts charged by advertising platforms, merchants or third-party services;</li>
                  <li>pending or settled Card transactions;</li>
                  <li>amounts subject to open authorisations;</li>
                  <li>amounts subject to chargeback, dispute, hold or investigation;</li>
                  <li>third-party fees;</li>
                  <li>card issuer fees;</li>
                  <li>payment processor fees;</li>
                  <li>bank fees;</li>
                  <li>card scheme fees;</li>
                  <li>foreign exchange costs;</li>
                  <li>cross-border fees;</li>
                  <li>chargeback fees;</li>
                  <li>refund processing fees;</li>
                  <li>declined transaction fees;</li>
                  <li>fees charged by your own bank or card issuer;</li>
                  <li>non-recoverable costs incurred by Ads-Wall or its Authorised Partners;</li>
                  <li>amounts required to cover a negative Balance, liability, loss, dispute or unpaid cost.</li>
                </ul>
                <p>Ads-Wall does not charge a service fee for standard Balance top-ups unless otherwise clearly stated. However, Ads-Wall&apos;s 0% service fee does not make third-party costs refundable.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Failed or Declined Top-Ups</h2>
                <p>If a top-up fails or is declined, the amount will normally not be credited to your Balance.</p>
                <p>Your bank or card issuer may still show a pending authorisation for a failed or declined payment. Such pending authorisations are usually released by your bank or card issuer according to their own timelines.</p>
                <p>Ads-Wall does not control how quickly your bank, card issuer, payment processor or card scheme releases pending authorisations.</p>
                <p>Ads-Wall is not responsible for temporary holds, bank delays, card issuer delays, currency conversion differences or third-party fees related to failed or declined top-ups.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Reversed or Cancelled Top-Ups</h2>
                <p>A top-up may be reversed, cancelled, recalled, deducted from your Balance or placed on hold if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the payment is disputed;</li>
                  <li>the payment is charged back;</li>
                  <li>the payment was unauthorised;</li>
                  <li>the payment was made with a stolen, compromised or third-party card;</li>
                  <li>the payment fails settlement;</li>
                  <li>the payment processor reverses the transaction;</li>
                  <li>the card issuer recalls the payment;</li>
                  <li>fraud or suspicious activity is identified;</li>
                  <li>sanctions or compliance concerns arise;</li>
                  <li>an Authorised Partner, bank, payment processor, card scheme, regulator or law enforcement authority requires or recommends reversal;</li>
                  <li>Ads-Wall determines that the top-up violates Ads-Wall policies.</li>
                </ul>
                <p>If a top-up is reversed after the Balance has been credited or spent, your Account may become negative.</p>
                <p>You must repay any negative Balance immediately.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Advertising Platform Refunds</h2>
                <p>If Google Ads, Meta Ads, Microsoft Ads or any other advertising platform issues a refund to a Virtual Card, the refunded amount will usually be returned to the relevant Card, Account or Balance after it is received and processed.</p>
                <p>Ads-Wall does not control whether an advertising platform approves a refund or how long the advertising platform takes to process it.</p>
                <p>Advertising platform refunds may be delayed, reduced, rejected or reversed by the relevant platform, merchant, acquiring bank, card scheme, issuer, processor or Authorised Partner.</p>
                <p>Ads-Wall is not responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>rejected advertisements;</li>
                  <li>suspended advertising accounts;</li>
                  <li>failed advertising campaigns;</li>
                  <li>unused advertising credits held by an advertising platform;</li>
                  <li>advertising platform billing disputes;</li>
                  <li>advertising platform refund decisions;</li>
                  <li>advertising platform delays;</li>
                  <li>advertising platform fees or deductions.</li>
                </ul>
                <p>You must contact the relevant advertising platform directly for disputes relating to ad delivery, campaign performance, ad account suspensions, policy violations or merchant-side billing decisions.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Card Transaction Refunds</h2>
                <p>If a merchant refunds a Card transaction, the refund will be processed according to merchant rules, card scheme rules, issuer rules, processor rules and Authorised Partner procedures.</p>
                <p>A Card transaction refund may not appear immediately in your Balance.</p>
                <p>Refund timing may depend on:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the merchant;</li>
                  <li>the advertising platform;</li>
                  <li>the acquiring bank;</li>
                  <li>the card scheme;</li>
                  <li>the card issuer;</li>
                  <li>the payment processor;</li>
                  <li>the Authorised Partner;</li>
                  <li>currency conversion;</li>
                  <li>fraud or compliance checks;</li>
                  <li>settlement timelines.</li>
                </ul>
                <p>Ads-Wall does not guarantee any specific refund processing time.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Cancellation of Top-Up Requests</h2>
                <p>You may request cancellation of a top-up only if the top-up has not yet been authorised, processed, credited, settled or otherwise acted upon.</p>
                <p>Once a top-up has been successfully processed or credited to your Balance, it cannot usually be cancelled. You may instead request a return of unused Balance under this Policy.</p>
                <p>Ads-Wall may not be able to cancel a top-up once it has been submitted to a payment processor, bank, card scheme or Authorised Partner.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. Cancellation of Virtual Cards</h2>
                <p>You may be able to freeze or close Virtual Cards through the Platform.</p>
                <p>Closing or freezing a Virtual Card does not automatically:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>cancel your Ads-Wall Account;</li>
                  <li>cancel your Balance;</li>
                  <li>cancel pending transactions;</li>
                  <li>cancel merchant authorisations;</li>
                  <li>cancel recurring billing arrangements;</li>
                  <li>cancel your contract with an advertising platform or merchant;</li>
                  <li>prevent previously authorised transactions from settling.</li>
                </ul>
                <p>You are responsible for cancelling recurring billing directly with the relevant merchant or advertising platform.</p>
                <p>Ads-Wall is not responsible for recurring charges that you authorised or failed to cancel with a merchant or advertising platform.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. Account Cancellation and Closure</h2>
                <p>You may request closure of your Ads-Wall Account by contacting: Email: info@ads-wall.com</p>
                <p>Before Account closure can be completed, you must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>stop using all Virtual Cards;</li>
                  <li>close or freeze active Cards where required;</li>
                  <li>cancel recurring payments with merchants and advertising platforms;</li>
                  <li>resolve pending transactions;</li>
                  <li>repay any negative Balance;</li>
                  <li>pay any outstanding fees, costs or liabilities;</li>
                  <li>complete any required verification;</li>
                  <li>cooperate with any compliance, fraud, chargeback or dispute review.</li>
                </ul>
                <p>Account closure may be delayed where there are:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>pending Card transactions;</li>
                  <li>open authorisations;</li>
                  <li>unresolved refunds;</li>
                  <li>open chargebacks;</li>
                  <li>payment disputes;</li>
                  <li>negative Balance;</li>
                  <li>unpaid costs;</li>
                  <li>compliance checks;</li>
                  <li>sanctions screening;</li>
                  <li>fraud review;</li>
                  <li>partner, processor, bank, card scheme, regulator or law enforcement restrictions.</li>
                </ul>
                <p>After Account closure, Ads-Wall may retain records as required for legal, regulatory, tax, accounting, fraud prevention, compliance, dispute handling and business record purposes.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. No Refund for Advertising Performance Issues</h2>
                <p>Ads-Wall provides a platform for accessing and managing Virtual Cards.</p>
                <p>Ads-Wall does not guarantee advertising performance, campaign approval, ad account approval, merchant acceptance, return on advertising spend, conversion rates, traffic quality, account stability or advertising platform decisions.</p>
                <p>You are not entitled to a refund from Ads-Wall because:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>an advertisement is rejected;</li>
                  <li>an ad account is suspended;</li>
                  <li>an advertising campaign performs poorly;</li>
                  <li>an advertising platform refuses a Card;</li>
                  <li>an advertising platform blocks billing;</li>
                  <li>an advertising platform changes its policies;</li>
                  <li>your landing page, product, service or offer is rejected;</li>
                  <li>your ads generate no leads, sales or profit;</li>
                  <li>your advertising costs increase;</li>
                  <li>you breach advertising platform policies.</li>
                </ul>
                <p>Any refund relating to advertising spend must be requested from the relevant advertising platform or merchant.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. No Refund for Prohibited Use</h2>
                <p>Ads-Wall may refuse, delay, reduce, hold or block any refund where we believe that your Account, Balance, Cards or transactions are connected to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>fraud;</li>
                  <li>money laundering;</li>
                  <li>terrorist financing;</li>
                  <li>sanctions evasion;</li>
                  <li>illegal activity;</li>
                  <li>stolen or unauthorised payment cards;</li>
                  <li>chargeback abuse;</li>
                  <li>advertising platform circumvention;</li>
                  <li>multiple account abuse;</li>
                  <li>cloaking or misleading redirects;</li>
                  <li>scams or deceptive offers;</li>
                  <li>prohibited goods or services;</li>
                  <li>breach of Ads-Wall policies;</li>
                  <li>breach of Authorised Partner rules;</li>
                  <li>breach of card scheme rules;</li>
                  <li>breach of applicable law.</li>
                </ul>
                <p>Where required, funds may be held, reported, returned to the original source, blocked, transferred or otherwise handled in accordance with applicable law, Authorised Partner requirements, card scheme rules, regulator instructions or law enforcement requests.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Compliance Checks Before Refunds</h2>
                <p>Before processing a refund, Ads-Wall and/or its Authorised Partners may require:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>identity verification;</li>
                  <li>business verification;</li>
                  <li>beneficial ownership verification;</li>
                  <li>payment card ownership evidence;</li>
                  <li>proof of source of funds;</li>
                  <li>proof of advertising activity;</li>
                  <li>explanation of transaction activity;</li>
                  <li>supporting invoices, contracts or screenshots;</li>
                  <li>bank or payment account details;</li>
                  <li>any other information required for AML, KYB, KYC, sanctions, fraud prevention or risk review.</li>
                </ul>
                <p>Failure to provide requested information may result in refund delay, refusal, Account restriction or termination.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. Refund Method</h2>
                <p>Where possible, refunds will be returned to the original payment method used for the relevant top-up.</p>
                <p>Ads-Wall may refuse to refund to a different payment method unless required checks are completed and the alternative method is approved.</p>
                <p>Refunds to third-party payment methods are not permitted unless expressly approved by Ads-Wall and its Authorised Partners.</p>
                <p>Ads-Wall may refuse alternative refund arrangements where they create fraud, AML, sanctions, chargeback, regulatory, operational or partner risk.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Refund Timing</h2>
                <p>Refund timing is not guaranteed.</p>
                <p>Refunds may depend on:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ads-Wall review;</li>
                  <li>Authorised Partner processing;</li>
                  <li>payment processor timelines;</li>
                  <li>card issuer timelines;</li>
                  <li>bank processing times;</li>
                  <li>card scheme rules;</li>
                  <li>merchant or advertising platform processing;</li>
                  <li>fraud checks;</li>
                  <li>AML, KYB, KYC and sanctions checks;</li>
                  <li>open authorisations;</li>
                  <li>pending transactions;</li>
                  <li>chargebacks or disputes;</li>
                  <li>technical availability.</li>
                </ul>
                <p>Ads-Wall is not responsible for delays caused by banks, card issuers, processors, card schemes, merchants, advertising platforms, Authorised Partners or other third parties.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Chargebacks and Payment Disputes</h2>
                <p>You must contact Ads-Wall before initiating a chargeback, payment reversal or dispute with your card issuer, unless the payment was genuinely unauthorised and urgent action is required.</p>
                <p>If you initiate a chargeback or payment dispute, Ads-Wall may:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>suspend your Account;</li>
                  <li>freeze your Balance;</li>
                  <li>block Virtual Cards;</li>
                  <li>restrict future top-ups;</li>
                  <li>request additional verification;</li>
                  <li>provide transaction records and evidence to the relevant processor, issuer, bank or card scheme;</li>
                  <li>deduct chargeback amounts and fees from your Balance;</li>
                  <li>recover losses, fees and costs from you;</li>
                  <li>terminate the Services.</li>
                </ul>
                <p>You are responsible for any losses, fees, penalties, negative balances, chargeback fees, investigation costs or liabilities caused by chargebacks, failed payments, fraudulent payments, unauthorised payment methods or bad-faith disputes.</p>
                <p>False, abusive, excessive or bad-faith chargebacks are strictly prohibited.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. Negative Balance</h2>
                <p>Your Account may become negative if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>a top-up is reversed after Balance is credited;</li>
                  <li>a payment is charged back;</li>
                  <li>a payment fails settlement;</li>
                  <li>a Card transaction settles after a Card is closed;</li>
                  <li>a merchant changes the final transaction amount;</li>
                  <li>a refund is reversed;</li>
                  <li>foreign exchange adjustments apply;</li>
                  <li>fees or third-party costs are applied;</li>
                  <li>Ads-Wall or an Authorised Partner corrects an error.</li>
                </ul>
                <p>You must repay any negative Balance immediately.</p>
                <p>Ads-Wall may recover a negative Balance by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>deducting from future top-ups;</li>
                  <li>deducting from available Balance;</li>
                  <li>offsetting against refunds;</li>
                  <li>blocking Cards;</li>
                  <li>restricting Account access;</li>
                  <li>charging an approved payment method where permitted;</li>
                  <li>requesting direct payment;</li>
                  <li>taking collection or legal action.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Errors</h2>
                <p>If you believe that a refund, Balance movement, top-up, Card transaction or fee has been applied incorrectly, you must contact Ads-Wall promptly at: Email: info@ads-wall.com</p>
                <p>You should provide:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Account details;</li>
                  <li>transaction date;</li>
                  <li>transaction amount;</li>
                  <li>currency;</li>
                  <li>merchant name where applicable;</li>
                  <li>description of the issue;</li>
                  <li>supporting evidence.</li>
                </ul>
                <p>Ads-Wall will review the issue and may refer the matter to an Authorised Partner, payment processor, card issuer, bank, card scheme, merchant or advertising platform.</p>
                <p>Corrections may be subject to partner approval, settlement timelines, card scheme rules, compliance checks and legal requirements.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">21. Fraudulent or Mistaken Refunds</h2>
                <p>If a refund, Balance credit, transaction reversal or other payment is made to you in error, you must notify Ads-Wall immediately and return the amount if requested.</p>
                <p>Ads-Wall may deduct mistaken credits from your Balance, reverse the refund, restrict your Account or recover the amount from you.</p>
                <p>You must not spend funds that you know or should reasonably know were credited by mistake.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">22. Changes to This Policy</h2>
                <p>Ads-Wall may update this Policy from time to time.</p>
                <p>Where changes are material, Ads-Wall may notify you by email, through the Platform or by other reasonable means.</p>
                <p>The updated Policy will apply from the date stated in the updated version.</p>
                <p>If you continue using the Platform after the updated Policy takes effect, you will be deemed to have accepted it.</p>
                <p>If you do not agree to the updated Policy, you must stop using the Services and may request Account closure.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">23. Contact</h2>
                <p>If you have questions about refunds, cancellations, Account closure, Balance returns, failed top-ups, Card transaction refunds or this Policy, contact:</p>
                <p>TIWALLET LTD<br />Company number: 17179279<br />Registered office: Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
