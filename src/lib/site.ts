export const SITE_URL = "https://mahabharatkatha.org";
export const SITE_NAME = "महाभारत";
export const SITE_DESCRIPTION =
  "महर्षि वेदव्यास रचित महाभारत के अठारह पर्वों का हिंदी सार — आदि पर्व से स्वर्गारोहण पर्व तक। निःशुल्क ऑनलाइन पाठ।";
export const GA_MEASUREMENT_ID = "";

export const YOUTUBE_PLAYLIST_URL =
  "https://youtube.com/playlist?list=PLWKuMMKHnfmc&si=kh_P56GXnKynJrch";

export const SITE_NAME_EN = "Mahabharata";
export const SITE_DESCRIPTION_EN =
  "The Mahabharata by Maharishi Vedavyasa — all eighteen parvas summarized chapter by chapter in English, from the Adi Parva to the Swargarohana Parva. Free to read online.";

// Shared social-share image for pages that don't have artwork of their
// own (used for Open Graph / Twitter cards). Next.js does not deep-merge
// a route's `openGraph`/`twitter` metadata with its parent layout's, so
// every page that defines its own openGraph/twitter block must repeat
// this — otherwise it silently loses the image entirely.
export const OG_IMAGE = {
  url: "/images/mahabharat-hero.jpg",
  width: 1100,
  height: 614,
  alt: SITE_NAME,
};
