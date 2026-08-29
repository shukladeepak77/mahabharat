import type { Metadata } from "next";
import { SITE_NAME_EN, SITE_DESCRIPTION_EN, SITE_URL } from "@/lib/site";
import SetHtmlLang from "@/components/SetHtmlLang";

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE_NAME_EN}`,
    default: SITE_NAME_EN,
  },
};

const websiteJsonLdEn = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME_EN,
  alternateName: ["Mahabharat", "महाभारत"],
  url: `${SITE_URL}/en/`,
  description: SITE_DESCRIPTION_EN,
  inLanguage: "en",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SetHtmlLang lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLdEn) }}
      />
      {children}
    </SetHtmlLang>
  );
}
