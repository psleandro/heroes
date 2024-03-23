import { getStories } from '~/services';
import { Card } from '~/components/Card';
import { CardList } from '~/components/CardList';
import { Pagination } from '~/components/Pagination';
import { getImageUrl } from '~/utils';
import type { StoriesListParameters } from '~/types';

type StoriesListProps = {
  searchParams: StoriesListParameters;
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
              src={getImageUrl(story.thumbnail)}
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
