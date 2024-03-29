import { Suspense } from 'react';
import { EventsList } from './EventsList';
import { SearchInput } from '~/components/SearchInput';
import type { EventsListParameters } from '~/types';
import { Filters, QueryFilterList } from '~/components/Filters';

type EventsPageProps = {
  searchParams: EventsListParameters;
};

const validFiltersKeys: Partial<keyof EventsListParameters>[] = [
  'creators',
  'characters',
  'series',
  'comics',
  'stories',
];

export default async function EventsPage({
  searchParams: { page = '1', pageSize = '20', ...searchParams },
}: EventsPageProps) {
  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
      <Filters>
        <SearchInput
          searchQueryKey="nameStartsWith"
          placeholder="Search events by name..."
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
        fallback={<EventsList.Skeleton />}
      >
        <EventsList searchParams={{ page, pageSize, ...searchParams }} />
      </Suspense>
    </div>
  );
}
