import Image from "next/image";
import type { BlogPost } from "@/types";
import { ArrowIcon } from "@/components/ui/Button";
import { cn, formatDate, isExternal } from "@/lib/utils";

/** Generated cover used when a post has no image yet. */
function GeneratedCover({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-surface-raised p-6">
      <span className="relative label text-primary">Teaching deck</span>
      <p className="relative font-display text-2xl leading-tight text-balance">{title}</p>
    </div>
  );
}

export function PostCard({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-primary/60",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={`Cover for ${post.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized={isExternal(post.image)}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <GeneratedCover title={post.title} />
        )}
        {post.pages && (
          <span className="absolute top-4 right-4 rounded-full bg-background px-3 py-1 text-[11px] text-foreground">
            {post.pages} slides
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 label text-foreground-subtle">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags.map((tag) => (
            <span key={tag} className="text-foreground-muted">
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-display text-2xl leading-tight text-balance">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">{post.description}</p>
        <a
          href={post.gammaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-border-strong px-5 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          aria-label={`Read more: ${post.title} (opens the Gamma deck in a new tab)`}
        >
          Read more <ArrowIcon />
        </a>
      </div>
    </article>
  );
}
