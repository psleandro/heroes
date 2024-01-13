import { marvelApi } from '../api';
import type { Character, DataWrapper } from '~/types';

export const getCharacters = async () => {
  return marvelApi<DataWrapper<Character>>(`/characters`);
};
