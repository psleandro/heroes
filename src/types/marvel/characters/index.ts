import type { ImageData, UrlData } from '../common';

type ComicList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ComicSummary[];
};

type ComicSummary = {
  resourceURI?: string;
  name?: string;
};

type StoryList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: StorySummary[];
};

type StorySummary = {
  resourceURI?: string;
  name?: string;
  type?: string;
};

type EventList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: EventSummary[];
};

type EventSummary = {
  resourceURI?: string;
  name?: string;
};

type SeriesList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: SeriesSummary[];
};

type SeriesSummary = {
  resourceURI?: string;
  name?: string;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: UrlData[];
  thumbnail: ImageData;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
};
