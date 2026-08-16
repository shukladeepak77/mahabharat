"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { parvas } from "@/content/parvas";
import ParvaBubble from "@/components/ParvaBubble";
import ContactEmail from "@/components/ContactEmail";
import dharmaPathLogo from "../../public/images/dharma-path-logo.png";

export default function Header() {
  const pathname = usePathname();
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
      <div className="min-w-0 flex-1 py-3">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/"
          style={{
            background:
              "radial-gradient(120% 140% at 30% 15%, #7f1d1d 0%, #4c0f0f 55%, #1c0a0a 100%)",
            boxShadow: onHome
              ? "0 0 0 3px rgba(253,224,71,0.55), 0 6px 20px rgba(28,10,10,0.5), inset 0 1px 1px rgba(255,255,255,0.45)"
              : "0 0 0 2px rgba(253,224,71,0.3), 0 4px 16px rgba(28,10,10,0.4), inset 0 1px 1px rgba(255,255,255,0.35)",
          }}
          className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 ring-1 ring-gold/60 transition-all duration-200 hover:-translate-y-0.5 hover:ring-gold sm:gap-2.5 sm:px-5"
          aria-label="मुख पृष्ठ"
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
            महाभारत
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-2 sm:hidden">
          <ContactEmail />
        </div>
        <nav
          aria-label="पर्व नेविगेशन"
          className="hidden items-center gap-2 py-0.5 sm:flex sm:min-w-0 sm:flex-1 sm:flex-wrap"
        >
          {parvas.map((parva) => (
            <ParvaBubble
              key={parva.slug}
              parva={parva}
              tiny
              active={parva.slug === activeSlug}
            />
          ))}
        </nav>
        {!onHome && (
          <nav
            aria-label="पर्व नेविगेशन"
            className="flex w-full flex-wrap gap-1.5 py-0.5 sm:hidden"
          >
            {parvas.map((parva) => (
              <ParvaBubble
                key={parva.slug}
                parva={parva}
                chip
                active={parva.slug === activeSlug}
              />
            ))}
          </nav>
        )}
      </div>

      {onHome && (
        <div className="mx-auto max-w-3xl pt-4 pb-2 text-center sm:pt-0 sm:pb-3">
          <p className="font-devanagari text-base leading-snug text-gold sm:text-lg">
            धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
            <br />
            मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥
          </p>
          <h1 className="font-devanagari sr-only mt-1 text-2xl font-bold text-white sm:not-sr-only sm:text-3xl">
            महाभारत
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-white/90 sm:mt-1 sm:text-sm">
            महर्षि वेदव्यास रचित महाभारत — अठारह पर्वों में विभाजित यह
            विश्व का सबसे विशाल महाकाव्य धर्म, कर्तव्य और कुरुक्षेत्र के
            युद्ध की अमर गाथा का वर्णन करता है। नीचे किसी भी पर्व पर जाकर
            पाठ पढ़ें।
          </p>
        </div>
      )}
      </div>

      <div className="flex w-28 shrink-0 items-end gap-2 pb-2 sm:w-auto sm:gap-3 sm:pb-3">
        <div className="hidden sm:inline-flex">
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
