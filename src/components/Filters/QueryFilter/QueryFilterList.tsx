'use client';
import { QueryFilter } from './QueryFilter';
import { AddFilterButton } from './AddFilterButton';

const identifyQueryFilters = (
  searchParams: object,
  validFiltersKeys: string[],
) => {
  const keys = Object.keys(searchParams);
  return keys.filter((filterKey) => validFiltersKeys.includes(filterKey));
};

const QueryFilterList = ({
  searchParams,
  validFiltersKeys,
}: {
  searchParams: object;
  validFiltersKeys: string[];
}) => {
  const filtersKeys = identifyQueryFilters(searchParams, validFiltersKeys);

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
