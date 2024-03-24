import {
  getEventById,
  getEventComicsById,
  getEventCharactersById,
  getEventSeriesById,
  getEventStoriesById,
  getEventCreatorsById,
} from '~/services';
import { EventInfo } from './components';
import { SectionList } from '../../SectionList';

type EventDetailedProps = {
  eventId: string;
};

const EventDetailed = async ({ eventId }: EventDetailedProps) => {
  const event = await getEventById(eventId);

  return (
    <>
      <EventInfo eventId={eventId} />

      {!!event.characters?.items?.length && (
        <SectionList type="character">
          <SectionList.Header>
            <SectionList.Title>Characters</SectionList.Title>
            <SectionList.ViewAllLink from="events" entityId={eventId} />
          </SectionList.Header>
          <SectionList.Carousel
            fetchFn={() => getEventCharactersById(eventId)}
          />
        </SectionList>
      )}

      {!!event.comics?.items?.length && (
        <SectionList type="comic">
          <SectionList.Header>
            <SectionList.Title>Comics</SectionList.Title>
            <SectionList.ViewAllLink from="events" entityId={eventId} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getEventComicsById(eventId)} />
        </SectionList>
      )}

      {!!event.creators?.items?.length && (
        <SectionList type="creator">
          <SectionList.Header>
            <SectionList.Title>Creators</SectionList.Title>
            <SectionList.ViewAllLink from="events" entityId={eventId} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getEventCreatorsById(eventId)} />
        </SectionList>
      )}

      {!!event.stories?.items?.length && (
        <SectionList type="story">
          <SectionList.Header>
            <SectionList.Title>Stories</SectionList.Title>
            <SectionList.ViewAllLink from="events" entityId={eventId} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getEventStoriesById(eventId)} />
        </SectionList>
      )}

      {!!event.series?.items?.length && (
        <SectionList type="serie">
          <SectionList.Header>
            <SectionList.Title>Series</SectionList.Title>
            <SectionList.ViewAllLink from="events" entityId={eventId} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getEventSeriesById(eventId)} />
        </SectionList>
      )}
    </>
  );
};

export { EventDetailed };
