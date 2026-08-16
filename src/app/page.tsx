import { parvas } from "@/content/parvas";
import ParvaBubble from "@/components/ParvaBubble";

export default function Home() {
  const leftParvas = parvas.slice(0, 9);
  const rightParvas = parvas.slice(9);

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 sm:py-4">
      <div className="grid grid-cols-1 items-center gap-3 lg:grid-cols-[0.85fr_minmax(0,2.4fr)_0.85fr] lg:gap-4">
        <div className="order-2 flex flex-col gap-2 lg:order-1">
          {leftParvas.map((parva) => (
            <ParvaBubble key={parva.slug} parva={parva} />
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
            className="flex flex-col items-center justify-center overflow-hidden rounded-[26px] px-6 py-16 text-center sm:py-24"
            style={{
              background:
                "radial-gradient(120% 140% at 50% 0%, #7f1d1d 0%, #4c0f0f 55%, #1c0a0a 100%)",
            }}
          >
            <p className="font-devanagari text-2xl text-gold sm:text-4xl">
              श्रीमहाभारतम्
            </p>
            <p className="font-devanagari mt-6 max-w-lg text-base leading-loose text-white/90 sm:text-lg">
              धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
              <br />
              मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥
            </p>
            <p className="mt-6 max-w-md text-sm text-white/70 sm:text-base">
              अठारह पर्वों में विभाजित विश्व का सबसे विशाल महाकाव्य — धर्म,
              कर्तव्य और कुरुक्षेत्र के युद्ध की अमर गाथा
            </p>
          </div>
        </div>

        <div className="order-3 flex flex-col gap-2">
          {rightParvas.map((parva) => (
            <ParvaBubble key={parva.slug} parva={parva} />
          ))}
        </div>
      </div>
    </div>
  );
}
