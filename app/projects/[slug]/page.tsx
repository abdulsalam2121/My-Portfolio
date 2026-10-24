import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneFrame } from "@/components/BrowserFrame";
import { Reveal } from "@/components/Reveal";
import { Shell } from "@/components/Shell";
import { ShotViewer } from "@/components/ShotViewer";
import { profile, projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} case study`, description: p.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <Shell crumb={`${p.title} case study`}>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink">
        <ArrowLeft size={16} /> All projects
      </Link>

      <Reveal>
        <div className="mt-6 flex flex-wrap items-start justify-between gap-5">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{p.title}</h1>
              <span className="chip">
                <span className="live-dot size-1.5 rounded-full bg-ok" /> Live
              </span>
            </div>
            <p className="mt-2 text-lg text-muted">{p.tagline}</p>
          </div>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-ink transition hover:brightness-110"
          >
            Visit {p.liveLabel} <ArrowUpRight size={16} />
          </a>
        </div>

        <dl className="panel mt-8 grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["Role", p.role],
            ["Stack", p.stack.join(" · ")],
            ["Year", `${p.year} · live in production`],
          ].map(([k, v]) => (
            <div key={k} className="p-5">
              <dt className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">{k}</dt>
              <dd className="text-[15px] leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          <div className="panel p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">The problem</p>
            <p className="text-lg leading-relaxed tracking-tight">{p.problem}</p>
          </div>
          <div className="panel p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">The solution</p>
            <p className="leading-relaxed text-muted">{p.solution}</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mb-4 mt-14 text-2xl font-semibold tracking-tight">The product, screen by screen</h2>
        <div className="grid items-start gap-4 lg:grid-cols-[1fr_180px]">
          <div className="panel p-4 sm:p-5">
            <ShotViewer shots={p.shots} url={p.liveLabel} />
          </div>
          <div className="hidden lg:block">
            <PhoneFrame src={p.mobile.src} alt={`${p.title} on mobile`} />
            <p className="mt-3 text-center text-xs text-muted">Responsive on mobile</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mb-4 mt-14 text-2xl font-semibold tracking-tight">What it does</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {p.highlights.map((h, i) => (
            <li key={h} className="panel flex gap-4 p-5">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <Link
          href={`/projects/${next.slug}`}
          className="panel group mt-14 flex items-center justify-between gap-6 p-6 transition hover:border-accent/60 sm:p-8"
        >
          <div>
            <p className="mb-1 text-sm text-muted">Next project</p>
            <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{next.title}</p>
          </div>
          <ArrowRight size={28} className="text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
        </Link>
        <p className="mt-8 text-center text-sm text-muted">
          Want something like this?{" "}
          <a href={`mailto:${profile.email}`} className="font-semibold text-ink underline underline-offset-4">
            Let’s talk
          </a>
          .
        </p>
      </Reveal>
    </Shell>
  );
}
