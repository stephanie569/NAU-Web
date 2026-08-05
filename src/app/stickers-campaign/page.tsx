import { PageHero } from "@/components/ui";

export default function StickersCampaignPage() {
  return (
    <>
      <PageHero
        title="Stickers campaign"
        subtitle="A small-format brand moment—designed to travel, stick, and spark conversation outdoors."
      />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              The nau stickers campaign is a small outdoor marketing moment—
              founder-led, physical and easy to share. It is part of how I think
              about organic and experiential marketing: stories that travel
              beyond a screen.
            </p>
            <p>
              Stickers are free to friends, partners, and founders building
              products worth talking about. Reach out if you would like a pack.
            </p>
            <p>
              <a
                href="mailto:info@thetimeisnau.com"
                className="font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                info@thetimeisnau.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
