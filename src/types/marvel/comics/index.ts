import type {
  CharacterList,
  ComicSummary,
  CreatorList,
  EventList,
  ImageData,
  SeriesSummary,
  StoryList,
  TextObject,
  UrlData,
} from '..';

type ComicDate = {
  type?: string;
  date?: Date;
};

type ComicPrice = {
  type?: string;
  price?: number;
};

export type Comic = {
  id?: number;
  digitalId?: number;
  title?: string;
  issueNumber?: number;
  variantDescription?: string;
  description?: string;
  modified?: Date;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects?: TextObject[];
  resourceURI?: string;
  urls?: UrlData[];
  series?: SeriesSummary;
  variants?: ComicSummary[];
  collections?: ComicSummary[];
  collectedIssues?: ComicSummary[];
  dates?: ComicDate[];
  prices?: ComicPrice[];
  thumbnail: ImageData;
  images: ImageData[];
  creators?: CreatorList;
  characters?: CharacterList;
  stories?: StoryList;
  events?: EventList;
};
