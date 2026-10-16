import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm7 0h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
  ),
  x: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z" />,
  substack: <path d="M4 3h16v2.4H4V3Zm0 4.5h16v2.4H4V7.5ZM4 12h16v9l-8-4.5L4 21v-9Z" />,
};

const labels = { linkedin: "LinkedIn", x: "X (Twitter)", substack: "Substack" };

export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {(Object.keys(icons) as Array<keyof typeof icons>).map((key) => (
        <li key={key}>
          <a
            href={siteConfig.socials[key]}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={labels[key]}
            className="grid size-11 place-items-center rounded-full border border-border text-foreground-muted transition-colors hover:border-primary hover:text-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
              {icons[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
