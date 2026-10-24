import { Check } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { experience, process, profile, skills } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="eyebrow mb-4">How I work</p>
        <h2 className="display max-w-2xl text-[clamp(2.4rem,5vw,4rem)]">From first idea to a server that stays up.</h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {process.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="card relative h-full overflow-hidden p-8">
              <span className="display absolute -right-2 -top-4 text-[7rem] leading-none text-accent/10">{s.n}</span>
              <h3 className="display relative text-3xl">{s.title}</h3>
              <p className="relative mt-4 leading-relaxed text-muted">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto max-w-sm lg:sticky lg:top-28 lg:mx-0">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-accent/90"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface">
              <Image
                src="/portrait.webp"
                alt="Portrait of Abdul Salam Ghanghro"
                width={960}
                height={1200}
                sizes="(min-width: 1024px) 380px, 80vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">About</p>
            <h2 className="display text-[clamp(2.4rem,5vw,4rem)]">
              Engineer first, with an eye for the <span className="marker">product.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I graduated in Computer Science from Sukkur IBA University in 2025 and have spent my time since
                building things real people use, not tutorials. LoyaltyPro and CoverCell are both live and both mine
                end to end: interface, API, deployment and the server underneath.
              </p>
              <p>
                I care about the details that make software feel finished: fast first loads, sensible state, clear
                empty and error states, and code the next person can read. I use AI copilots where they speed me up and
                review everything they write.
              </p>
              <p>
                I also built an algorithm-complexity analyser as my final-year project and tutored algorithms online, so
                the CS fundamentals aren’t an afterthought. Based in {profile.location}, working with clients worldwide.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group} className="card p-6">
                  <p className="mb-4 text-sm font-semibold text-accent">{s.group}</p>
                  <ul className="space-y-2.5 text-[15px]">
                    {s.items.map((i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check size={15} className="shrink-0 text-accent" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="eyebrow mb-4">Experience</p>
        <h2 className="display text-[clamp(2.4rem,5vw,4rem)]">Where I’ve been working.</h2>
      </Reveal>
      <div className="mt-12 space-y-4">
        {experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.06}>
            <div className="card grid gap-5 p-7 sm:p-9 md:grid-cols-[0.7fr_1fr_1.3fr] md:gap-8">
              <p className="display text-2xl text-accent">{e.period}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-1 text-sm text-muted">{e.place}</p>
              </div>
              <ul className="space-y-2.5 text-[15px] leading-relaxed text-muted">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
