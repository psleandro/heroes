import { getStories } from '~/services';
import { Card } from '~/components/Card';
import { CardList } from '~/components/CardList';
import { Pagination } from '~/components/Pagination';
import type { PaginationModelWithSearch } from '~/types';

type StoriesListProps = {
  searchParams: PaginationModelWithSearch;
};

const StoriesList = async ({ searchParams }: StoriesListProps) => {
  const result = await getStories(searchParams);

  const hrefToPage = (page: number) => ({ query: { ...searchParams, page } });

  return (
    <>
      <CardList>
        {result.data.results?.map((story) => (
          <Card key={story.id} element="li">
            <Card.Image
              src={
                story.thumbnail
                  ? `${story.thumbnail?.path}.${story.thumbnail?.extension}`
                  : '/imgs/no-image.png'
              }
              alt={story.title ?? ''}
              linkProps={{ href: `/stories/${story.id}` }}
            />
            <Card.Title>{story.title}</Card.Title>
            <Card.TagsList>
              <Card.TagsListItem
                type="character"
                quantity={story.characters?.available}
              />
              <Card.TagsListItem
                type="comic"
                quantity={story.comics?.available}
              />
              <Card.TagsListItem
                type="creator"
                quantity={story.creators?.available}
              />
              <Card.TagsListItem
                type="event"
                quantity={story.events?.available}
              />
              <Card.TagsListItem
                type="serie"
                quantity={story.series?.available}
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

StoriesList.Skeleton = CardList.Skeleton;

export { StoriesList };
