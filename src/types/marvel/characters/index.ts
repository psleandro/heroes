import type {
  ComicList,
  EventList,
  ImageData,
  SeriesList,
  StoryList,
  UrlData,
} from '../common';

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
