import { LinkProps } from 'next/link';
import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItemsInfo,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination';
import { PaginationCurrent } from './PaginationCurrent';
import { PaginationSkeleton } from './PaginationSkeleton';
import type { PaginationModel } from '~/types';

type PaginationComponentProps = {
  model: PaginationModel;
  total: number;
  hrefToPage: (page: number) => LinkProps['href'];
};

const PaginationComponent = ({
  model: { page, pageSize },
  total,
  hrefToPage,
}: PaginationComponentProps) => {
  const totalPages = Math.ceil(total / Number(pageSize));

  const currentPage = Number(page ?? 1);

  return (
    <Pagination className="flex-col items-center gap-2 sm:flex-row sm:justify-end">
      <PaginationItemsInfo
        total={total}
        currentPage={currentPage}
        pageSize={pageSize}
      />

      <PaginationContent>
        <PaginationFirst href={hrefToPage(1)} />

        <PaginationPrevious
          href={hrefToPage(currentPage > 1 ? currentPage - 1 : 1)}
        />

        <PaginationCurrent currentPage={currentPage} totalPages={totalPages} />

        <PaginationNext
          href={hrefToPage(
            currentPage < totalPages ? currentPage + 1 : totalPages,
          )}
        />
        <PaginationLast href={hrefToPage(totalPages)} />
      </PaginationContent>
    </Pagination>
  );
};

PaginationComponent.Skeleton = PaginationSkeleton;

export { PaginationComponent as Pagination };
