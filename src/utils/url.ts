import { listingRouteByMarvelApiEntityType } from '~/consts/urls';
import { MarvelApiEntityType } from '~/types';

export const getUrlToListByTagType = (
  type: MarvelApiEntityType,
  from: string,
  entityId: string | number | undefined,
) => {
  const listingUrl = listingRouteByMarvelApiEntityType[type];

  if (!listingUrl || !from || !entityId) return '#';

  return `/${listingUrl}?${from}=${entityId}`;
};
