"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open; Escape closes it
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12"
      >
        <Link href="/" className="group flex items-center gap-3" aria-label={`${siteConfig.name}, home`}>
          <span className="grid size-10 place-items-center rounded-full border border-primary/50 font-display text-lg text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            AO
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base">{siteConfig.shortName}</span>
            <span className="label text-foreground-subtle">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors hover:text-primary",
                  isActive(link.href) ? "text-primary" : "text-foreground-muted",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${siteConfig.email}`}
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong md:inline-flex"
        >
          Work with me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative grid size-11 place-items-center rounded-full border border-border md:hidden"
        >
          <span
            className={cn(
              "absolute h-px w-5 bg-foreground transition-transform duration-300",
              open ? "rotate-45" : "-translate-y-1",
            )}
          />
          <span
            className={cn(
              "absolute h-px w-5 bg-foreground transition-transform duration-300",
              open ? "-rotate-45" : "translate-y-1",
            )}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 h-[calc(100dvh-4rem)] bg-background transition-all duration-500 md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-between overflow-y-auto px-5 pt-8 pb-10">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={cn("transition-all duration-500", open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-border py-4 font-display text-4xl"
                >
                  {link.label}
                  <span className="text-xs text-foreground-subtle">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </header>
  );
}
