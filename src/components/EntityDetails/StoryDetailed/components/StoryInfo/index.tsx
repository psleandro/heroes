import Image from 'next/image';
import { getStoryById } from '~/services';
import { getImageUrl } from '~/utils';

type StoryInfoProps = {
  storyId: string;
};

const StoryInfo = async ({ storyId }: StoryInfoProps) => {
  const story = await getStoryById(storyId);

  return (
    <div className="flex justify-center gap-8 p-12">
      <span className="relative aspect-square h-full w-4/12 overflow-hidden rounded-md shadow-lg">
        <Image
          src={getImageUrl(story.thumbnail)}
          alt={story.title ?? storyId}
          fill
        />
      </span>
      <div className="flex w-6/12 flex-col justify-center gap-2">
        <h2 className="text-4xl font-bold">{story.title}</h2>
        <p>{story.description}</p>
      </div>
    </div>
  );
};

export { StoryInfo };
