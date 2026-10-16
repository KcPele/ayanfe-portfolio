import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Builds consistent per-page metadata (canonical, Open Graph, Twitter). */
export function pageMetadata({ title, description, path, image = siteConfig.ogImage }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.xHandle,
    },
  };
}
