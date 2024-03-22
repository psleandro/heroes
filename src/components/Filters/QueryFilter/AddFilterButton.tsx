'use client';

import { Button } from '~/components/ui/button';
import { useSearchParamsManager } from './useSearchParamsManager';

type AddFilterButtonProps = {
  availableFilterKeys: string[];
};

const AddFilterButton = ({ availableFilterKeys }: AddFilterButtonProps) => {
  const { searchParams, setSearchParams } = useSearchParamsManager();

  const unusedFilterKey = availableFilterKeys[0];

  const handleAddNewFilter = () => {
    if (!unusedFilterKey) return;

    const current = searchParams;

    current.set(unusedFilterKey, '');

    const search = current.toString();
    setSearchParams(search);
  };

  return (
    <Button onClick={handleAddNewFilter} disabled={!unusedFilterKey}>
      Add Filter
    </Button>
  );
};

export { AddFilterButton };
