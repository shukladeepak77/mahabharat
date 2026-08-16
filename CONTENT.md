# Content model

The site is organized around **18 parvas** (books), matching the traditional division of the Mahabharata. Metadata for all 18 lives in `src/content/parvas.ts`; the narrative text for each lives in `src/content/data/parva-N.json`.

## Status

- **Parva 1 (आदि पर्व)** — complete, 22 chapters, written from scratch (no source text files were used for this project — content is composed directly in the established prose style).
- **Parva 2–18** — empty stubs (`{"slug": "parva-N", "chapters": []}`). The site gracefully shows "इस पर्व का पाठ शीघ्र ही जोड़ा जाएगा।" for any parva with no chapters yet.

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

Each chapter typically runs 4–5 rich narrative paragraphs plus a one-line `moral`. Follow Parva 1's prose style and pacing when writing further parvas: flowing storytelling, not terse summary.

## Workflow for adding a parva

1. Read the existing empty stub at `src/content/data/parva-N.json`.
2. Write the full chapter list for that parva, matching the style/depth of Parva 1.
3. `npm run build` to validate.
4. Spot-check in the browser (`npm run dev`).
5. Commit.

## No English translation yet

This site is Hindi-only for now (see `src/lib/locale.ts` — doesn't exist yet). If bilingual support is wanted later, mirror the pattern used on the Shreemadbhagwat site: parallel `/en` routes, a `data-en/` content directory, and a `LanguageSwitcher` component.

## Assets still needed

- `SITE_URL` in `src/lib/site.ts` is a placeholder domain — update once a real domain is chosen.
- `GA_MEASUREMENT_ID` is empty — Google Analytics script is currently omitted from `layout.tsx`.
- No hero image or custom favicon yet — the home page uses a text/gradient panel instead of a photo, and metadata OG images point at the shared Dharma Path logo as a placeholder.
