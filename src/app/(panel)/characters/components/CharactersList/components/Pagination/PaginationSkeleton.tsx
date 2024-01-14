import { Skeleton } from '~/components/ui/skeleton';

const PaginationSkeleton = () => (
  <div className="flex flex-row items-center justify-center gap-1 sm:justify-end">
    <Skeleton className="h-10 w-12" />
    <Skeleton className="h-10 w-12" />
    <Skeleton className="h-10 w-10" />
    <Skeleton className="h-10 w-12" />
    <Skeleton className="h-10 w-12" />
  </div>
);

export { PaginationSkeleton };
