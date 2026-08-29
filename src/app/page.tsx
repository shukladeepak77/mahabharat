import Image from "next/image";
import { parvas } from "@/content/parvas";
import ParvaBubble from "@/components/ParvaBubble";
import YouTubeButton from "@/components/YouTubeButton";
import { YOUTUBE_PLAYLIST_URL } from "@/lib/site";

export default function Home() {
  const leftParvas = parvas.slice(0, 9);
  const rightParvas = parvas.slice(9);

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-2 sm:px-6 sm:py-3">
      <div className="grid grid-cols-1 items-center gap-3 lg:grid-cols-[0.85fr_minmax(0,2.4fr)_0.85fr] lg:gap-4">
        <div className="order-2 flex flex-col gap-1 lg:order-1">
          {leftParvas.map((parva) => (
            <ParvaBubble key={parva.slug} parva={parva} compact />
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
            className="flex flex-col items-center justify-center overflow-hidden rounded-[26px] px-6 py-6 text-center sm:py-8"
            style={{
              background:
                "radial-gradient(120% 140% at 50% 0%, #7f1d1d 0%, #4c0f0f 55%, #1c0a0a 100%)",
            }}
          >
            <Image
              src="/images/mahabharat-hero.jpg"
              alt="श्रीमहाभारतम्"
              width={1100}
              height={614}
              priority
              className="h-auto w-full max-w-lg sm:max-w-xl"
            />
            <h1 className="font-devanagari mt-2 text-xl font-bold text-gold sm:text-2xl">
              महाभारत
            </h1>
            <p className="font-devanagari mt-2 max-w-lg text-sm leading-snug text-white/90 sm:text-base">
              धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
              <br />
              मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥
            </p>
            <p className="mt-3 max-w-lg text-sm font-semibold text-white sm:text-base">
              अठारह पर्वों में विभाजित विश्व का सबसे विशाल महाकाव्य — धर्म,
              कर्तव्य और कुरुक्षेत्र के युद्ध की अमर गाथा
            </p>
            <div className="mt-5 border-t border-white/15 pt-5">
              <YouTubeButton
                href={YOUTUBE_PLAYLIST_URL}
                label="पूरी प्लेलिस्ट यूट्यूब पर देखें"
                size="lg"
              />
            </div>
          </div>
        </div>

        <div className="order-3 flex flex-col gap-1">
          {rightParvas.map((parva) => (
            <ParvaBubble key={parva.slug} parva={parva} compact />
          ))}
        </div>
      </div>
    </div>
  );
}
