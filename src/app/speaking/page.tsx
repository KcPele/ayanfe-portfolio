import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/ContactCta";
import { EventCard } from "@/components/speaking/EventCard";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { events } from "@/data/events";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Speaking & Engagements",
  description:
    "Talks, panels and workshops by Web3 legal counsel Ayanfeoluwa Olajide: Devconnect Buenos Aires, Ethereum Privacy Stack, Web3Lagos, Solana Startup Village, Stellar West Africa and more.",
  path: "/speaking",
  image: "/images/events/ethereum-privacy-stack/main-stage.jpg",
});

export default function SpeakingPage() {
  const byYear = [...events].sort((a, b) => b.year - a.year);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Speaking", path: "/speaking" }])} />
      <PageHeader
        kicker="§ Speaking"
        title={
          <>
            {events.length} stages, <em className="text-gradient">one argument</em>.
          </>
        }
        description="From the Devconnect main stage in Buenos Aires to founder workshops in Lagos and classrooms across Nigeria, each engagement is a public record of the work."
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {byYear.map((event, i) => (
              <Reveal as="li" key={event.slug} delay={(i % 3) * 80}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <ContactCta />
    </>
  );
}
