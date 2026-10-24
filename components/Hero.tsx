import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroStage } from "./HeroStage";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem]"
        style={{
          background:
            "radial-gradient(60rem 28rem at 85% -5%, color-mix(in srgb, var(--accent) 16%, transparent), transparent), radial-gradient(40rem 24rem at 0% 20%, #d6ff3c1f, transparent)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-32 sm:pt-40 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div>
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-2.5 pr-4 text-[13px] font-medium shadow-[var(--shadow)]">
              <span className="live-dot size-2 rounded-full bg-[#22c55e]" />
              Available for freelance &amp; remote work
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display text-[clamp(2.9rem,6.6vw,5.4rem)]">
              I design, build and ship full‑stack web <span className="marker">products.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted">
              Hi, I’m <strong className="font-semibold text-ink">{profile.short}</strong>, a developer in{" "}
              {profile.location}. I turn ideas into React and Node.js apps, then deploy and run them myself.
              Two are live right now.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-[15px] font-semibold text-accent-ink shadow-[0_12px_30px_-10px_var(--accent)] transition hover:scale-[1.03]"
              >
                See live projects
                <ArrowDown size={17} className="transition group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-7 py-4 text-[15px] font-semibold transition hover:border-ink"
              >
                Résumé <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline hover:text-ink">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline hover:text-ink">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="link-underline hover:text-ink">
                {profile.email}
              </a>
            </p>
          </Reveal>
        </div>

        <HeroStage />
      </div>
    </section>
  );
}
