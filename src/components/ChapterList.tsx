import type { Chapter } from "@/content/types";

export default function ChapterList({ chapters }: { chapters: Chapter[] }) {
  if (chapters.length === 0) return null;

  return (
    <div className="flex flex-col overflow-hidden rounded-[24px] border border-border-muted bg-surface shadow-[var(--shadow)]">
      <div
        className="px-5 py-4"
        style={{
          background: "linear-gradient(135deg, #1c0a0a 0%, #7f1d1d 55%, #b91c1c 100%)",
        }}
      >
        <p className="font-devanagari text-xl font-bold tracking-wide text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] sm:text-[1.4rem]">
          इस पर्व के अध्याय
        </p>
      </div>
      <nav className="flex max-h-[68vh] flex-col gap-1.5 overflow-y-auto p-3">
        {chapters.map((c) => (
          <a
            key={c.id}
            href={`#ch-${c.number}`}
            className="font-devanagari group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-150 hover:bg-soft hover:pl-4"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-steel to-crimson-dark text-sm font-bold text-white shadow-sm ring-1 ring-border-muted transition-transform duration-150 group-hover:scale-110"
            >
              {c.number}
            </span>
            <span className="text-[1.05rem] font-semibold leading-snug text-crimson-dark transition-colors group-hover:text-crimson">
              {c.title}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
