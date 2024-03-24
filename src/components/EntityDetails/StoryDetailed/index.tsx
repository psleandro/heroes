import {
  getStoryById,
  getStoryComicsById,
  getStoryCharactersById,
  getStorySeriesById,
  getStoryCreatorsById,
  getStoryEventsById,
} from '~/services';
import { StoryInfo } from './components';
import { SectionList } from '../../SectionList';

type StoryDetailedProps = {
  storyId: string;
};

const StoryDetailed = async ({ storyId }: StoryDetailedProps) => {
  const story = await getStoryById(storyId);

  return (
    <>
      <StoryInfo storyId={storyId} />

      {!!story.characters?.items?.length && (
        <SectionList type="character">
          <SectionList.Header>
            <SectionList.Title>Characters</SectionList.Title>
            <SectionList.ViewAllLink from="stories" entityId={storyId} />
          </SectionList.Header>
          <SectionList.Carousel
            fetchFn={() => getStoryCharactersById(storyId)}
          />
        </SectionList>
      )}

      {!!story.comics?.items?.length && (
        <SectionList type="comic">
          <SectionList.Header>
            <SectionList.Title>Comics</SectionList.Title>
            <SectionList.ViewAllLink from="stories" entityId={storyId} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getStoryComicsById(storyId)} />
        </SectionList>
      )}

      {!!story.creators?.items?.length && (
        <SectionList type="creator">
          <SectionList.Header>
            <SectionList.Title>Creators</SectionList.Title>
            <SectionList.ViewAllLink from="stories" entityId={storyId} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getStoryCreatorsById(storyId)} />
        </SectionList>
      )}

      {!!story.events?.items?.length && (
        <SectionList type="event">
          <SectionList.Header>
            <SectionList.Title>Events</SectionList.Title>
            <SectionList.ViewAllLink from="stories" entityId={storyId} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getStoryEventsById(storyId)} />
        </SectionList>
      )}

      {!!story.series?.items?.length && (
        <SectionList type="serie">
          <SectionList.Header>
            <SectionList.Title>Series</SectionList.Title>
            <SectionList.ViewAllLink from="stories" entityId={storyId} />
          </SectionList.Header>

          <SectionList.Carousel fetchFn={() => getStorySeriesById(storyId)} />
        </SectionList>
      )}
    </>
  );
};

export { StoryDetailed };
