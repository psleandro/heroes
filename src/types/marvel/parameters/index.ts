import type { PaginationModel } from '~/types/pagination';

export type ListParametersNames =
  | 'characters'
  | 'creators'
  | 'comics'
  | 'series'
  | 'events'
  | 'stories';

export type CharactersListParameters = PaginationModel & {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
};

export type ComicsListParameters = PaginationModel & {
  title?: string;
  titleStartsWith?: string;
  diamondCode?: string;
  digitalId?: string;
  upc?: string;
  isbn?: string;
  ean?: string;
  issn?: string;
  creators?: string;
  characters?: string;
  series?: string;
  events?: string;
  stories?: string;
};

export type CreatorsListParameters = PaginationModel & {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
  nameStartsWith?: string;
  firstNameStartsWith?: string;
  middleNameStartsWith?: string;
  lastNameStartsWith?: string;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
};

export type EventsListParameters = PaginationModel & {
  name?: string;
  nameStartsWith?: string;
  creators?: string;
  characters?: string;
  series?: string;
  comics?: string;
  stories?: string;
};

export type SeriesListParameters = PaginationModel & {
  title?: string;
  titleStartsWith?: string;
  characters?: string;
  comics?: string;
  creators?: string;
  events?: string;
  series?: string;
  stories?: string;
};

export type StoriesListParameters = PaginationModel & {
  characters?: string;
  comics?: string;
  creators?: string;
  events?: string;
  series?: string;
};
