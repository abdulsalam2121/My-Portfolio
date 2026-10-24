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
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:pt-40">
        <Link href="/#work" className="label link-underline inline-flex items-center gap-2 hover:!text-ink">
          <ArrowLeft size={14} /> All work
        </Link>

        <Reveal>
          <p className="label mb-4 mt-10">
            {p.kind} · {p.year}
          </p>
          <h1 className="display text-[clamp(3.5rem,11vw,9rem)]">{p.title}</h1>
          <p className="display mt-4 text-3xl italic text-accent sm:text-4xl">{p.tagline}</p>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition hover:bg-accent hover:text-accent-ink"
          >
            Visit {p.liveLabel} <ArrowUpRight size={15} />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <div className="bg-bg p-6">
              <dt className="label mb-2">Role</dt>
              <dd className="text-sm leading-relaxed">{p.role}</dd>
            </div>
            <div className="bg-bg p-6">
              <dt className="label mb-2">Stack</dt>
              <dd className="font-mono text-sm leading-relaxed">{p.stack.join(" · ")}</dd>
            </div>
            <div className="bg-bg p-6">
              <dt className="label mb-2">Year</dt>
              <dd className="text-sm">{p.year} · live in production</dd>
            </div>
          </dl>
        </Reveal>

        <div className="mt-24 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="label mb-3 !text-accent">The problem</p>
            <p className="text-xl leading-relaxed">{p.problem}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label mb-3 !text-accent">The solution</p>
            <p className="text-xl leading-relaxed text-muted">{p.solution}</p>
          </Reveal>
        </div>

        <Reveal className="mt-24">
          <p className="label mb-5">The product, screen by screen</p>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_190px]">
            <ShotViewer shots={p.shots} url={p.liveLabel} />
            <div className="hidden lg:block">
              <PhoneFrame src={p.mobile.src} alt={`${p.title} on mobile`} />
              <p className="label mt-3 text-center">Mobile</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-24">
          <p className="label mb-5">What it does</p>
          <ul className="divide-y divide-line border-y border-line">
            {p.highlights.map((h, i) => (
              <li key={h} className="flex gap-6 py-5">
                <span className="label w-8 shrink-0 pt-1">0{i + 1}</span>
                <span className="text-lg">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-28">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-end justify-between gap-6 rounded-[2rem] border border-line bg-surface p-8 transition hover:border-accent sm:p-12"
          >
            <div>
              <p className="label mb-3">Next project</p>
              <p className="display text-5xl sm:text-7xl">{next.title}</p>
            </div>
            <ArrowRight size={40} className="mb-2 shrink-0 transition group-hover:translate-x-2 group-hover:text-accent" />
          </Link>
          <p className="mt-8 text-center text-sm text-muted">
            Want something like this?{" "}
            <a href={`mailto:${profile.email}`} className="link-underline text-ink">
              Let’s talk
            </a>
            .
          </p>
        </Reveal>
      </main>
    </>
  );
}
