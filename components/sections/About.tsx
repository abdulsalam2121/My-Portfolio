import { User } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHead } from "./ui";
import { process, profile, skills } from "@/lib/data";

const prefs = [
  ["Availability", "Open to freelance and remote roles"],
  ["Looking for", "Junior full-stack developer (React / Node.js)"],
  ["Timezone", "UTC+5 · Karachi, Pakistan"],
  ["Languages", "English (professional), Urdu, Sindhi"],
  ["Education", "BS Computer Science, Sukkur IBA University, 2025"],
  ["Typical stack", "React · Node.js · Express · Firebase / MongoDB"],
];

export function About() {
  return (
    <section className="mt-24 scroll-mt-24">
      <SectionHead id="about" icon={<User size={20} />} title="About & skills" desc="Who I am and how I work." />

      <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="panel h-full space-y-4 p-6 text-[15px] leading-relaxed text-muted">
            <p>
              I graduated in Computer Science from Sukkur IBA University in 2025 and have spent my time since building
              things real people use, not tutorials. <span className="text-ink">LoyaltyPro</span> and{" "}
              <span className="text-ink">CoverCell</span> are both live and both mine end to end: interface, API,
              deployment and the server underneath.
            </p>
            <p>
              I care about the details that make software feel finished: fast first loads, sensible state, clear empty
              and error states, and code the next person can read. I use AI copilots where they speed me up and review
              everything they write.
            </p>
            <p>
              I also built an algorithm-complexity analyser as my final-year project and tutored algorithms online, so
              the CS fundamentals aren’t an afterthought.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <dl className="panel h-full divide-y divide-line">
            {prefs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] gap-3 px-5 py-3.5 text-sm">
                <dt className="text-muted">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.group} className="panel p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">{s.group}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <span key={i} className="chip !text-ink">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {process.map((s) => (
            <div key={s.n} className="panel p-5">
              <p className="font-mono text-xs text-accent">{s.n}</p>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <span hidden>{profile.name}</span>
    </section>
  );
}
