import type { ParvaContent } from "./types";

import parva1 from "./data-en/parva-1.json";
import parva2 from "./data-en/parva-2.json";
import parva3 from "./data-en/parva-3.json";
import parva4 from "./data-en/parva-4.json";
import parva5 from "./data-en/parva-5.json";
import parva6 from "./data-en/parva-6.json";
import parva7 from "./data-en/parva-7.json";
import parva8 from "./data-en/parva-8.json";
import parva9 from "./data-en/parva-9.json";
import parva10 from "./data-en/parva-10.json";
import parva11 from "./data-en/parva-11.json";
import parva12 from "./data-en/parva-12.json";
import parva13 from "./data-en/parva-13.json";
import parva14 from "./data-en/parva-14.json";
import parva15 from "./data-en/parva-15.json";
import parva16 from "./data-en/parva-16.json";
import parva17 from "./data-en/parva-17.json";
import parva18 from "./data-en/parva-18.json";

const contentBySlug: Record<string, ParvaContent> = {
  "parva-1": parva1 as ParvaContent,
  "parva-2": parva2 as ParvaContent,
  "parva-3": parva3 as ParvaContent,
  "parva-4": parva4 as ParvaContent,
  "parva-5": parva5 as ParvaContent,
  "parva-6": parva6 as ParvaContent,
  "parva-7": parva7 as ParvaContent,
  "parva-8": parva8 as ParvaContent,
  "parva-9": parva9 as ParvaContent,
  "parva-10": parva10 as ParvaContent,
  "parva-11": parva11 as ParvaContent,
  "parva-12": parva12 as ParvaContent,
  "parva-13": parva13 as ParvaContent,
  "parva-14": parva14 as ParvaContent,
  "parva-15": parva15 as ParvaContent,
  "parva-16": parva16 as ParvaContent,
  "parva-17": parva17 as ParvaContent,
  "parva-18": parva18 as ParvaContent,
};

export function getParvaContentEn(slug: string): ParvaContent | undefined {
  return contentBySlug[slug];
}
