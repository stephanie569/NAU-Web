import Image from "next/image";
import Link from "next/link";
import { NauButton } from "@/components/NauButton";
import { ClientWorkSlider } from "@/components/ClientWorkSlider";
import {
  getRelatedClients,
  type ClientProfile as ClientProfileData,
} from "@/lib/clients";

export function ClientProfile({
  client,
}: {
  client: ClientProfileData;
}) {
  const related = getRelatedClients(client.slug);

  return (
    <section className="bg-[#f5f5f5] px-1 pb-1 pt-1">
      <div className="overflow-hidden rounded-[25px] bg-white px-6 py-12 md:px-9 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1520px]">
          <Link
            href="/clients"
            className="text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45 transition-colors hover:text-[#0a0a0a]"
          >
            Clients
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
            <div className="flex min-w-0 flex-col justify-center py-2 lg:py-6">
              <p className="text-[12px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45">
                {client.role} · {client.year}
              </p>
              <h1 className="mt-3 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.08] font-semibold tracking-[-0.055em] text-pretty text-[#0a0a0a]">
                {client.name}
              </h1>
              <p className="mt-3 max-w-[34rem] bg-gradient-to-r from-[#5b4b9b] via-[#0a1f5a] to-[#00a8e8] bg-clip-text text-[clamp(1.2rem,2.2vw,1.55rem)] leading-[1.25] font-semibold tracking-[-0.045em] text-pretty text-transparent">
                {client.headline}
              </p>
              <p className="mt-6 max-w-[34rem] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-pretty text-[#0a0a0a]/70 md:text-[16px]">
                {client.bio}
              </p>

              <div className="mt-8">
                <NauButton href="/contact">Work with me</NauButton>
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[18px] bg-[#f0f0f0] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[28rem] lg:max-w-none">
              <Image
                src={client.photo}
                alt={client.photoAlt}
                fill
                priority
                className="object-cover object-center"
                quality={95}
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
              {client.slug === "the-pine" ? null : client.slug === "fly-the-earth" ? (
                <div className="pointer-events-none absolute top-[8%] left-[7%] z-[2] h-14 w-[7.5rem] opacity-[0.28] mix-blend-screen sm:h-[4.25rem] sm:w-36">
                  <Image
                    src={client.logo}
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="144px"
                  />
                </div>
              ) : (
                <div className="absolute top-4 left-4 z-[2] flex h-12 w-12 items-center justify-center rounded-full bg-white/90 p-2 backdrop-blur-sm">
                  <div className="relative h-full w-full">
                    <Image
                      src={client.logo}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-14 border-t border-[#0a0a0a]/10 pt-10 md:mt-16 md:pt-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
              Campaign brief
            </p>
            <h2 className="mt-2 max-w-[40rem] text-[clamp(1.45rem,2.6vw,2rem)] leading-snug font-semibold tracking-[-0.05em] text-[#0a0a0a]">
              Research and go-to-market goals.
            </h2>
            <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="flex h-full flex-col rounded-[20px] bg-[#f5f5f5] p-6 md:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
                  Market research
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-pretty text-[#0a0a0a]/70 md:text-[16px]">
                  {client.campaign.research}
                </p>
              </div>
              <div className="flex h-full flex-col rounded-[20px] bg-[#f5f5f5] p-6 md:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
                  Go-to-market goals
                </p>
                <ul className="mt-3 flex-1 space-y-3">
                  {client.campaign.goals.map((goal) => (
                    <li
                      key={goal}
                      className="flex gap-3 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/70 md:text-[16px]"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#5b4b9b] to-[#00a8e8]"
                      />
                      <span className="text-pretty">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-[#0a0a0a]/10 pt-10 md:mt-16 md:pt-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
              Results
            </p>
            <h2 className="mt-2 max-w-[40rem] text-[clamp(1.45rem,2.6vw,2rem)] leading-snug font-semibold tracking-[-0.05em] text-[#0a0a0a]">
              What the campaign achieved.
            </h2>
            <p className="mt-3 max-w-[40rem] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-pretty text-[#0a0a0a]/55 md:text-[16px]">
              {client.results.summary}
            </p>
            {client.results.metrics.length > 0 ? (
              <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {client.results.metrics.map((metric) => (
                  <li
                    key={metric.label}
                    className="rounded-[18px] border border-[#0a0a0a]/8 bg-[#fafafa] px-4 py-5 md:px-5"
                  >
                    <p className="text-[clamp(1.5rem,3vw,2rem)] leading-none font-semibold tracking-[-0.05em] text-[#0a0a0a]">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/50">
                      {metric.label}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="mt-14 border-t border-[#0a0a0a]/10 pt-10 md:mt-16 md:pt-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
              What I built
            </p>
            <h2 className="mt-2 max-w-[36rem] text-[clamp(1.45rem,2.6vw,2rem)] leading-snug font-semibold tracking-[-0.05em] text-[#0a0a0a]">
              Immerse yourself in the series.
            </h2>
            <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/55">
              Videos play on this page, so you can stay with the story without
              leaving the site.
            </p>
            <div className="mt-8">
              <ClientWorkSlider work={client.work} />
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mt-14 border-t border-[#0a0a0a]/10 pt-10 md:mt-16 md:pt-12">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
                    More clients
                  </p>
                  <h2 className="mt-2 text-[clamp(1.45rem,2.6vw,2rem)] leading-snug font-semibold tracking-[-0.05em] text-[#0a0a0a]">
                    Keep exploring the work.
                  </h2>
                </div>
                <Link
                  href="/clients"
                  className="text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45 transition-colors hover:text-[#0a0a0a]"
                >
                  All clients
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/clients/${item.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-[20px] bg-[#f5f5f5] transition-colors group-hover:bg-[#efefef]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={item.photo}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-3 px-5 py-4">
                        <div className="min-w-0">
                          <p className="truncate text-[16px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                            {item.name}
                          </p>
                          <p className="mt-0.5 truncate text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/50">
                            {item.role}
                          </p>
                        </div>
                        <span
                          aria-hidden
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0a0a0a]/10 bg-white text-[#0a0a0a] transition-colors duration-300 group-hover:border-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-white"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M6 3.5L10.5 8L6 12.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
