import type {
  ComicList,
  EventList,
  ImageData,
  SeriesList,
  StoryList,
  UrlData,
} from '..';

export type Creator = {
  id?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
  fullName?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: UrlData[];
  thumbnail?: ImageData;
  series?: SeriesList;
  stories?: StoryList;
  comics?: ComicList;
  events?: EventList;
};
