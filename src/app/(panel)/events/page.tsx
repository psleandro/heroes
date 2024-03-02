import { Suspense } from 'react';
import { EventsList } from './EventsList';
import { SearchInput } from '~/components/SearchInput';
import type { PaginationModelWithSearch } from '~/types';

type EventsPageProps = {
  searchParams: PaginationModelWithSearch;
};

export default async function EventsPage({
  searchParams: { page = '1', pageSize = '20', search = '' },
}: EventsPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <SearchInput
        placeholder="Search creators by name..."
        initialValue={search}
      />

      <Suspense
        key={`${page}${pageSize}${search}`}
        fallback={<EventsList.Skeleton />}
      >
        <EventsList searchParams={{ page, pageSize, search }} />
      </Suspense>
    </div>
  );
}
