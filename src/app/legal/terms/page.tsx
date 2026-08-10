import { PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/data";

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="The ground rules for using this website and working with nau."
      />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="space-y-6 text-muted leading-relaxed">
            <p className="text-sm text-muted">
              Last updated: 29 July 2026
            </p>

            <p>
              These Terms of Service (“Terms”) govern your access to and use of
              thetimeisnau.com and related pages operated by Stefani Dimitrova,
              trading as{" "}
              <span className="font-medium text-foreground">nau</span> (“I”,
              “me”, or “nau”). By using this website, you agree to these Terms.
              If you do not agree, please do not use the site.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              About nau
            </h2>
            <p>
              nau is a personal studio for Research & Positioning, organic
              Go-to-Market and Team Content with product brands growing
              steadily. This site is a portfolio and publishing space, not an
              online shop for studio services.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Using the website
            </h2>
            <p>
              You may browse the site for personal and professional information
              about nau. You agree not to misuse the site—including attempting
              to disrupt its operation, scrape content at scale without
              permission, introduce malware, or use the site for unlawful
              purposes.
            </p>
            <p>
              Content is provided for general information. Blog articles share
              strategic perspectives and educational frameworks; they are not
              legal, financial, investment, or tax advice, and they are not a
              substitute for tailored professional counsel on your situation.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Enquiries and studio engagements
            </h2>
            <p>
              Sending a message through the contact form or email does not create
              a client relationship by itself. Project work begins only when we
              agree scope, timeline, fees, and any separate written agreement or
              statement of work. Until then, conversations are exploratory.
            </p>
            <p>
              Quotes, proposals, and ideas shared before an engagement remain
              confidential to the extent reasonable for a professional
              discussion. Do not treat early conversations as a licence to use
              unpublished concepts without agreement.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Intellectual property
            </h2>
            <p>
              Unless otherwise stated, the website’s text, design, graphics,
              logos, images, layouts, and Blog content are owned by Stefani
              Dimitrova (nau) or used under licence. You may view and share
              links to public pages for ordinary personal or professional
              reference. You may not copy, reproduce, republish, or commercially
              exploit site materials without prior written permission—except
              where fair dealing / fair use or similar exceptions clearly apply.
            </p>
            <p>
              Client work shown in the portfolio remains subject to the
              ownership and licence terms of the relevant engagement. Third-party
              brands, product names, and trademarks mentioned in essays or case
              references belong to their respective owners and are used for
              commentary or identification only.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Stickers and campaign materials
            </h2>
            <p>
              Occasional campaigns (for example stickers) may be offered free or
              under stated conditions. Availability can change. Shipping,
              quantities, and eligibility are at my discretion. Campaign pages
              describe the current offer; they do not guarantee ongoing stock or
              worldwide delivery.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Third-party links and tools
            </h2>
            <p>
              The site may link to third-party websites, platforms, or
              resources (including social profiles). I am not responsible for
              their content, policies, or practices. Your use of those services
              is governed by their own terms.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Disclaimer
            </h2>
            <p>
              The website is provided “as is” and “as available.” I aim to keep
              information accurate and the site reliable, but I do not warrant
              that it will be uninterrupted, error-free, or complete. To the
              fullest extent permitted by law, nau disclaims warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement regarding the website itself.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Stefani
              Dimitrova / nau will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits, data, or goodwill, arising from your use of—or inability
              to use—this website. Liability for paid studio services, if any,
              will be governed by the separate agreement for that work—not by
              these website Terms alone.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot
              lawfully be excluded, including liability for death or personal
              injury caused by negligence, or for fraud.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Privacy
            </h2>
            <p>
              How personal information is handled on this site is described in
              the{" "}
              <a
                href="/legal/privacy"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Privacy Policy
              </a>
              . By using the site, you also acknowledge that policy.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Changes
            </h2>
            <p>
              I may update these Terms from time to time. The “Last updated”
              date will change when revisions are published. Continued use of
              the site after changes constitutes acceptance of the updated
              Terms.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Governing law
            </h2>
            <p>
              These Terms are governed by the laws of Bulgaria, without regard
              to conflict-of-law principles, unless mandatory consumer or other
              protections in your country of residence require otherwise.
              Courts in Bulgaria shall have non-exclusive jurisdiction, subject
              to those mandatory rights.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Contact
            </h2>
            <p>
              Questions about these Terms:
              <br />
              Stefani Dimitrova · nau
              <br />
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              <br />
              Phone: {siteConfig.phone}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
