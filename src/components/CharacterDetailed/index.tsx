import {
  getCharacterById,
  getCharacterComicsById,
  getCharacterEventsById,
  getCharacterSeriesById,
  getCharacterStoriesById,
} from '~/services';
import { CharacterApparition, CharacterInfo } from './components';

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
        <CharacterApparition className="before:-skew-y-2 before:bg-red-400">
          <CharacterApparition.Header>
            <CharacterApparition.Title>Comics</CharacterApparition.Title>
            <CharacterApparition.Link href={`#comics${characterId}`} />
          </CharacterApparition.Header>

          <CharacterApparition.Carousel
            fetchFn={() => getCharacterComicsById(characterId)}
          />
        </CharacterApparition>
      )}

      {character.events.items?.length && (
        <CharacterApparition className="before:bg-blue-400">
          <CharacterApparition.Header>
            <CharacterApparition.Title>Events</CharacterApparition.Title>
            <CharacterApparition.Link href={`#events${characterId}`} />
          </CharacterApparition.Header>
          <CharacterApparition.Carousel
            fetchFn={() => getCharacterEventsById(characterId)}
          />
        </CharacterApparition>
      )}

      {character.series.items?.length && (
        <CharacterApparition className="before:bg-green-400">
          <CharacterApparition.Header>
            <CharacterApparition.Title>Series</CharacterApparition.Title>
            <CharacterApparition.Link href={`#series${characterId}`} />
          </CharacterApparition.Header>

          <CharacterApparition.Carousel
            fetchFn={() => getCharacterSeriesById(characterId)}
          />
        </CharacterApparition>
      )}

      {character.stories.items?.length && (
        <CharacterApparition className="before:bg-indigo-400">
          <CharacterApparition.Header>
            <CharacterApparition.Title>Stories</CharacterApparition.Title>
            <CharacterApparition.Link href={`#stories${characterId}`} />
          </CharacterApparition.Header>

          <CharacterApparition.Carousel
            fetchFn={() => getCharacterStoriesById(characterId)}
          />
        </CharacterApparition>
      )}
    </>
  );
};

export { CharacterDetailed };
