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
