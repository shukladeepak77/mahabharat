# Content model

The site is organized around **18 parvas** (books), matching the traditional division of the Mahabharata. Metadata for all 18 lives in `src/content/parvas.ts`; the Hindi narrative text for each lives in `src/content/data/parva-N.json`. The site is bilingual — see "Bilingual (Hindi/English)" below.

## Status

- **Parvas 1–18 (Hindi)** — complete, 284 chapters total, written from scratch (no source text files were used for this project — content is composed directly in the established prose style).
- **Parva 1 (English)** — complete, 22 chapters, a full translation of the Hindi text, at `src/content/data-en/parva-1.json`.
- **Parvas 2–18 (English)** — empty stubs (`{"slug": "parva-N", "chapters": []}`) at `src/content/data-en/parva-N.json`. The site gracefully shows "The text of this parva will be added soon." for any English parva with no chapters yet.

## Chapter JSON shape

```json
{
  "number": 1,
  "title": "अध्याय का शीर्षक",
  "paragraphs": ["पहला अनुच्छेद...", "दूसरा अनुच्छेद..."],
  "id": 1,
  "moral": "इस अध्याय की शिक्षा — एक पंक्ति का सार।"
}
```

Same shape for English chapters, just with English strings. Each chapter typically runs 4–5 rich narrative paragraphs plus a one-line `moral`. Follow Parva 1's prose style and pacing when writing further parvas: flowing storytelling, not terse summary.

## Workflow for adding a parva (Hindi)

1. Read the existing empty stub at `src/content/data/parva-N.json`.
2. Write the full chapter list for that parva, matching the style/depth of Parva 1.
3. `npm run build` to validate.
4. Spot-check in the browser (`npm run dev`).
5. Commit.

## Workflow for translating a parva to English

1. Read the completed Hindi chapter list at `src/content/data/parva-N.json`.
2. Translate it chapter-by-chapter into natural, flowing English (not literal word-for-word) into `src/content/data-en/parva-N.json` — same `number`/`id`/shape, one English chapter per Hindi chapter.
3. `npm run build` to validate; both `/parva/parva-N` and `/en/parva/parva-N` should render.
4. Commit.

## Bilingual (Hindi/English)

Mirrors the pattern used on the Shreemadbhagwat site:

- Hindi pages live unprefixed (`/`, `/parva/x`); English pages live under `/en` (`/en`, `/en/parva/x`).
- `src/lib/locale.ts` — `Locale` type, `parvaHref`/`homeHref`/`otherLocalePath`/`hreflangAlternates` helpers.
- `src/content/parvasEn.ts` / `src/content/getParvaContentEn.ts` — English mirrors of `parvas.ts` / `getParvaContent.ts`.
- `src/components/LanguageSwitcher.tsx` — the हिन्दी/English toggle, shown in the `Header` on every page.
- `src/components/SetHtmlLang.tsx` — used by `src/app/en/layout.tsx` to set `<html lang="en">` client-side (the root layout stays `lang="hi"` for static export).
- `Header`, `ParvaBubble`, `ChapterList`, and `ChapterSection` all accept an optional `locale` prop (default `"hi"`) that swaps their labels/hrefs; `HeroBanner` needs no changes since it just renders props it's given.
- `src/app/sitemap.ts` includes both Hindi and English URLs.

## Assets still needed

- `SITE_URL` in `src/lib/site.ts` is a placeholder domain — update once a real domain is chosen.
- `GA_MEASUREMENT_ID` is empty — Google Analytics script is currently omitted from `layout.tsx`.
- No custom favicon yet.
