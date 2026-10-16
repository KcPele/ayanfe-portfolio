import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Error 404 · Case not found</p>
        <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]">
          This page is <em className="text-gradient">out of court</em>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground-muted">
          The page you are looking for has moved or never existed.
        </p>
        <Button href="/" className="mt-10">
          Back home <ArrowIcon />
        </Button>
      </Container>
    </section>
  );
}
