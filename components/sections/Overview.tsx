import { ArrowRight, ArrowUpRight, Award, Boxes, GraduationCap, Rocket, Timer, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import QRCode from "qrcode";
import { Reveal } from "../Reveal";
import { profile, projects } from "@/lib/data";

const kpis = [
  { icon: Rocket, label: "Live products", value: "2", note: "running on my own VPS" },
  { icon: Boxes, label: "Client projects", value: "5+", note: "all delivered on time" },
  { icon: TrendingUp, label: "Retention lift", value: "40%", note: "LoyaltyPro client pilots" },
  { icon: Timer, label: "Faster page loads", value: "1.5s", note: "CoverCell, 200+ device records" },
];

const activity = [
  { icon: Rocket, title: "Shipped LoyaltyPro and CoverCell", text: "Both built solo and deployed to production.", when: "2025" },
  { icon: GraduationCap, title: "Graduated, BS Computer Science", text: "Sukkur IBA University.", when: "2025" },
  { icon: Award, title: "Final-year project: algorithm benchmark", text: "95% accuracy, used by 20+ students.", when: "2025" },
  { icon: Zap, title: "Started freelancing on Fiverr", text: "React and Node.js apps for clients worldwide.", when: "2024" },
];

export async function Overview() {
  const qr = await QRCode.toString(projects[0].live, { type: "svg", margin: 0, color: { dark: "#0f1419", light: "#ffffff" } });

  return (
    <section id="overview" className="scroll-mt-24">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src="/portrait.webp"
            alt="Portrait of Abdul Salam Ghanghro"
            width={160}
            height={200}
            priority
            className="size-24 rounded-2xl border border-line object-cover object-top shadow-[var(--shadow-lg)] sm:size-28"
          />
          <div>
            <p className="mb-2 flex items-center gap-2 text-sm text-muted">
              <span className="live-dot size-2 rounded-full bg-ok" /> Available for freelance &amp; remote work
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="mt-2 text-lg text-muted">Full-stack developer · {profile.location}</p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed tracking-tight sm:text-2xl">
          I design, build and ship web products end to end: the React interface, the Node API and the server they run
          on. <span className="text-muted">Two are live right now, and you can try one below.</span>
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-ink transition hover:brightness-110"
          >
            Explore projects <ArrowRight size={16} />
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface px-5 text-sm font-semibold transition hover:border-muted"
          >
            Résumé <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <Reveal key={k.label} delay={i * 0.05}>
            <div className="panel h-full p-4 sm:p-5">
              <div className="flex items-center justify-between text-muted">
                <p className="text-[13px]">{k.label}</p>
                <k.icon size={16} />
              </div>
              <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{k.value}</p>
              <p className="mt-1 text-xs text-muted">{k.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_1fr]">
        <Reveal>
          <div className="panel h-full p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Live now</h3>
              <span className="chip">
                <span className="size-1.5 rounded-full bg-ok" /> 2 online
              </span>
            </div>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.slug} className="flex items-center gap-4 rounded-xl border border-line p-3">
                  <div className="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border border-line bg-white sm:w-36">
                    <Image src={p.shots[0].src} alt={`${p.title} preview`} fill sizes="150px" className="object-cover object-top" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-2 font-semibold">
                      {p.title}
                      <span className="size-2 rounded-full bg-ok" aria-label="live" />
                    </p>
                    <p className="truncate text-sm text-muted">{p.kind}</p>
                    <p className="mt-1.5 flex gap-4 text-sm font-medium">
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline">
                        Open <ArrowUpRight size={13} />
                      </a>
                      <a href={`/projects/${p.slug}`} className="text-muted hover:text-ink">
                        Case study
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel flex h-full flex-col p-5">
            <h3 className="font-semibold">Try it on your phone</h3>
            <p className="mt-1 text-sm text-muted">Scan to open the live LoyaltyPro app.</p>
            <div className="mt-5 flex flex-1 items-center justify-center">
              <div className="relative rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-lg)]">
                <div className="size-40 sm:size-44" dangerouslySetInnerHTML={{ __html: qr.replace("<svg", '<svg width="100%" height="100%"') }} />
                <span
                  aria-hidden
                  className="scan-line pointer-events-none absolute inset-x-3 top-4 h-0.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
                  style={{ ["--scan-h" as string]: "10rem" }}
                />
              </div>
            </div>
            <p className="mt-5 text-center font-mono text-xs text-muted">{projects[0].liveLabel}</p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="panel mt-3 p-5">
          <h3 className="mb-4 font-semibold">Recent activity</h3>
          <ol className="relative space-y-5 before:absolute before:bottom-2 before:left-[17px] before:top-2 before:w-px before:bg-line">
            {activity.map((a) => (
              <li key={a.title} className="relative flex gap-4">
                <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-accent">
                  <a.icon size={16} />
                </span>
                <div className="flex-1 pt-0.5">
                  <p className="text-[15px] font-medium">{a.title}</p>
                  <p className="text-sm text-muted">{a.text}</p>
                </div>
                <span className="pt-1 font-mono text-xs text-muted">{a.when}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
