'use client';
import { createContext, useContext } from 'react';
import { getUrlToListByTagType } from '~/utils/url';
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
  return (
    <CardTagsListContext.Provider
      value={{
        getUrlToListByTagType: (type: MarvelApiEntityType) =>
          getUrlToListByTagType(type, from, entityId),
      }}
    >
      {children}
    </CardTagsListContext.Provider>
  );
};
