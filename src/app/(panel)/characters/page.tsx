import { Suspense } from 'react';
import { CharactersList } from './components';
import { SearchInput } from '~/components/SearchInput';
import type { PaginationModelWithSearch } from '~/types';

type CharactersPageProps = {
  searchParams: PaginationModelWithSearch;
};

export default async function CharactersPage({
  searchParams: { page = '1', pageSize = '20', search = '' },
}: CharactersPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <SearchInput initialValue={search} />

      <Suspense
        key={`${page}${pageSize}${search}`}
        fallback={<CharactersList.Skeleton />}
      >
        <CharactersList searchParams={{ page, pageSize, search }} />
      </Suspense>
    </div>
  );
}
