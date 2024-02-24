import {
  getComicById,
  getComicCharactersById,
  getComicCreatorsById,
  getComicEventsById,
  getComicStoriesById,
} from '~/services';
import { ComicInfo } from './components';
import { CharacterApparition } from '../CharacterDetailed/components';

type ComicDetailedProps = {
  comicId: string;
};

const ComicDetailed = async ({ comicId }: ComicDetailedProps) => {
  const {
    data: {
      results: [comic],
    },
  } = await getComicById(comicId);

  return (
    <>
      <ComicInfo comicId={comicId} />

      {!!comic.characters?.items?.length && (
        <CharacterApparition className="before:bg-emerald-400">
          <CharacterApparition.Header>
            <CharacterApparition.Title>Characters</CharacterApparition.Title>
            <CharacterApparition.Link href={`#series${comicId}`} />
          </CharacterApparition.Header>

          <CharacterApparition.Carousel
            fetchFn={() => getComicCharactersById(comicId)}
            getTitle={(character) => character.name}
          />
        </CharacterApparition>
      )}

      {!!comic.creators?.items?.length && (
        <CharacterApparition className="before:-skew-y-2 before:bg-amber-400">
          <CharacterApparition.Header>
            <CharacterApparition.Title>Creators</CharacterApparition.Title>
            <CharacterApparition.Link href={`#comics${comicId}`} />
          </CharacterApparition.Header>

          <CharacterApparition.Carousel
            fetchFn={() => getComicCreatorsById(comicId)}
            getTitle={(creator) => creator.fullName ?? ''}
          />
        </CharacterApparition>
      )}

      {!!comic.events?.items?.length && (
        <CharacterApparition className="before:bg-blue-400">
          <CharacterApparition.Header>
            <CharacterApparition.Title>Events</CharacterApparition.Title>
            <CharacterApparition.Link href={`#events${comicId}`} />
          </CharacterApparition.Header>
          <CharacterApparition.Carousel
            fetchFn={() => getComicEventsById(comicId)}
          />
        </CharacterApparition>
      )}

      {!!comic.stories?.items?.length && (
        <CharacterApparition className="before:bg-indigo-400">
          <CharacterApparition.Header>
            <CharacterApparition.Title>Stories</CharacterApparition.Title>
            <CharacterApparition.Link href={`#stories${comicId}`} />
          </CharacterApparition.Header>

          <CharacterApparition.Carousel
            fetchFn={() => getComicStoriesById(comicId)}
          />
        </CharacterApparition>
      )}
    </>
  );
};

export { ComicDetailed };
