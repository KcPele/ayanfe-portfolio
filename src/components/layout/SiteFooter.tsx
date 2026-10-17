import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/ui/SocialIcons";

/** Cached at build time so the page can be fully prerendered. */
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground-muted">
            {siteConfig.role} · {siteConfig.firmRole}, {siteConfig.firm} · {siteConfig.location}
          </p>
          <SocialIcons className="mt-6" />
        </div>
        <div>
          <p className="label text-foreground-subtle">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-foreground-muted transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label text-foreground-subtle">Get in touch</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 block break-all text-sm text-foreground transition-colors hover:text-primary"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.socials.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-sm text-foreground-muted transition-colors hover:text-primary"
          >
            The Law in Crypto on Substack
          </a>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-foreground-subtle sm:flex-row sm:justify-between">
        <p>
          © <CopyrightYear /> {siteConfig.name}. All rights reserved.
        </p>
        <p>All photographs are from the engagements listed on this site.</p>
      </Container>
    </footer>
  );
}
