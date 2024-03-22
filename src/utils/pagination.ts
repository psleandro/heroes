export const getOffsetFromPagination = (
  page: number | string,
  pageSize: number | string,
) => {
  return (Number(page) - 1) * Number(pageSize);
};

export const getPaginationQuery = (
  page: number | string,
  pageSize: number | string,
) => {
  return `limit=${pageSize}&offset=${getOffsetFromPagination(page, pageSize)}`;
};

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

    if (value) Object.assign(paramsRecord, { [String(paramKey)]: value });
  });

  return new URLSearchParams(paramsRecord);
};
