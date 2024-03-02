import { marvelApi } from '../api';
import { getPaginationQuery, getSearchQuery } from '~/utils';
import type {
  Comic,
  Event,
  DataWrapper,
  PaginationModelWithSearch,
  Serie,
  Story,
  Character,
  Creator,
} from '~/types';

export const getEvents = async ({
  search,
  page,
  pageSize,
}: PaginationModelWithSearch) => {
  return marvelApi<DataWrapper<Event>>(
    `/events?${getPaginationQuery(page, pageSize)}&${getSearchQuery(search, 'nameStartsWith')}`,
  );
};

export const getEventById = async (eventId: string | number) => {
  return marvelApi<DataWrapper<Event>>(`/events/${eventId}`);
};

export const getEventCharactersById = async (eventId: string | number) => {
  return marvelApi<DataWrapper<Character>>(`/events/${eventId}/characters`);
};

export const getEventComicsById = async (eventId: string | number) => {
  return marvelApi<DataWrapper<Comic>>(`/events/${eventId}/comics`);
};

export const getEventCreatorsById = async (eventId: string | number) => {
  return marvelApi<DataWrapper<Creator>>(`/events/${eventId}/creators`);
};

export const getEventSeriesById = async (eventId: string | number) => {
  return marvelApi<DataWrapper<Serie>>(`/events/${eventId}/series`);
};

export const getEventStoriesById = async (eventId: string | number) => {
  return marvelApi<DataWrapper<Story>>(`/events/${eventId}/stories`);
};