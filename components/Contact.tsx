"use client";

import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-12 pt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-8 sm:p-14">
          <p className="label mb-4">04 — Contact</p>
          <h2 className="display text-[clamp(2.8rem,8vw,6.5rem)]">
            Have something
            <br />
            to <em className="text-accent">build?</em>
          </h2>
          <p className="mt-6 max-w-lg text-muted">
            I’m available for freelance projects and remote junior full-stack roles. Tell me what you’re making — I
            usually reply within a day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Let%E2%80%99s%20work%20together`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition hover:brightness-110"
            >
              {profile.email} <ArrowUpRight size={16} />
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3.5 text-sm transition hover:border-ink"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
              LinkedIn ↗
            </a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="link-underline">
              Résumé (PDF) ↗
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="flex flex-col items-center justify-between gap-2 py-10 text-xs text-muted sm:flex-row">
        <span>© 2026 {profile.name}</span>
        <span className="font-mono">Built with Next.js · deployed on Vercel</span>
      </footer>
    </section>
  );
}
