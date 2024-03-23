import { getEvents } from '~/services';
import { Card } from '~/components/Card';
import { CardList } from '~/components/CardList';
import { Pagination } from '~/components/Pagination';
import { getImageUrl } from '~/utils';
import type { EventsListParameters } from '~/types';

type EventsListProps = {
  searchParams: EventsListParameters;
};

const EventsList = async ({ searchParams }: EventsListProps) => {
  const result = await getEvents(searchParams);

  const hrefToPage = (page: number) => ({ query: { ...searchParams, page } });

  return (
    <>
      <CardList>
        {result.data.results?.map((event) => (
          <Card key={event.id} element="li">
            <Card.Image
              src={getImageUrl(event.thumbnail)}
              alt={event.title ?? ''}
              linkProps={{ href: `/events/${event.id}` }}
            />
            <Card.Title>{event.title}</Card.Title>
            <Card.TagsList>
              <Card.TagsListItem
                type="character"
                quantity={event.characters?.available}
              />
              <Card.TagsListItem
                type="comic"
                quantity={event.comics?.available}
              />
              <Card.TagsListItem
                type="creator"
                quantity={event.creators?.available}
              />
              <Card.TagsListItem
                type="serie"
                quantity={event.series?.available}
              />
              <Card.TagsListItem
                type="story"
                quantity={event.stories?.available}
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

EventsList.Skeleton = CardList.Skeleton;

export { EventsList };
