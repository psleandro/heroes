import { AllListingParameters } from '~/types';

const allValidParameters: (keyof Required<AllListingParameters>)[] = [
  'characters',
  'creators',
  'comics',
  'events',
  'series',
  'stories',
  'name',
  'nameStartsWith',
  'modifiedSince',
  'title',
  'titleStartsWith',
  'diamondCode',
  'digitalId',
  'upc',
  'isbn',
  'ean',
  'issn',
  'firstName',
  'middleName',
  'lastName',
  'suffix',
  'firstNameStartsWith',
  'middleNameStartsWith',
  'lastNameStartsWith',
];

export const getSearchQuery = (
  search: string | undefined,
  key: string = 'nameStartsWith',
) => {
  return search ? `${key}=${search}` : '';
};

export const parseObjectToSearchParams = (
  params: object | Record<string | number, string | number>,
) => {
  const paramsRecord: Record<string, string> = {};

  Object.keys(params).forEach((paramKey) => {
    const value = params[paramKey as keyof typeof params];
    const isValidQueryKey = allValidParameters.includes(
      paramKey as keyof AllListingParameters,
    );

    if (isValidQueryKey && value) {
      Object.assign(paramsRecord, { [String(paramKey)]: value });
    }
  });

  return new URLSearchParams(paramsRecord);
};
