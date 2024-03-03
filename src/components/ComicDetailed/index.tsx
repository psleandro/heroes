import {
  getComicById,
  getComicCharactersById,
  getComicCreatorsById,
  getComicEventsById,
  getComicStoriesById,
} from '~/services';
import { ComicInfo } from './components';
import { SectionList } from '../SectionList';

type ComicDetailedProps = {
  comicId: string;
};

const ComicDetailed = async ({ comicId }: ComicDetailedProps) => {
  const comic = await getComicById(comicId);

  return (
    <>
      <ComicInfo comicId={comicId} />

      {!!comic.characters?.items?.length && (
        <SectionList type="character">
          <SectionList.Header>
            <SectionList.Title>Characters</SectionList.Title>
            <SectionList.Link href={`#series${comicId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getComicCharactersById(comicId)}
          />
        </SectionList>
      )}

      {!!comic.creators?.items?.length && (
        <SectionList type="creator">
          <SectionList.Header>
            <SectionList.Title>Creators</SectionList.Title>
            <SectionList.Link href={`#comics${comicId}`} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getComicCreatorsById(comicId)} />
        </SectionList>
      )}

      {!!comic.events?.items?.length && (
        <SectionList type="event">
          <SectionList.Header>
            <SectionList.Title>Events</SectionList.Title>
            <SectionList.Link href={`#events${comicId}`} />
          </SectionList.Header>
          <SectionList.Carousel fetchFn={() => getComicEventsById(comicId)} />
        </SectionList>
      )}

      {!!comic.stories?.items?.length && (
        <SectionList type="story">
          <SectionList.Header>
            <SectionList.Title>Stories</SectionList.Title>
            <SectionList.Link href={`#stories${comicId}`} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getComicStoriesById(comicId)} />
        </SectionList>
      )}
    </>
  );
};

export { ComicDetailed };
