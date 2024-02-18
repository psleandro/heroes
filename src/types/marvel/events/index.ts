import type {
  CharacterList,
  ComicList,
  CreatorList,
  EventSummary,
  ImageData,
  SeriesList,
  StoryList,
  UrlData,
} from '..';

export type Event = {
  id?: number;
  title?: string;
  description?: string;
  resourceURI?: string;
  urls?: UrlData[];
  modified?: Date;
  start?: Date;
  end?: Date;
  thumbnail?: ImageData;
  comics?: ComicList;
  stories?: StoryList;
  series?: SeriesList;
  characters?: CharacterList;
  creators?: CreatorList;
  next?: EventSummary;
  previous?: EventSummary;
};
