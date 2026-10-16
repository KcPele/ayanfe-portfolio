import Image from "next/image";
import { credentials, siteConfig } from "@/data/site";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 lg:min-h-[100svh] lg:pt-40 lg:pb-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-glow" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="animate-enter">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-primary sm:text-xs">
            <span className="h-px w-8 bg-primary" />
            {siteConfig.role} · {siteConfig.location}
          </p>

          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.92] tracking-tight">
            <span className="block">Ayanfeoluwa</span>
            <span className="block italic text-gradient">Olajide</span>
          </h1>

          <p className="mt-8 max-w-xl font-display text-xl leading-snug text-foreground text-pretty sm:text-2xl">
            Where code meets regulation. Founders should not have to choose between{" "}
            <em className="text-primary">shipping</em> and <em className="text-primary">staying out of court</em>.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted">
            {siteConfig.firmRole} at {siteConfig.firm}. I turn MiCA, SEC enforcement and Nigeria&apos;s virtual
            asset framework into compliance systems builders can actually use.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${siteConfig.email}`}>
              Work with me <ArrowIcon />
            </Button>
            <Button href="/speaking" variant="outline">
              See the record
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] text-foreground-muted backdrop-blur"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo collage */}
        <div className="relative mx-auto w-full max-w-md animate-enter [animation-delay:150ms] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl border border-border-strong shadow-[0_40px_120px_-40px_var(--secondary)]">
            <Image
              src="/images/events/filecoin-orbit/speaking.jpg"
              alt="Ayanfeoluwa Olajide speaking at Filecoin Orbit Ibadan"
              fill
              preload
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-[60%_center]"
            />
          </div>

          <div className="absolute -bottom-8 -left-2 w-[42%] overflow-hidden rounded-2xl border-4 border-background shadow-2xl sm:-left-10 animate-float">
            <Image
              src="/images/events/rwa-tokenization-africa/speaking-portrait.jpg"
              alt="Ayanfeoluwa on the State of RWA in Africa panel"
              width={1600}
              height={2000}
              sizes="(max-width: 1024px) 40vw, 18vw"
              className="h-auto w-full"
            />
          </div>

          <div className="absolute -top-4 -right-2 rounded-2xl border border-border-strong bg-surface/90 p-4 backdrop-blur sm:-right-6">
            <p className="font-display text-3xl text-primary">30+</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
              Ventures advised
            </p>
          </div>

          <div className="absolute right-3 bottom-16 hidden rounded-xl border border-secondary/40 bg-background/80 px-4 py-3 font-mono text-[11px] leading-relaxed text-secondary-strong backdrop-blur sm:block">
            <span className="text-foreground-subtle">{"// "}</span>MiCA · SEC · VASP
            <br />
            <span className="text-foreground-subtle">{"// "}</span>GDPR · NDPR · AML
          </div>
        </div>
      </Container>
    </section>
  );
}
