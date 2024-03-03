'use client';
import { createContext, useContext } from 'react';
import type { MarvelApiEntityType } from '~/types';

type SectionListContextProps = {
  type: MarvelApiEntityType;
};

const SectionListContext = createContext({} as SectionListContextProps);

export const SectionListProvider = ({
  type,
  children,
}: {
  type: MarvelApiEntityType;
  children: React.ReactNode;
}) => (
  <SectionListContext.Provider value={{ type }}>
    {children}
  </SectionListContext.Provider>
);

export const useSectionList = () => useContext(SectionListContext);
