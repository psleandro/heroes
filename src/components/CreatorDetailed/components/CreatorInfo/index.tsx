import Image from 'next/image';
import { getCreatorById } from '~/services';

type CreatorInfoProps = {
  creatorId: string;
};

const CreatorInfo = async ({ creatorId }: CreatorInfoProps) => {
  const creator = await getCreatorById(creatorId);

  return (
    <div className="flex justify-center gap-8 p-12">
      <span className="relative aspect-square h-full w-4/12 overflow-hidden rounded-md shadow-lg">
        <Image
          src={`${creator.thumbnail?.path}.${creator.thumbnail?.extension}`}
          alt={creator.fullName ?? creatorId}
          fill
        />
      </span>
      <div className="flex w-6/12 flex-col justify-center gap-2">
        <h2 className="text-4xl font-bold">{creator.fullName}</h2>
      </div>
    </div>
  );
};

export { CreatorInfo };
