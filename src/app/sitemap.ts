import type { MetadataRoute } from "next";
import { parvas } from "@/content/parvas";
import { parvasEn } from "@/content/parvasEn";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const parvaEntries: MetadataRoute.Sitemap = parvas.map((parva) => ({
    url: `${SITE_URL}/parva/${parva.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const parvaEntriesEn: MetadataRoute.Sitemap = parvasEn.map((parva) => ({
    url: `${SITE_URL}/en/parva/${parva.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...parvaEntries,
    {
      url: `${SITE_URL}/en/`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...parvaEntriesEn,
  ];
}
