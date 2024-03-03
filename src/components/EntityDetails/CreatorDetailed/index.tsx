import {
  getCreatorById,
  getCreatorComicsById,
  getCreatorEventsById,
  getCreatorSeriesById,
  getCreatorStoriesById,
} from '~/services';
import { CreatorInfo } from './components';
import { SectionList } from '../../SectionList';

type CreatorDetailedProps = {
  creatorId: string;
};

const CreatorDetailed = async ({ creatorId }: CreatorDetailedProps) => {
  const creator = await getCreatorById(creatorId);

  return (
    <>
      <CreatorInfo creatorId={creatorId} />

      {!!creator.comics?.items?.length && (
        <SectionList type="comic">
          <SectionList.Header>
            <SectionList.Title>Comics</SectionList.Title>
            <SectionList.Link href={`#comics${creatorId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getCreatorComicsById(creatorId)}
          />
        </SectionList>
      )}

      {!!creator.events?.items?.length && (
        <SectionList type="event">
          <SectionList.Header>
            <SectionList.Title>Events</SectionList.Title>
            <SectionList.Link href={`#events${creatorId}`} />
          </SectionList.Header>
          <SectionList.Carousel
            fetchFn={() => getCreatorEventsById(creatorId)}
          />
        </SectionList>
      )}

      {!!creator.stories?.items?.length && (
        <SectionList type="story">
          <SectionList.Header>
            <SectionList.Title>Stories</SectionList.Title>
            <SectionList.Link href={`#stories${creatorId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getCreatorStoriesById(creatorId)}
          />
        </SectionList>
      )}

      {!!creator.series?.items?.length && (
        <SectionList type="serie">
          <SectionList.Header>
            <SectionList.Title>Series</SectionList.Title>
            <SectionList.Link href={`#series${creatorId}`} />
          </SectionList.Header>

          <SectionList.Carousel
            fetchFn={() => getCreatorSeriesById(creatorId)}
          />
        </SectionList>
      )}
    </>
  );
};

export { CreatorDetailed };
