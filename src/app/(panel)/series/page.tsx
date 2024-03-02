import { Suspense } from 'react';
import { SeriesList } from './SeriesList';
import { SearchInput } from '~/components/SearchInput';
import type { PaginationModelWithSearch } from '~/types';

type SeriesPageProps = {
  searchParams: PaginationModelWithSearch;
};

export default async function SeriesPage({
  searchParams: { page = '1', pageSize = '20', search = '' },
}: SeriesPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <SearchInput
        placeholder="Search series by name..."
        initialValue={search}
      />

      <Suspense
        key={`${page}${pageSize}${search}`}
        fallback={<SeriesList.Skeleton />}
      >
        <SeriesList searchParams={{ page, pageSize, search }} />
      </Suspense>
    </div>
  );
}
