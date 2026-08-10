import { PageHero } from "@/components/ui";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        subtitle="QR codes across Europe. Find one, unlock a digital guide free."
      />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              The guides are paid for everyone online. Find a nau QR on a sticker
              somewhere across Europe and that same guide is free—say where you
              found it and I&apos;ll send the file.
            </p>
            <p>
              Stickers are free to friends, partners and brands building gear
              worth talking about.{" "}
              <a
                href="/#guides"
                className="font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                See the guides
              </a>
              , or email for a pack.
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
