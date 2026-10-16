import { stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section aria-label="At a glance" className="py-16 sm:py-20">
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="flex flex-col-reverse bg-background p-6 sm:p-10">
              <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted">
                {stat.label}
              </dt>
              <dd className="font-display text-5xl text-foreground sm:text-6xl">
                {stat.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
