import { Suspense } from 'react';
import { CharactersList } from './CharactersList';
import { SearchInput } from '~/components/SearchInput';
import { QueryFilterList } from '~/components/Filters';
import type { CharactersListParameters } from '~/types';

type CharactersPageProps = {
  searchParams: CharactersListParameters;
};

const validFiltersKeys: Partial<keyof CharactersListParameters>[] = [
  'comics',
  'series',
  'events',
  'stories',
];

export default async function CharactersPage({
  searchParams: { page = '1', pageSize = '20', ...searchParams },
}: CharactersPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <div className="flex flex-col flex-wrap items-stretch gap-4 md:flex-row">
        <SearchInput
          searchQueryKey="nameStartsWith"
          initialValue={searchParams.nameStartsWith ?? ''}
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
        fallback={<CharactersList.Skeleton />}
      >
        <CharactersList searchParams={{ page, pageSize, ...searchParams }} />
      </Suspense>
    </div>
  );
}
