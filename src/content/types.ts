export type Chapter = {
  id: number;
  number: number;
  title: string;
  paragraphs: string[];
  moral?: string;
};

export type ParvaContent = {
  slug: string;
  chapters: Chapter[];
};
