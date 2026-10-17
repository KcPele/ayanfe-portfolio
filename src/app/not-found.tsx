import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-28">
      <Container>
        <p className="label text-primary">Error 404 · Case not found</p>
        <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]">
          This page is <em className="text-primary">out of court</em>.
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
