import { Suspense } from 'react';
import { StoriesList } from './StoriesList';
import type { PaginationModelWithSearch } from '~/types';

type StoriesPageProps = {
  searchParams: PaginationModelWithSearch;
};

export default async function StoriesPage({
  searchParams: { page = '1', pageSize = '20' },
}: StoriesPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <Suspense key={`${page}${pageSize}`} fallback={<StoriesList.Skeleton />}>
        <StoriesList searchParams={{ page, pageSize }} />
      </Suspense>
    </div>
  );
}
