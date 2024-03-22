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
