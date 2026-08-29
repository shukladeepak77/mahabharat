import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { parvasEn, getParvaEnBySlug } from "@/content/parvasEn";
import { getParvaContentEn } from "@/content/getParvaContentEn";
import { getChapterMedia } from "@/content/chapterMedia";
import HeroBanner from "@/components/HeroBanner";
import ChapterList from "@/components/ChapterList";
import ChapterSection from "@/components/ChapterSection";
import { SITE_URL, SITE_NAME_EN, OG_IMAGE } from "@/lib/site";
import { hreflangAlternates } from "@/lib/locale";

export async function generateStaticParams() {
  return parvasEn.map((parva) => ({ slug: parva.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parva = getParvaEnBySlug(slug);
  if (!parva) return {};
  const url = `/en/parva/${slug}/`;
  return {
    title: parva.title,
    description: parva.description,
    keywords: [parva.title, `${parva.title} Mahabharata`, "Mahabharata", "Mahabharat"],
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/parva/${slug}/`, url),
    },
    openGraph: {
      type: "article",
      url,
      title: `${parva.title} — ${SITE_NAME_EN}`,
      description: parva.description,
      images: [{ ...OG_IMAGE, alt: parva.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${parva.title} — ${SITE_NAME_EN}`,
      description: parva.description,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function ParvaPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parva = getParvaEnBySlug(slug);
  if (!parva) notFound();

  const content = getParvaContentEn(slug);
  const chapters = content?.chapters ?? [];

  const index = parvasEn.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? parvasEn[index - 1] : undefined;
  const next = index < parvasEn.length - 1 ? parvasEn[index + 1] : undefined;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME_EN,
        item: `${SITE_URL}/en/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: parva.title,
        item: `${SITE_URL}/en/parva/${slug}/`,
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
            watchLabel="Watch this parva's video"
          />

          <div className="mt-10">
            <div className="flex flex-col divide-y divide-border-muted/60 rounded-[24px] border border-border-muted bg-surface px-5 shadow-[var(--shadow)] sm:px-6">
              {chapters.length === 0 ? (
                <div className="p-8 text-center text-foreground/70">
                  <p className="text-lg">
                    The text of this parva will be added soon.
                  </p>
                </div>
              ) : (
                chapters.map((chapter) => (
                  <ChapterSection
                    key={chapter.id}
                    chapter={chapter}
                    media={getChapterMedia(slug, chapter.number)}
                    locale="en"
                  />
                ))
              )}
            </div>

            <nav className="mt-12 flex items-center justify-between gap-4 text-sm">
              {prev ? (
                <Link
                  href={`/en/parva/${prev.slug}`}
                  className="rounded-full px-3 py-2 text-crimson-dark hover:bg-soft"
                >
                  ← {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/en/parva/${next.slug}`}
                  className="rounded-full px-3 py-2 text-crimson-dark hover:bg-soft"
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
          <ChapterList chapters={chapters} locale="en" />
        </div>
      </div>
    </div>
  );
}
