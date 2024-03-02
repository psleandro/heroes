import type { MarvelApiEntityType } from '~/types';

export const bgColorByEntityType: Record<MarvelApiEntityType, string> = {
  character: 'bg-emerald-400',
  comic: 'bg-red-400',
  creator: 'bg-amber-400',
  event: 'bg-blue-400',
  serie: 'bg-green-400',
  story: 'bg-indigo-400',
};

export const bgHoverColorByEntityType: Record<MarvelApiEntityType, string> = {
  character: 'hover:bg-emerald-400',
  comic: 'hover:bg-red-400',
  creator: 'hover:bg-amber-400',
  event: 'hover:bg-blue-400',
  serie: 'hover:bg-green-400',
  story: 'hover:bg-indigo-400',
};

export const beforeBgColorByEntityType: Record<MarvelApiEntityType, string> = {
  character: 'before:bg-emerald-400',
  comic: 'before:bg-red-400',
  creator: 'before:bg-amber-400',
  event: 'before:bg-blue-400',
  serie: 'before:bg-green-400',
  story: 'before:bg-indigo-400',
};
