import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { parvas, getParvaBySlug } from "@/content/parvas";
import { getParvaContent } from "@/content/getParvaContent";
import { getChapterMedia } from "@/content/chapterMedia";
import HeroBanner from "@/components/HeroBanner";
import ChapterList from "@/components/ChapterList";
import ChapterSection from "@/components/ChapterSection";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/site";
import { hreflangAlternates } from "@/lib/locale";

export async function generateStaticParams() {
  return parvas.map((parva) => ({ slug: parva.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parva = getParvaBySlug(slug);
  if (!parva) return {};
  const url = `/parva/${slug}`;
  return {
    title: parva.title,
    description: parva.description,
    keywords: [parva.title, `${parva.title} महाभारत`, "महाभारत", "महाभारत कथा"],
    alternates: {
      canonical: url,
      languages: hreflangAlternates(url, `/en/parva/${slug}/`),
    },
    openGraph: {
      type: "article",
      url,
      title: `${parva.title} — ${SITE_NAME}`,
      description: parva.description,
      images: [{ ...OG_IMAGE, alt: parva.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${parva.title} — ${SITE_NAME}`,
      description: parva.description,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function ParvaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parva = getParvaBySlug(slug);
  if (!parva) notFound();

  const content = getParvaContent(slug);
  const chapters = content?.chapters ?? [];

  const index = parvas.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? parvas[index - 1] : undefined;
  const next = index < parvas.length - 1 ? parvas[index + 1] : undefined;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: parva.title,
        item: `${SITE_URL}/parva/${slug}/`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 min-[1500px]:max-w-[1500px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="min-[1500px]:grid min-[1500px]:grid-cols-[1fr_300px] min-[1500px]:items-start min-[1500px]:gap-8">
        <div className="min-w-0">
          <HeroBanner
            eyebrow={parva.subtitle}
            title={parva.title}
            description={parva.description}
            youtubeId={parva.youtubeId}
          />

          <div className="mt-10">
            <div className="flex flex-col divide-y divide-border-muted/60 rounded-[24px] border border-border-muted bg-surface px-5 shadow-[var(--shadow)] sm:px-6">
              {chapters.length === 0 ? (
                <div className="p-8 text-center text-foreground/70">
                  <p className="font-devanagari text-lg">
                    इस पर्व का पाठ शीघ्र ही जोड़ा जाएगा।
                  </p>
                </div>
              ) : (
                chapters.map((chapter) => (
                  <ChapterSection
                    key={chapter.id}
                    chapter={chapter}
                    media={getChapterMedia(slug, chapter.number)}
                  />
                ))
              )}
            </div>

            <nav className="mt-12 flex items-center justify-between gap-4 text-sm">
              {prev ? (
                <Link
                  href={`/parva/${prev.slug}`}
                  className="font-devanagari rounded-full px-3 py-2 text-crimson-dark hover:bg-soft"
                >
                  ← {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/parva/${next.slug}`}
                  className="font-devanagari rounded-full px-3 py-2 text-crimson-dark hover:bg-soft"
                >
                  {next.title} →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </div>
        </div>

        <div className="mt-10 hidden min-[1500px]:block min-[1500px]:sticky min-[1500px]:top-20">
          <ChapterList chapters={chapters} />
        </div>
      </div>
    </div>
  );
}
