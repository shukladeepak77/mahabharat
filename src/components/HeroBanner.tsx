import YouTubeButton from "@/components/YouTubeButton";

export default function HeroBanner({
  eyebrow,
  title,
  description,
  youtubeId,
  watchLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  youtubeId?: string;
  watchLabel?: string;
}) {
  return (
    <section
      className="mx-auto max-w-3xl rounded-[28px] px-6 py-10 text-center shadow-[0_24px_60px_rgba(127,29,29,0.35)] sm:px-10 sm:py-14"
      style={{
        background:
          "linear-gradient(135deg, #1c0a0a 0%, #7f1d1d 55%, #b91c1c 100%)",
      }}
    >
      <p className="font-devanagari text-xl text-gold sm:text-2xl">
        {eyebrow}
      </p>
      <h1 className="font-devanagari mt-3 text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
        {description}
      </p>
      {youtubeId && (
        <div className="mt-5 flex justify-center">
          <YouTubeButton
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            label={watchLabel ?? "इस पर्व का वीडियो देखें"}
            className="!px-3.5 !py-1.5"
          />
        </div>
      )}
    </section>
  );
}
