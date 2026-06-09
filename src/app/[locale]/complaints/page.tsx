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
    title: "Complaints Policy — AdsWall",
  };
}

export default async function ComplaintsPage({
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
              <GradientText>Complaints Policy</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">Last Updated: 09.06.2026</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <p>This Complaints Policy explains how Ads-Wall receives, reviews, investigates and responds to complaints from users, applicants, former users and other individuals in connection with our platform and services.</p>
              <p>Ads-Wall is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH (&quot;Ads-Wall&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).</p>
              <p>You can contact us at:</p>
              <p>Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. Purpose of This Policy</h2>
                <p>The purpose of this Complaints Policy is to provide a clear, fair and transparent process for handling complaints. We are committed to treating all complaints seriously, investigating them thoroughly and responding in a timely manner.</p>
                <p>This policy sets out how you can make a complaint, what you can expect from us, how we will handle your complaint and what options you have if you are not satisfied with our response.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Important Information About Our Role</h2>
                <p>Ads-Wall is not a bank, credit institution, card issuer, electronic money institution or payment institution. Ads-Wall does not itself issue payment cards, hold customer funds as a bank deposit, provide regulated payment services, issue electronic money or operate a payment account in its own capacity.</p>
                <p>Virtual cards, payment processing, card issuing, safeguarding of funds, transaction authorisation, settlement, chargeback handling, fraud monitoring and any regulated financial services are provided by authorised third-party banking, card issuing, payment processing and compliance partners (the &quot;Authorised Partners&quot;).</p>
                <p>Where a complaint relates to services provided by an Authorised Partner, we may need to refer the complaint or part of the complaint to the relevant Authorised Partner for review or response. We will inform you if this is the case.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Who Can Make a Complaint</h2>
                <p>The following individuals may make a complaint under this policy:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>registered users and account holders;</li>
                  <li>persons who have applied for an account;</li>
                  <li>former users and former account holders;</li>
                  <li>company representatives, directors, shareholders, beneficial owners and authorised signatories associated with a business account;</li>
                  <li>team members and authorised users invited to access an account;</li>
                  <li>any individual who has been directly affected by our services or actions.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. What You Can Complain About</h2>
                <p>You may make a complaint about any aspect of the services provided by Ads-Wall, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>account registration, onboarding or verification processes;</li>
                  <li>account restrictions, suspensions or closures;</li>
                  <li>virtual card issuing, management or controls;</li>
                  <li>balance top-ups, refunds or withdrawals;</li>
                  <li>transaction processing, declines or failures;</li>
                  <li>fees, charges or billing;</li>
                  <li>customer support response times or quality;</li>
                  <li>data protection or privacy concerns;</li>
                  <li>website or platform functionality;</li>
                  <li>communication, transparency or information provided;</li>
                  <li>any other matter relating to our services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. What This Policy Does Not Cover</h2>
                <p>This Complaints Policy does not cover complaints about services or decisions that are the sole responsibility of third parties, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>decisions made by advertising platforms (such as Google Ads, Meta Ads or Microsoft Ads) regarding your advertising accounts, advertisements, policies, suspensions or bans;</li>
                  <li>decisions made by your bank, card issuer or payment provider regarding your payment cards or bank account;</li>
                  <li>services provided directly by Authorised Partners where the complaint must be directed to that partner;</li>
                  <li>disputes with merchants or advertising platforms regarding goods, services, content or advertising performance;</li>
                  <li>general feedback, feature requests or suggestions (which we welcome but handle separately from complaints).</li>
                </ul>
                <p>Where a complaint involves both Ads-Wall and a third party, we will address the aspects within our control and may refer you to the relevant third party for the remainder.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. How to Submit a Complaint</h2>
                <p>You can submit a complaint by contacting us at:</p>
                <p>Email: info@ads-wall.com</p>
                <p>To help us investigate your complaint efficiently, please include the following information where possible:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>your full name and the name of your business;</li>
                  <li>your account email address or account identifier;</li>
                  <li>a clear description of the issue or complaint;</li>
                  <li>the date or dates when the issue occurred;</li>
                  <li>any relevant transaction references, card identifiers or order numbers;</li>
                  <li>copies of any relevant documents, screenshots or communications;</li>
                  <li>the outcome you are seeking;</li>
                  <li>any other information that may help us understand and resolve the complaint.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Acknowledgement of Complaints</h2>
                <p>We aim to acknowledge receipt of your complaint promptly, typically within two business days of receiving it.</p>
                <p>Our acknowledgement will confirm that we have received your complaint and will provide information about the next steps and expected timeframes.</p>
                <p>If we need additional information to investigate your complaint, we will contact you as soon as possible.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Complaint Review Process</h2>
                <p>Once we receive your complaint, we will review and investigate it. Depending on the nature of the complaint, we may:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>review your account, transactions, communications and relevant records;</li>
                  <li>consult with internal teams, including compliance, operations, support and technical teams;</li>
                  <li>contact relevant Authorised Partners, payment processors, card issuers or other third parties;</li>
                  <li>request additional information or documents from you;</li>
                  <li>review applicable terms, policies, laws and regulations;</li>
                  <li>escalate the complaint to senior management where appropriate.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Complaints Involving Authorised Partners</h2>
                <p>Where a complaint relates to services provided by an Authorised Partner, such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>card issuing and card management;</li>
                  <li>payment processing and transaction authorisation;</li>
                  <li>fund safeguarding and settlement;</li>
                  <li>chargeback handling and dispute resolution;</li>
                  <li>KYC, KYB, AML or sanctions checks conducted by the partner;</li>
                  <li>account decisions made by the partner;</li>
                </ul>
                <p>we may need to refer the complaint or relevant details to the Authorised Partner for investigation and response. We will inform you if this is the case and provide any available information about the partner&apos;s complaints process and timeframes.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Response Timeframes</h2>
                <p>We aim to resolve complaints as quickly as possible. Our target response timeframes are:</p>
                <p>For complaints relating to payment services or transactions: we aim to provide a final response within 15 business days of receiving the complaint. In exceptional circumstances, where we cannot respond within 15 business days due to reasons beyond our control, we will send a holding response explaining the delay and provide a final response within 35 business days.</p>
                <p>For all other complaints: we aim to provide a final response within 8 weeks of receiving the complaint.</p>
                <p>These timeframes may be extended where the complaint is complex, involves third parties, requires information from Authorised Partners or is subject to legal, regulatory or compliance constraints.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. Holding Responses</h2>
                <p>If we are unable to provide a final response within the applicable timeframe, we will send you a holding response that:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>explains why we have not yet been able to resolve the complaint;</li>
                  <li>provides an estimated date for the final response;</li>
                  <li>informs you of any rights you have to escalate the complaint externally.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. Final Response</h2>
                <p>Our final response will:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>summarise your complaint;</li>
                  <li>explain the outcome of our investigation;</li>
                  <li>set out any actions we have taken or will take;</li>
                  <li>explain the reasons for our decision;</li>
                  <li>where applicable, offer a remedy, correction or resolution;</li>
                  <li>inform you of any rights you have to escalate the complaint if you are not satisfied.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. Possible Outcomes</h2>
                <p>Depending on the nature of the complaint and the outcome of our investigation, possible outcomes may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>an explanation or clarification of our actions, decisions or policies;</li>
                  <li>an apology where appropriate;</li>
                  <li>a correction of an error or mistake;</li>
                  <li>a reversal or adjustment of a transaction, fee or charge;</li>
                  <li>a change to our processes, procedures or communications;</li>
                  <li>a referral to an Authorised Partner or third party;</li>
                  <li>a determination that no further action is required;</li>
                  <li>any other outcome we consider fair and appropriate in the circumstances.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. Complaints About Account Restrictions, Holds or Freezes</h2>
                <p>If your complaint relates to an account restriction, hold, freeze, suspension or closure, please be aware that such actions may be taken for reasons including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>compliance with legal, regulatory or sanctions obligations;</li>
                  <li>fraud prevention and risk management;</li>
                  <li>AML, KYC or KYB review;</li>
                  <li>instructions or requirements from Authorised Partners, card schemes, banks or regulators;</li>
                  <li>breach or suspected breach of our terms;</li>
                  <li>chargeback risk or dispute;</li>
                  <li>law enforcement request or court order;</li>
                  <li>suspicious or unusual activity.</li>
                </ul>
                <p>In some cases, we may be unable to disclose the specific reasons for an account action due to legal, regulatory, compliance or confidentiality restrictions. We will provide as much information as we are permitted to share.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Complaints About Advertising Platforms</h2>
                <p>Ads-Wall is not responsible for decisions made by advertising platforms (such as Google Ads, Meta Ads or Microsoft Ads) regarding your advertising accounts, advertisements, policies, spending limits, suspensions, bans or enforcement actions.</p>
                <p>If your complaint relates to an advertising platform decision, we recommend contacting the relevant advertising platform directly. We can assist with issues that are within Ads-Wall&apos;s control, such as virtual card functionality, balance top-ups or platform access.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. Complaints About Unauthorised Transactions</h2>
                <p>If you believe that an unauthorised transaction has been made using your account or virtual card, please contact us immediately at info@ads-wall.com.</p>
                <p>We will investigate the report and may need to involve our Authorised Partners, card issuers, payment processors or fraud prevention providers. You may be asked to provide additional information, documents or evidence to support the investigation.</p>
                <p>Please also review your account security, change your password and check for any unauthorised access.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Complaints About Personal Data</h2>
                <p>If your complaint relates to the processing of your personal data, your data protection rights or a potential data breach, please refer to our Privacy Policy for details on how to exercise your rights.</p>
                <p>You may also contact us at info@ads-wall.com with any data protection complaints or concerns. If you are not satisfied with our response, you have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at https://ico.org.uk.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Escalation</h2>
                <p>If you are not satisfied with the initial handling of your complaint, you may request that it be escalated. Escalation may involve:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>review by a senior member of the team;</li>
                  <li>review by a different department or team;</li>
                  <li>involvement of senior management;</li>
                  <li>referral to an Authorised Partner where the complaint relates to their services.</li>
                </ul>
                <p>To request escalation, please reply to the complaint correspondence or contact us at info@ads-wall.com with a clear explanation of why you are not satisfied with the response received.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. External Escalation</h2>
                <p>If you have received a final response and are still not satisfied, or if you have not received a final response within the applicable timeframe, you may be able to refer your complaint to an external body.</p>
                <p>Eligibility for external escalation depends on factors including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the nature of the complaint;</li>
                  <li>whether the complaint relates to a regulated financial service;</li>
                  <li>whether you are an eligible complainant under the relevant scheme;</li>
                  <li>whether the relevant Authorised Partner is subject to an ombudsman or dispute resolution scheme;</li>
                  <li>applicable time limits for referral.</li>
                </ul>
                <p>For complaints relating to regulated financial services provided by an Authorised Partner, you may be able to refer the complaint to the Financial Ombudsman Service (FOS) if you are an eligible complainant. Details are available at https://www.financial-ombudsman.org.uk.</p>
                <p>For complaints relating to data protection, you may lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at https://ico.org.uk.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Time Limits for Bringing Complaints</h2>
                <p>We encourage you to bring complaints as soon as possible after the issue arises. Prompt reporting helps us investigate more effectively and may be required under certain regulatory schemes.</p>
                <p>External dispute resolution bodies, ombudsmen and regulators may have their own time limits for accepting complaints. Please check the relevant body&apos;s requirements if you intend to escalate externally.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">21. Cooperation</h2>
                <p>To help us investigate and resolve your complaint effectively, we may ask you to provide:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>a clear and detailed description of the issue;</li>
                  <li>relevant dates, times and transaction references;</li>
                  <li>copies of relevant documents, emails, screenshots or communications;</li>
                  <li>information about the outcome you are seeking;</li>
                  <li>any additional information or evidence we reasonably request.</li>
                </ul>
                <p>Failure to provide requested information may delay the investigation or limit our ability to resolve the complaint.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">22. Abuse of the Complaints Process</h2>
                <p>We are committed to handling all genuine complaints fairly and thoroughly. However, we reserve the right to take appropriate action where the complaints process is abused. Examples of abuse may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>submitting complaints that are vexatious, frivolous or made in bad faith;</li>
                  <li>submitting repeated complaints about the same issue after a final response has been provided;</li>
                  <li>using threatening, abusive, discriminatory or harassing language;</li>
                  <li>making false or misleading statements in a complaint;</li>
                  <li>attempting to use the complaints process to circumvent terms, compliance decisions or account restrictions;</li>
                  <li>submitting an unreasonable volume of complaints designed to disrupt operations.</li>
                </ul>
                <p>Where we determine that the complaints process is being abused, we may limit further correspondence, decline to investigate the complaint further or take other appropriate action.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">23. Records</h2>
                <p>We maintain records of all complaints received, including the complaint details, investigation steps, communications, outcome and any actions taken. Complaint records are retained in accordance with our data retention policies, applicable legal and regulatory requirements and Authorised Partner requirements.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">24. Confidentiality and Disclosure</h2>
                <p>We treat complaint information confidentially and process it in accordance with our Privacy Policy. However, we may need to share complaint information with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>relevant internal teams;</li>
                  <li>Authorised Partners, card issuers, payment processors or compliance providers;</li>
                  <li>regulators, ombudsmen, law enforcement authorities or courts;</li>
                  <li>external legal or compliance advisers;</li>
                  <li>any other party where required by law, regulation or legitimate business need.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">25. No Admission of Liability</h2>
                <p>Acknowledgement of a complaint, investigation of a complaint or provision of a response does not constitute an admission of liability, fault or wrongdoing by Ads-Wall, its directors, officers, employees, contractors, affiliates or Authorised Partners.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">26. Changes to This Policy</h2>
                <p>We may update this Complaints Policy from time to time to reflect changes in our processes, legal requirements, regulatory guidance, Authorised Partner requirements or operational needs.</p>
                <p>The updated policy will apply from the date stated in the updated version. We encourage you to review this policy periodically.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">27. Contact</h2>
                <p>If you have any questions about this Complaints Policy or wish to submit a complaint, please contact us at:</p>
                <p>TIWALLET LTD<br />Company number: 17179279<br />Registered office: Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
