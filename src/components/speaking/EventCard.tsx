import Image from "next/image";
import Link from "next/link";
import type { SpeakingEvent } from "@/types";

export function EventCard({ event }: { event: SpeakingEvent }) {
  return (
    <Link
      href={`/speaking/${event.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/70 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={event.cover.src}
          alt={event.cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[11px] text-foreground backdrop-blur">
          {event.year}
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[11px] text-foreground-muted backdrop-blur">
          {event.photos.length} photo{event.photos.length > 1 ? "s" : ""}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary-strong">{event.event}</p>
        <h2 className="mt-3 font-display text-2xl leading-tight text-balance transition-colors group-hover:text-primary">
          {event.title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">{event.summary}</p>
        <p className="mt-5 text-xs text-foreground-subtle">
          {event.format} · {event.location}
        </p>
      </div>
    </Link>
  );
}
