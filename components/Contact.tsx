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
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-10 pt-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent p-8 text-accent-ink sm:p-14">
          <div
            aria-hidden
            className="drift absolute -right-20 -top-24 size-96 rounded-full bg-[#d6ff3c] opacity-90 mix-blend-multiply blur-3xl"
          />
          <div className="relative">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-[13px] font-semibold">
              <span className="live-dot size-2 rounded-full bg-[#22c55e]" /> Taking on new projects
            </p>
            <h2 className="display text-[clamp(2.8rem,8vw,6.5rem)]">
              Let’s build
              <br />
              something people use.
            </h2>
            <p className="mt-6 max-w-lg text-lg opacity-90">
              Freelance projects or a remote junior full-stack role. Tell me what you’re making and I’ll reply within a
              day.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}?subject=Let%E2%80%99s%20work%20together`}
                className="inline-flex items-center gap-2 rounded-full bg-[#0d0f1f] px-7 py-4 text-[15px] font-semibold text-white transition hover:scale-[1.03]"
              >
                {profile.email} <ArrowUpRight size={17} />
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center gap-2 rounded-full border border-current/40 px-6 py-4 text-[15px] font-semibold transition hover:bg-white/15"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-current/25 pt-6 text-sm font-semibold">
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
        </div>
      </Reveal>

      <footer className="flex flex-col items-center justify-between gap-2 py-10 text-xs text-muted sm:flex-row">
        <span>© 2026 {profile.name}</span>
        <span>Designed &amp; built by me · Next.js on Vercel</span>
      </footer>
    </section>
  );
}
