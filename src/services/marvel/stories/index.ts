import { marvelApi } from '../api';
import { getPaginationQuery } from '~/utils';
import type { Story, DataWrapper, PaginationModelWithSearch } from '~/types';

export const getStories = async ({
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Story>>(
    `/stories?${getPaginationQuery(page, pageSize)}`,
  );
};
