import { History } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHead } from "./ui";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section className="mt-24 scroll-mt-24">
      <SectionHead id="experience" icon={<History size={20} />} title="Experience" desc="Work and education, newest first." />
      <div className="space-y-3">
        {experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05}>
            <div className="panel grid gap-4 p-5 sm:p-6 md:grid-cols-[150px_1fr]">
              <p className="font-mono text-sm text-accent">{e.period}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{e.title}</h3>
                <p className="text-sm text-muted">{e.place}</p>
                <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
