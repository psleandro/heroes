export type PaginationModel = {
  page: number | string;
  pageSize: number | string;
};

export type PaginationModelWithSearch = PaginationModel & {
  search?: string;
};
