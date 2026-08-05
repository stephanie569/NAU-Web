import Image from "next/image";
import Link from "next/link";
import { PageHero, FadeIn, SectionLabel } from "@/components/ui";
import { team } from "@/lib/data";

export default function StudioPage() {
  const me = team[0];

  return (
    <>
      <PageHero
        title="About"
        subtitle="I help founders turn good products into stories people want to be part of—from market research and positioning to launch strategy and content creation."
      />

      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn>
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight">
                Four stages: immerse, define, create, refine.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  <span className="font-medium text-foreground">1. Immerse.</span>{" "}
                  I learn how the product works, why it exists, who built it and
                  what the company is trying to achieve.
                </p>
                <p>
                  <span className="font-medium text-foreground">2. Define.</span>{" "}
                  I research the market, clarify the audience, strengthen the
                  positioning and identify the messages worth testing.
                </p>
                <p>
                  <span className="font-medium text-foreground">3. Create.</span>{" "}
                  I develop the campaign and produce the content alongside the
                  founders, team, customers or community.
                </p>
                <p>
                  <span className="font-medium text-foreground">4. Refine.</span>{" "}
                  We review what performs, what resonates and what should be
                  improved before the next iteration.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <SectionLabel>About me</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">
              {me.name}
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:items-start md:gap-16">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                <Image
                  src={me.image}
                  alt={me.name}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-muted">{me.role}</p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {me.bio}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block text-sm font-medium underline underline-offset-4 hover:opacity-70"
              >
                Work with me
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
