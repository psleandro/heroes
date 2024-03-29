import { Pagination } from '~/components/Pagination';
import { Skeleton } from '~/components/ui/skeleton';
import { CardList } from '.';
import { Card } from '../Card';
import { CardContent } from '../Card/CardContent';

const CardListSkeleton = () => (
  <>
    <CardList>
      {Array.from({ length: 20 })?.map((_, index) => (
        <Card key={index}>
          <Skeleton className="relative aspect-square  overflow-hidden rounded-md object-cover shadow-lg" />
          <CardContent>
            <Skeleton className="h-[28px] w-full" />
            <ul className="-mt-1 flex flex-wrap gap-1">
              <Skeleton className="h-[24px] w-16" />
              {index % 3 === 0 && <Skeleton className="h-[24px] w-20" />}
              <Skeleton className="h-[24px] w-[68px]" />
              <Skeleton className="h-[24px] w-[72px]" />
            </ul>
          </CardContent>
        </Card>
      ))}
    </CardList>
    <Pagination.Skeleton />
  </>
);

export { CardListSkeleton };
