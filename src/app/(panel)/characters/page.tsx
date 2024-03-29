import { Suspense } from 'react';
import { CharactersList } from './CharactersList';
import { SearchInput } from '~/components/SearchInput';
import { Filters, QueryFilterList } from '~/components/Filters';
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
      <Filters>
        <SearchInput
          searchQueryKey="nameStartsWith"
          initialValue={searchParams.nameStartsWith ?? ''}
        />
        <QueryFilterList
          key={JSON.stringify(searchParams)}
          validFiltersKeys={validFiltersKeys}
          searchParams={searchParams}
        />
      </Filters>

      <Suspense
        key={`${page}${pageSize}${JSON.stringify(searchParams)}`}
        fallback={<CharactersList.Skeleton />}
      >
        <CharactersList searchParams={{ page, pageSize, ...searchParams }} />
      </Suspense>
    </div>
  );
}
