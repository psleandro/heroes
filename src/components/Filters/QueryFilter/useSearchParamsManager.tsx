'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

const useSearchParamsManager = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const searchParams = useMemo(() => {
    return new URLSearchParams(Array.from(params.entries()));
  }, [params]);

  const setSearchParams = useCallback(
    (search: string | undefined) => {
      const query = search ? `?${search}` : '';
      router.replace(`${pathname}${query}`);
    },
    [router, pathname],
  );

  return { searchParams, setSearchParams };
};

export { useSearchParamsManager };
