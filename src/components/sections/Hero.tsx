import Image from "next/image";
import { credentials, siteConfig } from "@/data/site";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 lg:min-h-[100svh] lg:pt-40 lg:pb-24">

      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="animate-enter">
          <p className="flex items-center gap-3 label text-primary sm:text-xs">
            <span className="h-px w-8 bg-primary" />
            {siteConfig.role} · {siteConfig.location}
          </p>

          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.92] tracking-tight">
            <span className="block">Ayanfeoluwa</span>
            <span className="block text-foreground-muted italic">Olajide</span>
          </h1>

          <p className="mt-8 max-w-xl font-display text-xl leading-snug text-foreground text-pretty sm:text-2xl">
            Where code meets regulation. Founders should not have to choose between{" "}
            <em>shipping</em> and <em className="text-primary">staying out of court</em>.
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
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[11px] text-foreground-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo collage */}
        <div className="relative mx-auto w-full max-w-md animate-enter [animation-delay:150ms] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border-strong">
            <Image
              src="/images/events/rwa-tokenization-africa/speaking-closeup.jpg"
              alt="Ayanfeoluwa Olajide speaking on the State of RWA Tokenization in Africa panel"
              fill
              preload
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-2 w-[42%] overflow-hidden rounded-2xl border-4 border-background sm:-left-10">
            <Image
              src="/images/events/stellar-west-africa/podium-2.jpg"
              alt="Ayanfeoluwa at the podium, Stellar West Africa Conference"
              width={1505}
              height={2000}
              sizes="(max-width: 1024px) 40vw, 18vw"
              className="h-auto w-full"
            />
          </div>

          <div className="absolute -top-4 -right-2 rounded-2xl bg-primary p-4 text-primary-foreground sm:-right-6">
            <p className="font-display text-3xl">30+</p>
            <p className="label">
              Ventures advised
            </p>
          </div>

          <div className="absolute right-3 bottom-16 hidden rounded-2xl border border-border bg-surface px-4 py-3 text-xs leading-relaxed text-foreground-muted sm:block">
            MiCA · SEC · VASP
            <br />
            GDPR · NDPR · AML
          </div>
        </div>
      </Container>
    </section>
  );
}
