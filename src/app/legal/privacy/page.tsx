import { PageHero } from "@/components/ui";

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              This privacy policy explains how nau Studio collects, uses,
              and protects your personal information when you visit our website
              or contact us.
            </p>
            <p>
              We collect information you provide directly, such as your name and
              email address when you submit a contact form. We use this
              information solely to respond to your inquiries and provide our
              services.
            </p>
            <p>
              We do not sell your personal information to third parties. We
              implement appropriate security measures to protect your data.
            </p>
            <p>
              For questions about this policy, contact us at hello@nau.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
