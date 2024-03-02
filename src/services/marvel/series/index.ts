import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type { Serie, DataWrapper, PaginationModelWithSearch } from '~/types';

export const getSeries = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Serie>>(
    `/series?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search, 'titleStartsWith')}`,
  );
};
