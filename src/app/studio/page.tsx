import Image from "next/image";
import { PageHero, FadeIn, SectionLabel } from "@/components/ui";
import { NauButton } from "@/components/NauButton";
import { team } from "@/lib/data";

export default function StudioPage() {
  const me = team[0];

  return (
    <>
      <PageHero
        title="About"
        subtitle="Organic go-to-market and content that matters for product brands growing steadily. The full 360 from research to storytelling is what sets me apart from creators."
      />

      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn>
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight">
                One cycle: immerse, define, create, refine.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  <span className="font-medium text-foreground">1. Immerse.</span>{" "}
                  How the product works, why it exists, and what steady growth
                  actually means for the brand.
                </p>
                <p>
                  <span className="font-medium text-foreground">2. Define.</span>{" "}
                  Market research, audience, positioning and the messages worth
                  testing before anyone films a post.
                </p>
                <p>
                  <span className="font-medium text-foreground">3. Create.</span>{" "}
                  Organic go-to-market and founder-led or product-led content
                  that matters, built with the brand team.
                </p>
                <p>
                  <span className="font-medium text-foreground">4. Refine.</span>{" "}
                  What compounds, what resonates, what to improve next. The
                  cycle stays connected. That is the difference from hiring a
                  creator alone.
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
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-muted">{me.role}</p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {me.bio}
              </p>
              <NauButton href="/contact" className="mt-8">
                Work with me
              </NauButton>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
