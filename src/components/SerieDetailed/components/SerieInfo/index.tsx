import Image from 'next/image';
import { getSerieById } from '~/services';

type SerieInfoProps = {
  serieId: string;
};

const SerieInfo = async ({ serieId }: SerieInfoProps) => {
  const {
    data: {
      results: [serie],
    },
  } = await getSerieById(serieId);

  return (
    <div className="flex justify-center gap-8 p-12">
      <span className="relative aspect-square h-full w-4/12 overflow-hidden rounded-md shadow-lg">
        <Image
          src={`${serie.thumbnail?.path}.${serie.thumbnail?.extension}`}
          alt={serie.title ?? serieId}
          fill
        />
      </span>
      <div className="flex w-6/12 flex-col justify-center gap-2">
        <h2 className="text-4xl font-bold">{serie.title}</h2>
        <p>{serie.description}</p>
      </div>
    </div>
  );
};

export { SerieInfo };
