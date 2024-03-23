import { Suspense } from 'react';
import { ComicsList } from './ComicsList';
import { SearchInput } from '~/components/SearchInput';
import { QueryFilterList } from '~/components/Filters';
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
      <div className="flex flex-col flex-wrap items-stretch gap-4 md:flex-row">
        <SearchInput
          searchQueryKey="titleStartsWith"
          placeholder="Search comics by title..."
          initialValue={searchParams.titleStartsWith ?? ''}
          rootProps={{ className: 'flex-1 min-w-[75%]' }}
        />
        <QueryFilterList
          key={JSON.stringify(searchParams)}
          validFiltersKeys={validFiltersKeys}
          searchParams={searchParams}
        />
      </div>

      <Suspense
        key={`${page}${pageSize}${searchParams}`}
        fallback={<ComicsList.Skeleton />}
      >
        <ComicsList searchParams={{ page, pageSize, ...searchParams }} />
      </Suspense>
    </div>
  );
}
