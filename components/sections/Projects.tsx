"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Code, FolderKanban } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "../Reveal";
import { ShotViewer } from "../ShotViewer";
import { SectionHead } from "./ui";
import { otherWork, projects } from "@/lib/data";

type Entry =
  | { kind: "live"; key: string; title: string; sub: string; project: (typeof projects)[number] }
  | { kind: "repo"; key: string; title: string; sub: string; repo: (typeof otherWork)[number] };

const entries: Entry[] = [
  ...projects.map((p) => ({ kind: "live" as const, key: p.slug, title: p.title, sub: p.kind, project: p })),
  ...otherWork.map((w) => ({ kind: "repo" as const, key: w.title, title: w.title, sub: w.note, repo: w })),
];

export function Projects() {
  const [sel, setSel] = useState(entries[0].key);
  const cur = entries.find((e) => e.key === sel)!;

  return (
    <section className="mt-24 scroll-mt-24">
      <SectionHead
        id="projects"
        icon={<FolderKanban size={20} />}
        title="Projects"
        desc="Pick a project to browse its real screens. Click any screenshot to enlarge it."
      />

      <Reveal>
        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          {/* list */}
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0" role="tablist" aria-label="Projects">
            {entries.map((e) => {
              const on = e.key === sel;
              return (
                <button
                  key={e.key}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setSel(e.key)}
                  className={`flex min-w-[200px] items-center gap-3 rounded-xl border p-3.5 text-left transition lg:min-w-0 ${
                    on ? "border-accent/50 bg-accent/10" : "border-line bg-surface hover:border-muted/50"
                  }`}
                >
                  <span className={`size-2 shrink-0 rounded-full ${e.kind === "live" ? "bg-ok" : "bg-muted/50"}`} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{e.title}</span>
                    <span className="block truncate text-xs text-muted">{e.sub}</span>
                  </span>
                  <span className="chip shrink-0">{e.kind === "live" ? "Live" : "Repo"}</span>
                </button>
              );
            })}
          </div>

          {/* detail */}
          <div className="panel min-w-0 p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
              >
                {cur.kind === "live" ? <LiveDetail p={cur.project} /> : <RepoDetail w={cur.repo} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function LiveDetail({ p }: { p: (typeof projects)[number] }) {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
            <span className="chip">
              <span className="live-dot size-1.5 rounded-full bg-ok" /> Live
            </span>
          </div>
          <p className="mt-1 text-muted">{p.tagline}</p>
        </div>
        <div className="flex gap-2">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-accent px-4 text-sm font-semibold text-accent-ink transition hover:brightness-110"
          >
            Visit site <ArrowUpRight size={15} />
          </a>
          <Link
            href={`/projects/${p.slug}`}
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-line px-4 text-sm font-semibold transition hover:border-muted"
          >
            Case study <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <ShotViewer shots={p.shots} url={p.liveLabel} />
      </div>

      <p className="mt-6 leading-relaxed text-muted">{p.summary}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">What it does</p>
          <ul className="space-y-2.5 text-[15px]">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">My role</p>
            <p className="text-sm leading-relaxed">{p.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RepoDetail({ w }: { w: (typeof otherWork)[number] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">{w.note}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight">{w.title}</h3>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">{w.desc}</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {w.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <a
        href={w.href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 text-sm font-semibold transition hover:border-muted"
      >
        <Code size={16} /> View on GitHub <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
