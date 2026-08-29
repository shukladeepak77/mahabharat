"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { otherLocalePath, type Locale } from "@/lib/locale";

export default function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  const { href } = otherLocalePath(pathname);

  return (
    <Link
      href={href}
      className={`group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-3.5 py-2 ring-1 ring-gold/50 transition-all duration-200 hover:-translate-y-0.5 hover:ring-gold sm:px-4 ${className}`}
      style={{
        background: "linear-gradient(135deg, #7f1d1d 0%, #1c0a0a 100%)",
        boxShadow: "0 4px 14px rgba(28,10,10,0.35), inset 0 1px 1px rgba(255,255,255,0.15)",
      }}
      aria-label={locale === "hi" ? "Switch to English" : "हिन्दी में पढ़ें — Switch to Hindi"}
      title={locale === "hi" ? "Switch to English" : "हिन्दी में पढ़ें"}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="relative h-4 w-4 shrink-0 text-gold"
        fill="none"
      >
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2.75 10h14.5" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M10 2.75c2.4 1.9 2.4 12.6 0 14.5c-2.4-1.9-2.4-12.6 0-14.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
      <span className="relative flex items-baseline gap-1 whitespace-nowrap text-xs font-bold sm:text-sm">
        <span
          className={`font-devanagari transition-colors ${
            locale === "hi" ? "text-amber-200" : "text-white/55"
          }`}
        >
          हिन्दी
        </span>
        <span className="text-white/35">/</span>
        <span className={`transition-colors ${locale === "en" ? "text-amber-200" : "text-white/55"}`}>
          English
        </span>
      </span>
    </Link>
  );
}
