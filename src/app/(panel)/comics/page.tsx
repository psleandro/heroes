import { Suspense } from 'react';
import { ComicsList } from './components';
import { SearchInput } from '~/components/SearchInput';
import type { PaginationModelWithSearch } from '~/types';

type ComicsPageProps = {
  searchParams: PaginationModelWithSearch;
};

export default async function ComicsPage({
  searchParams: { page = '1', pageSize = '20', search = '' },
}: ComicsPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <SearchInput
        placeholder="Search comics by title..."
        initialValue={search}
      />

      <Suspense
        key={`${page}${pageSize}${search}`}
        fallback={<ComicsList.Skeleton />}
      >
        <ComicsList searchParams={{ page, pageSize, search }} />
      </Suspense>
    </div>
  );
}
