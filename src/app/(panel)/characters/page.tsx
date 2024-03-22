import { Suspense } from 'react';
import { CharactersList } from './CharactersList';
import { SearchInput } from '~/components/SearchInput';
import type { CharactersListParameters } from '~/types';

type CharactersPageProps = {
  searchParams: CharactersListParameters;
};

export default async function CharactersPage({
  searchParams: { page = '1', pageSize = '20', nameStartsWith = '' },
}: CharactersPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <SearchInput
        searchQueryKey="nameStartsWith"
        initialValue={nameStartsWith}
      />

      <Suspense
        key={`${page}${pageSize}${nameStartsWith}`}
        fallback={<CharactersList.Skeleton />}
      >
        <CharactersList searchParams={{ page, pageSize, nameStartsWith }} />
      </Suspense>
    </div>
  );
}
