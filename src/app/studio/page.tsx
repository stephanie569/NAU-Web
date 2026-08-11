import type { Metadata } from "next";
import Image from "next/image";
import { ClientsSection } from "@/components/ClientsSection";
import { NauButton } from "@/components/NauButton";
import { NauLogoMark } from "@/components/NauLogoMark";
import { siteConfig } from "@/lib/data";
import { studioPageCopy } from "@/lib/sections";

function PlusBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
        dark ? "bg-white" : "bg-[#0a0a0a]"
      }`}
    >
      <span
        className={`absolute h-px w-3 ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}
      />
      <span
        className={`absolute h-3 w-px ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}
      />
    </span>
  );
}

export const metadata: Metadata = {
  title: studioPageCopy.meta.title,
  description: studioPageCopy.meta.description,
  openGraph: {
    title: studioPageCopy.meta.title,
    description: studioPageCopy.meta.description,
    type: "website",
  },
  alternates: {
    canonical: "/studio",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "nau studio",
  url: "https://thetimeisnau.com/studio",
  description: studioPageCopy.meta.description,
  founder: {
    "@type": "Person",
    name: "Stefani Dimitrova",
    jobTitle: "Founder · Organic GTM & Product Storytelling",
    image: "https://thetimeisnau.com/images/stefani-studio-portrait.jpg",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "BG",
    addressRegion: "Europe",
  },
  areaServed: {
    "@type": "Place",
    name: "Europe",
  },
  email: siteConfig.email,
  telephone: siteConfig.phone,
  knowsAbout: [
    "Organic go-to-market",
    "Product positioning",
    "Content creation",
    "Founder-led storytelling",
    "Outdoor and travel brands",
  ],
};

export default function StudioPage() {
  const { intro, impact, approach, story, aboutStudio, collaborationPhoto, cycle } =
    studioPageCopy;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Intro header */}
      <section
        className="bg-[#f5f5f5] px-1 pb-1 pt-1"
        data-header-theme="dark"
      >
        <div className="relative min-h-[min(62svh,560px)] overflow-hidden rounded-[25px] bg-[#0a0a0a] md:min-h-[min(68svh,640px)]">
          <Image
            src={intro.photo.src}
            alt={intro.photo.alt}
            fill
            priority
            className="object-cover object-[72%_center] grayscale brightness-[0.55]"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  115deg,
                  rgba(10, 10, 10, 0.72) 0%,
                  rgba(10, 10, 10, 0.55) 45%,
                  rgba(10, 10, 10, 0.68) 100%
                ),
                linear-gradient(
                  to top,
                  rgba(10, 10, 10, 0.55) 0%,
                  rgba(10, 10, 10, 0.15) 50%
                )
              `,
            }}
          />

          <div className="relative z-10 mx-auto flex h-full min-h-[inherit] w-full max-w-[1520px] flex-col px-6 py-10 md:px-9 md:py-12">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <PlusBadge dark />
                <p className="text-[15px] font-medium tracking-[-0.04em] text-[#f5f5f5]">
                  {intro.label}
                </p>
              </div>
              <p className="text-[13px] font-medium tracking-[-0.03em] text-[#f5f5f5]/55">
                {intro.location}
                <span className="mx-1.5 text-[#f5f5f5]/30">·</span>
                {intro.since}
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-2 py-10 sm:py-12">
              <div className="text-center">
                <h1 className="m-0 leading-none">
                  <span className="sr-only">nau studio</span>
                  <NauLogoMark
                    size="hero"
                    className="text-[#f5f5f5] drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
                  />
                </h1>
                <p className="mt-2 text-[clamp(1.35rem,2.6vw,2rem)] font-medium tracking-[-0.04em] text-[#f5f5f5]/75">
                  Studio
                </p>
              </div>
              <p className="mt-7 max-w-[34rem] text-center text-pretty text-[clamp(1.05rem,2.4vw,1.35rem)] leading-snug font-medium tracking-[-0.04em] text-[#f5f5f5]/80 sm:mt-8">
                {approach.lead}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-[#f5f5f5] px-6 pb-12 pt-10 md:px-9 md:pb-16 md:pt-12">
        <div className="mx-auto grid max-w-[56rem] grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 md:grid-cols-4 md:gap-x-8">
          {impact.stats.map((stat) => (
            <div key={stat.label} className="min-w-0 text-center">
              <p className="text-[clamp(1.85rem,5vw,2.75rem)] leading-none font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] leading-snug font-medium tracking-[-0.03em] text-[#0a0a0a]/50 sm:mt-3 sm:text-[13px] md:text-[14px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ClientsSection label="Clients" />

      {/* 2. Story of me + photo */}
      <section
        id="story"
        className="bg-[#f5f5f5] px-6 pb-12 pt-4 md:px-9 md:pb-16 md:pt-6"
        aria-labelledby="studio-story-title"
      >
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="grid gap-8 rounded-[24px] bg-white p-5 md:gap-10 md:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:p-10">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[480px] overflow-hidden rounded-[18px] bg-[#f0f0f0] lg:mx-0">
              <Image
                src={story.photo.src}
                alt={story.photo.alt}
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                <PlusBadge dark />
                <p className="text-[15px] font-semibold tracking-[-0.04em] text-white drop-shadow-sm">
                  {story.photo.caption}
                </p>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <PlusBadge />
                <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
                  {story.label}
                </p>
              </div>

              <h2
                id="studio-story-title"
                className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-[#0a0a0a]"
              >
                {story.title}
              </h2>
              <p className="mt-3 text-[14px] font-medium tracking-[-0.04em] text-[#0a0a0a]/50">
                {story.role}
              </p>

              <div className="mt-6 space-y-4 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/65">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-[#0a0a0a]/8 pt-6 sm:grid-cols-4">
                {story.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a]/40">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-[14px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What is nau studio */}
      <section
        id="about-nau"
        className="bg-[#0a0a0a] px-6 py-12 md:px-9 md:py-16"
        data-header-theme="dark"
        aria-labelledby="studio-about-title"
      >
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="mb-8 flex items-center gap-3 md:mb-10">
            <PlusBadge dark />
            <p className="text-[15px] font-medium tracking-[-0.04em] text-white">
              {aboutStudio.label}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16 xl:gap-24">
            <div>
              <h2
                id="studio-about-title"
                className="max-w-[12ch] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-white"
              >
                {aboutStudio.title}
              </h2>
            </div>

            <div>
              <p className="text-[clamp(1.1rem,2vw,1.35rem)] leading-snug font-medium tracking-[-0.04em] text-white/80">
                {aboutStudio.lead}
              </p>
              <div className="mt-5 space-y-3 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/50">
                {aboutStudio.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <ol className="mt-12 border-t border-white/10">
            {aboutStudio.pillars.map((pillar) => (
              <li
                key={pillar.number}
                className="grid grid-cols-[56px_minmax(0,1fr)] gap-4 border-b border-white/10 py-5 sm:grid-cols-[72px_140px_minmax(0,1fr)] sm:items-baseline sm:gap-6 md:py-6"
              >
                <p className="text-[13px] font-medium tracking-[-0.04em] text-white/35">
                  ({pillar.number})
                </p>
                <h3 className="text-[15px] font-semibold tracking-[-0.04em] text-white sm:text-[16px]">
                  {pillar.title}
                </h3>
                <p className="col-span-2 text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/50 sm:col-span-1 sm:text-[15px]">
                  {pillar.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Collaboration photo - bridges practice and method */}
      <section className="bg-[#0a0a0a] px-6 pb-12 md:px-9 md:pb-16" data-header-theme="dark">
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-[#141414] md:aspect-[21/9]">
            <Image
              src={collaborationPhoto.src}
              alt={collaborationPhoto.alt}
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 1520px) 100vw, 1520px"
            />
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 md:p-6">
              <PlusBadge dark />
              <p className="text-[15px] font-semibold tracking-[-0.04em] text-white drop-shadow-sm">
                {collaborationPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full cycle */}
      <section
        id="cycle"
        className="bg-[#f5f5f5] px-6 py-12 md:px-9 md:py-16"
        aria-labelledby="studio-cycle-title"
      >
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="mb-8 flex items-center gap-3 md:mb-10">
            <PlusBadge />
            <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
              {cycle.label}
            </p>
          </div>

          <h2
            id="studio-cycle-title"
            className="max-w-[18ch] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-[#0a0a0a]"
          >
            {cycle.title}
          </h2>
          <p className="mt-5 max-w-[40rem] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60 md:text-[16px]">
            {cycle.lead}
          </p>

          <div className="mt-12 overflow-hidden">
            <div className="hidden grid-cols-[72px_minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,1.4fr)] gap-4 border-b border-[#0a0a0a]/10 pb-3 md:grid">
              <span aria-hidden />
              <p className="text-[12px] font-medium tracking-[-0.03em] text-[#0a0a0a]/40">
                {cycle.columns.stage}
              </p>
              <p className="text-[12px] font-medium tracking-[-0.03em] text-[#0a0a0a]/40">
                {cycle.columns.focus}
              </p>
              <p className="text-[12px] font-medium tracking-[-0.03em] text-[#0a0a0a]/40">
                {cycle.columns.outcome}
              </p>
            </div>

            <ol>
              {cycle.steps.map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-1 gap-2 border-b border-[#0a0a0a]/10 py-5 md:grid-cols-[72px_minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,1.4fr)] md:items-center md:gap-4 md:py-6"
                >
                  <p className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/35">
                    ({step.number})
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="hidden h-4 w-4 shrink-0 rounded-[3px] bg-[#0a0a0a]/15 sm:block"
                    />
                    <h3 className="text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-[16px]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[14px] font-medium tracking-[-0.04em] text-[#0a0a0a]/45 md:text-[15px]">
                    {step.focus}
                  </p>
                  <p className="text-[14px] leading-snug font-medium tracking-[-0.04em] text-[#0a0a0a]/55 md:text-[15px]">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <NauButton href="/#packages">See packages</NauButton>
          </div>
        </div>
      </section>
    </>
  );
}
