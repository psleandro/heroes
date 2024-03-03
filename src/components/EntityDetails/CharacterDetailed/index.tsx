import {
  getCharacterById,
  getCharacterComicsById,
  getCharacterEventsById,
  getCharacterSeriesById,
  getCharacterStoriesById,
} from '~/services';
import { CharacterInfo } from './components';
import { SectionList } from '../../SectionList';

type CharacterDetailedProps = {
  characterId: string;
};

const CharacterDetailed = async ({ characterId }: CharacterDetailedProps) => {
  const character = await getCharacterById(characterId);

  return (
    <>
      <CharacterInfo characterId={characterId} />

      {!!character.comics.items?.length && (
        <SectionList type="comic">
          <SectionList.Header>
            <SectionList.Title>Comics</SectionList.Title>
            <SectionList.Link href={`#comics${characterId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getCharacterComicsById(characterId)}
          />
        </SectionList>
      )}

      {!!character.events.items?.length && (
        <SectionList type="event">
          <SectionList.Header>
            <SectionList.Title>Events</SectionList.Title>
            <SectionList.Link href={`#events${characterId}`} />
          </SectionList.Header>
          <SectionList.Carousel
            fetchFn={() => getCharacterEventsById(characterId)}
          />
        </SectionList>
      )}

      {!!character.series.items?.length && (
        <SectionList type="serie">
          <SectionList.Header>
            <SectionList.Title>Series</SectionList.Title>
            <SectionList.Link href={`#series${characterId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getCharacterSeriesById(characterId)}
          />
        </SectionList>
      )}

      {!!character.stories.items?.length && (
        <SectionList type="story">
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
