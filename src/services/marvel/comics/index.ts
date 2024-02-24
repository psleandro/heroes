import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type { Comic, DataWrapper, PaginationModelWithSearch } from '~/types';

export const getComics = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Comic>>(
    `/comics?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search, 'titleStartsWith')}&orderBy=title`,
  );
};
