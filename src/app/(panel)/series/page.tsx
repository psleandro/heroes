import { Suspense } from 'react';
import { SeriesList } from './SeriesList';
import { SearchInput } from '~/components/SearchInput';
import type { SeriesListParameters } from '~/types';
import { Filters, QueryFilterList } from '~/components/Filters';

type SeriesPageProps = {
  searchParams: SeriesListParameters;
};

const validFiltersKeys: Partial<keyof SeriesListParameters>[] = [
  'characters',
  'comics',
  'creators',
  'events',
  'series',
  'stories',
];

export default async function SeriesPage({
  searchParams: { page = '1', pageSize = '20', ...searchParams },
}: SeriesPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <Filters>
        <SearchInput
          searchQueryKey="titleStartsWith"
          placeholder="Search series by name..."
          initialValue={searchParams.titleStartsWith ?? ''}
        />
        <QueryFilterList
          key={JSON.stringify(searchParams)}
          validFiltersKeys={validFiltersKeys}
          searchParams={searchParams}
        />
      </Filters>

      <Suspense
        key={`${page}${pageSize}${searchParams}`}
        fallback={<SeriesList.Skeleton />}
      >
        <SeriesList searchParams={{ page, pageSize, ...searchParams }} />
      </Suspense>
    </div>
  );
}
