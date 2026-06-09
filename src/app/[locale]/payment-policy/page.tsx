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
    title: "Payment & Top-Up Policy — AdsWall",
  };
}

export default async function PaymentPolicyPage({
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
              <GradientText>Payment &amp; Top-Up Policy</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">Last Updated: 09.06.2026</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <p>This Payment &amp; Top-Up Policy (&quot;Policy&quot;) explains how payments, balance top-ups, payment card transactions, fees, failed payments, refunds, chargebacks and related payment matters are handled on the Ads-Wall platform.</p>
              <p>This Policy forms part of and is incorporated into the Ads-Wall Terms &amp; Conditions and Virtual Card Terms.</p>
              <p>Ads-Wall is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH.</p>
              <p>Contact details:<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              <p>By topping up your Balance, using a payment method, funding your Account, using Virtual Cards or otherwise using the Ads-Wall payment features, you agree to this Policy.</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Important Information About Payments</h2>
                <p>Ads-Wall is not a bank, credit institution, card issuer, electronic money institution or payment institution.</p>
                <p>Ads-Wall does not itself issue payment cards, provide regulated payment services, issue electronic money, hold customer funds as a bank deposit or operate a regulated payment account in its own capacity.</p>
                <p>Payment processing, card issuing, transaction authorisation, settlement, safeguarding of funds, fraud monitoring, chargeback handling and any regulated financial services are provided by authorised third-party banking, card issuing, payment processing and compliance partners (&quot;Authorised Partners&quot;).</p>
                <p>By using the payment and top-up features, you acknowledge and agree that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ads-Wall operates as a technology and service platform;</li>
                  <li>payments and top-ups may be processed by Authorised Partners;</li>
                  <li>funds may be received, held, safeguarded, settled, returned or restricted by Authorised Partners;</li>
                  <li>Ads-Wall may be required to follow instructions, limits, holds, reversals or compliance decisions imposed by Authorised Partners, banks, payment processors, card schemes, regulators or law enforcement authorities;</li>
                  <li>Ads-Wall does not guarantee that any payment, top-up, refund, Card transaction or withdrawal will be accepted, completed or processed within a specific time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Supported Payment Methods</h2>
                <p>Unless otherwise stated on the Platform, Ads-Wall supports Balance top-ups by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Visa payment cards;</li>
                  <li>MasterCard payment cards.</li>
                </ul>
                <p>Ads-Wall does not currently support top-ups by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>bank transfer;</li>
                  <li>wire transfer;</li>
                  <li>cryptocurrency;</li>
                  <li>cash;</li>
                  <li>cheque;</li>
                  <li>money transfer services;</li>
                  <li>PayPal;</li>
                  <li>prepaid anonymous cards;</li>
                  <li>third-party wallets;</li>
                  <li>any other method not expressly shown as available on the Platform.</li>
                </ul>
                <p>We may add, remove, suspend or restrict payment methods at any time.</p>
                <p>The availability of any payment method may depend on your country, business profile, verification status, risk profile, card issuer, payment processor, currency, Authorised Partner requirements and applicable law.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Supported Currencies</h2>
                <p>Ads-Wall may support Balance top-ups and Virtual Card use in the following currencies:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>USD;</li>
                  <li>EUR;</li>
                  <li>GBP.</li>
                </ul>
                <p>Currency availability may vary depending on your Account, country, payment method, Card type, Authorised Partner, advertising platform, merchant and applicable limits.</p>
                <p>We may add, remove or restrict currencies at any time.</p>
                <p>If a top-up, Card transaction, refund, reversal or fee involves currency conversion, foreign exchange rates and third-party conversion fees may apply.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Business Payment Methods Only</h2>
                <p>Ads-Wall is intended for business use only.</p>
                <p>You must use payment methods that belong to you, your business or an authorised representative of your business.</p>
                <p>You must not use:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>stolen cards;</li>
                  <li>unauthorised cards;</li>
                  <li>compromised cards;</li>
                  <li>cards issued to unrelated third parties;</li>
                  <li>cards obtained by fraud;</li>
                  <li>anonymous prepaid cards;</li>
                  <li>payment methods linked to sanctioned persons or entities;</li>
                  <li>payment methods linked to prohibited or illegal activity;</li>
                  <li>payment methods that you are not legally authorised to use.</li>
                </ul>
                <p>We may request evidence that a payment card belongs to you, your business or an authorised company representative.</p>
                <p>If you use a third-party card without permission or without our approval, we may refuse the top-up, reverse the payment, freeze the Balance, suspend your Account, block Cards, request additional verification or terminate the Services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Top-Up Process</h2>
                <p>To top up your Balance, you must follow the instructions shown on the Platform.</p>
                <p>A top-up may require:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>selecting a supported currency;</li>
                  <li>entering a top-up amount;</li>
                  <li>providing payment card details;</li>
                  <li>completing payment authentication;</li>
                  <li>completing 3D Secure or similar verification;</li>
                  <li>passing fraud, AML, sanctions and compliance checks;</li>
                  <li>receiving approval from the payment processor, card issuer or Authorised Partner.</li>
                </ul>
                <p>A top-up is not guaranteed until it has been successfully authorised, processed, cleared and credited to your Account.</p>
                <p>We may delay crediting a top-up while checks are completed.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Minimum and Maximum Top-Up Amounts</h2>
                <p>Minimum and maximum top-up amounts may be displayed on the Platform.</p>
                <p>Ads-Wall and/or its Authorised Partners may apply limits to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>each top-up;</li>
                  <li>daily top-ups;</li>
                  <li>weekly top-ups;</li>
                  <li>monthly top-ups;</li>
                  <li>lifetime top-ups;</li>
                  <li>top-ups by currency;</li>
                  <li>top-ups by payment card;</li>
                  <li>top-ups by country;</li>
                  <li>top-ups by Account;</li>
                  <li>top-ups by risk profile.</li>
                </ul>
                <p>Limits may be changed at any time for compliance, risk, technical, commercial or operational reasons.</p>
                <p>We are not liable for any loss, campaign disruption, declined transaction or business impact caused by top-up limits.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Payment Authentication and 3D Secure</h2>
                <p>Some top-ups may require authentication, including 3D Secure, one-time password, banking app approval, SMS verification, email verification, biometric verification, device verification or other authentication methods.</p>
                <p>Authentication may be required by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your card issuer;</li>
                  <li>the payment processor;</li>
                  <li>the card scheme;</li>
                  <li>Ads-Wall;</li>
                  <li>an Authorised Partner;</li>
                  <li>applicable law;</li>
                  <li>fraud prevention systems.</li>
                </ul>
                <p>A top-up may fail or be declined if authentication is not completed, authentication fails, the authentication method is unavailable, the card issuer rejects the payment or the transaction appears suspicious.</p>
                <p>You are responsible for ensuring that you can complete all required authentication steps.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Processing Times</h2>
                <p>Top-ups may be processed quickly, but processing times are not guaranteed.</p>
                <p>A top-up may be delayed because of:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>payment authentication;</li>
                  <li>fraud screening;</li>
                  <li>AML, KYB, KYC or sanctions checks;</li>
                  <li>card issuer approval;</li>
                  <li>payment processor review;</li>
                  <li>Authorised Partner review;</li>
                  <li>technical issues;</li>
                  <li>card network delays;</li>
                  <li>unusual transaction patterns;</li>
                  <li>chargeback or dispute concerns;</li>
                  <li>manual review.</li>
                </ul>
                <p>Ads-Wall is not responsible for any advertising delay, campaign interruption, missed opportunity, declined ad payment or business loss caused by delayed top-up processing.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Ads-Wall Service Fee</h2>
                <p>Ads-Wall does not charge a service fee for standard Balance top-ups.</p>
                <p>This means the Ads-Wall service fee for standard top-ups is 0% unless otherwise clearly stated on the Platform or agreed with you in writing.</p>
                <p>However, third-party charges may still apply.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Third-Party Fees and Charges</h2>
                <p>Even where Ads-Wall charges a 0% service fee, you may still incur third-party fees or costs, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>card issuer fees;</li>
                  <li>bank fees;</li>
                  <li>acquiring fees;</li>
                  <li>payment processor fees;</li>
                  <li>card scheme fees;</li>
                  <li>foreign exchange fees;</li>
                  <li>cross-border fees;</li>
                  <li>chargeback fees;</li>
                  <li>refund processing fees;</li>
                  <li>failed payment fees;</li>
                  <li>declined transaction fees;</li>
                  <li>currency conversion costs;</li>
                  <li>fees charged by your own bank;</li>
                  <li>fees charged by advertising platforms or merchants;</li>
                  <li>fees charged by Authorised Partners.</li>
                </ul>
                <p>Ads-Wall is not responsible for third-party fees.</p>
                <p>Third-party fees may be deducted from the top-up amount, charged separately, reflected in the exchange rate, deducted from your Balance or applied at transaction level.</p>
                <p>Third-party fees may be non-refundable.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. Foreign Exchange</h2>
                <p>If a top-up, Card transaction, refund, reversal, chargeback or fee involves more than one currency, currency conversion may be required.</p>
                <p>Foreign exchange rates may be determined by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the card scheme;</li>
                  <li>your card issuer;</li>
                  <li>the acquiring bank;</li>
                  <li>the payment processor;</li>
                  <li>the Authorised Partner;</li>
                  <li>the merchant;</li>
                  <li>the advertising platform;</li>
                  <li>other relevant third parties.</li>
                </ul>
                <p>Exchange rates may change without notice.</p>
                <p>The amount credited to your Balance or deducted from your Balance may differ from estimates, pending amounts, authorisations or amounts displayed by your bank, card issuer, merchant or advertising platform.</p>
                <p>Ads-Wall does not guarantee any exchange rate and is not liable for FX costs, exchange rate movements or currency conversion losses.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. Failed, Declined or Rejected Top-Ups</h2>
                <p>A top-up may fail, be declined, be rejected or be delayed for reasons including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>insufficient funds on the payment card;</li>
                  <li>incorrect card details;</li>
                  <li>expired card;</li>
                  <li>blocked card;</li>
                  <li>unsupported card type;</li>
                  <li>failed 3D Secure or authentication;</li>
                  <li>issuer rejection;</li>
                  <li>processor rejection;</li>
                  <li>suspected fraud;</li>
                  <li>suspicious activity;</li>
                  <li>sanctions screening;</li>
                  <li>compliance review;</li>
                  <li>payment method restrictions;</li>
                  <li>unsupported country;</li>
                  <li>unsupported currency;</li>
                  <li>exceeded top-up limits;</li>
                  <li>breach or suspected breach of Ads-Wall policies;</li>
                  <li>card scheme rules;</li>
                  <li>Authorised Partner restrictions;</li>
                  <li>technical error.</li>
                </ul>
                <p>Ads-Wall is not responsible for fees, losses, campaign interruptions, declined advertising payments or business impact caused by failed, declined, rejected or delayed top-ups.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. Reversed or Cancelled Top-Ups</h2>
                <p>A top-up may be reversed, cancelled, recalled, deducted from your Balance or placed on hold if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the payment is disputed;</li>
                  <li>the payment is charged back;</li>
                  <li>the payment was unauthorised;</li>
                  <li>the payment was made with a stolen or compromised card;</li>
                  <li>the payment fails settlement;</li>
                  <li>the payment processor reverses the transaction;</li>
                  <li>the card issuer recalls the payment;</li>
                  <li>fraud or suspicious activity is identified;</li>
                  <li>compliance checks fail;</li>
                  <li>sanctions concerns arise;</li>
                  <li>an Authorised Partner instructs or requires reversal;</li>
                  <li>Ads-Wall determines that the top-up violates this Policy or any other Ads-Wall policy.</li>
                </ul>
                <p>If a top-up is reversed after funds have been credited or spent, your Account may become negative. You must repay any negative Balance immediately.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. Holds, Reviews and Restrictions</h2>
                <p>Ads-Wall and/or its Authorised Partners may place a hold, reserve, delay, restriction or review on any top-up, Balance, refund, Card, Account or transaction.</p>
                <p>This may happen where:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the top-up amount is unusually high;</li>
                  <li>the payment method is new;</li>
                  <li>multiple top-ups are attempted in a short period;</li>
                  <li>the payment method does not match your business profile;</li>
                  <li>there is a risk of chargeback;</li>
                  <li>there is a risk of fraud;</li>
                  <li>there is a sanctions, AML, KYB or KYC concern;</li>
                  <li>the Account is newly created;</li>
                  <li>your advertising activity requires review;</li>
                  <li>your Account history creates risk;</li>
                  <li>we receive a partner, processor, bank, regulator or law enforcement request;</li>
                  <li>you breach or are suspected of breaching Ads-Wall policies.</li>
                </ul>
                <p>We may not be able to disclose the specific reason for a hold, review or restriction.</p>
                <p>We are not liable for losses caused by holds, reviews or restrictions applied for compliance, risk, legal, partner or security reasons.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Use of Topped-Up Balance</h2>
                <p>Your Balance may be used only for permitted Ads-Wall Services, including permitted Virtual Card transactions and approved business advertising-related spending.</p>
                <p>Your Balance must not be used for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>unlawful activity;</li>
                  <li>personal spending;</li>
                  <li>consumer purchases;</li>
                  <li>cash withdrawal;</li>
                  <li>money remittance;</li>
                  <li>peer-to-peer transfers;</li>
                  <li>prohibited industries;</li>
                  <li>advertising platform circumvention;</li>
                  <li>sanctions evasion;</li>
                  <li>fraud, scams or deceptive activity;</li>
                  <li>any activity prohibited by Ads-Wall policies, Authorised Partners, card schemes or applicable law.</li>
                </ul>
                <p>Use of Balance is subject to the Terms &amp; Conditions, Virtual Card Terms, Acceptable Use Policy and any applicable partner rules.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. No Interest</h2>
                <p>No interest is payable on any Balance.</p>
                <p>Your Balance is not a deposit account, savings account, credit account or investment product.</p>
                <p>Ads-Wall does not pay interest, rewards or yield on any Balance.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Funds Handling and Safeguarding</h2>
                <p>Funds related to top-ups, Balances, Card transactions, refunds and settlements may be received, processed, held, safeguarded, returned or otherwise handled by Authorised Partners.</p>
                <p>Ads-Wall does not hold customer funds as a bank deposit and does not itself provide regulated banking, payment or electronic money services.</p>
                <p>Any safeguarding or protection of funds is subject to the arrangements, legal obligations, regulatory permissions and terms of the relevant Authorised Partners.</p>
                <p>Unless expressly confirmed in writing by the relevant regulated provider, no statement in this Policy should be interpreted as a guarantee that funds are protected by a deposit guarantee scheme, investor compensation scheme or similar statutory protection scheme.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Refunds of Unused Balance</h2>
                <p>You may request a return of unused Balance by contacting Ads-Wall at info@ads-wall.com.</p>
                <p>Refunds or Balance returns are subject to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>verification checks;</li>
                  <li>AML, KYB, KYC and sanctions review;</li>
                  <li>fraud checks;</li>
                  <li>chargeback risk review;</li>
                  <li>payment processor rules;</li>
                  <li>Authorised Partner rules;</li>
                  <li>card scheme rules;</li>
                  <li>legal and regulatory obligations;</li>
                  <li>outstanding fees, costs or liabilities;</li>
                  <li>pending transactions;</li>
                  <li>negative Balance;</li>
                  <li>active disputes or investigations.</li>
                </ul>
                <p>We may refuse, delay, reduce or restrict a refund if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your Account has not passed required verification;</li>
                  <li>the original top-up is disputed or charged back;</li>
                  <li>the top-up was unauthorised or suspicious;</li>
                  <li>the Balance is subject to a hold or investigation;</li>
                  <li>there are pending Card transactions;</li>
                  <li>there is a negative Balance;</li>
                  <li>there are unpaid fees or third-party costs;</li>
                  <li>prohibited activity is suspected;</li>
                  <li>required by an Authorised Partner, payment processor, card scheme, regulator, court or law enforcement authority.</li>
                </ul>
                <p>Refunds will normally be returned to the original payment method where possible.</p>
                <p>If the original payment method cannot receive the refund, additional verification and alternative refund arrangements may be required.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. Refund Timing</h2>
                <p>Refund timing is not guaranteed.</p>
                <p>Refunds may depend on:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ads-Wall review;</li>
                  <li>Authorised Partner processing;</li>
                  <li>payment processor processing;</li>
                  <li>card issuer processing;</li>
                  <li>card scheme timelines;</li>
                  <li>your bank&apos;s processing times;</li>
                  <li>compliance checks;</li>
                  <li>pending transactions;</li>
                  <li>chargeback or dispute status;</li>
                  <li>technical availability.</li>
                </ul>
                <p>Ads-Wall is not responsible for delays caused by banks, card issuers, payment processors, card schemes, Authorised Partners or other third parties.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Non-Refundable Amounts</h2>
                <p>The following may be non-refundable:</p>
                <ul className="list-disc pl-6 space-y-1">
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
                  <li>amounts already spent using Virtual Cards;</li>
                  <li>amounts subject to chargeback, dispute or investigation;</li>
                  <li>amounts lost due to your breach of Ads-Wall policies;</li>
                  <li>amounts required to cover a negative Balance or liability;</li>
                  <li>any other non-recoverable cost incurred by Ads-Wall or its partners.</li>
                </ul>
                <p>Ads-Wall&apos;s 0% service fee does not affect third-party fees or non-refundable third-party costs.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">21. Chargebacks and Disputes</h2>
                <p>You must contact Ads-Wall before initiating any chargeback, payment reversal or dispute with your card issuer, unless the payment was genuinely unauthorised and urgent action is required.</p>
                <p>If you initiate a chargeback, dispute or payment reversal, we may:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>suspend your Account;</li>
                  <li>freeze your Balance;</li>
                  <li>block Cards;</li>
                  <li>restrict future top-ups;</li>
                  <li>request additional verification;</li>
                  <li>provide transaction records and evidence to the processor, issuer or card scheme;</li>
                  <li>deduct chargeback amounts and fees from your Balance;</li>
                  <li>recover losses, costs and fees from you;</li>
                  <li>terminate the Services.</li>
                </ul>
                <p>You are responsible for any losses, fees, costs, penalties, negative balances or liabilities caused by chargebacks, payment disputes, unauthorised top-ups, fraudulent payments, failed settlements or payment reversals.</p>
                <p>False, abusive, excessive or bad-faith chargebacks are strictly prohibited.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">22. Negative Balance</h2>
                <p>Your Account may become negative if:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>a top-up is reversed after funds have been credited;</li>
                  <li>a chargeback occurs;</li>
                  <li>a payment fails after Balance has been used;</li>
                  <li>a refund is reversed;</li>
                  <li>fees or third-party costs are applied;</li>
                  <li>a Card transaction settles for more than the available Balance;</li>
                  <li>currency conversion adjustments occur;</li>
                  <li>a merchant or advertising platform changes a final transaction amount;</li>
                  <li>a processor or Authorised Partner applies a correction.</li>
                </ul>
                <p>You must repay any negative Balance immediately.</p>
                <p>We may recover a negative Balance by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>deducting from future top-ups;</li>
                  <li>offsetting against any refund;</li>
                  <li>deducting from available Balance;</li>
                  <li>restricting Account access;</li>
                  <li>blocking Cards;</li>
                  <li>charging an approved payment method where permitted;</li>
                  <li>requesting direct payment;</li>
                  <li>taking legal or collection action.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">23. Payment Card Storage and Security</h2>
                <p>Payment card details may be processed and stored by payment processors, card networks or Authorised Partners.</p>
                <p>Ads-Wall may use tokenisation or other secure payment processing methods where available.</p>
                <p>You must not submit payment card details through unsecured channels, including ordinary email, chat messages or support tickets.</p>
                <p>You are responsible for keeping your payment methods, devices, credentials and authentication methods secure.</p>
                <p>You must notify Ads-Wall immediately if you suspect unauthorised use of your payment card, Account, Balance or Cards.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">24. Fraud Prevention</h2>
                <p>Ads-Wall and its Authorised Partners may use fraud prevention tools, risk scoring, transaction monitoring, device checks, IP checks, card checks, behavioural analysis and manual review to detect and prevent fraud.</p>
                <p>We may block, delay, reverse or refuse payments where fraud or suspicious activity is suspected.</p>
                <p>We are not required to disclose internal fraud rules, risk models, thresholds or monitoring methods.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">25. Taxes</h2>
                <p>You are responsible for any taxes, duties, levies, reporting obligations or accounting treatment arising from:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>top-ups;</li>
                  <li>Balance use;</li>
                  <li>Card transactions;</li>
                  <li>advertising spend;</li>
                  <li>refunds;</li>
                  <li>foreign exchange;</li>
                  <li>business activity;</li>
                  <li>fees or third-party charges.</li>
                </ul>
                <p>Ads-Wall does not provide tax advice.</p>
                <p>You should keep your own records and seek professional advice where needed.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">26. Records</h2>
                <p>The Platform may display top-up history, payment status, Balance movements, Card transactions, refunds, fees and other records.</p>
                <p>You must review your records regularly and notify Ads-Wall promptly if you identify any error or suspicious activity.</p>
                <p>Displayed records may change after authorisation, settlement, reversal, refund, chargeback, fee application or reconciliation.</p>
                <p>Where there is a discrepancy, records held by Authorised Partners, payment processors, card issuers, card schemes or banks may be treated as authoritative.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">27. Changes to This Policy</h2>
                <p>We may update this Policy from time to time.</p>
                <p>Where changes are material, we may notify you by email, through the Platform or by other reasonable means.</p>
                <p>The updated Policy will apply from the date stated in the updated version.</p>
                <p>If you continue using the Platform after the updated Policy takes effect, you will be deemed to have accepted it.</p>
                <p>If you do not agree to the updated Policy, you must stop using the payment and top-up features and may request Account closure.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">28. Contact</h2>
                <p>If you have questions about payments, top-ups, failed transactions, Balance, refunds or this Policy, contact:</p>
                <p>TIWALLET LTD<br />Company number: 17179279<br />Registered office: Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
