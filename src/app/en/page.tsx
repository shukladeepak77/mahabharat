import type { Metadata } from "next";
import Image from "next/image";
import { parvasEn } from "@/content/parvasEn";
import ParvaBubble from "@/components/ParvaBubble";
import { SITE_NAME_EN, SITE_DESCRIPTION_EN } from "@/lib/site";
import { hreflangAlternates } from "@/lib/locale";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME_EN} — The Mahabharata Epic in English`,
  },
  description: SITE_DESCRIPTION_EN,
  alternates: {
    canonical: "/en/",
    languages: hreflangAlternates("/", "/en/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${SITE_NAME_EN} — The Mahabharata Epic in English`,
    description: SITE_DESCRIPTION_EN,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME_EN} — The Mahabharata Epic in English`,
    description: SITE_DESCRIPTION_EN,
  },
};

export default function HomeEn() {
  const leftParvas = parvasEn.slice(0, 9);
  const rightParvas = parvasEn.slice(9);

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-2 sm:px-6 sm:py-3">
      <div className="grid grid-cols-1 items-center gap-3 lg:grid-cols-[0.85fr_minmax(0,2.4fr)_0.85fr] lg:gap-4">
        <div className="order-2 flex flex-col gap-1 lg:order-1">
          {leftParvas.map((parva) => (
            <ParvaBubble key={parva.slug} parva={parva} compact locale="en" />
          ))}
        </div>

        <div
          className="order-1 rounded-[28px] p-[3px] shadow-[0_24px_60px_rgba(127,29,29,0.35)] lg:order-2"
          style={{
            background:
              "linear-gradient(135deg, #fbbf24 0%, #b91c1c 45%, #1c0a0a 100%)",
          }}
        >
          <div
            className="flex flex-col items-center justify-center overflow-hidden rounded-[26px] px-6 py-4 text-center sm:py-5"
            style={{
              background:
                "radial-gradient(120% 140% at 50% 0%, #7f1d1d 0%, #4c0f0f 55%, #1c0a0a 100%)",
            }}
          >
            <Image
              src="/images/mahabharat-hero.jpg"
              alt="Shri Mahabharatam"
              width={1100}
              height={614}
              priority
              className="h-auto w-full max-w-lg sm:max-w-xl"
            />
            <h1 className="mt-2 text-xl font-bold text-gold sm:text-2xl">
              Mahabharata
            </h1>
            <p className="font-devanagari mt-2 max-w-lg text-sm leading-snug text-white/90 sm:text-base">
              धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
              <br />
              मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥
            </p>
            <p className="mt-3 max-w-lg text-sm font-semibold text-white sm:text-base">
              The greatest epic in the world, divided into eighteen parvas —
              an eternal saga of dharma, duty, and the war of Kurukshetra
            </p>
          </div>
        </div>

        <div className="order-3 flex flex-col gap-1">
          {rightParvas.map((parva) => (
            <ParvaBubble key={parva.slug} parva={parva} compact locale="en" />
          ))}
        </div>
      </div>
    </div>
  );
}
