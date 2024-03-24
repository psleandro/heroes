'use client';
import { createContext, useContext } from 'react';
import { listingRouteByMarvelApiEntityType } from '~/consts/urls';
import type { ListParametersNames, MarvelApiEntityType } from '~/types';

export type CardTagsListProviderProps = {
  children: React.ReactNode;
  from: ListParametersNames;
  entityId: number | undefined;
};

export type CardTagsListContextProps = {
  getUrlToListByTagType: (type: MarvelApiEntityType) => string;
};

export const CardTagsListContext = createContext<CardTagsListContextProps>(
  {} as CardTagsListContextProps,
);

export const useCardTagsList = () => {
  const context = useContext(CardTagsListContext);

  if (!context) {
    throw new Error('useCardTagsList must be used within a <CardTagsList />');
  }

  return context;
};

export const CardTagsListProvider = ({
  children,
  from,
  entityId,
}: CardTagsListProviderProps) => {
  const getUrlToListByTagType = (type: MarvelApiEntityType) => {
    const listingUrl = listingRouteByMarvelApiEntityType[type];

    if (!listingUrl || !from || !entityId) return '#';

    return `/${listingUrl}?${from}=${entityId}`;
  };

  return (
    <CardTagsListContext.Provider value={{ getUrlToListByTagType }}>
      {children}
    </CardTagsListContext.Provider>
  );
};
