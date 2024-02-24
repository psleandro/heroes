import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type { Creator, DataWrapper, PaginationModelWithSearch } from '~/types';

export const getCreators = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Creator>>(
    `/creators?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search, 'nameStartsWith')}`,
  );
};
