import {
  getSerieById,
  getSerieComicsById,
  getSerieCharactersById,
  getSerieStoriesById,
  getSerieCreatorsById,
  getSerieEventsById,
} from '~/services';
import { SerieInfo } from './components';
import { SectionList } from '../SectionList';

type SerieDetailedProps = {
  serieId: string;
};

const SerieDetailed = async ({ serieId }: SerieDetailedProps) => {
  const serie = await getSerieById(serieId);

  return (
    <>
      <SerieInfo serieId={serieId} />

      {!!serie.characters?.items?.length && (
        <SectionList type="character">
          <SectionList.Header>
            <SectionList.Title>Characters</SectionList.Title>
            <SectionList.Link href={`#characters${serieId}`} />
          </SectionList.Header>
          <SectionList.Carousel
            fetchFn={() => getSerieCharactersById(serieId)}
          />
        </SectionList>
      )}

      {!!serie.comics?.items?.length && (
        <SectionList type="comic">
          <SectionList.Header>
            <SectionList.Title>Comics</SectionList.Title>
            <SectionList.Link href={`#comics${serieId}`} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getSerieComicsById(serieId)} />
        </SectionList>
      )}

      {!!serie.creators?.items?.length && (
        <SectionList type="creator">
          <SectionList.Header>
            <SectionList.Title>Creators</SectionList.Title>
            <SectionList.Link href={`#creators${serieId}`} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getSerieCreatorsById(serieId)} />
        </SectionList>
      )}

      {!!serie.events?.items?.length && (
        <SectionList type="event">
          <SectionList.Header>
            <SectionList.Title>Events</SectionList.Title>
            <SectionList.Link href={`#events${serieId}`} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getSerieEventsById(serieId)} />
        </SectionList>
      )}

      {!!serie.stories?.items?.length && (
        <SectionList type="story">
          <SectionList.Header>
            <SectionList.Title>Stories</SectionList.Title>
            <SectionList.Link href={`#stories${serieId}`} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getSerieStoriesById(serieId)} />
        </SectionList>
      )}
    </>
  );
};

export { SerieDetailed };
