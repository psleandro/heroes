import { Suspense } from 'react';
import { CreatorsList } from './CreatorsList';
import { SearchInput } from '~/components/SearchInput';
import type { PaginationModelWithSearch } from '~/types';

type CreatorsPageProps = {
  searchParams: PaginationModelWithSearch;
};

export default async function CreatorsPage({
  searchParams: { page = '1', pageSize = '20', search = '' },
}: CreatorsPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <SearchInput
        placeholder="Search creators by name..."
        initialValue={search}
      />

      <Suspense
        key={`${page}${pageSize}${search}`}
        fallback={<CreatorsList.Skeleton />}
      >
        <CreatorsList searchParams={{ page, pageSize, search }} />
      </Suspense>
    </div>
  );
}
