import { Container } from "./Container";

type PageHeaderProps = {
  kicker: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ kicker, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-14 sm:pt-44 sm:pb-20">
      <Container>
        <div className="max-w-4xl animate-enter">
          <p className="label text-primary">{kicker}</p>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted text-pretty">{description}</p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
