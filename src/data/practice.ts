import type { PracticeArea } from "@/types";

export const practiceAreas: PracticeArea[] = [
  {
    title: "Regulatory Compliance",
    description:
      "Translating MiCA, SEC enforcement and Nigeria's virtual asset regime into compliance systems a team can run.",
    points: ["VASP licensing", "AML / CFT & travel rule", "Regulatory memoranda"],
  },
  {
    title: "Entity & Token Structuring",
    description:
      "Choosing the right jurisdiction and vehicle, and planning token issuance backed by tokenomics and legal opinions.",
    points: ["Jurisdiction selection", "Token classification", "DAO & foundation design"],
  },
  {
    title: "Privacy & Data Protection",
    description:
      "Privacy stacks that respect user dignity and satisfy regulators, from GDPR and NDPR to wallet addresses as personal data.",
    points: ["GDPR / NDPR alignment", "Data minimisation", "Privacy-by-design reviews"],
  },
  {
    title: "Open Source & IP",
    description:
      "Who owns a pull request, what an MIT licence does and does not protect, and how courts treat on-chain outcomes.",
    points: ["Contributor agreements", "Licensing strategy", "IP ownership audits"],
  },
  {
    title: "Startup & Investor Readiness",
    description:
      "Getting the house in order before investors arrive: governance, founder agreements, records and a complete data room.",
    points: ["Founder & vesting agreements", "Board governance", "Due-diligence data rooms"],
  },
  {
    title: "Legal Education",
    description:
      "Workshops, keynotes and decks that make law usable for builders, designers and founders across Africa and beyond.",
    points: ["Founder workshops", "Developer talks", "Secondary-school blockchain classes"],
  },
];
