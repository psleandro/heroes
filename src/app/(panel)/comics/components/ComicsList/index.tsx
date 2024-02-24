import { getComics } from '~/services';
import { Pagination } from '~/components/Pagination';
import { ComicCard } from './components';
import { ComicListSkeleton } from './ComicListSkeleton';
import type { PaginationModelWithSearch } from '~/types';

type ComicsListProps = {
  searchParams: PaginationModelWithSearch;
};

const ComicsList = async ({ searchParams }: ComicsListProps) => {
  const result = await getComics(searchParams);

  const hrefToPage = (page: number) => ({ query: { ...searchParams, page } });

  return (
    <>
      <ul className="flex flex-wrap gap-8 gap-y-16">
        {result.data.results?.map((comic) => (
          <li
            key={comic.id}
            className="flex min-w-36 flex-1 md:min-w-48 lg:min-w-60 xl:w-72 xl:max-w-72"
          >
            <ComicCard comic={comic} />
          </li>
        ))}
      </ul>

      <Pagination
        model={{ page: searchParams.page, pageSize: searchParams.pageSize }}
        total={result.data.total}
        hrefToPage={hrefToPage}
      />
    </>
  );
};

ComicsList.Skeleton = ComicListSkeleton;

export { ComicsList };
