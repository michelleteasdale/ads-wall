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
    title: "Cookie Policy — AdsWall",
  };
}

export default async function CookiePolicyPage({
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
              <GradientText>Cookie Policy</GradientText>
            </h1>
            <p className="text-sm text-text-tertiary mb-12">Last Updated: 09.06.2026</p>

            <div className="prose prose-slate max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
              <p>This Cookie Policy explains how Ads-Wall uses cookies and similar technologies on our website, platform, dashboard and related online services.</p>
              <p>Ads-Wall is operated by TIWALLET LTD, a company registered in England and Wales under company number 17179279, with its registered office at Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH (&quot;Ads-Wall&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).</p>
              <p>This Cookie Policy should be read together with our Privacy Policy, which explains how we collect, use, store, share and protect personal data.</p>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">1. What Are Cookies?</h2>
                <p>Cookies are small text files that are placed on your device (computer, tablet, smartphone or other device) when you visit a website. Cookies are widely used to make websites work, improve performance, provide a better user experience and supply information to website operators.</p>
                <p>Cookies may be set by the website you are visiting (&quot;first-party cookies&quot;) or by third parties whose content, tools, analytics or advertising technology appears on the website (&quot;third-party cookies&quot;).</p>
                <p>Cookies may be &quot;session cookies&quot; (which are deleted when you close your browser) or &quot;persistent cookies&quot; (which remain on your device for a set period or until you delete them).</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">2. Similar Technologies</h2>
                <p>In addition to cookies, we may use similar technologies, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>pixels (also known as tracking pixels, web beacons or clear GIFs);</li>
                  <li>tags and scripts;</li>
                  <li>software development kits (SDKs);</li>
                  <li>local storage and session storage (HTML5);</li>
                  <li>fingerprinting techniques;</li>
                  <li>embedded scripts;</li>
                  <li>ETags and cache-based tracking;</li>
                  <li>any other technology that stores or accesses information on your device.</li>
                </ul>
                <p>References to &quot;cookies&quot; in this Cookie Policy include these similar technologies unless otherwise stated.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">3. Why We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>to enable the website and platform to function correctly;</li>
                  <li>to maintain your session and keep you logged in;</li>
                  <li>to remember your preferences and settings;</li>
                  <li>to improve website performance and speed;</li>
                  <li>to analyse how visitors use our website and platform;</li>
                  <li>to detect and prevent fraud, abuse and security threats;</li>
                  <li>to deliver relevant marketing and advertising content;</li>
                  <li>to measure the effectiveness of marketing campaigns;</li>
                  <li>to comply with legal and regulatory requirements;</li>
                  <li>to provide customer support and improve user experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">4. Types of Cookies We Use</h2>
                <p>We use the following categories of cookies on our website and platform. The specific cookies used may change from time to time as we update and improve our services.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">5. Strictly Necessary Cookies</h2>
                <p>These cookies are essential for the website and platform to function. They enable core features such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>page navigation and access to secure areas;</li>
                  <li>user authentication and session management;</li>
                  <li>load balancing and server routing;</li>
                  <li>security features, CSRF protection and fraud prevention;</li>
                  <li>cookie consent preferences;</li>
                  <li>compliance with legal requirements.</li>
                </ul>
                <p>These cookies cannot be disabled without affecting the functionality of the website. They do not require your consent under applicable law.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">6. Performance and Analytics Cookies</h2>
                <p>These cookies help us understand how visitors interact with our website and platform by collecting information such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>pages visited and time spent on each page;</li>
                  <li>click and scroll behaviour;</li>
                  <li>error messages and loading times;</li>
                  <li>traffic sources and referral URLs;</li>
                  <li>number of visitors and session duration;</li>
                  <li>device, browser and operating system information;</li>
                  <li>geographic region (based on IP address).</li>
                </ul>
                <p>This information is used to improve website performance, identify issues and optimise user experience. Data may be aggregated or anonymised where possible.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">7. Functional Cookies</h2>
                <p>These cookies allow the website to remember choices you make and provide enhanced, personalised features, such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>language and region preferences;</li>
                  <li>display settings and layout preferences;</li>
                  <li>previously entered form data;</li>
                  <li>customised dashboard views;</li>
                  <li>notification preferences.</li>
                </ul>
                <p>If you disable functional cookies, some features may not work as intended.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">8. Advertising and Marketing Cookies</h2>
                <p>These cookies are used to deliver advertisements and marketing content that may be relevant to you, and to measure the effectiveness of advertising campaigns. They may collect information such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>pages you have visited on our website;</li>
                  <li>links you have clicked;</li>
                  <li>whether you have opened a marketing email;</li>
                  <li>your interactions with our advertisements on other websites;</li>
                  <li>demographic and interest information (inferred or provided);</li>
                  <li>conversion data (such as whether you signed up after clicking an ad).</li>
                </ul>
                <p>These cookies may be set by us or by third-party advertising networks and platforms. They may be used to build a profile of your interests and show you relevant content on other websites.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">9. Security and Fraud Prevention Cookies</h2>
                <p>These cookies help us detect and prevent fraud, unauthorised access and other security threats. They may be used to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>identify suspicious login attempts;</li>
                  <li>detect bots, scrapers and automated access;</li>
                  <li>monitor for unusual account activity;</li>
                  <li>support CAPTCHA and challenge-response mechanisms;</li>
                  <li>enforce rate limiting and access controls;</li>
                  <li>assist with forensic investigation following a security incident.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">10. Third-Party Cookies</h2>
                <p>Some cookies on our website are set by third parties whose services we use. These may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>analytics providers (such as Google Analytics);</li>
                  <li>advertising and marketing platforms;</li>
                  <li>payment processing and fraud prevention providers;</li>
                  <li>customer support and live chat providers;</li>
                  <li>social media platforms;</li>
                  <li>content delivery networks;</li>
                  <li>identity verification and compliance providers;</li>
                  <li>hosting and infrastructure providers.</li>
                </ul>
                <p>Third-party cookies are governed by the privacy and cookie policies of the relevant third party. We encourage you to review those policies.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">11. Cookie Consent</h2>
                <p>When you first visit our website, you may be presented with a cookie consent banner or preference centre that allows you to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>accept all cookies;</li>
                  <li>reject non-essential cookies;</li>
                  <li>customise your cookie preferences by category;</li>
                  <li>withdraw or change your consent at any time.</li>
                </ul>
                <p>Strictly necessary cookies do not require consent and will be set regardless of your preferences.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">12. Changing or Withdrawing Consent</h2>
                <p>You can change or withdraw your cookie consent at any time by accessing the cookie preference centre on our website, clearing your cookies through your browser settings or contacting us at info@ads-wall.com.</p>
                <p>Please note that withdrawing consent for certain cookies may affect the functionality of the website and platform.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">13. Browser Controls</h2>
                <p>Most browsers allow you to manage cookies through browser settings. You can typically:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>view and delete existing cookies;</li>
                  <li>block all cookies or only third-party cookies;</li>
                  <li>set your browser to notify you when a cookie is set;</li>
                  <li>configure cookie preferences on a per-site basis;</li>
                  <li>use private or incognito browsing mode.</li>
                </ul>
                <p>Please refer to your browser&apos;s help documentation for instructions on managing cookies. Note that blocking or deleting cookies may affect the functionality of the website.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">14. Do Not Track and Similar Signals</h2>
                <p>Some browsers offer a &quot;Do Not Track&quot; (DNT) setting that sends a signal to websites requesting that your browsing activity is not tracked. There is currently no universally accepted standard for how websites should respond to DNT signals.</p>
                <p>At this time, our website does not respond to DNT signals. However, you can manage tracking through your cookie preferences and browser settings as described above.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">15. Cookies and Personal Data</h2>
                <p>Some cookies may collect or be linked to personal data, such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address;</li>
                  <li>user account identifier;</li>
                  <li>device identifier;</li>
                  <li>browsing history on our website;</li>
                  <li>location data (inferred from IP address);</li>
                  <li>marketing interaction data.</li>
                </ul>
                <p>Where cookies collect personal data, such data is processed in accordance with our Privacy Policy.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">16. Retention</h2>
                <p>Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period, which varies depending on the cookie and its purpose.</p>
                <p>Persistent cookies may remain for periods ranging from a few days to several years, depending on the cookie. You can delete persistent cookies at any time through your browser settings.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">17. Examples of Cookies We May Use</h2>
                <p>The following are examples of the types of cookies we may use. The specific cookies may change as we update our website and services:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>session identifier cookies;</li>
                  <li>authentication and login cookies;</li>
                  <li>CSRF protection cookies;</li>
                  <li>language and locale preference cookies;</li>
                  <li>cookie consent preference cookies;</li>
                  <li>analytics and performance cookies (such as Google Analytics cookies);</li>
                  <li>advertising and conversion tracking cookies;</li>
                  <li>security and fraud detection cookies;</li>
                  <li>load balancing cookies;</li>
                  <li>A/B testing and feature flag cookies.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">18. Cookie Table</h2>
                <p>We aim to maintain a cookie table or cookie audit that lists the specific cookies used on our website, their purpose, provider, type and expiry. This table may be available within our cookie consent mechanism or upon request.</p>
                <p>Due to the dynamic nature of cookies and third-party services, the cookie table may not always be fully up to date. We periodically review and update it.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">19. Updates to This Cookie Policy</h2>
                <p>We may update this Cookie Policy from time to time to reflect changes in:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>the cookies and technologies we use;</li>
                  <li>applicable laws and regulations;</li>
                  <li>regulatory guidance;</li>
                  <li>industry best practices;</li>
                  <li>our website features and services;</li>
                  <li>third-party services and providers.</li>
                </ul>
                <p>Where changes are material, we may notify you through the website, by updating the cookie consent mechanism or by other reasonable means. The updated Cookie Policy will apply from the date stated in the updated version.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-text-primary">20. Contact</h2>
                <p>If you have any questions about this Cookie Policy or how we use cookies, please contact us at:</p>
                <p>TIWALLET LTD<br />Company number: 17179279<br />Registered office: Dept 6752, 196 High Road, Wood Green, London, United Kingdom, N22 8HH<br />Email: info@ads-wall.com<br />Phone: +44 7455 726203</p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
