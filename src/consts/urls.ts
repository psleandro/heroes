import { type MarvelApiEntityType } from '~/types';

export const appRoutes = {
  charactersListing: 'characters',
  comicsListing: 'comics',
  creatorsListing: 'creators',
  eventsListing: 'events',
  seriesListing: 'series',
  storiesListing: 'stories',
} as const;

export const listingRouteByMarvelApiEntityType: {
  [k in MarvelApiEntityType]: string;
} = {
  character: appRoutes.charactersListing,
  comic: appRoutes.comicsListing,
  creator: appRoutes.creatorsListing,
  event: appRoutes.eventsListing,
  serie: appRoutes.seriesListing,
  story: appRoutes.storiesListing,
};
