import { StoryDetailed } from '~/components/EntityDetails';

type StoryPageProps = {
  params: { storyId: string };
};

export default async function StoryPage({ params }: StoryPageProps) {
  return (
    <div>
      <StoryDetailed storyId={params.storyId} />
    </div>
  );
}
