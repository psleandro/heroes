import { getSeries } from '~/services';
import { Card } from '~/components/Card';
import { CardList } from '~/components/CardList';
import { Pagination } from '~/components/Pagination';
import { getImageUrl } from '~/utils';
import type { SeriesListParameters } from '~/types';

type SeriesListProps = {
  searchParams: SeriesListParameters;
};

const SeriesList = async ({ searchParams }: SeriesListProps) => {
  const result = await getSeries(searchParams);

  const hrefToPage = (page: number) => ({ query: { ...searchParams, page } });

  return (
    <>
      <CardList>
        {result.data.results?.map((serie) => (
          <Card key={serie.id} element="li">
            <Card.Image
              src={getImageUrl(serie.thumbnail)}
              alt={serie.title ?? ''}
              linkProps={{ href: `/series/${serie.id}` }}
            />
            <Card.Content>
              <Card.Title href={`/series/${serie.id}`}>
                {serie.title}
              </Card.Title>
              <Card.TagsList from="series" entityId={serie.id}>
                <Card.TagsListItem
                  type="character"
                  quantity={serie.characters?.available}
                />
                <Card.TagsListItem
                  type="comic"
                  quantity={serie.comics?.available}
                />
                <Card.TagsListItem
                  type="creator"
                  quantity={serie.creators?.available}
                />
                <Card.TagsListItem
                  type="event"
                  quantity={serie.events?.available}
                />
                <Card.TagsListItem
                  type="story"
                  quantity={serie.stories?.available}
                />
              </Card.TagsList>
            </Card.Content>
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

SeriesList.Skeleton = CardList.Skeleton;

export { SeriesList };
