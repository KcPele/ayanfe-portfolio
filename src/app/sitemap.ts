import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/speaking", "/blog"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const eventPages = events.map((event) => ({
    url: absoluteUrl(`/speaking/${event.slug}`),
    changeFrequency: "yearly" as const,
    priority: 0.6,
    images: event.photos.map((p) => absoluteUrl(p.src)),
  }));

  return [...pages, ...eventPages];
}
