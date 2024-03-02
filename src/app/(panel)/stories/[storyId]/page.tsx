import { StoryDetailed } from '~/components/StoryDetailed';

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
