import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type {
  Comic,
  Creator,
  DataWrapper,
  PaginationModelWithSearch,
  Serie,
  Story,
} from '~/types';

export const getCreators = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Creator>>(
    `/creators?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search, 'nameStartsWith')}`,
  );
};

export const getCreatorById = async (creatorId: string | number) => {
  const { data } = await marvelApi<DataWrapper<Creator>>(
    `/creators/${creatorId}`,
  );
  return data.results[0];
};

export const getCreatorComicsById = async (creatorId: string | number) => {
  return marvelApi<DataWrapper<Comic>>(`/creators/${creatorId}/comics`);
};

export const getCreatorEventsById = async (creatorId: string | number) => {
  return marvelApi<DataWrapper<Event>>(`/creators/${creatorId}/events`);
};

export const getCreatorSeriesById = async (creatorId: string | number) => {
  return marvelApi<DataWrapper<Serie>>(`/creators/${creatorId}/series`);
};

export const getCreatorStoriesById = async (creatorId: string | number) => {
  return marvelApi<DataWrapper<Story>>(`/creators/${creatorId}/stories`);
};
