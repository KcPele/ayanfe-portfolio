import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowIcon, Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { sortedPosts } from "@/data/posts";
import { siteConfig } from "@/data/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Blog & Teaching Decks",
  description:
    "Teaching decks by Ayanfeoluwa Olajide on privacy stacks, open-source ownership, Web3 startup legal roadmaps, blockchain regulation in Africa and investor readiness.",
  path: "/blog",
});

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} · Teaching decks`,
    url: absoluteUrl("/blog"),
    author: { "@id": absoluteUrl("/#person") },
    blogPost: sortedPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: post.gammaUrl,
      ...(post.image && { image: post.image.startsWith("http") ? post.image : absoluteUrl(post.image) }),
      author: { "@id": absoluteUrl("/#person") },
    })),
  };

  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])]} />
      <PageHeader
        kicker="§ Blog"
        title={
          <>
            Teaching decks, <em className="text-gradient">in full</em>.
          </>
        }
        description="Each deck is written so the argument is readable on its own. Open any of them for the full slides."
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={(i % 3) * 80}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-16 flex flex-col items-start gap-5 rounded-3xl border border-border bg-surface/60 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl">Prefer long-form?</p>
              <p className="mt-1 text-foreground-muted">Essays and case analysis live on The Law in Crypto.</p>
            </div>
            <Button href={siteConfig.socials.substack} variant="outline">
              Read on Substack <ArrowIcon />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
