"use client";

import { ArrowUpRight, Check, Copy, FileText, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHead } from "./ui";
import { profile } from "@/lib/data";

const field =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-[15px] outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);

  function send(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Project enquiry from ${name || "your portfolio"}`;
    const body = `${msg}\n\n— ${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  const links = [
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: FileText, label: "Résumé (PDF)", href: profile.cv },
  ];

  return (
    <section className="mt-24 scroll-mt-24">
      <SectionHead id="contact" icon={<Mail size={20} />} title="Contact" desc="Tell me what you’re building. I usually reply within a day." />

      <Reveal>
        <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr]">
          <form onSubmit={send} className="panel space-y-4 p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Your name
                <input className={`${field} mt-1.5`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" autoComplete="name" required />
              </label>
              <label className="block text-sm font-medium">
                Your email
                <input className={`${field} mt-1.5`} type="email" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="jane@company.com" autoComplete="email" required />
              </label>
            </div>
            <label className="block text-sm font-medium">
              Message
              <textarea className={`${field} mt-1.5 min-h-36 resize-y`} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="What are you building, and how can I help?" required />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-muted">Opens your email app with this message ready to send.</p>
              <button
                type="submit"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-ink transition hover:brightness-110"
              >
                <Send size={15} /> Send message
              </button>
            </div>
          </form>

          <div className="space-y-3">
            <div className="panel p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
              <p className="mt-2 break-all font-medium">{profile.email}</p>
              <button
                onClick={copy}
                className="mt-4 inline-flex h-9 items-center gap-2 rounded-lg border border-line px-3.5 text-sm font-medium transition hover:border-muted"
              >
                {copied ? <Check size={15} className="text-ok" /> : <Copy size={15} />}
                {copied ? "Copied" : "Copy address"}
              </button>
            </div>
            <div className="panel divide-y divide-line">
              {[{ icon: ArrowUpRight, label: "GitHub", href: profile.github }, ...links].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition hover:bg-surface-2"
                >
                  <l.icon size={16} className="text-muted" />
                  <span className="flex-1">{l.label}</span>
                  <ArrowUpRight size={14} className="text-muted" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row">
        <span>© 2026 {profile.name}</span>
        <span>Press <span className="kbd">Ctrl K</span> to search · Built with Next.js, hosted on Vercel</span>
      </footer>
    </section>
  );
}
