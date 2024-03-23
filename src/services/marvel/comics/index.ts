import { marvelApi } from '../api';
import { getPaginationQuery, parseObjectToSearchParams } from '~/utils';
import type {
  Character,
  Comic,
  Creator,
  DataWrapper,
  ComicsListParameters,
  Story,
} from '~/types';

export const getComics = async ({
  page,
  pageSize,
  ...restParameters
}: ComicsListParameters) => {
  return marvelApi<DataWrapper<Comic>>(
    `/comics?${getPaginationQuery(page, pageSize)}&${parseObjectToSearchParams(restParameters)}&orderBy=title`,
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
