import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui";
import { ClientProfile } from "@/components/ClientProfile";
import { getPublishedClients, getClient } from "@/lib/clients";
import { projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const clientSlugs = getPublishedClients().map((client) => ({
    slug: client.slug,
  }));
  const projectSlugs = projects
    .filter(
      (project) =>
        !getPublishedClients().some((client) => client.slug === project.slug),
    )
    .map((project) => ({ slug: project.slug }));

  return [...clientSlugs, ...projectSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (client) {
    return {
      title: `${client.name} | nau studio`,
      description: client.bio,
      openGraph: {
        title: client.name,
        description: client.headline,
        images: [{ url: client.photo }],
      },
    };
  }

  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | nau studio`,
    description: project.description,
  };
}

export default async function ClientDetailPage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);

  if (client) {
    return <ClientProfile client={client} />;
  }

  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-border pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <p className="text-sm text-muted">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {project.description}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="relative aspect-[16/9] w-full bg-surface">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold">Case study</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Client
                </p>
                <p className="mt-2 font-medium">{project.title}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Service
                </p>
                <p className="mt-2 font-medium">{project.category}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Year
                </p>
                <p className="mt-2 font-medium">{project.year}</p>
              </div>
            </div>
            <p className="mt-12 max-w-3xl leading-relaxed text-muted">
              {project.description} I worked with the brand team across the
              cycle that mattered for the brief: positioning, organic
              go-to-market and content that matched the product.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <h2 className="text-2xl font-semibold">More clients</h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {related.map((item, i) => (
              <FadeIn key={item.slug} delay={i * 0.05}>
                <Link href={`/clients/${item.slug}`} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
