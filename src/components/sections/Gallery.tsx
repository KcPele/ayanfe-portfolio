import { galleryPhotos } from "@/data/events";
import { Container } from "@/components/ui/Container";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="§ From the room"
          title={
            <>
              No stock. <em className="text-primary">No filler.</em>
            </>
          }
          description="From Buenos Aires to Lagos, Ibadan and online, these are the rooms where the work happens."
        />
        <PhotoGrid photos={galleryPhotos} className="mt-14" />
      </Container>
    </section>
  );
}
