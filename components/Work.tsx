import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PhoneFrame } from "./BrowserFrame";
import { Reveal } from "./Reveal";
import { ShotViewer } from "./ShotViewer";
import { otherWork, projects } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="display text-[clamp(2.4rem,5vw,4rem)]">
            Two products. Built alone, live today.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Everything below runs in production on a VPS I set up myself. Click any screenshot to enlarge it.
          </p>
        </div>
      </Reveal>

      <div className="space-y-8">
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <article
              className="relative overflow-hidden rounded-[2rem] p-6 text-white sm:p-10 lg:p-12"
              style={{ background: `linear-gradient(135deg, ${p.brand.from}, ${p.brand.to})` }}
            >
              {/* oversized watermark */}
              <span
                aria-hidden
                className="display pointer-events-none absolute -bottom-6 -left-2 select-none text-[clamp(6rem,20vw,16rem)] leading-none text-white/[0.07]"
              >
                {p.title}
              </span>

              <div className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <p className="mb-5 flex flex-wrap items-center gap-2 text-sm font-medium text-white/80">
                    <span className="rounded-full bg-white/15 px-3 py-1">{p.kind}</span>
                    <span className="rounded-full bg-white/15 px-3 py-1">{p.year}</span>
                  </p>
                  <h3 className="display text-5xl sm:text-6xl">{p.title}</h3>
                  <p className="display mt-3 text-2xl text-[#d6ff3c] sm:text-3xl">{p.tagline}</p>
                  <p className="mt-6 leading-relaxed text-white/85">{p.summary}</p>

                  <ul className="mt-6 space-y-2.5 text-[15px]">
                    {p.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-[#d6ff3c]" />
                        <span className="text-white/90">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-white/90">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#14152a] transition hover:scale-[1.03]"
                    >
                      Visit {p.liveLabel} <ArrowUpRight size={16} />
                    </a>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"
                    >
                      Case study <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className={`relative ${i % 2 ? "lg:order-1" : ""}`}>
                  <ShotViewer shots={p.shots} url={p.liveLabel} onDark />
                  <div className="float pointer-events-none absolute -right-3 top-[38%] hidden w-[17%] xl:block">
                    <PhoneFrame src={p.mobile.src} alt={`${p.title} on mobile`} />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-24">
          <p className="eyebrow mb-6">More builds</p>
          <div className="grid gap-4 md:grid-cols-3">
            {otherWork.map((w) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="card group flex flex-col p-7 transition hover:-translate-y-1.5 hover:border-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">{w.note}</p>
                    <h4 className="display mt-2 text-2xl sm:text-3xl">{w.title}</h4>
                  </div>
                  <ArrowUpRight className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{w.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {w.stack.map((s) => (
                    <span key={s} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
