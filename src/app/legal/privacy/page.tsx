import { PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/data";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="This Privacy Policy sets out how personal data is collected, used, stored, and disclosed in connection with this website and related services."
      />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="space-y-6 text-muted leading-relaxed">
            <p className="text-sm text-muted">Effective date: 13 August 2026</p>

            <p>
              This Privacy Policy applies to thetimeisnau.com and related
              online properties operated by Stefani Dimitrova, trading as nau
              studio (the “Controller”, “I”, “me”, or “nau”). It describes the
              processing of personal data of visitors, prospective clients,
              clients, and purchasers of digital products.
            </p>
            <p>
              By using the website or submitting information to me, you
              acknowledge that you have read this Privacy Policy. Where consent
              is required under applicable law, processing will be based on that
              consent until withdrawn.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              1. Data controller
            </h2>
            <p>
              The data controller is Stefani Dimitrova, operating as nau studio,
              based in Bulgaria. For privacy requests and notices, contact:
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              <br />
              Telephone: {siteConfig.phone}
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              2. Scope of activities
            </h2>
            <p>
              nau studio provides professional services relating to research and
              positioning, marketing strategy, and content creation (including
              series and promotional video production, whether as
              creator-produced content or on-location production within Europe),
              together with related advisory materials. The website also
              publishes essays, offers digital strategy guides for purchase, and
              may from time to time facilitate promotional campaigns such as
              stickers or QR-based offers. The website does not require the
              creation of a public user account.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              3. Categories of personal data
            </h2>
            <p>Depending on your interaction with nau, I may process:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Identity and contact data (such as name, email address,
                telephone number, company or brand name, and location);
              </li>
              <li>
                Correspondence and enquiry data (including message content and
                information you elect to provide about a project);
              </li>
              <li>
                Transaction data relating to digital product purchases
                (including order identifiers and delivery email), excluding full
                payment card numbers, which are processed by the payment
                provider;
              </li>
              <li>
                Shipping data, where you voluntarily request physical materials;
              </li>
              <li>
                Production and engagement data necessary to perform contracted
                services (including brand assets you supply, scheduling
                information, shoot location details, and feedback);
              </li>
              <li>
                Technical data automatically generated through use of the
                website (such as IP address, browser and device information,
                approximate location derived from IP, and pages accessed).
              </li>
            </ul>
            <p>
              I do not seek to collect special categories of personal data
              through the website. You should not transmit sensitive personal
              data (including health data, political opinions, government
              identity documents, or payment card details) via website forms
              unless a secure channel has been expressly agreed for a specific
              engagement.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              4. Purposes and legal bases
            </h2>
            <p>Personal data is processed for the following purposes:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                to respond to enquiries and conduct pre-contractual discussions;
              </li>
              <li>
                to perform and administer studio engagements once scope and fees
                have been agreed;
              </li>
              <li>
                to process and deliver digital product purchases;
              </li>
              <li>
                to fulfil optional campaign requests (such as stickers), where
                applicable;
              </li>
              <li>
                to operate, secure, maintain, and improve the website; and
              </li>
              <li>
                to comply with applicable legal, tax, and accounting
                obligations.
              </li>
            </ul>
            <p>
              Where the General Data Protection Regulation (EU) 2016/679 (“GDPR”)
              or equivalent UK data protection law applies, processing is based
              on one or more of the following: consent (Article 6(1)(a));
              performance of a contract or steps prior to entering a contract
              (Article 6(1)(b)); compliance with a legal obligation (Article
              6(1)(c)); and/or legitimate interests pursued by the Controller in
              operating a professional practice and website, provided such
              interests are not overridden by your interests or fundamental
              rights and freedoms (Article 6(1)(f)).
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              5. Payment processing
            </h2>
            <p>
              Purchases of digital products are processed by third-party payment
              service providers (including, where configured, Stripe). Payment
              card data is collected and processed by such providers in
              accordance with their terms and privacy notices. nau does not
              store complete payment card numbers on the website.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              6. Recipients and processors
            </h2>
            <p>
              Personal data is not sold. It may be disclosed to service providers
              acting as processors or independent controllers as required to
              operate the website and practice, including hosting providers,
              email and communications tools, analytics providers (if used),
              form delivery services, file-sharing tools, and payment
              processors, in each case limited to what is necessary for the
              relevant purpose and subject to appropriate confidentiality and
              data-protection arrangements.
            </p>
            <p>
              Personal data may also be disclosed where required by applicable
              law, regulation, legal process, or to protect the rights, property,
              or safety of nau, clients, or others.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              7. International transfers
            </h2>
            <p>
              Service providers may process personal data in jurisdictions
              outside your country of residence, including outside the European
              Economic Area. Where such transfers occur, reasonable steps are
              taken to ensure that appropriate safeguards are in place as
              required by applicable law (for example, standard contractual
              clauses or an adequacy decision, where applicable).
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              8. Retention
            </h2>
            <p>
              Personal data is retained only for as long as necessary for the
              purposes set out in this Policy, including to manage
              correspondence, perform contracts, maintain business and
              accounting records, resolve disputes, and meet legal obligations.
              Technical logs are generally retained for shorter operational
              periods, unless a longer period is required for security or legal
              reasons. When retention is no longer required, data will be deleted
              or anonymised in accordance with ordinary business practice.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              9. Cookies and similar technologies
            </h2>
            <p>
              The website may use cookies and similar technologies that are
              strictly necessary for operation and security, and may use
              optional technologies for analytics or checkout functionality.
              You may control cookies through your browser settings. Disabling
              certain cookies may impair website functionality.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              10. Your rights
            </h2>
            <p>
              Subject to applicable law (including the GDPR), you may have the
              right to request access to, rectification or erasure of, or
              restriction of processing of your personal data; to object to
              processing based on legitimate interests; to data portability;
              and to withdraw consent where processing is based on consent,
              without affecting the lawfulness of processing prior to
              withdrawal.
            </p>
            <p>
              Requests may be submitted to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              . You also have the right to lodge a complaint with a supervisory
              authority. In Bulgaria, this is the Commission for Personal Data
              Protection (Комисия за защита на личните данни).
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              11. Children
            </h2>
            <p>
              The website and services are directed to adults acting in a
              professional or commercial capacity. nau does not knowingly
              collect personal data from children. If you believe a child has
              provided personal data, contact me so that appropriate steps may
              be taken.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              12. Changes to this Policy
            </h2>
            <p>
              This Privacy Policy may be amended from time to time. The
              effective date above will be updated when material changes are
              published. Continued use of the website following publication of
              an updated Policy constitutes acknowledgment of the revised
              terms, except where applicable law requires a different form of
              notice or consent.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              13. Contact
            </h2>
            <p>
              Stefani Dimitrova · nau studio
              <br />
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              <br />
              Telephone: {siteConfig.phone}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
