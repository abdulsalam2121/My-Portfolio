export function SectionHead({
  id,
  icon,
  title,
  desc,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc?: string;
}) {
  return (
    <div id={id} className="mb-6 flex items-start gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">{icon}</span>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {desc && <p className="mt-1 text-[15px] text-muted">{desc}</p>}
      </div>
    </div>
  );
}
