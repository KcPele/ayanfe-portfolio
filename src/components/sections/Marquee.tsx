const stages = [
  "Devconnect Buenos Aires",
  "Ethereum Privacy Stack",
  "Web3Lagos",
  "Solana Startup Village",
  "Stellar West Africa",
  "SuperteamNG",
  "Filecoin Orbit",
  "Roqqu",
  "CodeAfrica",
  "Open Source Hub",
];

export function Marquee() {
  const items = [...stages, ...stages];
  return (
    <section aria-label="Stages" className="border-y border-border bg-surface py-6">
      <div className="overflow-hidden mask-fade-x">
        <ul className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= stages.length}
              className="flex items-center gap-10 font-display text-2xl whitespace-nowrap text-foreground-muted italic sm:text-3xl"
            >
              {name}
              <span className="text-primary not-italic">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
