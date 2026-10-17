import Image from "next/image";
import { bio } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/events/stellar-west-africa/podium-closeup.jpg"
              alt="Ayanfeoluwa Olajide at the podium, Stellar West Africa Conference 2025"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-3 -bottom-6 max-w-[16rem] rounded-2xl border border-border-strong bg-surface p-5 sm:-right-8">
            <p className="label text-primary">Selected</p>
            <p className="mt-2 font-display text-lg leading-snug">Devconnect Scholar by the Ethereum Foundation</p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="label text-primary">§ About</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {bio.headline}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 font-display text-xl leading-relaxed text-foreground sm:text-2xl">{bio.lead}</p>
          </Reveal>
          {bio.paragraphs.map((p, i) => (
            <Reveal key={i} delay={150 + i * 50}>
              <p className="mt-5 leading-relaxed text-foreground-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={260}>
            <blockquote className="mt-10 border-l-2 border-primary pl-6">
              <p className="font-display text-2xl leading-snug italic text-balance sm:text-3xl">
                &ldquo;{bio.thesis}&rdquo;
              </p>
              <footer className="mt-3 label text-foreground-subtle">
                The throughline
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
