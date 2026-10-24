import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

const facts = [
  { n: "2", l: "products live on a VPS" },
  { n: "5+", l: "freelance clients" },
  { n: "100%", l: "delivered on time" },
  { n: "’25", l: "BSCS, Sukkur IBA" },
];

export function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-32 sm:pt-40 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-[40rem] w-screen -translate-x-1/2"
        style={{
          background:
            "radial-gradient(46rem 24rem at 82% 8%, color-mix(in srgb, #5b6cff 22%, transparent), transparent 70%), radial-gradient(34rem 22rem at 8% 30%, color-mix(in srgb, #8b5cf6 14%, transparent), transparent 70%)",
        }}
      />
      <div>
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5">
            <span className="pulse-dot size-2 rounded-full bg-grad" />
            <span className="label !text-ink">Open to freelance &amp; remote roles</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="display text-[clamp(3rem,7.4vw,6.4rem)]">
            I build web products
            <br />
            people <em className="text-grad">actually</em> use.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            I’m <span className="text-ink">{profile.short}</span>, a full-stack developer in {profile.location}.{" "}
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-grad px-6 py-3.5 text-sm font-medium shadow-[0_10px_30px_-10px_#5b5cff] transition hover:brightness-110"
            >
              See the work
              <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium transition hover:border-ink"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mx-auto w-full max-w-sm lg:max-w-none">
        <figure className="relative">
          <div className="overflow-hidden rounded-[2rem] rounded-br-[7rem] border border-line bg-surface">
            <Image
              src="/portrait.webp"
              alt="Portrait of Abdul Salam Ghanghro"
              width={960}
              height={1200}
              priority
              sizes="(min-width: 1024px) 360px, 80vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="label absolute -bottom-3 left-4 rounded-full border border-line bg-bg px-3 py-1.5">
            {profile.location}
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={0.3} className="lg:col-span-2">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.l} className="bg-bg p-5">
              <dt className="display text-4xl sm:text-5xl">{f.n}</dt>
              <dd className="label mt-2">{f.l}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
