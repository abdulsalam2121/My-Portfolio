import { Reveal } from "./Reveal";
import { experience, skills } from "@/lib/data";

export function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label mb-3">02 — About</p>
            <h2 className="display text-5xl sm:text-6xl">
              Engineer first, <em>product</em> minded.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              I graduated in Computer Science from Sukkur IBA University in 2025, and I’ve spent my time since building
              things real people use, not tutorials. LoyaltyPro and CoverCell are both live, both mine end to end:
              interface, API, deployment and the server underneath.
            </p>
            <p>
              I care about the details that make software feel finished: fast first loads, sensible state, clear empty
              and error states, and code the next person can read. I use AI copilots where they speed me up and review
              everything they write.
            </p>
            <p>
              I also built an algorithm-complexity analyser as my final-year project and tutored algorithms online, so
              the computer-science fundamentals aren’t an afterthought.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.group} className="bg-bg p-6">
                <p className="label mb-4 !text-accent">{s.group}</p>
                <ul className="space-y-2 text-sm">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="label mb-3">03 — Experience</p>
          <h2 className="display mb-14 text-5xl sm:text-6xl">Where I’ve been working.</h2>
        </Reveal>
        <div className="divide-y divide-line border-y border-line">
          {experience.map((e) => (
            <Reveal key={e.title}>
              <div className="grid gap-4 py-9 md:grid-cols-12">
                <p className="label md:col-span-3">{e.period}</p>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-medium tracking-tight">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted">{e.place}</p>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-muted md:col-span-5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
