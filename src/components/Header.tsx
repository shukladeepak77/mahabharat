"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { parvas } from "@/content/parvas";
import { parvasEn } from "@/content/parvasEn";
import ParvaBubble from "@/components/ParvaBubble";
import ContactEmail from "@/components/ContactEmail";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import YouTubeButton from "@/components/YouTubeButton";
import { homeHref, type Locale } from "@/lib/locale";
import { YOUTUBE_PLAYLIST_URL } from "@/lib/site";
import dharmaPathLogo from "../../public/images/dharma-path-logo.png";

export default function Header({ locale: localeProp }: { locale?: Locale } = {}) {
  const pathname = usePathname();
  const locale: Locale = localeProp ?? (pathname?.startsWith("/en") ? "en" : "hi");
  const parvaList = locale === "en" ? parvasEn : parvas;
  const activeSlug = pathname?.includes("/parva/")
    ? pathname.split("/parva/")[1]?.split("/")[0]
    : undefined;
  const onHome = !activeSlug;

  return (
    <header
      className="sticky top-0 z-20 shadow-[0_2px_16px_rgba(127,29,29,0.25)]"
      style={{ background: "linear-gradient(90deg, #7f1d1d 0%, #b91c1c 100%)" }}
    >
      <div className="mx-auto flex max-w-[1800px] items-stretch gap-2 px-4 sm:gap-4 sm:px-6">
      <div className="min-w-0 flex-1 py-2">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={homeHref(locale)}
          style={{
            background:
              "radial-gradient(120% 140% at 30% 15%, #7f1d1d 0%, #4c0f0f 55%, #1c0a0a 100%)",
            boxShadow: onHome
              ? "0 0 0 3px rgba(253,224,71,0.55), 0 6px 20px rgba(28,10,10,0.5), inset 0 1px 1px rgba(255,255,255,0.45)"
              : "0 0 0 2px rgba(253,224,71,0.3), 0 4px 16px rgba(28,10,10,0.4), inset 0 1px 1px rgba(255,255,255,0.35)",
          }}
          className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 ring-1 ring-gold/60 transition-all duration-200 hover:-translate-y-0.5 hover:ring-gold sm:gap-2.5 sm:px-5"
          aria-label={locale === "en" ? "Home" : "मुख पृष्ठ"}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/40 to-transparent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50"
            style={{
              background:
                "radial-gradient(circle, #fde047 0%, transparent 70%)",
            }}
          />
          <span
            aria-hidden="true"
            className="relative text-lg leading-none text-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          >
            🏹
          </span>
          <span
            className="font-devanagari relative whitespace-nowrap text-base font-extrabold tracking-wide sm:text-xl"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ffffff 0%, #fff3b0 35%, #fde047 70%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              filter:
                "drop-shadow(0 0 10px rgba(255,225,225,0.85)) drop-shadow(0 1px 1px rgba(76,15,15,0.35))",
            }}
          >
            {locale === "en" ? "Mahabharata" : "महाभारत"}
          </span>
        </Link>
        {/* Mobile: switcher + email flow inline right after the 🏹 pill,
            wrapping naturally like the nav bubbles do. sm+ gets a
            persistent switcher in the gap between the nav bubbles and
            the foundation logo instead (below), with this row hidden. */}
        <div className="flex flex-wrap items-center gap-2 sm:hidden">
          <LanguageSwitcher locale={locale} />
          <YouTubeButton
            href={YOUTUBE_PLAYLIST_URL}
            label={locale === "en" ? "Watch on YouTube" : "यूट्यूब पर देखें"}
          />
          <ContactEmail />
        </div>
        <nav
          aria-label={locale === "en" ? "Parva navigation" : "पर्व नेविगेशन"}
          className="hidden items-center gap-1.5 py-0.5 sm:flex sm:min-w-0 sm:flex-1 sm:flex-wrap"
        >
          {parvaList.map((parva) => (
            <ParvaBubble
              key={parva.slug}
              parva={parva}
              tiny
              locale={locale}
              active={parva.slug === activeSlug}
            />
          ))}
        </nav>
        {!onHome && (
          <nav
            aria-label={locale === "en" ? "Parva navigation" : "पर्व नेविगेशन"}
            className="flex w-full flex-wrap gap-1.5 py-0.5 sm:hidden"
          >
            {parvaList.map((parva) => (
              <ParvaBubble
                key={parva.slug}
                parva={parva}
                chip
                locale={locale}
                active={parva.slug === activeSlug}
              />
            ))}
          </nav>
        )}
      </div>
      </div>

      {/* sm+: switcher lives in the open gap between the nav bubbles and
          the foundation logo, on every page. */}
      <div className="hidden shrink-0 self-start pt-3 sm:flex sm:pt-4">
        <LanguageSwitcher locale={locale} />
      </div>

      <div className="flex w-28 shrink-0 items-end gap-2 pb-2 sm:w-auto sm:gap-3 sm:pb-3">
        <div className="hidden sm:inline-flex sm:items-center sm:gap-1.5">
          <YouTubeButton
            href={YOUTUBE_PLAYLIST_URL}
            label={locale === "en" ? "Watch on YouTube" : "यूट्यूब पर देखें"}
            iconOnly
          />
          <ContactEmail className="mb-1.5" />
        </div>
        <Image
          src={dharmaPathLogo}
          alt="Dharma Path USA Foundation"
          className="h-28 w-28 shrink-0 object-contain drop-shadow-lg sm:h-32 sm:w-32"
        />
      </div>
      </div>
    </header>
  );
}
