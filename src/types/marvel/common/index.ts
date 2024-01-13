export type DataWrapper<T> = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: DataContainer<T>;
  etag: string;
};

export type DataContainer<T> = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<T>;
};

export type UrlData = {
  type: string;
  url: string;
};

export type ImageData = {
  path: string;
  extension: string;
};
