import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            kicker="§ The Law in Crypto"
            title="Articles & mini research papers"
            description="Case analysis and long-form thinking on where courts, regulators and code collide."
          />
          <Reveal delay={120}>
            <Button href={siteConfig.socials.substack} variant="outline" className="mt-8">
              Read on Substack <ArrowIcon />
            </Button>
          </Reveal>
        </div>
        <ol className="divide-y divide-border border-y border-border">
          {articles.map((article, i) => (
            <Reveal as="li" key={article.title} delay={i * 80}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-6 py-8 transition-colors"
              >
                <span className="text-sm text-foreground-subtle">0{i + 1}</span>
                <span className="flex-1">
                  <span className="block font-display text-2xl leading-tight transition-colors group-hover:text-primary sm:text-3xl">
                    {article.title}
                  </span>
                  <span className="mt-3 block leading-relaxed text-foreground-muted">{article.description}</span>
                </span>
                <ArrowIcon className="mt-2 size-5 shrink-0 text-foreground-subtle group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
