import Image from "next/image";
import Link from "next/link";
import { featuredEvents } from "@/data/events";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function FeaturedTalks() {
  return (
    <section id="record" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="§ On the record"
            title={
              <>
                Every talk, <em className="text-primary">photo proof</em>.
              </>
            }
            description="My speaking is the public record of my work. Each exhibit pairs what I argued with a photo from the room."
          />
          <Button href="/speaking" variant="outline" className="shrink-0 self-start lg:self-end">
            All engagements <ArrowIcon />
          </Button>
        </div>

        <ol className="mt-16 space-y-20 sm:space-y-28">
          {featuredEvents.map((event, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={event.slug} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                <Reveal className={cn("lg:col-span-6", flip && "lg:order-2")}>
                  <Link
                    href={`/speaking/${event.slug}`}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-border sm:aspect-[5/4] lg:aspect-[4/5]"
                  >
                    <Image
                      src={event.cover.src}
                      alt={event.cover.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <span className="absolute top-5 left-5 rounded-full bg-primary px-4 py-1.5 label text-primary-foreground">
                      Exhibit {event.exhibit}
                    </span>
                  </Link>
                </Reveal>

                <Reveal delay={120} className={cn("lg:col-span-6", flip && "lg:order-1")}>
                  <p className="label text-foreground-muted">
                    {event.event} · {event.year}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-balance sm:text-4xl">
                    <Link href={`/speaking/${event.slug}`} className="transition-colors hover:text-primary">
                      {event.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-foreground-subtle">
                    {event.format} · {event.location}
                    {event.panelists && <> · with {event.panelists.join(", ")}</>}
                  </p>
                  <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
                    <p className="label text-primary">What I argued</p>
                    <p className="mt-3 leading-relaxed text-foreground-muted">{event.argument}</p>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] text-foreground-muted">
                        #{tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
