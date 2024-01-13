const revalidate = process.env.REVALIDATE_TIME
  ? Number(process.env.REVALIDATE_TIME)
  : false;

const defaultFetchOptions: RequestInit = {
  next: { revalidate },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const customFetch = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> => {
  const response = await fetch(input, {
    ...defaultFetchOptions,
    ...init,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error?.message, { cause: error });
  }

  if (response.status === 204) return {} as T;

  return await response.json();
};
