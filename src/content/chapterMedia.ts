export type ChapterMedia = {
  image?: string;
  videos?: string[];
};

// Keyed by `${parvaSlug}:${chapterNumber}`. Add entries here as more
// chapters get artwork/video — everything else falls back to a text-only view.
const media: Record<string, ChapterMedia> = {};

export function getChapterMedia(
  parvaSlug: string,
  chapterNumber: number
): ChapterMedia | undefined {
  return media[`${parvaSlug}:${chapterNumber}`];
}
