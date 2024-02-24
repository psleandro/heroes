import {
  getCharacterById,
  getCharacterComicsById,
  getCharacterEventsById,
  getCharacterSeriesById,
  getCharacterStoriesById,
} from '~/services';
import { CharacterInfo } from './components';
import { SectionList } from '../SectionList';

type CharacterDetailedProps = {
  characterId: string;
};

const CharacterDetailed = async ({ characterId }: CharacterDetailedProps) => {
  const {
    data: {
      results: [character],
    },
  } = await getCharacterById(characterId);

  return (
    <>
      <CharacterInfo characterId={characterId} />

      {character.comics.items?.length && (
        <SectionList className="before:-skew-y-2 before:bg-red-400">
          <SectionList.Header>
            <SectionList.Title>Comics</SectionList.Title>
            <SectionList.Link href={`#comics${characterId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getCharacterComicsById(characterId)}
          />
        </SectionList>
      )}

      {character.events.items?.length && (
        <SectionList className="before:bg-blue-400">
          <SectionList.Header>
            <SectionList.Title>Events</SectionList.Title>
            <SectionList.Link href={`#events${characterId}`} />
          </SectionList.Header>
          <SectionList.Carousel
            fetchFn={() => getCharacterEventsById(characterId)}
          />
        </SectionList>
      )}

      {character.series.items?.length && (
        <SectionList className="before:bg-green-400">
          <SectionList.Header>
            <SectionList.Title>Series</SectionList.Title>
            <SectionList.Link href={`#series${characterId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getCharacterSeriesById(characterId)}
          />
        </SectionList>
      )}

      {character.stories.items?.length && (
        <SectionList className="before:bg-indigo-400">
          <SectionList.Header>
            <SectionList.Title>Stories</SectionList.Title>
            <SectionList.Link href={`#stories${characterId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getCharacterStoriesById(characterId)}
          />
        </SectionList>
      )}
    </>
  );
};

export { CharacterDetailed };
