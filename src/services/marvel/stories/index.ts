import { marvelApi } from '../api';
import { getPaginationQuery, parseObjectToSearchParams } from '~/utils';
import type {
  Comic,
  Story,
  DataWrapper,
  PaginationModelWithSearch,
  Character,
  Creator,
} from '~/types';

export const getStories = async ({
  page,
  pageSize,
  ...restParameters
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Story>>(
    `/stories?${getPaginationQuery(page, pageSize)}&${parseObjectToSearchParams(restParameters)}`,
  );
};

export const getStoryById = async (storieId: string | number) => {
  const { data } = await marvelApi<DataWrapper<Story>>(`/stories/${storieId}`);
  return data.results[0];
};

export const getStoryCharactersById = async (storieId: string | number) => {
  return marvelApi<DataWrapper<Character>>(`/stories/${storieId}/characters`);
};

export const getStoryComicsById = async (storieId: string | number) => {
  return marvelApi<DataWrapper<Comic>>(`/stories/${storieId}/comics`);
};

export const getStoryCreatorsById = async (storieId: string | number) => {
  return marvelApi<DataWrapper<Creator>>(`/stories/${storieId}/creators`);
};

export const getStoryEventsById = async (storieId: string | number) => {
  return marvelApi<DataWrapper<Event>>(`/stories/${storieId}/events`);
};

export const getStorySeriesById = async (storieId: string | number) => {
  return marvelApi<DataWrapper<Story>>(`/stories/${storieId}/series`);
};
