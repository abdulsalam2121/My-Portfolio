import Image from "next/image";

export function BrowserFrame({
  src,
  alt,
  url,
  priority,
  sizes = "(min-width: 1024px) 640px, 100vw",
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </div>
        <div className="mx-auto max-w-[60%] flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-[11px] text-muted">
          {url}
        </div>
        <div className="w-10" />
      </div>
      <Image src={src} alt={alt} width={1600} height={1000} sizes={sizes} priority={priority} className="h-auto w-full" />
    </div>
  );
}

export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] border-[5px] border-surface-2 bg-bg shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-line ${className}`}
    >
      <Image src={src} alt={alt} width={780} height={1688} sizes="180px" className="h-auto w-full" />
    </div>
  );
}
