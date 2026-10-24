import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { numbers } from "@/lib/data";

export function Numbers() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {numbers.map((n, i) => (
          <Reveal key={n.label} delay={i * 0.07}>
            <div className="card h-full p-7">
              <p className="display text-6xl text-accent sm:text-7xl">
                <Counter value={n.value} suffix={n.suffix} decimals={n.decimals} />
              </p>
              <p className="mt-4 font-semibold">{n.label}</p>
              <p className="mt-1 text-sm text-muted">{n.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
