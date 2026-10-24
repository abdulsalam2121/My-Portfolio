import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhoneFrame } from "@/components/BrowserFrame";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
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
    <>
      <Nav onColor />
      <main>
        <header
          className="relative overflow-hidden text-white"
          style={{ background: `linear-gradient(135deg, ${p.brand.from}, ${p.brand.to})` }}
        >
          <span
            aria-hidden
            className="display pointer-events-none absolute -bottom-10 right-0 select-none text-[clamp(8rem,26vw,22rem)] leading-none text-white/[0.07]"
          >
            {p.title}
          </span>
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 sm:pt-40">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
            >
              <ArrowLeft size={16} /> All work
            </Link>
            <Reveal>
              <p className="mb-5 mt-10 flex flex-wrap gap-2 text-sm font-medium">
                <span className="rounded-full bg-white/15 px-3 py-1">{p.kind}</span>
                <span className="rounded-full bg-white/15 px-3 py-1">{p.year}</span>
              </p>
              <h1 className="display text-[clamp(3.5rem,11vw,9rem)]">{p.title}</h1>
              <p className="display mt-4 max-w-2xl text-3xl text-[#d6ff3c] sm:text-4xl">{p.tagline}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#14152a] transition hover:scale-[1.03]"
                >
                  Visit {p.liveLabel} <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-5 pb-20">
          <Reveal className="relative z-10 -mt-10">
            <dl className="card grid gap-px overflow-hidden !bg-line sm:grid-cols-3">
              <div className="bg-surface p-6">
                <dt className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">Role</dt>
                <dd className="text-[15px] leading-relaxed">{p.role}</dd>
              </div>
              <div className="bg-surface p-6">
                <dt className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">Stack</dt>
                <dd className="text-[15px] leading-relaxed">{p.stack.join(" · ")}</dd>
              </div>
              <div className="bg-surface p-6">
                <dt className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">Year</dt>
                <dd className="text-[15px]">
                  {p.year} · live in production
                </dd>
              </div>
            </dl>
          </Reveal>

          <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4">The problem</p>
              <p className="display text-3xl leading-tight sm:text-4xl">{p.problem}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow mb-4">The solution</p>
              <p className="text-lg leading-relaxed text-muted">{p.solution}</p>
            </Reveal>
          </div>

          <Reveal className="mt-24">
            <p className="eyebrow mb-4">The product, screen by screen</p>
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_200px]">
              <div
                className="rounded-[2rem] p-5 sm:p-8"
                style={{ background: `linear-gradient(135deg, ${p.brand.from}, ${p.brand.to})` }}
              >
                <ShotViewer shots={p.shots} url={p.liveLabel} onDark />
              </div>
              <div className="hidden lg:block">
                <PhoneFrame src={p.mobile.src} alt={`${p.title} on mobile`} />
                <p className="mt-3 text-center text-xs text-muted">Responsive on mobile</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-24">
            <p className="eyebrow mb-6">What it does</p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {p.highlights.map((h, i) => (
                <li key={h} className="card flex gap-5 p-6">
                  <span className="display text-3xl text-accent">0{i + 1}</span>
                  <span className="pt-1.5 leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-24">
            <Link
              href={`/projects/${next.slug}`}
              className="group relative flex items-end justify-between gap-6 overflow-hidden rounded-[2rem] p-8 text-white sm:p-12"
              style={{ background: `linear-gradient(135deg, ${next.brand.from}, ${next.brand.to})` }}
            >
              <div>
                <p className="mb-3 text-sm font-medium text-white/80">Next project</p>
                <p className="display text-5xl sm:text-7xl">{next.title}</p>
              </div>
              <ArrowRight size={44} className="mb-2 shrink-0 transition group-hover:translate-x-2" />
            </Link>
            <p className="mt-8 text-center text-sm text-muted">
              Want something like this?{" "}
              <a href={`mailto:${profile.email}`} className="font-semibold text-ink link-underline">
                Let’s talk
              </a>
              .
            </p>
          </Reveal>
        </div>
      </main>
    </>
  );
}
