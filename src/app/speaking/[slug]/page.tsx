import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EventCard } from "@/components/speaking/EventCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { Reveal } from "@/components/ui/Reveal";
import { events, getEvent } from "@/data/events";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema, eventSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

// Every slug is prerendered from generateStaticParams, so awaiting params never blocks in production.
export const instant = false;

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps<"/speaking/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return pageMetadata({
    title: `${event.title} · ${event.event} ${event.year}`,
    description: event.summary,
    path: `/speaking/${event.slug}`,
    image: event.cover.src,
  });
}

export default async function EventPage({ params }: PageProps<"/speaking/[slug]">) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const index = events.findIndex((e) => e.slug === slug);
  const next = events[(index + 1) % events.length];
  const prev = events[(index - 1 + events.length) % events.length];

  return (
    <>
      <JsonLd
        data={[
          eventSchema(event),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Speaking", path: "/speaking" },
            { name: event.title, path: `/speaking/${event.slug}` },
          ]),
        ]}
      />

      <article>
        <header className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-40 sm:pb-20">
          <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="animate-enter">
              <nav aria-label="Breadcrumb" className="text-xs text-foreground-subtle">
                <Link href="/speaking" className="hover:text-primary">
                  ← All engagements
                </Link>
              </nav>
              <p className="mt-8 label text-foreground-muted">
                {event.exhibit && <span className="mr-3 text-primary">Exhibit {event.exhibit}</span>}
                {event.event} · {event.year}
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] tracking-tight text-balance">
                {event.title}
              </h1>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm sm:grid-cols-3">
                <div>
                  <dt className="label text-foreground-subtle">Format</dt>
                  <dd className="mt-1">{event.format}</dd>
                </div>
                <div>
                  <dt className="label text-foreground-subtle">Where</dt>
                  <dd className="mt-1">{event.location}</dd>
                </div>
                <div>
                  <dt className="label text-foreground-subtle">Year</dt>
                  <dd className="mt-1">{event.year}</dd>
                </div>
              </dl>
            </div>
            <div className="relative aspect-[4/5] animate-enter overflow-hidden rounded-3xl border border-border-strong [animation-delay:120ms]">
              <Image
                src={event.cover.src}
                alt={event.cover.alt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Container>
        </header>

        <Container className="grid gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-display text-2xl leading-snug text-balance sm:text-3xl">{event.summary}</p>
            {event.panelists && (
              <p className="mt-6 text-sm text-foreground-muted">
                <span className="label text-foreground-subtle">
                  Alongside
                </span>
                <br />
                {event.panelists.join(", ")}
              </p>
            )}
            <ul className="mt-6 flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] text-foreground-muted">
                  #{tag}
                </li>
              ))}
            </ul>
          </Reveal>
          <div>
            {event.argument && (
              <Reveal className="rounded-3xl border border-border bg-surface p-7 sm:p-10">
                <p className="label text-primary">What I argued</p>
                <p className="mt-4 text-lg leading-relaxed text-foreground-muted">{event.argument}</p>
              </Reveal>
            )}
            <Reveal delay={100}>
              <h2 className="mt-14 label text-foreground-subtle">
                From the room · {event.photos.length} photo{event.photos.length > 1 ? "s" : ""}
              </h2>
            </Reveal>
            <PhotoGrid photos={event.photos} className="mt-6 lg:columns-2" />
            <div className="mt-12">
              <Button href={`mailto:${siteConfig.email}?subject=Speaking%20invitation`}>
                Invite Ayanfe to speak <ArrowIcon />
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <section aria-label="More engagements" className="border-t border-border py-20">
        <Container>
          <p className="label text-primary">§ Keep reading</p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {[prev, next].map((e) => (
              <li key={e.slug}>
                <EventCard event={e} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
