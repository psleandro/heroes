import { Suspense } from 'react';
import { ComicsList } from './ComicsList';
import { SearchInput } from '~/components/SearchInput';
import { Filters, QueryFilterList } from '~/components/Filters';
import type { ComicsListParameters } from '~/types';

type ComicsPageProps = {
  searchParams: ComicsListParameters;
};

const validFiltersKeys: Partial<keyof ComicsListParameters>[] = [
  'creators',
  'characters',
  'series',
  'events',
  'stories',
];

export default async function ComicsPage({
  searchParams: { page = '1', pageSize = '20', ...searchParams },
}: ComicsPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <Filters>
        <SearchInput
          searchQueryKey="titleStartsWith"
          placeholder="Search comics by title..."
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
        fallback={<ComicsList.Skeleton />}
      >
        <ComicsList searchParams={{ page, pageSize, ...searchParams }} />
      </Suspense>
    </div>
  );
}
