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
        subtitle="Every project I take on is designed for long-term success. I partner closely with clients to make sure the work meets your goals and exceeds expectations."
      />

      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn>
              <SectionLabel>Approach</SectionLabel>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight">
                Simple: clarity, purpose, and focus from collaboration.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted leading-relaxed">
                From product strategy to launches and go-to-market, I offer
                focused support to strengthen your project. I&apos;ll shape a
                solution that fits your business—not a one-size-fits-all
                process.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                I prioritize clarity without sacrificing craft. Whether you need
                positioning, a launch narrative, or distribution that
                compounds—every detail should serve your goals.
              </p>
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
                Start a project
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
