import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type { Event, DataWrapper, PaginationModelWithSearch } from '~/types';

export const getEvents = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Event>>(
    `/events?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search, 'nameStartsWith')}`,
  );
};
