import type { PaginationModel } from '~/types/pagination';

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
