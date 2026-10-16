import { sortedPosts } from "@/data/posts";
import { PostCard } from "@/components/blog/PostCard";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="§ Teaching decks"
            title={
              <>
                Slides that make the <em className="text-primary">law usable</em>.
              </>
            }
            description="Fifteen decks and counting, written for founders, developers and designers."
          />
          <Button href="/blog" variant="outline" className="shrink-0 self-start lg:self-end">
            View all decks <ArrowIcon />
          </Button>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.slice(0, 3).map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 80}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
