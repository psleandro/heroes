import { Suspense } from 'react';
import { StoriesList } from './StoriesList';
import { SearchInput } from '~/components/SearchInput';
import { Filters, QueryFilterList } from '~/components/Filters';
import type { StoriesListParameters } from '~/types';

type StoriesPageProps = {
  searchParams: StoriesListParameters;
};

const validFiltersKeys: Partial<keyof StoriesListParameters>[] = [
  'characters',
  'comics',
  'creators',
  'events',
  'series',
];

export default async function StoriesPage({
  searchParams: { page = '1', pageSize = '20', ...searchParams },
}: StoriesPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <Filters>
        <SearchInput
          searchQueryKey=""
          placeholder="Search stories by name..."
          initialValue={''}
          disabled
        />
        <QueryFilterList
          key={JSON.stringify(searchParams)}
          validFiltersKeys={validFiltersKeys}
          searchParams={searchParams}
        />
      </Filters>

      <Suspense
        key={`${page}${pageSize}${JSON.stringify(searchParams)}`}
        fallback={<StoriesList.Skeleton />}
      >
        <StoriesList searchParams={{ page, pageSize, ...searchParams }} />
      </Suspense>
    </div>
  );
}
