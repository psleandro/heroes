'use client';
import { QueryFilter } from './QueryFilter';
import { AddFilterButton } from './AddFilterButton';

const validFiltersKeys = ['comics', 'series', 'events', 'stories'];

const identifyQueryFilters = (searchParams: object) => {
  const keys = Object.keys(searchParams);
  return keys.filter((filterKey) => validFiltersKeys.includes(filterKey));
};

const QueryFilterList = ({ searchParams }: { searchParams: object }) => {
  const filtersKeys = identifyQueryFilters(searchParams);

  const availableFilterKeys = validFiltersKeys.filter(
    (f) => !filtersKeys.includes(f),
  );

  return (
    <>
      <AddFilterButton availableFilterKeys={availableFilterKeys} />

      {filtersKeys.map((filterKey) => (
        <QueryFilter key={filterKey} filterKey={filterKey}>
          <QueryFilter.SelectKey
            options={[filterKey, ...availableFilterKeys]}
          />
          <QueryFilter.FilterInput
            initialValue={searchParams[filterKey as keyof typeof searchParams]}
          />
          <QueryFilter.RemoveFilter />
        </QueryFilter>
      ))}
    </>
  );
};

export { QueryFilterList };
