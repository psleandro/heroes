export type DataWrapper<T> = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: DataContainer<T>;
  etag: string;
};

export type DataContainer<T> = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<T>;
};

export type UrlData = {
  type: string;
  url: string;
};

export type ImageData = {
  path: string;
  extension: string;
};

export type TextObject = {
  type?: string;
  language?: string;
  text?: string;
};

export type CharacterSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type ComicSummary = {
  resourceURI?: string;
  name?: string;
};

export type CreatorSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type EventSummary = {
  resourceURI?: string;
  name?: string;
};

export type SeriesSummary = {
  resourceURI?: string;
  name?: string;
};

export type StorySummary = {
  resourceURI?: string;
  name?: string;
  type?: string;
};

export type CharacterList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: CharacterSummary[];
};

export type ComicList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ComicSummary[];
};

export type CreatorList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: CreatorSummary[];
};

export type EventList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: EventSummary[];
};

export type SeriesList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: SeriesSummary[];
};

export type StoryList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: StorySummary[];
};
