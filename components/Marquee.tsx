const items = [
  "React", "Node.js", "TypeScript", "Express", "Tailwind CSS", "Firebase", "MongoDB", "REST APIs",
  "Stripe", "Docker", "VPS & SSL", "Python", "Git",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-surface py-5" aria-label="Technologies I work with">
      <div className="marquee flex w-max gap-12 whitespace-nowrap" aria-hidden>
        {row.map((t, i) => (
          <span key={i} className="display flex items-center gap-12 text-2xl text-muted/80 sm:text-3xl">
            {t}
            <span className="size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
