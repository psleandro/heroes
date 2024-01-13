import crypto from 'crypto';
import { customFetch } from '../customFetch';

export const marvelApiUrl = process.env.MARVEL_API_URL;
const publicApiKey = process.env.MARVEL_API_PUBLIC_KEY ?? '';
const privateApiKey = process.env.MARVEL_API_PRIVATE_KEY ?? '';

const requestTime = '1816451959';

const marvelAuthenticationHash = crypto
  .createHash('md5')
  .update(requestTime + privateApiKey + publicApiKey)
  .digest('hex');

const addAuthenticationToQueryParams = (url: string) => {
  const [path, queryParams = ''] = url.split('?');

  return `${path}?ts=${requestTime}&apikey=${publicApiKey}&hash=${marvelAuthenticationHash}&${queryParams}`;
};

export const marvelApi = async <T>(
  input: string,
  init?: RequestInit,
): Promise<T> =>
  customFetch(`${marvelApiUrl}${addAuthenticationToQueryParams(input)}`, init);
