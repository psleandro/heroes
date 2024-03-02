'use client';

import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Input } from '~/components/ui/input';
import { useDebounce } from '~/hooks';

type SearchInputProps = {
  initialValue: string;
  searchQueryKey?: string;
} & React.ComponentProps<typeof Input>;

const SearchInput = ({
  initialValue,
  searchQueryKey = 'search',
  ...props
}: SearchInputProps) => {
  const [searchText, setSearchText] = useState(initialValue);
  const debouncedSearchText = useDebounce(searchText);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const replaceRouteWithSearch = (newSearchText: string) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      if (!newSearchText || typeof newSearchText !== 'string') {
        current.delete(searchQueryKey);
      } else {
        current.set(searchQueryKey, newSearchText);
        current.set('page', '1');
      }

      const search = current.toString();
      const query = search ? `?${search}` : '';
      router.replace(`${pathname}${query}`);
    };

    replaceRouteWithSearch(debouncedSearchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchText]);

  return (
    <Input
      placeholder="Search by name..."
      {...props}
      startIcon={<SearchIcon size={20} />}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export { SearchInput };
