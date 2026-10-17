import { siteConfig } from "@/data/site";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal className="rounded-[2rem] border border-border bg-surface px-6 py-16 sm:px-14 sm:py-24">
          <p className="label text-primary">§ Work with me</p>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-balance">
            Ship the product. <em className="text-primary">Stay out of court.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-foreground-muted sm:text-lg">
            Advisory for DAOs, DeFi protocols and startups, plus keynotes, panels and workshops for your
            community or conference.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={`mailto:${siteConfig.email}`} className="break-all">
              {siteConfig.email} <ArrowIcon />
            </Button>
            <SocialIcons />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
