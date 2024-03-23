import { marvelApi } from '../api';
import { getPaginationQuery, parseObjectToSearchParams } from '~/utils';
import type {
  Comic,
  Serie,
  DataWrapper,
  SeriesListParameters,
  Story,
  Character,
  Creator,
} from '~/types';

export const getSeries = async ({
  page,
  pageSize,
  ...restParameters
}: SeriesListParameters) => {
  return marvelApi<DataWrapper<Serie>>(
    `/series?${getPaginationQuery(page, pageSize)}&${parseObjectToSearchParams(restParameters)}`,
  );
};

export const getSerieById = async (serieId: string | number) => {
  const { data } = await marvelApi<DataWrapper<Serie>>(`/series/${serieId}`);
  return data.results[0];
};

export const getSerieCharactersById = async (serieId: string | number) => {
  return marvelApi<DataWrapper<Character>>(`/series/${serieId}/characters`);
};

export const getSerieComicsById = async (serieId: string | number) => {
  return marvelApi<DataWrapper<Comic>>(`/series/${serieId}/comics`);
};

export const getSerieCreatorsById = async (serieId: string | number) => {
  return marvelApi<DataWrapper<Creator>>(`/series/${serieId}/creators`);
};

export const getSerieEventsById = async (serieId: string | number) => {
  return marvelApi<DataWrapper<Event>>(`/series/${serieId}/events`);
};

export const getSerieStoriesById = async (serieId: string | number) => {
  return marvelApi<DataWrapper<Story>>(`/series/${serieId}/stories`);
};
