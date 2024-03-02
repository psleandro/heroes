import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type {
  Character,
  Comic,
  Creator,
  DataWrapper,
  PaginationModelWithSearch,
  Story,
} from '~/types';

export const getComics = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Comic>>(
    `/comics?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search, 'titleStartsWith')}&orderBy=title`,
  );
};

export const getComicById = async (comicId: string | number) => {
  const { data } = await marvelApi<DataWrapper<Comic>>(`/comics/${comicId}`);
  return data.results[0];
};

export const getComicCharactersById = async (comicId: string | number) => {
  return marvelApi<DataWrapper<Character>>(`/comics/${comicId}/characters`);
};

export const getComicCreatorsById = async (comicId: string | number) => {
  return marvelApi<DataWrapper<Creator>>(`/comics/${comicId}/creators`);
};

export const getComicEventsById = async (comicId: string | number) => {
  return marvelApi<DataWrapper<Event>>(`/comics/${comicId}/events`);
};

export const getComicStoriesById = async (comicId: string | number) => {
  return marvelApi<DataWrapper<Story>>(`/comics/${comicId}/stories`);
};
