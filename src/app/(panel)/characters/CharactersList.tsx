import { getCharacters } from '~/services';
import { Card } from '~/components/Card';
import { CardList } from '~/components/CardList';
import { Pagination } from '~/components/Pagination';
import type { CharactersListParameters } from '~/types';

type CharactersListProps = {
  searchParams: CharactersListParameters;
};

const CharactersList = async ({ searchParams }: CharactersListProps) => {
  const result = await getCharacters(searchParams);

  const hrefToPage = (page: number) => ({ query: { ...searchParams, page } });

  return (
    <>
      <CardList>
        {result.data.results?.map(
          ({ id, name, thumbnail, comics, stories, series, events }) => (
            <Card key={id} element="li">
              <Card.Image
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={name}
                linkProps={{ href: `/characters/${id}` }}
              />
              <Card.Title>{name}</Card.Title>
              <Card.TagsList>
                <Card.TagsListItem type="comic" quantity={comics.available} />
                <Card.TagsListItem type="story" quantity={stories.available} />
                <Card.TagsListItem type="serie" quantity={series.available} />
                <Card.TagsListItem type="event" quantity={events.available} />
              </Card.TagsList>
            </Card>
          ),
        )}
      </CardList>

      <Pagination
        model={{ page: searchParams.page, pageSize: searchParams.pageSize }}
        total={result.data.total}
        hrefToPage={hrefToPage}
      />
    </>
  );
};

CharactersList.Skeleton = CardList.Skeleton;

export { CharactersList };
