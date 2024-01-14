import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type {
  Character,
  DataWrapper,
  PaginationModelWithSearch,
} from '~/types';

export const getCharacters = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Character>>(
    `/characters?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search)}`,
  );
};

export const getCharacterById = async (characterId: string | number) => {
  return marvelApi<DataWrapper<Character>>(`/characters/${characterId}`);
};
