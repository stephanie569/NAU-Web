import Image from "next/image";
import Link from "next/link";
import { PageHero, FadeIn, SectionLabel } from "@/components/ui";
import { team, jobOpenings } from "@/lib/data";

export default function StudioPage() {
  return (
    <>
      <PageHero
        title="About us"
        subtitle="Every project we take on is designed for long-term success. That's why we work closely with each other to ensure every project meets your goals and exceeds expectations."
      />

      <section className="border-b border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2">
            <FadeIn>
              <SectionLabel>Our approach</SectionLabel>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight">
                Simple: clarity, purpose, and focus from collaboration.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted leading-relaxed">
                From branding to web development and marketing, we offer flexible
                tools to strengthen your project. We&apos;ll shape a solution that
                fits your business, not ours.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                We prioritize performance without sacrificing visual appeal or
                functionality. Add marketing, SEO, or content creation—ensuring
                every detail serves your goals.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <SectionLabel>Team</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">
              Team Lead at fabrica®
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.05}>
                <div className="relative aspect-[3/4] overflow-hidden bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Careers</SectionLabel>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">
                Be part of our mission
              </h2>
            </div>
            <Link
              href="/contact"
              className="text-sm font-medium underline underline-offset-4 hover:opacity-70"
            >
              Apply now
            </Link>
          </FadeIn>

          <div className="mt-16 divide-y divide-border border-y border-border">
            {jobOpenings.map((job, i) => (
              <FadeIn
                key={job.title}
                delay={i * 0.05}
                className="flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between"
              >
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <div className="flex gap-4 text-sm text-muted">
                  <span>{job.type}</span>
                  <span>·</span>
                  <span>{job.location}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
