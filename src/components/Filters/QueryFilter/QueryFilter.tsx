'use client';

import {
  createContext,
  HTMLProps,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SelectProps } from '@radix-ui/react-select';
import { MinusCircle } from 'lucide-react';
import { Button, ButtonProps } from '~/components/ui/button';
import { Input, InputProps } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { useDebounce } from '~/hooks';
import { useSearchParamsManager } from './useSearchParamsManager';

const QueryFilterContext = createContext<{ filterKey: string } | null>(null);

const useQueryFilter = () => {
  const context = useContext(QueryFilterContext);

  if (!context) {
    throw new Error('useQueryFilter must be used within a <QueryFilter />');
  }

  return context;
};

const QueryFilter = ({
  filterKey,
  children,
  ...props
}: {
  filterKey: string;
  children: ReactNode;
} & HTMLProps<HTMLDivElement>) => (
  <QueryFilterContext.Provider value={{ filterKey }}>
    <div className="flex w-full gap-2" {...props}>
      {children}
    </div>
  </QueryFilterContext.Provider>
);

const SelectKey = ({ options = [] }: { options: string[] } & SelectProps) => {
  const { filterKey } = useQueryFilter();
  const { searchParams, setSearchParams } = useSearchParamsManager();

  const changeFilter = (newFilterBy: string) => {
    const current = searchParams;
    const search = current.toString().replaceAll(filterKey, newFilterBy);
    setSearchParams(search);
  };

  return (
    <Select onValueChange={changeFilter} defaultValue={filterKey}>
      <SelectTrigger className="w-[92px] md:w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option: any) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const FilterInput = ({
  initialValue,
  ...props
}: {
  initialValue: string;
} & InputProps) => {
  const [filterText, setFilterText] = useState(initialValue);
  const debouncedFilterText = useDebounce(filterText);

  const { searchParams, setSearchParams } = useSearchParamsManager();

  const { filterKey } = useQueryFilter();

  const changeSearch = (searchText: string) => {
    if (searchText === initialValue) return;

    const current = searchParams;

    if (typeof searchText !== 'string') {
      current.delete(filterKey);
    } else {
      current.set(filterKey, searchText);
      current.set('page', '1');
    }

    const search = current.toString();
    setSearchParams(search);
  };

  useEffect(() => {
    changeSearch(debouncedFilterText);
  }, [debouncedFilterText]);

  return (
    <Input
      rootProps={{ className: 'flex-1' }}
      placeholder={`Insert '${filterKey}' a comma-separated list of ids (Ex: 01, 02, 03...)`}
      {...props}
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
      onBlur={() => changeSearch(filterText)}
    />
  );
};

const RemoveFilter = (props: ButtonProps) => {
  const { searchParams, setSearchParams } = useSearchParamsManager();

  const { filterKey } = useQueryFilter();

  const removeFilter = () => {
    const current = searchParams;
    current.delete(filterKey);
    const search = current.toString();
    setSearchParams(search);
  };

  return (
    <Button
      variant="destructive"
      className="p-2"
      {...props}
      onClick={removeFilter}
    >
      <MinusCircle />
    </Button>
  );
};

QueryFilter.SelectKey = SelectKey;
QueryFilter.FilterInput = FilterInput;
QueryFilter.RemoveFilter = RemoveFilter;

export { QueryFilter };
