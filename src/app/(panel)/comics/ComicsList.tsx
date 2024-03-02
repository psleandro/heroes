import { getComics } from '~/services';
import { Card } from '~/components/Card';
import { CardList } from '~/components/CardList';
import { Pagination } from '~/components/Pagination';
import type { PaginationModelWithSearch } from '~/types';

type ComicsListProps = {
  searchParams: PaginationModelWithSearch;
};

const ComicsList = async ({ searchParams }: ComicsListProps) => {
  const result = await getComics(searchParams);

  const hrefToPage = (page: number) => ({ query: { ...searchParams, page } });

  return (
    <>
      <CardList>
        {result.data.results?.map((comic) => (
          <Card key={comic.id} element="li">
            <Card.Image
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title ?? ''}
              linkProps={{ href: `/comics/${comic.id}` }}
            />
            <Card.Title>{comic.title}</Card.Title>
            <Card.TagsList>
              <Card.TagsListItem
                type="creator"
                quantity={comic.creators?.available}
              />
              <Card.TagsListItem
                type="character"
                quantity={comic.characters?.available}
              />
              <Card.TagsListItem
                type="story"
                quantity={comic.stories?.available}
              />
              <Card.TagsListItem
                type="event"
                quantity={comic.events?.available}
              />
            </Card.TagsList>
          </Card>
        ))}
      </CardList>

      <Pagination
        model={{ page: searchParams.page, pageSize: searchParams.pageSize }}
        total={result.data.total}
        hrefToPage={hrefToPage}
      />
    </>
  );
};

ComicsList.Skeleton = CardList.Skeleton;

export { ComicsList };