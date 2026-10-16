import { siteConfig } from "@/data/site";
import type { SpeakingEvent } from "@/types";
import { absoluteUrl } from "./seo";

export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": absoluteUrl("/#person"),
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  image: absoluteUrl(siteConfig.ogImage),
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  worksFor: { "@type": "LegalService", name: siteConfig.firm },
  knowsAbout: [
    "Web3 law",
    "Cryptocurrency regulation",
    "MiCA",
    "Virtual asset regulation in Nigeria",
    "Data protection",
    "Open source licensing",
    "Token structuring",
  ],
  award: ["Devconnect Scholar, Ethereum Foundation", "SuperteamNG Grant"],
  sameAs: Object.values(siteConfig.socials),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  author: { "@id": absoluteUrl("/#person") },
});

export const eventSchema = (event: SpeakingEvent) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${event.title} at ${event.event}`,
  description: event.summary,
  startDate: String(event.year),
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode:
    event.location === "Virtual"
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
  location:
    event.location === "Virtual"
      ? { "@type": "VirtualLocation", url: absoluteUrl(`/speaking/${event.slug}`) }
      : { "@type": "Place", name: event.location, address: event.location },
  image: event.photos.map((p) => absoluteUrl(p.src)),
  performer: { "@id": absoluteUrl("/#person") },
  url: absoluteUrl(`/speaking/${event.slug}`),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
