import type {
  CharacterList,
  ComicList,
  CreatorList,
  EventList,
  ImageData,
  SeriesSummary,
  StoryList,
  UrlData,
} from '..';

export type Serie = {
  id?: number;
  title?: string;
  description?: string;
  resourceURI?: string;
  urls?: UrlData[];
  startYear?: number;
  endYear?: number;
  rating?: string;
  modified?: Date;
  thumbnail?: ImageData;
  comics?: ComicList;
  stories?: StoryList;
  events?: EventList;
  characters?: CharacterList;
  creators?: CreatorList;
  next?: SeriesSummary;
  previous?: SeriesSummary;
};
