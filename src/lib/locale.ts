export type Locale = "hi" | "en";

// Hindi pages live unprefixed ("/", "/parva/x"); English pages live
// under "/en" ("/en", "/en/parva/x"). Given a pathname, this returns
// the equivalent path in the *other* locale, for the language switcher.
export function otherLocalePath(pathname: string): { locale: Locale; href: string } {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3); // strip leading "/en"
    return { locale: "hi", href: rest === "" ? "/" : rest };
  }
  return { locale: "en", href: pathname === "/" ? "/en" : `/en${pathname}` };
}

export function parvaHref(slug: string, locale: Locale): string {
  return locale === "en" ? `/en/parva/${slug}` : `/parva/${slug}`;
}

export function homeHref(locale: Locale): string {
  return locale === "en" ? "/en" : "/";
}

// For metadata.alternates.languages — tells search engines the Hindi and
// English URLs are translations of the same page, so each is served to the
// right audience instead of being treated as duplicate content.
export function hreflangAlternates(hiPath: string, enPath: string): Record<string, string> {
  return {
    hi: hiPath,
    en: enPath,
    "x-default": hiPath,
  };
}
