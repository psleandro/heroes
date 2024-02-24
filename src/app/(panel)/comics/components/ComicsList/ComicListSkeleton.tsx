import { Pagination } from '~/components/Pagination';
import { Skeleton } from '~/components/ui/skeleton';

const ComicListSkeleton = () => (
  <>
    <ul className="flex flex-wrap gap-8 gap-y-16">
      {Array.from({ length: 20 })?.map((_, index) => (
        <li
          key={index}
          className="flex min-w-36 flex-1 flex-col gap-3 md:min-w-48 lg:min-w-60 xl:w-72 xl:max-w-72"
        >
          <Skeleton className="relative aspect-square  overflow-hidden rounded-md object-cover shadow-lg" />
          <Skeleton className="h-[28px] w-full" />
          <ul className="-mt-1 flex flex-wrap gap-1">
            <Skeleton className="h-[24px] w-16" />
            {index % 3 === 0 && <Skeleton className="h-[24px] w-20" />}
            <Skeleton className="h-[24px] w-[68px]" />
            <Skeleton className="h-[24px] w-[72px]" />
          </ul>
        </li>
      ))}
    </ul>
    <Pagination.Skeleton />
  </>
);

export { ComicListSkeleton };
