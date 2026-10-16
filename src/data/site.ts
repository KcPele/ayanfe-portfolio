import type { NavLink, Stat } from "@/types";

export const siteConfig = {
  name: "Ayanfeoluwa Olajide",
  shortName: "Ayanfe Olajide",
  role: "Web3 Legal Counsel",
  title: "Ayanfeoluwa Olajide | Web3 Legal Counsel",
  description:
    "Ayanfeoluwa Olajide is a Web3 legal counsel and Lead Counsel at Neomos Solicitors in Nigeria. She turns MiCA, SEC enforcement and Nigeria's virtual asset framework into compliance systems founders can actually use.",
  // Set NEXT_PUBLIC_SITE_URL in your hosting environment once the domain is live.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayanfeolajide.com",
  locale: "en_NG",
  location: "Lagos, Nigeria",
  firm: "Neomos Solicitors",
  firmRole: "Lead Counsel",
  email: "ayanfe@neomosadvisory.com",
  ogImage: "/images/events/filecoin-orbit/speaking.jpg",
  keywords: [
    "Web3 lawyer Nigeria",
    "crypto lawyer Lagos",
    "blockchain legal counsel",
    "MiCA compliance",
    "virtual asset regulation Nigeria",
    "SEC Nigeria crypto",
    "token legal opinion",
    "DAO legal structure",
    "Web3 startup compliance",
    "Ayanfeoluwa Olajide",
    "The Law in Crypto",
    "Neomos Solicitors",
  ],
  socials: {
    substack: "https://thelawincrypto.substack.com",
    linkedin: "https://www.linkedin.com/in/ayanfeolajide",
    x: "https://x.com/shaperofculture",
  },
  xHandle: "@shaperofculture",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Practice", href: "/#practice" },
  { label: "Speaking", href: "/speaking" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const stats: Stat[] = [
  { value: "30+", label: "Web3 ventures advised" },
  { value: "13", label: "Stages on record" },
  { value: "15", label: "Teaching decks" },
  { value: "4", label: "Sessions at Devconnect ARG" },
];

export const credentials = [
  "Devconnect Scholar, Ethereum Foundation",
  "5,000 USDC SuperteamNG grant",
  "Lead Counsel, Neomos Solicitors",
];

export const bio = {
  headline: "I work where code meets regulation.",
  lead: "Ayanfeoluwa Olajide is a Web3 legal counsel and jurisprudential thinker based in Nigeria, and Lead Counsel at Neomos Solicitors.",
  paragraphs: [
    "She turns regimes like MiCA, SEC enforcement and Nigeria's virtual asset framework into compliance systems founders can actually use. She has advised more than 30 Web3 ventures, built legal frameworks for the Nigerian Solana ecosystem backed by a 5,000 USDC SuperteamNG grant, and was selected as a Devconnect Scholar by the Ethereum Foundation.",
    "Her speaking is the public record of that work: four sessions at Devconnect in Buenos Aires including the main stage, developer-focused talks at Web3Lagos, workshops for Solana founders, and panels on RWA tokenization in Africa, privacy stacks and open-source ownership.",
  ],
  thesis: "Founders should not have to choose between shipping and staying out of court.",
};
