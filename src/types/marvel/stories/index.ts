import type {
  CharacterList,
  ComicList,
  ComicSummary,
  CreatorList,
  EventList,
  ImageData,
  SeriesList,
} from '..';

export type Story = {
  id?: number;
  title?: string;
  description?: string;
  resourceURI?: string;
  type?: string;
  modified?: Date;
  thumbnail?: ImageData | null;
  comics?: ComicList;
  series?: SeriesList;
  events?: EventList;
  characters?: CharacterList;
  creators?: CreatorList;
  originalIssue?: ComicSummary;
};
