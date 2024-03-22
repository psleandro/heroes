import { marvelApi } from '../api';
import { getPaginationQuery, parseObjectToSearchParams } from '~/utils';
import type {
  Character,
  CharactersListParameters,
  Comic,
  DataWrapper,
  Serie,
  Story,
} from '~/types';

export const getCharacters = async ({
  page,
  pageSize,
  ...restParameters
}: CharactersListParameters) => {
  return marvelApi<DataWrapper<Character>>(
    `/characters?${getPaginationQuery(page, pageSize)}&${parseObjectToSearchParams(restParameters)}`,
  );
};

export const getCharacterById = async (characterId: string | number) => {
  const { data } = await marvelApi<DataWrapper<Character>>(
    `/characters/${characterId}`,
  );
  return data.results[0];
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
