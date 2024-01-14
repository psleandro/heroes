import { getCharacters } from '~/services';
import { CharacterCard, Pagination } from './components';
import { CharacterListSkeleton } from './CharacterListSkeleton';
import type { PaginationModelWithSearch } from '~/types';

type CharactersListProps = {
  searchParams: PaginationModelWithSearch;
};

const CharactersList = async ({ searchParams }: CharactersListProps) => {
  const result = await getCharacters(searchParams);

  const hrefToPage = (page: number) => ({ query: { ...searchParams, page } });

  return (
    <>
      <ul className="flex flex-wrap gap-8 gap-y-16">
        {result.data.results?.map((result) => (
          <li
            key={result.id}
            className="flex min-w-36 flex-1 md:min-w-48 lg:min-w-60 xl:w-72 xl:max-w-72"
          >
            <CharacterCard {...result} />
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

CharactersList.Skeleton = CharacterListSkeleton;

export { CharactersList };
