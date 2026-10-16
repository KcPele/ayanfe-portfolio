import type { BlogPost } from "@/types";

/* -------------------------------------------------------------------------- */
/*  Blog / teaching decks                                                      */
/*                                                                             */
/*  The blog page and the home-page teaser are generated from this list.       */
/*  To add a deck: copy an object, give it a unique `slug`, and fill in the    */
/*  fields. Newest `date` shows first.                                         */
/*                                                                             */
/*  image    – path under /public (e.g. "/images/blog/privacy-stack.jpg") or   */
/*             a full https URL. Leave "" to show a generated cover.           */
/*  gammaUrl – the "Read more" button opens this link in a new tab.            */
/*                                                                             */
/*  NOTE: images below are placeholders (event photos) and gammaUrl values     */
/*  point to gamma.app until the real deck links are added.                    */
/* -------------------------------------------------------------------------- */

export const posts: BlogPost[] = [
  {
    slug: "privacy-stack-legal-complexities",
    title: "Navigating the Legal Complexities of Building a Thorough Privacy Stack",
    description:
      "A privacy stack must protect user dignity and meet regulators at once. Monero shows where absolute anonymity leads, Zcash why optional privacy fails, and Tornado Cash that sanctions can attach to code itself.",
    image: "/images/events/devconnect-privacy-workshop/workshop-wide.jpg",
    gammaUrl: "https://gamma.app/",
    date: "2025-11-19",
    pages: 12,
    tags: ["Privacy", "Compliance"],
  },
  {
    slug: "forks-pull-requests-ownership-wars",
    title: "Forks, Pull Requests and Ownership Wars",
    description:
      "Open-source collaboration raises three legal questions: who owns a contribution, whether on-chain outcomes are enforceable, and when a token sale becomes a securities offering. Jacobsen v Katzer, B2C2 v Quoine and SEC v LBRY.",
    image: "/images/events/devconnect-open-source-hub/presenting.jpg",
    gammaUrl: "https://gamma.app/",
    date: "2025-11-19",
    pages: 11,
    tags: ["Open source", "IP"],
  },
  {
    slug: "legal-roadmap-web3-startup",
    title: "Building a Legal Roadmap for Your Web3 Startup",
    description:
      "A legal roadmap is a strategic instrument from formation to new markets: jurisdiction, vehicle and counsel before incorporation; licensing, token issuance, IP, tax and due diligence after.",
    image: "/images/events/solana-startup-village/stage-sec-nigeria.jpg",
    gammaUrl: "https://gamma.app/",
    date: "2025-03-15",
    pages: 12,
    tags: ["Startups", "Structuring"],
  },
  {
    slug: "legal-considerations-blockchain-africa",
    title: "Legal Considerations for Blockchain Projects in Africa",
    description:
      "Africa is many regimes, not one. VASP and payment licences, sandboxes, AML and the travel rule, and fast-moving tax positions in Nigeria, South Africa and Kenya.",
    image: "/images/events/stellar-west-africa/talk-wide.jpg",
    gammaUrl: "https://gamma.app/",
    date: "2025-05-31",
    pages: 9,
    tags: ["Africa", "Regulation"],
  },
  {
    slug: "legal-101-designers-web3",
    title: "Legal 101 for Designers in Web3",
    description:
      "Define ownership in writing, pick the right licence and record it. Yuga Labs v Ryder Ripps shows why borrowed fonts, icons and imagery carry real litigation risk.",
    image: "",
    gammaUrl: "https://gamma.app/",
    date: "2025-07-10",
    pages: 10,
    tags: ["Design", "IP"],
  },
  {
    slug: "legal-side-of-product-building",
    title: "The Legal Side of Product Building: Contracts, Compliance and Scaling Safely",
    description:
      "Founder arrangements, collaboration agreements and data practices that protect the company, its team and its users as the product scales.",
    image: "/images/events/web3lagos-2026/presenting-1.jpg",
    gammaUrl: "https://gamma.app/",
    date: "2025-08-28",
    pages: 9,
    tags: ["Product", "Contracts"],
  },
  {
    slug: "tidying-your-startup-legal-compliance",
    title: "The Legal and Compliance Aspect of Tidying Your Startup",
    description:
      "Eight areas to complete before you meet investors: entity and share classes, a regulatory memo, provable governance, IP, financial records, founder agreements and a complete data room.",
    image: "/images/events/superteamng-legal-workshop/session-slide.jpg",
    gammaUrl: "https://gamma.app/",
    date: "2025-06-05",
    pages: 10,
    tags: ["Fundraising", "Governance"],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
