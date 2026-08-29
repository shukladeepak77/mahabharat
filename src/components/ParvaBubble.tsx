import Link from "next/link";
import type { Parva } from "@/content/parvas";
import { bubbleColors, bubbleStyle } from "@/lib/bubble";
import { parvaHref, type Locale } from "@/lib/locale";

export default function ParvaBubble({
  parva,
  active = false,
  compact = false,
  tiny = false,
  chip = false,
  locale = "hi",
}: {
  parva: Parva;
  active?: boolean;
  compact?: boolean;
  tiny?: boolean;
  chip?: boolean;
  locale?: Locale;
}) {
  const color = bubbleColors[(parva.order - 1) % bubbleColors.length];
  const href = parvaHref(parva.slug, locale);

  if (chip) {
    return (
      <Link
        href={href}
        style={bubbleStyle(color, active)}
        className="font-devanagari relative shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
      >
        {parva.order}. {parva.title}
      </Link>
    );
  }

  if (tiny) {
    return (
      <Link
        href={href}
        style={bubbleStyle(color, active)}
        className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:px-3.5 sm:py-2"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/40 to-transparent"
        />
        <span className="font-devanagari relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-extrabold text-white ring-1 ring-white/40">
          {parva.order}
        </span>
        <span className="font-devanagari relative whitespace-nowrap text-sm font-bold text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:text-base">
          {parva.title}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      style={bubbleStyle(color, active)}
      className={
        compact
          ? "group relative flex items-center gap-2.5 overflow-hidden rounded-2xl px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          : "group relative flex items-center gap-4 overflow-hidden rounded-3xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:px-6 sm:py-5"
      }
    >
      <span
        aria-hidden="true"
        className={
          compact
            ? "pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/40 to-transparent"
            : "pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/40 to-transparent"
        }
      />
      <span
        className={
          compact
            ? "font-devanagari relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-extrabold text-white ring-1 ring-white/40"
            : "font-devanagari relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg font-extrabold text-white ring-1 ring-white/40"
        }
      >
        {parva.order}
      </span>
      <span className="relative min-w-0">
        {!compact && (
          <span className="block text-xs font-semibold uppercase tracking-wide text-white/75">
            {parva.subtitle}
          </span>
        )}
        <span
          className={
            compact
              ? "font-devanagari block leading-snug text-base font-extrabold text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]"
              : "font-devanagari block truncate text-2xl font-extrabold text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:text-[1.7rem]"
          }
        >
          {parva.title}
        </span>
      </span>
    </Link>
  );
}
