import { getCreators } from '~/services';
import { Card } from '~/components/Card';
import { CardList } from '~/components/CardList';
import { Pagination } from '~/components/Pagination';
import { getImageUrl } from '~/utils';
import type { CreatorsListParameters } from '~/types';

type CreatorsListProps = {
  searchParams: CreatorsListParameters;
};

const CreatorsList = async ({ searchParams }: CreatorsListProps) => {
  const result = await getCreators(searchParams);

  const hrefToPage = (page: number) => ({ query: { ...searchParams, page } });

  return (
    <>
      <CardList>
        {result.data.results?.map((creator) => (
          <Card key={creator.id} element="li">
            <Card.Image
              src={getImageUrl(creator.thumbnail)}
              alt={creator.fullName ?? ''}
              linkProps={{ href: `/creators/${creator.id}` }}
            />
            <Card.Title>{creator.fullName}</Card.Title>
            <Card.TagsList>
              <Card.TagsListItem
                type="comic"
                quantity={creator.comics?.available}
              />
              <Card.TagsListItem
                type="event"
                quantity={creator.events?.available}
              />
              <Card.TagsListItem
                type="serie"
                quantity={creator.series?.available}
              />
              <Card.TagsListItem
                type="story"
                quantity={creator.stories?.available}
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

CreatorsList.Skeleton = CardList.Skeleton;

export { CreatorsList };
