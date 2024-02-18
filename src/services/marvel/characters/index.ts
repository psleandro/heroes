import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type {
  Character,
  Comic,
  DataWrapper,
  PaginationModelWithSearch,
  Serie,
  Story,
} from '~/types';

export const getCharacters = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Character>>(
    `/characters?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search)}`,
  );
};

export const getCharacterById = async (characterId: string | number) => {
  return marvelApi<DataWrapper<Character>>(`/characters/${characterId}`);
};

export const getCharacterComicsById = async (characterId: string | number) => {
  return marvelApi<DataWrapper<Comic>>(`/characters/${characterId}/comics`);
};

export const getCharacterEventsById = async (characterId: string | number) => {
  return marvelApi<DataWrapper<Event>>(`/characters/${characterId}/events`);
};

export const getCharacterSeriesById = async (characterId: string | number) => {
  return marvelApi<DataWrapper<Serie>>(`/characters/${characterId}/series`);
};

export const getCharacterStoriesById = async (characterId: string | number) => {
  return marvelApi<DataWrapper<Story>>(`/characters/${characterId}/stories`);
};
