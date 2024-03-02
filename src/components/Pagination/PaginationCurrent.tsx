'use client';

import { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { useDebounce } from '~/hooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const PaginationCurrent = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const [page, setPage] = useState(currentPage);
  const debouncedPage = useDebounce(page);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const isValidPage = page > 0 && page <= totalPages;

    const changePage = (newPage: number) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      current.set('page', String(newPage));

      const search = current.toString();
      const query = search ? `?${search}` : '';
      router.replace(`${pathname}${query}`);
    };

    if (isValidPage) changePage(debouncedPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPage]);

  return (
    <span className="mx-2 flex items-center gap-2">
      <Input
        type="number"
        value={page}
        min={1}
        max={Number(totalPages)}
        onChange={(e) => setPage(e.target.valueAsNumber)}
        className="flex items-center justify-center bg-transparent p-0 px-2 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        rootProps={{ className: 'h-6 lg:h-8 bg-transparent' }}
      />

      <p className="text-sm text-gray-500">of {totalPages}</p>
    </span>
  );
};

export { PaginationCurrent };
