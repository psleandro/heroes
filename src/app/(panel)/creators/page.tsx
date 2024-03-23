import { Suspense } from 'react';
import { CreatorsList } from './CreatorsList';
import { SearchInput } from '~/components/SearchInput';
import { Filters, QueryFilterList } from '~/components/Filters';
import type { CreatorsListParameters } from '~/types';

type CreatorsPageProps = {
  searchParams: CreatorsListParameters;
};

const validFiltersKeys: Partial<keyof CreatorsListParameters>[] = [
  'comics',
  'series',
  'events',
  'stories',
];

export default async function CreatorsPage({
  searchParams: { page = '1', pageSize = '20', ...searchParams },
}: CreatorsPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <Filters>
        <SearchInput
          searchQueryKey="nameStartsWith"
          placeholder="Search creators by name..."
          initialValue={searchParams.nameStartsWith ?? ''}
        />
        <QueryFilterList
          key={JSON.stringify(searchParams)}
          validFiltersKeys={validFiltersKeys}
          searchParams={searchParams}
        />
      </Filters>

      <Suspense
        key={`${page}${pageSize}${searchParams}`}
        fallback={<CreatorsList.Skeleton />}
      >
        <CreatorsList searchParams={{ page, pageSize, ...searchParams }} />
      </Suspense>
    </div>
  );
}
