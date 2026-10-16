import { practiceAreas } from "@/data/practice";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Practice() {
  return (
    <section id="practice" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-glow opacity-60" />
      <Container>
        <SectionHeading
          kicker="§ What I do"
          title={
            <>
              Legal infrastructure for people <em className="text-primary">building the future</em>.
            </>
          }
          description="I advise DAOs, DeFi protocols and startups on entity design, licensing, token posture, privacy and investor readiness, and I teach these subjects on stage."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => (
            <Reveal
              as="li"
              key={area.title}
              delay={(i % 3) * 80}
              className="group relative flex flex-col rounded-3xl border border-border bg-surface/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:bg-surface-raised"
            >
              <span className="font-mono text-xs text-foreground-subtle">§ {String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-2xl leading-tight transition-colors group-hover:text-primary">
                {area.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">{area.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-foreground-muted"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
