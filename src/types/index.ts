export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SpeakingEvent = {
  slug: string;
  /** Talk / session title */
  title: string;
  /** Conference or host name */
  event: string;
  location: string;
  year: number;
  /** e.g. "Main stage panel", "Workshop", "Virtual training" */
  format: string;
  /** One-line description shown on cards */
  summary: string;
  /** Long-form "What I argued" paragraph */
  argument?: string;
  /** Other speakers on the panel */
  panelists?: string[];
  tags: string[];
  /** Shown in the "On the record" section on the home page, in this order */
  exhibit?: string;
  cover: Photo;
  photos: Photo[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /**
   * Cover image. Use a path under /public (e.g. "/images/blog/my-deck.jpg")
   * or a full https URL. Leave empty to show a generated cover.
   */
  image?: string;
  /** Link to the full Gamma presentation */
  gammaUrl: string;
  /** ISO date, e.g. "2025-11-19" */
  date: string;
  pages?: number;
  tags: string[];
};

export type PracticeArea = {
  title: string;
  description: string;
  points: string[];
};

export type Article = {
  title: string;
  description: string;
  url: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type NavLink = {
  label: string;
  href: string;
};
