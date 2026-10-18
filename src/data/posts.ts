import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    slug: "legal-roadmap-web3-startup",
    title: "Building a Legal Roadmap for Your Web3 Startup",
    description:
      "Staying compliant in Web3, one regulation at a time. A legal roadmap is a strategic guide from formation to new markets: jurisdiction, vehicle and counsel before incorporation; licensing, token issuance, IP, tax and due diligence after.",
    image: "/images/blog/legal-roadmap-web3-startup.jpg",
    gammaUrl: "https://gamma.app/docs/mcyep0pxll7trkz",
    date: "2025-03-14",
    pages: 12,
    tags: ["Startups", "Structuring"],
  },
  {
    slug: "tidying-up-your-startup",
    title: "The Legal and Compliance Aspect of Tidying Up Your Startup",
    description:
      "Is your startup investor-ready? The eight areas every founder must get right before a single investor meeting: entity structure, cap table, regulatory posture, governance, IP ownership, financial hygiene, founder agreements and the data room.",
    image: "/images/blog/tidying-up-your-startup.jpg",
    gammaUrl: "https://gamma.app/docs/reibbn6nxpx5cp3",
    date: "2026-06-29",
    pages: 10,
    tags: ["Fundraising", "Governance"],
  },
  {
    slug: "privacy-stack-legal-complexities",
    title: "Navigating the Legal Complexities of Building a Thorough Privacy Stack",
    description:
      "A privacy stack must protect user dignity and satisfy regulators at once. Monero shows where absolute anonymity leads, Zcash why optional privacy fails, and Tornado Cash that sanctions can attach to code itself.",
    image: "/images/blog/privacy-stack-legal-complexities.jpg",
    gammaUrl: "https://gamma.app/docs/0qqxqlzavpm2smk",
    date: "2025-10-19",
    pages: 12,
    tags: ["Privacy", "Compliance"],
  },
  {
    slug: "forks-pull-requests-ownership-wars",
    title: "Forks, Pull Requests and Ownership Wars: Who Really Owns Open Source?",
    description:
      "A practical guide to not getting sued by your contributors, your users or the SEC. Who owns a pull request, what an MIT licence does not protect, and how Jacobsen v Katzer, B2C2 v Quoine and SEC v LBRY apply to builders.",
    image: "/images/blog/forks-pull-requests-ownership-wars.jpg",
    gammaUrl: "https://gamma.app/docs/hzu2zdwan9roh41",
    date: "2025-10-18",
    pages: 11,
    tags: ["Open source", "IP"],
  },
  {
    slug: "shipping-code-dodging-court",
    title: "Shipping Code, Dodging Court: Legal Essentials for Web3 Devs",
    description:
      "What developers should settle before deploying to mainnet: written agreements with collaborators, compliance with integration partners, wallet addresses as personal data, consent and data minimisation, and how SEC Nigeria and the CBN classify assets.",
    image: "/images/blog/shipping-code-dodging-court.jpg",
    gammaUrl: "https://gamma.app/docs/gumxw2vyqivp3lt",
    date: "2025-05-03",
    tags: ["Developers", "Data protection"],
  },
  {
    slug: "legal-considerations-blockchain-africa",
    title: "Legal Considerations for Blockchain Projects in Africa",
    description:
      "Africa is many regimes, not one. VASP and payment licences, regulatory sandboxes, AML and the travel rule, and fast-moving tax positions in Nigeria, South Africa and Kenya.",
    image: "/images/blog/legal-considerations-blockchain-africa.jpg",
    gammaUrl: "https://gamma.app/docs/703qr5vmfeaotcx",
    date: "2025-05-28",
    pages: 9,
    tags: ["Africa", "Regulation"],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
