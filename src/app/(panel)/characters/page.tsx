import { getCharacters } from '~/services';
import { CharacterCard } from './components';
import { Pagination } from './components/Pagination';
import type { PaginationModel } from '~/types';

type CharactersPageProps = {
  searchParams: PaginationModel;
};

export default async function CharactersPage({
  searchParams: { page = '1', pageSize = '20' },
}: CharactersPageProps) {
  const result = await getCharacters({ page, pageSize });

  const hrefToPage = (page: number) => ({ query: { page, pageSize } });

  return (
    <div className="flex min-h-dvh flex-col gap-8 p-4 lg:p-16">
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
        model={{ page, pageSize }}
        total={result.data.total}
        hrefToPage={hrefToPage}
      />
    </div>
  );
}
