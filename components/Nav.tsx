"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-full border border-line bg-bg/75 px-4 py-2 backdrop-blur-xl sm:px-5 mx-3 md:mx-auto">
        <Link href="/" className="flex items-center gap-2 font-medium tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid size-7 place-items-center rounded-full bg-accent font-mono text-[11px] font-semibold text-accent-ink">
            AS
          </span>
          <span className="hidden sm:inline">{profile.short}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-underline transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent hover:text-accent-ink sm:inline-flex"
          >
            Résumé <ArrowUpRight size={14} />
          </a>
          <button
            className="grid size-9 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-3 mt-2 rounded-3xl border border-line bg-bg/95 p-4 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-lg last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <a href={profile.cv} target="_blank" rel="noreferrer" className="block pt-3 text-lg text-accent">
            Résumé ↗
          </a>
        </div>
      )}
    </header>
  );
}
