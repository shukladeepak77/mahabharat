import Image from "next/image";
import type { Chapter } from "@/content/types";
import type { ChapterMedia } from "@/content/chapterMedia";

export default function ChapterSection({
  chapter,
  media,
}: {
  chapter: Chapter;
  media?: ChapterMedia;
}) {
  return (
    <div
      id={`ch-${chapter.number}`}
      className="scroll-mt-40 border-b border-border-muted/60 py-6 last:border-b-0"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-devanagari inline-flex shrink-0 items-center rounded-full bg-gradient-to-br from-steel to-crimson-dark px-3 py-1 text-sm font-bold whitespace-nowrap text-white shadow-sm">
          अध्याय {chapter.number}
        </span>
        <h2 className="font-devanagari text-xl font-bold text-crimson-dark sm:text-2xl">
          {chapter.title}
        </h2>
      </div>

      {media?.image && (
        <div className="mt-4 overflow-hidden rounded-2xl border border-border-muted shadow-[var(--shadow)]">
          <Image
            src={media.image}
            alt={chapter.title}
            width={1024}
            height={1024}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
      )}

      {media?.videos?.map((src) => (
        <video
          key={src}
          controls
          preload="metadata"
          poster={media.image}
          className="mt-4 w-full rounded-2xl border border-border-muted shadow-[var(--shadow)]"
        >
          <source src={src} />
        </video>
      ))}

      <div className="mt-4 flex flex-col gap-4">
        {chapter.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base leading-loose text-foreground/90 sm:text-lg"
          >
            {p}
          </p>
        ))}
      </div>

      {chapter.moral && (
        <div
          className="mt-5 rounded-2xl border-l-4 border-gold px-4 py-3 sm:px-5 sm:py-4"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--gold) 14%, transparent) 0%, color-mix(in srgb, var(--steel) 10%, transparent) 100%)",
          }}
        >
          <p className="font-devanagari text-xs font-bold uppercase tracking-wide text-crimson-dark">
            इस अध्याय की शिक्षा
          </p>
          <p className="mt-1.5 text-sm italic leading-relaxed text-foreground/85 sm:text-base">
            {chapter.moral}
          </p>
        </div>
      )}
    </div>
  );
}
