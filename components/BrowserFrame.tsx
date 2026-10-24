import Image from "next/image";

export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-lg)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-black/5 bg-[#f1f2f7] px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff6159]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c940]" />
        </div>
        <div className="mx-auto flex max-w-[62%] flex-1 items-center justify-center gap-1.5 truncate rounded-md bg-white px-3 py-1 text-[11px] text-[#5b6075]">
          <span aria-hidden className="size-1.5 rounded-full bg-[#28c940]" />
          {url}
        </div>
        <div className="w-10" />
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.7rem] border-[5px] border-[#14152a] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ${className}`}
    >
      <Image src={src} alt={alt} width={780} height={1688} sizes="200px" className="h-auto w-full" />
    </div>
  );
}
