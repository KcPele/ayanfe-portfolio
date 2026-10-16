import Link from "next/link";
import { cn, isExternal } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-strong shadow-[0_10px_40px_-12px_var(--primary)]",
  outline: "border border-border-strong text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:text-primary",
};

export function Button({ href, children, variant = "primary", className, ariaLabel }: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition-all duration-300",
    variants[variant],
    className,
  );
  const external = isExternal(href) || href.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-4 transition-transform duration-300 group-hover:translate-x-1", className)}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
