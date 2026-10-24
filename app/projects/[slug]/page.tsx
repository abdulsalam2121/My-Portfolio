import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrowserFrame, PhoneFrame } from "@/components/BrowserFrame";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { profile, projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} — case study`, description: p.summary };
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
          <p className="label mt-10 mb-4">
            {p.kind} · {p.year}
          </p>
          <h1 className="display text-[clamp(3.5rem,11vw,9rem)]">{p.title}</h1>
          <p className="display mt-4 text-3xl italic text-accent sm:text-4xl">{p.tagline}</p>
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
              <dt className="label mb-2">Live</dt>
              <dd>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent link-underline"
                >
                  {p.liveLabel} <ArrowUpRight size={14} />
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative">
            <BrowserFrame src={p.shots[0].desktop} alt={p.shots[0].alt} url={p.liveLabel} priority sizes="(min-width: 1152px) 1100px, 100vw" />
            <PhoneFrame
              src={p.shots[0].mobile}
              alt={`${p.title} on mobile`}
              className="absolute -bottom-10 right-4 hidden w-[17%] sm:block"
            />
          </div>
        </Reveal>

        <div className="mt-28 grid gap-14 lg:grid-cols-2">
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

        {p.shots[1] && (
          <Reveal className="mt-24">
            <BrowserFrame src={p.shots[1].desktop} alt={p.shots[1].alt} url={p.liveLabel} sizes="(min-width: 1152px) 1100px, 100vw" />
          </Reveal>
        )}

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
            <a href={`mailto:${profile.email}`} className="text-ink link-underline">
              Let’s talk
            </a>
            .
          </p>
        </Reveal>
      </main>
    </>
  );
}
