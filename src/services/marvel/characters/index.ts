import { marvelApi } from '../api';
import { getPaginationQuery } from '~/utils';
import type { Character, DataWrapper, PaginationModel } from '~/types';

export const getCharacters = async ({ page, pageSize }: PaginationModel) => {
  return marvelApi<DataWrapper<Character>>(
    `/characters?${getPaginationQuery(page, pageSize)}`,
  );
};
