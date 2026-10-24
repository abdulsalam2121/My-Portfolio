"use client";

import {
  ArrowUpRight, Copy, CornerDownLeft, FileText, FolderKanban, History, LayoutDashboard, Mail, Moon, Search, User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { toggleTheme } from "./ThemeToggle";
import { profile, projects } from "@/lib/data";

type Item = { id: string; group: string; label: string; hint?: string; icon: React.ReactNode; run: () => void };

export function CommandPalette({ open, onClose, goTo }: { open: boolean; onClose: () => void; goTo: (id: string) => void }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(() => {
    const ext = (href: string) => () => window.open(href, "_blank", "noreferrer");
    return [
      { id: "overview", group: "Go to", label: "Overview", icon: <LayoutDashboard size={16} />, run: () => goTo("overview") },
      { id: "projects", group: "Go to", label: "Projects", icon: <FolderKanban size={16} />, run: () => goTo("projects") },
      { id: "experience", group: "Go to", label: "Experience", icon: <History size={16} />, run: () => goTo("experience") },
      { id: "about", group: "Go to", label: "About & skills", icon: <User size={16} />, run: () => goTo("about") },
      { id: "contact", group: "Go to", label: "Contact", icon: <Mail size={16} />, run: () => goTo("contact") },
      ...projects.map((p) => ({
        id: p.slug, group: "Case studies", label: p.title, hint: p.kind, icon: <FolderKanban size={16} />,
        run: () => router.push(`/projects/${p.slug}`),
      })),
      ...projects.map((p) => ({
        id: `live-${p.slug}`, group: "Open live site", label: p.liveLabel, hint: "new tab", icon: <ArrowUpRight size={16} />, run: ext(p.live),
      })),
      { id: "gh", group: "Links", label: "GitHub", icon: <ArrowUpRight size={16} />, run: ext(profile.github) },
      { id: "li", group: "Links", label: "LinkedIn", icon: <ArrowUpRight size={16} />, run: ext(profile.linkedin) },
      { id: "cv", group: "Links", label: "Résumé (PDF)", icon: <FileText size={16} />, run: ext(profile.cv) },
      { id: "mail", group: "Actions", label: "Send an email", hint: profile.email, icon: <Mail size={16} />, run: () => (location.href = `mailto:${profile.email}`) },
      { id: "copy", group: "Actions", label: "Copy email address", icon: <Copy size={16} />, run: () => navigator.clipboard?.writeText(profile.email) },
      { id: "theme", group: "Actions", label: "Toggle dark / light theme", icon: <Moon size={16} />, run: toggleTheme },
    ];
  }, [goTo, router]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? items.filter((i) => `${i.label} ${i.group} ${i.hint ?? ""}`.toLowerCase().includes(s)) : items;
  }, [items, q]);

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => setSel(0), [q]);

  if (!open) return null;

  function key(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((v) => Math.min(v + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSel((v) => Math.max(v - 1, 0)); }
    if (e.key === "Enter" && results[sel]) { e.preventDefault(); results[sel].run(); onClose(); }
    if (e.key === "Escape") onClose();
  }

  let lastGroup = "";
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 p-4 pt-[12vh] backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="panel w-full max-w-xl overflow-hidden shadow-[var(--shadow-lg)]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={key}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={17} className="text-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects, pages, links…"
            className="h-14 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted"
          />
          <span className="kbd">esc</span>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
          {results.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">No results for “{q}”</li>}
          {results.map((r, i) => {
            const head = r.group !== lastGroup;
            lastGroup = r.group;
            return (
              <li key={r.id} role="option" aria-selected={i === sel}>
                {head && <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-muted">{r.group}</p>}
                <button
                  onMouseEnter={() => setSel(i)}
                  onClick={() => { r.run(); onClose(); }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${i === sel ? "bg-accent/10 text-ink" : "text-ink/90"}`}
                >
                  <span className={i === sel ? "text-accent" : "text-muted"}>{r.icon}</span>
                  <span className="flex-1">{r.label}</span>
                  {r.hint && <span className="text-xs text-muted">{r.hint}</span>}
                  {i === sel && <CornerDownLeft size={14} className="text-muted" />}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 text-xs text-muted">
          <span className="flex items-center gap-1.5"><span className="kbd">↑</span><span className="kbd">↓</span> navigate</span>
          <span className="flex items-center gap-1.5"><span className="kbd">↵</span> select</span>
        </div>
      </div>
    </div>
  );
}
