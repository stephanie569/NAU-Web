import { PageHero } from "@/components/ui";

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              By accessing and using this website, you agree to be bound by these
              Terms of Service and all applicable laws and regulations.
            </p>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of nau Studio and is protected by
              copyright laws.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Continued
              use of the website constitutes acceptance of any changes.
            </p>
            <p>
              For questions about these terms, contact us at hello@nau.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
