import { PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/data";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How nau collects, uses, and looks after personal information on this site."
      />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="space-y-6 text-muted leading-relaxed">
            <p className="text-sm text-muted">
              Last updated: 29 July 2026
            </p>

            <p>
              This Privacy Policy explains how Stefani Dimitrova, operating as{" "}
              <span className="font-medium text-foreground">nau</span> (“I”,
              “me”, or “nau”), handles personal information when you visit{" "}
              thetimeisnau.com, browse the Blog, request stickers, or contact
              me about Research & Positioning, Go-to-Market,
              Team Content, or related studio work.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Who is responsible for your data
            </h2>
            <p>
              For the purposes of this website, I am the data controller. If you
              have questions about this policy or how your information is used,
              contact me at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                {siteConfig.email}
              </a>{" "}
              or {siteConfig.phone}.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              What this site is for
            </h2>
            <p>
              nau is a personal portfolio and product marketing practice for
              brands that make physical products and want steady growth.
              Selected work, Blog essays, stickers and digital products, and
              ways to start a conversation. Not a marketplace, and no user
              accounts required.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Information I collect
            </h2>
            <p>
              <span className="font-medium text-foreground">
                Information you provide.
              </span>{" "}
              When you submit a contact form or email me, I may receive your
              name, email address, message content, and any project details you
              choose to share. If you request stickers or similar materials, I
              may also need shipping details you send voluntarily.
            </p>
            <p>
              <span className="font-medium text-foreground">
                Technical information.
              </span>{" "}
              Like most websites, hosting and security providers may process
              limited technical data such as IP address, browser type, device
              information, and pages visited. This is typically used for
              operating, securing, and understanding aggregate use of the site—not
              for building marketing profiles for sale.
            </p>
            <p>
              I do not intentionally collect special-category personal data
              through this website. Please do not send sensitive information
              (for example health, political, or financial account details)
              through the contact form unless we have expressly agreed a secure
              channel for a specific engagement.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Why I use your information
            </h2>
            <p>I use personal information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to enquiries and discuss potential work</li>
              <li>
                Provide studio services once we agree scope, fees, and terms
              </li>
              <li>
                Send stickers or other materials you have requested, where
                relevant
              </li>
              <li>Operate, maintain, and improve this website</li>
              <li>Comply with legal obligations where they apply</li>
            </ul>
            <p>
              Where EU/EEA or UK data protection rules apply, the usual legal
              bases are: your consent (for example when you voluntarily submit a
              form), legitimate interests in running a professional studio and
              responding to business enquiries, and performance of a contract
              when we work together.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Sharing and processors
            </h2>
            <p>
              I do not sell your personal information. I may share information
              with trusted service providers who help run the site or
              communications—for example hosting, email, analytics, or form
              delivery—only as needed for those purposes, and under appropriate
              confidentiality expectations.
            </p>
            <p>
              I may also disclose information if required by law, or to protect
              rights, safety, and security in connection with the studio.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Cookies and similar technologies
            </h2>
            <p>
              The site may use cookies or similar technologies that are
              necessary for basic operation, or optional tools that help
              understand how pages perform. You can control cookies through your
              browser settings. Blocking some cookies may affect how parts of
              the site work.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              How long I keep information
            </h2>
            <p>
              Contact and project correspondence is kept only as long as needed
              to manage the conversation, deliver work, meet record-keeping
              needs, or resolve disputes—then deleted or archived according to
              ordinary business practice. Technical logs are retained for shorter
              operational periods unless a security or legal reason requires
              longer retention.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              International transfers
            </h2>
            <p>
              Service providers may process data in countries other than where
              you live. Where that happens, I take reasonable steps to work with
              providers that offer appropriate safeguards for professional
              website and communications use.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Your rights
            </h2>
            <p>
              Depending on where you live, you may have rights to access,
              correct, delete, or restrict use of your personal information, to
              object to certain processing, or to withdraw consent where
              processing is based on consent. To exercise these rights, email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              . You may also have the right to lodge a complaint with your local
              data protection authority.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Children
            </h2>
            <p>
              This website is intended for adults exploring professional
              services and studio content. It is not directed at children, and I
              do not knowingly collect personal information from children.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Changes to this policy
            </h2>
            <p>
              I may update this Privacy Policy from time to time. The “Last
              updated” date at the top will change when that happens. Continued
              use of the site after an update means you accept the revised
              policy.
            </p>

            <h2 className="pt-4 text-xl font-semibold tracking-tight text-foreground">
              Contact
            </h2>
            <p>
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
