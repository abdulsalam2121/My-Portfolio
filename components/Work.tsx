import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { ShotViewer } from "./ShotViewer";
import { otherWork, projects } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <div className="mb-14 flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="label mb-3">01 — Selected work</p>
            <h2 className="display text-5xl sm:text-6xl">
              Shipped, <em>not</em> sketched.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted sm:block">
            Two products I built alone, from the first component to the live server. Click any screenshot to enlarge it.
          </p>
        </div>
      </Reveal>

      <div className="space-y-28">
        {projects.map((p, i) => (
          <article key={p.slug} className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <Reveal className={`min-w-0 lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
              <p className="label mb-5">
                0{i + 1} · {p.kind} · {p.year}
              </p>
              <h3 className="display text-6xl sm:text-7xl">{p.title}</h3>
              <p className="display mt-3 text-2xl italic text-accent">{p.tagline}</p>
              <p className="mt-6 leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition hover:bg-accent hover:text-accent-ink"
                >
                  Visit {p.liveLabel} <ArrowUpRight size={15} />
                </a>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition hover:border-ink"
                >
                  Case study
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className={`min-w-0 lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
              <ShotViewer shots={p.shots} url={p.liveLabel} />
            </Reveal>
          </article>
        ))}
      </div>

      <Reveal>
        <div className="mt-32">
          <p className="label mb-5">More — smaller builds</p>
          <div className="divide-y divide-line border-y border-line">
            {otherWork.map((w) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-3 py-7 transition sm:grid-cols-[1.1fr_1.6fr_auto] sm:items-center sm:gap-8"
              >
                <div>
                  <h4 className="display text-3xl transition group-hover:text-accent sm:text-4xl">{w.title}</h4>
                  <p className="label mt-1.5">{w.note}</p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted">{w.desc}</p>
                  <p className="mt-2 font-mono text-xs text-muted/80">{w.stack.join(" · ")}</p>
                </div>
                <ArrowUpRight className="hidden text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:block" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
