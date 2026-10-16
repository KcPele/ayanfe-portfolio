import type { Photo, SpeakingEvent } from "@/types";

/** Helper: builds a Photo for an image in /public/images/events/<folder>/<file> */
const photo = (folder: string, file: string, width: number, height: number, alt: string): Photo => ({
  src: `/images/events/${folder}/${file}`,
  width,
  height,
  alt,
});

/* -------------------------------------------------------------------------- */
/*  Speaking engagements                                                       */
/*  Add a new event by appending an object below. Put its photos in            */
/*  /public/images/events/<slug>/. Events with an `exhibit` letter appear in   */
/*  the "On the record" section of the home page.                              */
/* -------------------------------------------------------------------------- */

const privacyWorkshop = "devconnect-privacy-workshop";
const privacyStack = "ethereum-privacy-stack";
const openSource = "devconnect-open-source-hub";
const solana = "solana-startup-village";
const w3l25 = "web3lagos-2025";
const w3l26 = "web3lagos-2026";
const rwa = "rwa-tokenization-africa";
const stellar = "stellar-west-africa";
const superteam = "superteamng-legal-workshop";
const codeAfrica = "code-africa";
const filecoin = "filecoin-orbit";
const roqqu = "roqqu-blockchain-conference";
const schools = "blockchain-education-schools";

export const events: SpeakingEvent[] = [
  {
    slug: privacyWorkshop,
    exhibit: "A",
    title: "Navigating the Legal Complexities of Building a Thorough Privacy Stack",
    event: "Devconnect · Women in Web3 Privacy Hub",
    location: "Buenos Aires, Argentina",
    year: 2025,
    format: "Privacy workshop",
    summary:
      "A full-room teaching session on building privacy systems that respect user dignity while satisfying regulators.",
    argument:
      "I presented a framework for building privacy systems that respect user dignity while satisfying regulatory requirements. Drawing on the failures of earlier models, I showed why absolute anonymity leads to exchange delisting, as with Monero, and why optional privacy fails in practice, as with Zcash. I closed with the precedent set by Tornado Cash, where sanctions against autonomous code established that developers, code and operators can each attract liability.",
    tags: ["Privacy", "Tornado Cash", "Compliance"],
    cover: photo(privacyWorkshop, "workshop-room.jpg", 1125, 2000, "Ayanfeoluwa Olajide teaching a privacy stack workshop at Devconnect Buenos Aires"),
    photos: [
      photo(privacyWorkshop, "workshop-room.jpg", 1125, 2000, "Ayanfeoluwa leading the privacy workshop in front of a seated audience"),
      photo(privacyWorkshop, "workshop-wide.jpg", 2000, 1125, "Wide view of the Devconnect privacy workshop audience"),
      photo(privacyWorkshop, "speaker-card.jpg", 2000, 1125, "Women in Web3 Privacy Hub speaker card for Ayanfe, Buenos Aires 19.11.25"),
    ],
  },
  {
    slug: privacyStack,
    exhibit: "B",
    title: "From Tornado Cash to Future Developers Protection",
    event: "Ethereum Privacy Stack",
    location: "Buenos Aires, Argentina",
    year: 2025,
    format: "Main stage panel",
    summary:
      "Main stage panel on what the Tornado Cash sanctions mean for developers building privacy infrastructure today.",
    argument:
      "I addressed what the Tornado Cash sanctions mean for developers building privacy infrastructure today. My contribution focused on the legal boundaries of protocol development, the duty of care owed by builders, and the practical protections developers should put in place before they ship. This appearance placed my work alongside leading privacy researchers and builders from the Ethereum Foundation, Tor, Railgun DAO, Aztec and Brave.",
    panelists: ["Fatemeh Fannizadeh", "Marina Markezic", "Joan Arus", "Beth McCarthy"],
    tags: ["Privacy", "Developer liability", "Ethereum"],
    cover: photo(privacyStack, "main-stage.jpg", 1500, 2000, "Ethereum Privacy Stack main stage with the From Tornado Cash to Future Developers Protection panel on screen"),
    photos: [
      photo(privacyStack, "main-stage.jpg", 1500, 2000, "The main stage at Ethereum Privacy Stack, Buenos Aires"),
      photo(privacyStack, "speakers-group.jpg", 2000, 1500, "Ayanfeoluwa with fellow privacy speakers backstage"),
      photo(privacyStack, "speakers-lineup.jpg", 1718, 2000, "Ethereum Privacy Stack speaker line-up, 21 November 2025"),
    ],
  },
  {
    slug: openSource,
    exhibit: "C",
    title: "Forks, Pull Requests and Ownership Wars: Who Really Owns Open Source?",
    event: "Devconnect · Open Source Hub",
    location: "La Rural, Buenos Aires",
    year: 2025,
    format: "Case-law session",
    summary:
      "What happens when open-source collaboration meets copyright and securities law, with Jacobsen v Katzer on screen.",
    argument:
      "I examined what happens when open-source collaboration meets copyright and securities law. I showed that every pull request carries legal consequences, since copyright vests automatically in the contributor. I explained that an MIT licence governs copyright permission and offers no protection against securities liability, using SEC v LBRY as illustration, and that courts will set aside on-chain outcomes where established doctrines apply, drawing on B2C2 v Quoine and Jacobsen v Katzer.",
    tags: ["Open source", "Copyright", "Securities"],
    cover: photo(openSource, "talk-at-screen.jpg", 1500, 2000, "Ayanfeoluwa presenting case law at the Devconnect Open Source Hub"),
    photos: [
      photo(openSource, "talk-at-screen.jpg", 1500, 2000, "Ayanfeoluwa walking the audience through Jacobsen v Katzer"),
      photo(openSource, "presenting.jpg", 1126, 2000, "Ayanfeoluwa pointing to her slides at the Open Source Hub"),
      photo(openSource, "speaker-card.jpg", 2000, 2000, "Open Source Hub speaker card: Forks, Pull Requests and Ownership Wars"),
    ],
  },
  {
    slug: solana,
    exhibit: "D",
    title: "Building a Legal Roadmap for Your Web3 Startup",
    event: "Solana Startup Village Nigeria",
    location: "Lagos, Nigeria",
    year: 2025,
    format: "Main stage talk",
    summary:
      "Incorporation and compliance as the foundation every Web3 startup must lay before it scales.",
    argument:
      "I presented incorporation and compliance as the foundation every Web3 startup must establish before scaling. I walked founders through selecting a suitable jurisdiction, choosing the appropriate vehicle, securing required licences, planning token issuance with supporting legal opinions, and maintaining audit, tax and anti-money-laundering controls as the company grows, including where the SEC Nigeria and the Howey test come in.",
    tags: ["Startups", "Solana", "SEC Nigeria"],
    cover: photo(solana, "stage-thank-you.jpg", 1500, 2000, "Ayanfeoluwa on the Solana Startup Village main stage"),
    photos: [
      photo(solana, "stage-sec-nigeria.jpg", 1500, 2000, "Ayanfeoluwa presenting the SEC Nigeria framework on the Solana stage"),
      photo(solana, "stage-howey-test.jpg", 2000, 1500, "Explaining the Howey test to founders"),
      photo(solana, "stage-framework.jpg", 1500, 2000, "Walking through Nigeria's legal framework for crypto"),
      photo(solana, "stage-wide.jpg", 1500, 2000, "Wide shot of the Solana Startup Village main stage"),
      photo(solana, "stage-thank-you.jpg", 1500, 2000, "Closing the talk on the Solana stage"),
      photo(solana, "schedule.jpg", 1354, 2000, "Startup Village Nigeria schedule listing the legal roadmap talk"),
      photo(solana, "speaker-badge.jpg", 2000, 1500, "Startup Village Nigeria speaker badge"),
    ],
  },
  {
    slug: w3l25,
    exhibit: "E",
    title: "Nigeria's 2026 Virtual Asset Regime: Protection or Gatekeeping?",
    event: "Web3Lagos Conference",
    location: "Glover Memorial Hall, Lagos",
    year: 2025,
    format: "Legal & compliance panel",
    summary:
      "Whether Nigeria's emerging virtual asset framework protects users while leaving room for builders to operate.",
    argument:
      "I examined whether Nigeria's emerging virtual asset framework protects users while leaving room for builders to operate. I addressed licensing for virtual asset service providers, the Financial Action Task Force travel rule threshold, data localisation under the Nigeria Data Protection Regulation, and the Federal Inland Revenue Service position on value added tax for crypto services.",
    panelists: ["Senator Ihenyen", "Deborah Enyone Oni", "Eniola Mercy"],
    tags: ["Nigeria", "VASP licensing", "Tax"],
    cover: photo(w3l25, "panel-colour.jpg", 1600, 2000, "Ayanfeoluwa speaking on the Web3Lagos legal and compliance panel"),
    photos: [
      photo(w3l25, "panel-colour.jpg", 1600, 2000, "Ayanfeoluwa making a point on the Web3Lagos panel"),
      photo(w3l25, "panel-closeup-mono.jpg", 1600, 2000, "Black and white close-up of Ayanfeoluwa speaking"),
      photo(w3l25, "panel-mono.jpg", 1600, 2000, "Ayanfeoluwa seated on stage at Web3Lagos"),
      photo(w3l25, "panel-group-stage.jpg", 2000, 1333, "The legal and compliance panel together on the Web3Lagos stage"),
      photo(w3l25, "speaker-card.jpg", 1597, 2000, "Web3Lagos speaker card: Lead Counsel, Neomos Advisory"),
      photo(w3l25, "panel-card.jpg", 1597, 2000, "Web3Lagos panel session card for Legal / Compliance"),
    ],
  },
  {
    slug: w3l26,
    exhibit: "F",
    title: "Shipping Code, Dodging Court: Legal Essentials for Web3 Devs",
    event: "Web3Lagos Conference × Web3Bridge",
    location: "Lagos, Nigeria",
    year: 2026,
    format: "Developer session",
    summary: "The legal essentials developers should settle before they deploy to mainnet.",
    argument:
      "I set out the legal essentials developers should address before deploying to mainnet: written agreements with collaborators, compliance alignment with integration partners, treatment of wallet addresses as personal data under Nigerian and European data protection law, consent and data minimisation, and asset classification by the Securities and Exchange Commission Nigeria and the Central Bank of Nigeria.",
    tags: ["Developers", "Data protection", "Smart contracts"],
    cover: photo(w3l26, "presenting-2.jpg", 2000, 1333, "Ayanfeoluwa presenting Shipping Code, Dodging Court at Web3Lagos"),
    photos: [
      photo(w3l26, "presenting-1.jpg", 2000, 1333, "Ayanfeoluwa presenting to developers at Web3Lagos"),
      photo(w3l26, "presenting-2.jpg", 2000, 1333, "Shipping Code, Dodging Court title slide on screen"),
      photo(w3l26, "presenting-wide.jpg", 2000, 1500, "Regulatory compliance slide covering securities, AML/KYC and tax"),
      photo(w3l26, "speaker-card.jpg", 1600, 2000, "Web3Lagos speaker card for Shipping Code, Dodging Court"),
    ],
  },
  {
    slug: rwa,
    exhibit: "G",
    title: "The State of RWA Tokenization in Africa",
    event: "Audacity · State of RWA in Africa",
    location: "Lagos, Nigeria",
    year: 2025,
    format: "Panel discussion",
    summary: "The legal conditions for tokenising real-world assets across African markets.",
    argument:
      "I addressed the legal conditions for tokenising real-world assets across African markets. I covered licensing pathways, anti-money-laundering controls with customer due diligence and suspicious transaction reporting, consumer protection disclosures, mechanisms for resolving disputes where protocols offer no traditional recourse, and the unresolved question of liability within decentralised autonomous organisations.",
    tags: ["RWA", "Tokenization", "Africa"],
    cover: photo(rwa, "speaking-portrait.jpg", 1600, 2000, "Ayanfeoluwa speaking on the State of RWA in Africa panel"),
    photos: [
      photo(rwa, "speaking-portrait.jpg", 1600, 2000, "Ayanfeoluwa gesturing as she answers a question on RWA tokenization"),
      photo(rwa, "speaking-closeup.jpg", 1600, 2000, "Ayanfeoluwa speaking alongside fellow panellists"),
      photo(rwa, "panel-wide.jpg", 1600, 2000, "The RWA panel in front of a full audience"),
      photo(rwa, "panel-screen.jpg", 2000, 1599, "State of RWA in Africa panel line-up on screen"),
    ],
  },
  {
    slug: stellar,
    title: "Legal Considerations for Blockchain Projects in Africa",
    event: "Stellar West Africa Conference",
    location: "Zone Tech Park, Lagos",
    year: 2025,
    format: "Keynote session",
    summary:
      "Why Africa is many regulatory regimes, not one, and what projects must check in each country before launch.",
    argument:
      "Africa comprises distinct regulatory regimes, so projects must assess the law of each country of operation before launch. Depending on activity, projects may need VASP licences, payment service licences or a regulatory sandbox. AML compliance, the travel rule and evolving tax treatment across Nigeria, South Africa and Kenya all shape how a project should be built.",
    tags: ["Africa", "Stellar", "Data privacy"],
    cover: photo(stellar, "podium-closeup.jpg", 1505, 2000, "Ayanfeoluwa at the podium at Stellar West Africa Conference"),
    photos: [
      photo(stellar, "podium-closeup.jpg", 1505, 2000, "Ayanfeoluwa reading from her notes at the podium"),
      photo(stellar, "podium-1.jpg", 1505, 2000, "Ayanfeoluwa speaking on stage at Stellar West Africa"),
      photo(stellar, "podium-2.jpg", 1505, 2000, "Ayanfeoluwa addressing the Stellar West Africa audience"),
      photo(stellar, "talk-data-privacy.jpg", 1125, 2000, "Presenting the data privacy section of the talk"),
      photo(stellar, "talk-wide.jpg", 2000, 1125, "Legal Considerations for Blockchain in Africa on screen"),
      photo(stellar, "speaker-card.jpg", 2000, 2000, "#StellarWACon25 speaker card"),
    ],
  },
  {
    slug: superteam,
    title: "Legal Matters: Compliance Structures for Startups",
    event: "SuperteamNG Legal Matters Workshop",
    location: "Virtual",
    year: 2025,
    format: "Virtual training · grant-backed",
    summary:
      "A multi-week virtual training for Nigerian Solana startups on setting the right compliance structures, facilitated by The Law in Crypto.",
    argument:
      "Running from 28 May to 5 June, the workshop took founders through compliance structures, fundraising and branding, giving Nigerian Solana startups a practical legal toolkit. It was part of the legal framework for the ecosystem backed by a 5,000 USDC SuperteamNG grant.",
    tags: ["Solana", "Workshop", "Startups"],
    cover: photo(superteam, "workshop-card.jpg", 2000, 2000, "SuperteamNG Legal Matters Workshop flyer"),
    photos: [
      photo(superteam, "workshop-card.jpg", 2000, 2000, "Legal Matters Workshop: How to set the right compliance structures"),
      photo(superteam, "session-slide.jpg", 2000, 1500, "Legal Fundraising and Branding for Startups session slide"),
      photo(superteam, "virtual-session-1.jpg", 2000, 1500, "Founders attending the virtual workshop"),
      photo(superteam, "virtual-session-2.jpg", 2000, 1500, "Live Q&A during the virtual workshop"),
      photo(superteam, "virtual-session-3.jpg", 2000, 1500, "Participants in the SuperteamNG legal workshop"),
    ],
  },
  {
    slug: codeAfrica,
    title: "Legal Essentials for Developers & Founders",
    event: "CodeAfrica × FITech City Tour",
    location: "The Bridge by Obsidian, Lagos",
    year: 2025,
    format: "Keynote",
    summary:
      "A keynote on data privacy, smart-contract liability and the regulation developers meet the moment they ship.",
    tags: ["Developers", "GDPR", "MiCA"],
    cover: photo(codeAfrica, "speaker-card.jpg", 2000, 2000, "CodeAfrica City Tour keynote speaker card"),
    photos: [
      photo(codeAfrica, "speaker-card.jpg", 2000, 2000, "CodeAfrica City Tour Nigeria keynote speaker card"),
      photo(codeAfrica, "slide-data-privacy.jpg", 1213, 2000, "Data privacy and protection slide: GDPR conflict, MiCA and NDPR"),
      photo(codeAfrica, "deck-preview.jpg", 922, 2000, "Shipping Code, Dodging Court deck preview"),
    ],
  },
  {
    slug: filecoin,
    title: "Legal Foundations for Decentralised Storage Builders",
    event: "Filecoin Orbit Ibadan",
    location: "University of Ibadan",
    year: 2024,
    format: "Speaker",
    summary: "Speaking to builders at Filecoin Orbit at the LPI Innovation Hub, University of Ibadan.",
    tags: ["Filecoin", "Education"],
    cover: photo(filecoin, "speaking.jpg", 2000, 1600, "Ayanfeoluwa speaking at Filecoin Orbit Ibadan 2024"),
    photos: [
      photo(filecoin, "speaking.jpg", 2000, 1600, "Ayanfeoluwa smiling mid-talk at Filecoin Orbit Ibadan"),
      photo(filecoin, "speaker-card.jpg", 2000, 2000, "Filecoin Orbit Ibadan 2024 speaker card"),
    ],
  },
  {
    slug: roqqu,
    title: "Blockchain, Law and the Next Generation",
    event: "Roqqu Blockchain Conference",
    location: "University of Ibadan",
    year: 2024,
    format: "Campus tour speaker",
    summary: "Part of the Roqqu campus tour, bringing blockchain and the law to students in Ibadan.",
    tags: ["Education", "Campus"],
    cover: photo(roqqu, "campus-tour.jpg", 2000, 1500, "Ayanfeoluwa with fellow speakers at the Roqqu campus tour"),
    photos: [
      photo(roqqu, "campus-tour.jpg", 2000, 1500, "Speakers on the red carpet at the Roqqu campus tour"),
      photo(roqqu, "speakers-card.jpg", 2000, 1998, "Roqqu Blockchain Conference Ibadan speakers card"),
    ],
  },
  {
    slug: schools,
    title: "Blockchain Education for Secondary Schools",
    event: "Community outreach",
    location: "Nigeria",
    year: 2025,
    format: "Classroom teaching",
    summary: "Taking blockchain literacy into secondary-school classrooms.",
    tags: ["Education", "Community"],
    cover: photo(schools, "classroom.jpg", 1500, 2000, "Ayanfeoluwa teaching blockchain in a secondary-school classroom"),
    photos: [photo(schools, "classroom.jpg", 1500, 2000, "Ayanfeoluwa teaching in front of a whiteboard")],
  },
];

export const featuredEvents = events
  .filter((e) => e.exhibit)
  .sort((a, b) => (a.exhibit! < b.exhibit! ? -1 : 1));

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

const allPhotos = events.flatMap((e) => e.photos);
const pick = (path: string) => {
  const found = allPhotos.find((p) => p.src === `/images/events/${path}`);
  if (!found) throw new Error(`Gallery photo not found: ${path}`);
  return found;
};

/** Curated photos for the home-page gallery (paths relative to /images/events) */
export const galleryPhotos: Photo[] = [
  "rwa-tokenization-africa/speaking-portrait.jpg",
  "solana-startup-village/stage-howey-test.jpg",
  "devconnect-privacy-workshop/workshop-wide.jpg",
  "web3lagos-2025/panel-closeup-mono.jpg",
  "filecoin-orbit/speaking.jpg",
  "stellar-west-africa/podium-closeup.jpg",
  "web3lagos-2026/presenting-wide.jpg",
  "devconnect-open-source-hub/talk-at-screen.jpg",
  "ethereum-privacy-stack/speakers-group.jpg",
  "web3lagos-2025/panel-group-stage.jpg",
  "rwa-tokenization-africa/panel-wide.jpg",
  "solana-startup-village/stage-sec-nigeria.jpg",
].map(pick);
